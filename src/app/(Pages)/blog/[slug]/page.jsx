"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Clock, ArrowLeft, Tag } from "lucide-react";
import { useParams } from "next/navigation";
import { normalizeImageUrl, isExternalImage } from "@/utils/imageUtils";

export default function BlogDetailPage() {
    const params = useParams();
    const slug = params.slug;
    
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [tocItems, setTocItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (slug) {
            loadBlogPost();
        }
    }, [slug]);

    const loadBlogPost = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`/api/blogs/${slug}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch blog post');
            }
            
            const result = await response.json();

            if (result.success) {
                setBlog(result.data);
                updateSEO(result.data.seo);
                buildTOC(result.data.content);
                
                // Load related blogs
                if (result.data.categories && result.data.categories.length > 0) {
                    loadRelatedBlogs(result.data.categories[0]);
                }
            } else {
                setError('Blog post not found');
            }
        } catch (error) {
            console.error('Error loading blog post:', error);
            setError('Failed to load blog post. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const loadRelatedBlogs = async (category) => {
        try {
            const response = await fetch(
                `/api/blogs?limit=3&category=${encodeURIComponent(category)}`
            );
            
            if (!response.ok) {
                throw new Error('Failed to fetch related blogs');
            }
            
            const result = await response.json();

            if (result.success) {
                // Filter out current blog
                const filtered = result.data.filter(b => b.slug !== slug);
                setRelatedBlogs(filtered.slice(0, 3));
            }
        } catch (error) {
            console.error('Error loading related blogs:', error);
        }
    };

    const updateSEO = (seo) => {
        if (!seo) return;

        // Update page title
        document.title = seo.title || 'Blog | Tymor Technologies';

        // Update meta description
        updateMetaTag('name', 'description', seo.description);
        updateMetaTag('name', 'keywords', seo.keywords?.join(', '));

        // Update Open Graph tags
        updateMetaTag('property', 'og:title', seo.ogTitle);
        updateMetaTag('property', 'og:description', seo.ogDescription);
        updateMetaTag('property', 'og:image', seo.ogImage);

        // Update canonical URL
        if (seo.canonicalUrl) {
            let canonical = document.querySelector('link[rel="canonical"]');
            if (!canonical) {
                canonical = document.createElement('link');
                canonical.rel = 'canonical';
                document.head.appendChild(canonical);
            }
            canonical.href = seo.canonicalUrl;
        }
    };

    const updateMetaTag = (attribute, name, content) => {
        if (!content) return;

        let tag = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute(attribute, name);
            document.head.appendChild(tag);
        }
        tag.content = content;
    };

    const buildTOC = (html) => {
        if (!html) return setTocItems([]);
        try {
            // Find headings with ids: h1/h2/h3
            const regex = /<(h[1-3])[^>]*id=["']([^"']+)["'][^>]*>(.*?)<\/\1>/gi;
            const items = [];
            let match;
            while ((match = regex.exec(html)) !== null) {
                const level = match[1];
                const id = match[2];
                // Strip tags from inner text
                const text = match[3].replace(/<[^>]*>/g, '').trim();
                items.push({ id, text, level });
            }
            setTocItems(items);
        } catch {
            setTocItems([]);
        }
    };

    const estimateReadingTime = (html) => {
        const text = (html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const words = text ? text.split(' ').length : 0;
        const minutes = Math.max(1, Math.round(words / 200));
        return `${minutes} min read`;
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

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-4">
                    {error || 'Blog post not found'}
                </h2>
                <Link href="/blog" className="text-primary hover:underline">
                    ← Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Back Button */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center text-gray-600 hover:text-primary transition"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Blog
                    </Link>
                </div>
            </div>

            {/* Main Content Area with Two-Column Layout */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content - 3 columns */}
                    <article className="lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            {/* Featured Image */}
                            {blog.featuredImage && (() => {
                                const imageUrl = normalizeImageUrl(blog.featuredImage);
                                const isExternal = isExternalImage(imageUrl);
                                
                                return (
                                    <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6 bg-gray-200">
                                        <Image
                                            src={imageUrl}
                                            alt={blog.title || 'Blog post image'}
                                            fill
                                            className="object-cover"
                                            priority
                                            unoptimized={isExternal}
                                            onError={(e) => {
                                                e.target.src = '/placeholder.jpg';
                                                e.target.onerror = null;
                                            }}
                                        />
                                    </div>
                                );
                            })()}

                            {/* Category pills hidden: keep category/tag chips only on /blog listing */}

                            {/* Title */}
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                {blog.title}
                            </h1>

                            {/* Meta Information */}
                            <div className="flex flex-wrap gap-4 text-gray-600 mb-6 pb-4 border-b text-sm">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span className="font-medium">By {blog.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{formatDate(blog.publishedAt)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{estimateReadingTime(blog.content)}</span>
                                </div>
                            </div>

                            {/* Blog Content */}
                            <div 
                                className="prose prose-sm w-full mb-8 max-w-none"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                                style={{
                                    lineHeight: '1.6',
                                    fontSize: '1rem',
                                    textAlign: 'left',
                                    maxWidth: 'none'
                                }}
                            />

                            {/* Tags */}
                            {blog.tags && blog.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 items-center mb-6 pb-4 border-t pt-4">
                                    <Tag className="h-4 w-4 text-gray-600" />
                                    {blog.tags.map((tag, index) => (
                                        <span 
                                            key={index}
                                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </article>

                    {/* Sidebar - 1 column */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-8 space-y-4">
                            {/* Author Info */}
                            <div className="bg-white rounded-lg shadow-sm p-4">
                                <h3 className="font-bold text-gray-900 mb-3 text-sm">About the Author</h3>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">
                                            {blog.author?.charAt(0) || 'T'}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 text-sm">{blog.author}</p>
                                        <p className="text-gray-600 text-xs">Tymor Technologies</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-xs">
                                    Leading cybersecurity and AI solutions provider, helping businesses stay secure in the digital age.
                                </p>
                            </div>

                            {/* Table of Contents */}
                            <div className="bg-white rounded-lg shadow-sm p-4">
                                <h3 className="font-bold text-gray-900 mb-3 text-sm">Table of Contents</h3>
                                <nav className="space-y-2">
                                    {tocItems.length > 0 ? (
                                        tocItems.map((item, idx) => (
                                            <a
                                                key={`${item.id}-${idx}`}
                                                href={`#${item.id}`}
                                                className={`block text-xs text-gray-600 hover:text-primary transition ${item.level === 'h2' ? 'pl-2' : item.level === 'h3' ? 'pl-4' : ''}`}
                                            >
                                                {item.text}
                                            </a>
                                        ))
                                    ) : (
                                        <span className="text-xs text-gray-500">Sections will appear here.</span>
                                    )}
                                </nav>
                            </div>

                            {/* Related Blogs */}
                            {relatedBlogs.length > 0 && (
                                <div className="bg-white rounded-lg shadow-sm p-4">
                                    <h3 className="font-bold text-gray-900 mb-3 text-sm">Related Articles</h3>
                                    <div className="space-y-3">
                                        {relatedBlogs.slice(0, 3).map((relatedBlog) => (
                                            <Link 
                                                key={relatedBlog._id}
                                                href={`/blog/${relatedBlog.slug}`}
                                                className="block hover:bg-gray-50 p-2 rounded transition"
                                            >
                                                <h4 className="font-medium text-gray-900 text-xs mb-1 line-clamp-2">
                                                    {relatedBlog.title}
                                                </h4>
                                                <p className="text-gray-600 text-xs line-clamp-2">
                                                    {relatedBlog.excerpt}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Read More / Upcoming Blogs */}
                            <div className="bg-white rounded-lg shadow-sm p-4">
                                <h3 className="font-bold text-gray-900 mb-3 text-sm">📚 More Blogs</h3>
                                <div className="space-y-3">
                                    <div className="p-3 bg-gray-50 rounded border hover:border-primary transition">
                                        <h4 className="font-semibold text-gray-900 text-xs mb-1">
                                            🚀 Cloud Security Best Practices
                                        </h4>
                                        <p className="text-xs text-gray-600 mb-1">
                                            Essential strategies for securing your cloud infrastructure
                                        </p>
                                        <span className="text-xs text-primary font-semibold">Coming Soon</span>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded border hover:border-primary transition">
                                        <h4 className="font-semibold text-gray-900 text-xs mb-1">
                                            🔒 Zero Trust Implementation
                                        </h4>
                                        <p className="text-xs text-gray-600 mb-1">
                                            Step-by-step guide to zero trust architecture
                                        </p>
                                        <span className="text-xs text-primary font-semibold">Coming Soon</span>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded border hover:border-primary transition">
                                        <h4 className="font-semibold text-gray-900 text-xs mb-1">
                                            📊 AI in Business Automation
                                        </h4>
                                        <p className="text-xs text-gray-600 mb-1">
                                            How AI transforms business processes
                                        </p>
                                        <span className="text-xs text-primary font-semibold">Coming Soon</span>
                                    </div>
                                </div>
                                <Link 
                                    href="/blog"
                                    className="mt-3 inline-flex items-center text-primary text-xs font-semibold hover:underline"
                                >
                                    View All Blogs →
                                </Link>
                            </div>

                            {/* Ready to Get Started - Contact CTA */}
                            <div className="bg-primary rounded-lg p-4 text-white">
                                <h3 className="font-bold mb-2 text-sm">🚀 Ready to Get Started?</h3>
                                <p className="text-xs mb-3 opacity-90">
                                    Get expert AI-powered security solutions and protect your business from modern cyber threats.
                                </p>
                                <Link 
                                    href="/contact-us"
                                    target="_blank"
                                    className="inline-block w-full bg-white text-primary px-3 py-2 rounded text-xs font-semibold hover:bg-gray-100 transition text-center"
                                >
                                    Contact Us Today →
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}


