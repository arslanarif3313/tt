import { NextResponse } from 'next/server';
import { getAllLocalBlogs, getLocalBlogsByCategory, searchLocalBlogs } from '@/data/localBlogs';
import { normalizeImageUrl } from '@/utils/imageUtils';

const DASHBOARD_API = process.env.DASHBOARD_API_URL || "https://dashboard.tymortech.com";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const limit = parseInt(searchParams.get('limit') || '9');
        const page = parseInt(searchParams.get('page') || '1');
        const category = searchParams.get('category') || '';
        const search = searchParams.get('search') || '';

        // Get local blogs
        let localBlogsData = getAllLocalBlogs();
        
        // Filter local blogs by category if specified
        if (category) {
            localBlogsData = getLocalBlogsByCategory(category);
        }
        
        // Search local blogs if search term provided
        if (search) {
            localBlogsData = searchLocalBlogs(search);
        }

        // Try to fetch external blogs
        let externalBlogs = [];
        try {
            let url = `${DASHBOARD_API}/api/public/blogs?limit=${limit}&page=${page}`;
            
            if (category) {
                url += `&category=${encodeURIComponent(category)}`;
            }
            
            if (search) {
                url += `&search=${encodeURIComponent(search)}`;
            }

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: 'no-store',
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success && data.data) {
                    // Normalize image URLs for external blogs
                    externalBlogs = data.data.map(blog => {
                        if (blog.featuredImage) {
                            const normalized = normalizeImageUrl(blog.featuredImage);
                            console.log(`Normalized image URL: ${blog.featuredImage} -> ${normalized}`);
                            blog.featuredImage = normalized;
                        }
                        // Also normalize any other image fields if they exist
                        if (blog.thumbnail) {
                            blog.thumbnail = normalizeImageUrl(blog.thumbnail);
                        }
                        if (blog.image) {
                            blog.image = normalizeImageUrl(blog.image);
                        }
                        return blog;
                    });
                }
            }
        } catch (apiError) {
            console.log('External API unavailable, using local blogs only');
        }

        // Combine local and external blogs and sort by published date (desc)
        const allBlogs = [...localBlogsData, ...externalBlogs].sort((a, b) => {
            const aDate = a?.publishedAt ? new Date(a.publishedAt).getTime() : 0;
            const bDate = b?.publishedAt ? new Date(b.publishedAt).getTime() : 0;
            return bDate - aDate;
        });
        
        // Pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedBlogs = allBlogs.slice(startIndex, endIndex);
        
        return NextResponse.json({
            success: true,
            data: paginatedBlogs,
            pagination: {
                total: allBlogs.length,
                pages: Math.ceil(allBlogs.length / limit),
                page: page,
                limit: limit
            }
        });

    } catch (error) {
        console.error('Error fetching blogs:', error);
        
        // Fallback to local blogs only (default limit/page)
        const localBlogsData = getAllLocalBlogs();
        const limit = 9;
        const page = 1;
        
        return NextResponse.json({
            success: true,
            data: localBlogsData.slice(0, limit),
            pagination: {
                total: localBlogsData.length,
                pages: Math.ceil(localBlogsData.length / limit),
                page: page,
                limit: limit
            }
        });
    }
}

