import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { normalizeImageUrl, isExternalImage } from "@/utils/imageUtils";

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = async () => {
        try {
            setLoading(true);
            let response;
            let result;
            try {
                response = await fetch('/api/blogs?limit=3', { cache: 'no-store' });
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                result = await response.json();
            } catch (e) {
                const DASHBOARD_API = process.env.NEXT_PUBLIC_DASHBOARD_API_URL || "https://dashboard.tymortech.com";
                response = await fetch(`${DASHBOARD_API}/api/public/blogs?limit=3`, { cache: 'no-store' });
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                result = await response.json();
                if (result && !('success' in result)) {
                    result = { success: true, data: result.data || result };
                }
            }

            if (result.success) {
                setBlogs(result.data || []);
            } else {
                setBlogs([]);
            }
        } catch (error) {
            console.error('Error loading blogs:', error);
            setBlogs([]);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const truncateText = (text, maxLength) => {
        if (!text) return '';
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 slide-up leading-tight">
                        LATEST BLOG POSTS
                    </h2>
                    <p className="glass-shimmer text-primary text-lg sm:text-xl slide-up max-w-3xl mx-auto">
                        Stay informed with our latest insights, tips, and industry trends
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-600">No blogs available at the moment. Check back soon!</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
                            {blogs.map((blog, index) => (
                                <article
                                    key={blog._id}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-slide-up h-full flex flex-col"
                                    style={{ animationDelay: `${(index + 1) * 150}ms` }}
                                >
                                    <Link href={`/blog/${blog.slug}`} className="block relative h-52 sm:h-60 w-full bg-gray-200 overflow-hidden">
                                        {blog.featuredImage && (() => {
                                            const imageUrl = normalizeImageUrl(blog.featuredImage);
                                            const isExternal = isExternalImage(imageUrl);

                                            if (!imageUrl) return null;

                                            return (
                                                <div className="relative w-full h-full">
                                                    {isExternal ? (
                                                        <img
                                                            src={imageUrl}
                                                            alt={blog.title || 'Blog post image'}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                                                            loading="lazy"
                                                        />
                                                    ) : (
                                                        <Image
                                                            src={imageUrl}
                                                            alt={blog.title || 'Blog post image'}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        />
                                                    )}
                                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                                </div>
                                            );
                                        })()}

                                        {/* Date Tag */}
                                        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
                                            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900">
                                                <Calendar className="h-3.5 w-3.5 text-primary" />
                                                <span>{formatDate(blog.publishedAt)}</span>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                                            <Link href={`/blog/${blog.slug}`}>
                                                {blog.title}
                                            </Link>
                                        </h3>

                                        <p className="text-gray-600 mb-6 line-clamp-3 text-sm sm:text-base leading-relaxed flex-1">
                                            {blog.excerpt || truncateText(blog.content?.replace(/<[^>]*>/g, ''), 120)}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                                                    <User className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <span className="font-medium">{blog.author || 'Admin'}</span>
                                            </div>

                                            <Link
                                                href={`/blog/${blog.slug}`}
                                                className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all duration-300 group/link"
                                            >
                                                <span className="text-sm">Read Post</span>
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* View All Button */}
                        <div className="text-center mt-12 sm:mt-16 animate-slide-up [animation-delay:800ms]">
                            <Link
                                href="/blog"
                                className="inline-block bg-primary text-white font-bold px-10 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-primary/30 relative overflow-hidden group"
                            >
                                <span className="relative z-10 uppercase tracking-wider">View All Blogs</span>
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
