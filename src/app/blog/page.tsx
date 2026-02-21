"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/sections/header';
import FooterContactInfo from '@/components/sections/footer-contact-info';
import { ArrowRight, Calendar, User, Clock, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Sustainable MEP Design in Commercial Buildings",
    excerpt: "Exploring how modern MEP systems are evolving to meet net-zero targets and create more sustainable built environments.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    author: "James Mitchell",
    date: "15 Feb 2026",
    readTime: "8 min read",
    category: "Sustainability",
    featured: true
  },
  {
    id: 2,
    title: "Data Centre Cooling: Best Practices for Energy Efficiency",
    excerpt: "A comprehensive guide to optimizing cooling systems in data centres while reducing energy consumption and operational costs.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    author: "Sarah Thompson",
    date: "10 Feb 2026",
    readTime: "6 min read",
    category: "Data Centres",
    featured: true
  },
  {
    id: 3,
    title: "BIM Integration: Transforming MEP Project Delivery",
    excerpt: "How Building Information Modelling is revolutionizing the way we design, coordinate, and deliver complex MEP installations.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    author: "David Chen",
    date: "5 Feb 2026",
    readTime: "5 min read",
    category: "Technology"
  },
  {
    id: 4,
    title: "Healthcare MEP: Critical Considerations for Hospital Projects",
    excerpt: "Understanding the unique requirements and challenges of mechanical and electrical systems in healthcare facilities.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    author: "Emma Wilson",
    date: "28 Jan 2026",
    readTime: "7 min read",
    category: "Healthcare"
  },
  {
    id: 5,
    title: "Smart Building Technologies: The Rise of Intelligent MEP Systems",
    excerpt: "Examining how IoT and smart technologies are creating more responsive, efficient, and user-friendly building systems.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    author: "Michael Roberts",
    date: "20 Jan 2026",
    readTime: "6 min read",
    category: "Innovation"
  },
  {
    id: 6,
    title: "Apprenticeships in MEP: Building the Next Generation",
    excerpt: "Our commitment to developing skilled engineers through comprehensive apprenticeship programmes and hands-on training.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
    author: "Rachel Adams",
    date: "12 Jan 2026",
    readTime: "4 min read",
    category: "Careers"
  }
];

const categories = ["All", "Sustainability", "Data Centres", "Technology", "Healthcare", "Innovation", "Careers"];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#004172] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#DC1E2D] font-display text-sm font-bold uppercase tracking-widest mb-4">News & Insights</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Blog
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Stay updated with the latest news, insights, and innovations from the world of MEP engineering.
            </p>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ borderRadius: '100% 100% 0 0' }}></div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-display text-sm font-medium transition-all duration-300 bg-gray-100 text-[#004172] hover:bg-[#DC1E2D] hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-[#004172] mb-10">Featured Articles</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#DC1E2D] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-[#004172] mb-4 group-hover:text-[#DC1E2D] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-[#DC1E2D] font-display font-semibold text-sm hover:text-[#004172] transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-[#004172] mb-10">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-3 h-3 text-[#DC1E2D]" />
                    <span className="text-xs font-medium text-[#DC1E2D] uppercase tracking-wider">{post.category}</span>
                  </div>
                  
                  <h3 className="font-display text-lg font-bold text-[#004172] mb-3 group-hover:text-[#DC1E2D] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#004172] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gray-50" style={{ borderRadius: '0 0 100% 100%' }}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10 pt-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get the latest MEP insights, project updates, and industry news delivered directly to your inbox.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#DC1E2D]"
            />
            <button 
              type="submit"
              className="bg-[#DC1E2D] text-white font-display text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white hover:text-[#004172] transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <FooterContactInfo />
    </main>
  );
}
