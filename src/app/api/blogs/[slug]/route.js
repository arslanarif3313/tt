import { NextResponse } from 'next/server';
import { getLocalBlogBySlug } from '@/data/localBlogs';
import { normalizeImageUrl } from '@/utils/imageUtils';

const DASHBOARD_API = process.env.DASHBOARD_API_URL || "https://dashboard.tymortech.com";

export async function GET(request, { params }) {
    try {
        const { slug } = await params;

        // First, check local blogs
        const localBlog = getLocalBlogBySlug(slug);
        if (localBlog) {
            return NextResponse.json({
                success: true,
                data: localBlog
            });
        }

        // If not found locally, try external API
        try {
            const response = await fetch(`${DASHBOARD_API}/api/public/blogs/${slug}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: 'no-store',
            });

            if (response.ok) {
                const data = await response.json();
                
                // Normalize image URLs if blog data is returned
                if (data.success && data.data) {
                    const blog = data.data;
                    if (blog.featuredImage) {
                        blog.featuredImage = normalizeImageUrl(blog.featuredImage);
                    }
                    if (blog.thumbnail) {
                        blog.thumbnail = normalizeImageUrl(blog.thumbnail);
                    }
                    if (blog.image) {
                        blog.image = normalizeImageUrl(blog.image);
                    }
                } else if (data.featuredImage) {
                    // Handle case where blog object is directly in response
                    data.featuredImage = normalizeImageUrl(data.featuredImage);
                    if (data.thumbnail) {
                        data.thumbnail = normalizeImageUrl(data.thumbnail);
                    }
                    if (data.image) {
                        data.image = normalizeImageUrl(data.image);
                    }
                }
                
                return NextResponse.json(data);
            }
        } catch (apiError) {
            console.log('External API unavailable');
        }

        // Not found in local or external
        return NextResponse.json(
            { success: false, message: 'Blog post not found' },
            { status: 404 }
        );

    } catch (error) {
        console.error('Error fetching blog post:', error);
        
        return NextResponse.json(
            { success: false, message: 'Failed to fetch blog post' },
            { status: 500 }
        );
    }
}

