"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Clock, Search, Tag } from "lucide-react";
import { normalizeImageUrl, isExternalImage } from "@/utils/imageUtils";

// Note: metadata export not supported in client components
// Add metadata in parent layout or use different approach

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadBlogs();
    }, [currentPage, selectedCategory]);

    // Load all categories once on mount (independent of filters/pagination)
    useEffect(() => {
        const loadCategories = async () => {
            try {
                let response;
                let result;
                try {
                    response = await fetch(`/api/blogs?limit=1000&page=1`);
                    if (!response.ok) return;
                    result = await response.json();
                } catch (e) {
                    const DASHBOARD_API = process.env.NEXT_PUBLIC_DASHBOARD_API_URL || "https://dashboard.tymortech.com";
                    response = await fetch(`${DASHBOARD_API}/api/public/blogs?limit=1000&page=1`);
                    if (!response.ok) return;
                    result = await response.json();
                }
                if (result?.success && Array.isArray(result.data)) {
                    const allCategories = result.data.reduce((acc, blog) => {
                        (blog.categories || []).forEach((cat) => {
                            if (!acc.includes(cat)) acc.push(cat);
                        });
                        return acc;
                    }, []);
                    setCategories(allCategories);
                }
            } catch {
                // silent fail; categories will be derived from page data in loadBlogs
            }
        };
        loadCategories();
    }, []);

    const loadBlogs = async () => {
        try {
            setLoading(true);
            setError(null);
            let url = `/api/blogs?limit=9&page=${currentPage}`;

            if (selectedCategory) {
                url += `&category=${encodeURIComponent(selectedCategory)}`;
            }

            if (searchTerm) {
                url += `&search=${encodeURIComponent(searchTerm)}`;
            }
            let response;
            let result;
            try {
                response = await fetch(url, { cache: 'no-store' });
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                result = await response.json();
            } catch (e) {
                // Fallback to public dashboard API when running from file:// or API route unavailable
                const DASHBOARD_API = process.env.NEXT_PUBLIC_DASHBOARD_API_URL || "https://dashboard.tymortech.com";
                let fallbackUrl = `${DASHBOARD_API}/api/public/blogs?limit=9&page=${currentPage}`;
                if (selectedCategory) {
                    fallbackUrl += `&category=${encodeURIComponent(selectedCategory)}`;
                }
                if (searchTerm) {
                    fallbackUrl += `&search=${encodeURIComponent(searchTerm)}`;
                }
                response = await fetch(fallbackUrl, { cache: 'no-store' });
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                result = await response.json();
                // Align shape if external API returns {success,data,pagination}
                if (result && !('success' in result)) {
                    result = { success: true, data: result.data || result, pagination: result.pagination };
                }
            }

            if (result.success) {
                setBlogs(result.data || []);
                setPagination(result.pagination);

                // Extract unique categories
                const allCategories = (result.data || []).reduce((acc, blog) => {
                    blog.categories?.forEach(cat => {
                        if (!acc.includes(cat)) acc.push(cat);
                    });
                    return acc;
                }, []);
                setCategories(allCategories);
            } else {
                setBlogs([]);
                setPagination(null);
            }
        } catch (error) {
            console.error('Error loading blogs:', error);
            setError('Unable to load blogs. Please try again later.');
            setBlogs([]);
            setPagination(null);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        loadBlogs();
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
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-linear-to-r from-black to-gray-800 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest Insights & Articles</h1>
                    <p className="text-xl text-gray-300 mb-6">
                        Stay updated with the latest trends in IT, AI, and Cybersecurity
                    </p>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-base text-gray-200 mb-4">
                            Welcome to the Tymor Technologies blog, your go-to resource for expert insights on managed IT services,
                            cloud solutions, cybersecurity best practices, artificial intelligence integration, and digital transformation
                            strategies. Our team of technology experts shares in-depth articles, case studies, industry trends, and practical
                            tips to help your business leverage technology for competitive advantage.
                        </p>
                        <p className="text-base text-gray-200 mb-8">
                            Whether you're looking to enhance your security posture, migrate to the cloud, implement AI solutions, or optimize
                            your IT infrastructure, our blog provides actionable insights and real-world examples to guide your technology
                            decisions. Subscribe to stay informed about the latest developments in enterprise technology.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search blogs..."
                                className="w-full px-6 py-4 pr-12 rounded-lg text-white bg-transparent border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-300"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition"
                            >
                                <Search className="h-5 w-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Category Filter */}
            {categories.length > 0 && (
                <section className="bg-white border-b">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-wrap gap-3 items-center justify-center">
                            <button
                                onClick={() => {
                                    setSelectedCategory("");
                                    setCurrentPage(1);
                                }}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategory === ""
                                        ? "bg-primary text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                            >
                                All
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setCurrentPage(1);
                                    }}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategory === category
                                            ? "bg-primary text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Blog Grid */}
            <section className="container mx-auto px-4 py-16">
                {loading ? (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : error ? (
                    <div className="text-center py-16">
                        <p className="text-xl text-red-600 mb-4">{error}</p>
                        <button
                            onClick={() => loadBlogs()}
                            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                        >
                            Try Again
                        </button>
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-600">No blogs found, We will upload soon!</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog, index) => (
                                <article
                                    key={blog._id}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                                >
                                    {blog.featuredImage && (() => {
                                        const imageUrl = normalizeImageUrl(blog.featuredImage);
                                        const isExternal = isExternalImage(imageUrl);
                                        
                                        return (
                                            <div className="relative h-48 w-full bg-gray-200">
                                                <Image
                                                    src={imageUrl}
                                                    alt={blog.title || 'Blog post image'}
                                                    fill
                                                    className="object-cover"
                                                    priority={index < 3}
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    unoptimized={isExternal}
                                                    onError={(e) => {
                                                        e.target.src = '/placeholder.jpg';
                                                        e.target.onerror = null;
                                                    }}
                                                />
                                            </div>
                                        );
                                    })()}

                                    <div className="p-6">
                                        {/* Categories */}
                                        {blog.categories && blog.categories.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {blog.categories.slice(0, 2).map((category, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold"
                                                    >
                                                        {category}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition">
                                            <Link href={`/blog/${blog.slug}`}>
                                                {blog.title}
                                            </Link>
                                        </h2>

                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {blog.excerpt || truncateText(blog.content?.replace(/<[^>]*>/g, ''), 150)}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <User className="h-4 w-4" />
                                                <span>{blog.author}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>{formatDate(blog.publishedAt)}</span>
                                            </div>
                                        </div>

                                        <Link
                                            href={`/blog/${blog.slug}`}
                                            className="inline-flex items-center text-primary font-semibold hover:underline"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Pagination */}
                        {pagination && pagination.pages > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-12">
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Previous
                                </button>

                                {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-4 py-2 rounded-lg ${currentPage === page
                                                ? "bg-primary text-white"
                                                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage(p => Math.min(pagination.pages, p + 1))}
                                    disabled={currentPage === pagination.pages}
                                    className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </section>
        </div>
    );
}


