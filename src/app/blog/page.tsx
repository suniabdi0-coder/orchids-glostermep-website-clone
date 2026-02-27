"use client";

import React, { useState } from 'react';
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
    title: "Toilet Leaking at the Base? Here’s the Real Reason It Happens—and How to Fix It",
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
    title: "The Best Hot Water Systems in ethiopia : A Complete, 2026 Buyer’s Guide",
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
    title: "What is the Average Hourly Rate for a Plumber in jigjiga?",
    excerpt: "How Building Information Modelling is revolutionizing the way we design, coordinate, and deliver complex MEP installations.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    author: "David Chen",
    date: "5 Feb 2026",
    readTime: "5 min read",
    category: "Technology"
  },
  {
    id: 4,
    title: "africa’s Busiest Hardware Stores & Home Repair Services Revealed",
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
  },
  {
    id: 7,
    title: "How to Unblock a Shower Drain: Fast, Simple DIY Methods That Work",
    excerpt: "Not all EV chargers are equal. Here is how to choose the right one. Compare Level 1 trickle and Level 2 home units, DC fast options, Type 2 and CCS2 plugs, kilowatt speed, smart features, single or three-phase power, safety compliance, and install costs.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
    author: "Daniel Abera",
    date: "09 Feb 2026",
    readTime: "7 min read",
    category: "Electrical"
  },
  {
    id: 8,
    title: "Strata Electrical Services Explained: What They Cover & Why They Matter",
    excerpt: "Strata properties like apartment complexes, townhouses, and shared commercial buildings rely heavily on well-maintained electrical systems. Faulty wiring, outdated switchboards, or poorly serviced common-area lighting can affect multiple residents at once, leading to safety hazards and potential legal issues.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
    author: "Sarah Thompson",
    date: "26 Jan 2026",
    readTime: "6 min read",
    category: "Electrical"
  },
  {
    id: 9,
    title: "What Is Gas Fitting? A Beginner's Guide to Safe Gas Installation & Maintenance",
    excerpt: "Gas keeps life running smoothly for many homes. It heats water, powers cooktops, fuels heaters, and helps everyday household tasks flow efficiently. Most homeowners rarely think about their gas system — until something goes wrong. When it does, the stakes are high: leaks, carbon monoxide exposure, and more.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop",
    author: "Mohammed Ali",
    date: "12 Jan 2026",
    readTime: "5 min read",
    category: "Gas & Plumbing"
  },
  {
    id: 10,
    title: "How to Set Up a Home Security System: A Step-by-Step Guide for Beginners",
    excerpt: "Keeping your home and family safe is a top priority, and a well-installed home security system is one of the best ways to do it. From choosing the right cameras and sensors to configuring smart alerts, this guide walks you through every step.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
    author: "Emma Wilson",
    date: "05 Jan 2026",
    readTime: "8 min read",
    category: "Security"
  }
];

const categories = ["All", "Sustainability", "Data Centres", "Technology", "Healthcare", "Innovation", "Careers", "Electrical", "Gas & Plumbing", "Security"];

export default function BlogPage() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#5BA4D9] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-white/90 font-display text-sm font-bold uppercase tracking-widest mb-4">News & Insights</p>
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
                className="px-6 py-2 rounded-full font-display text-sm font-medium transition-all duration-300 bg-gray-100 text-[#1A1A1A] hover:bg-[#D64455] hover:text-white"
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
          <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-10">Featured Articles</h2>

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
                    <span className="bg-[#D64455] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
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

                  <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#D64455] transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-[#D64455] font-display font-semibold text-sm hover:text-[#1A1A1A] transition-colors"
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
          <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-10">Recent Articles</h2>

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
                    <Tag className="w-3 h-3 text-[#D64455]" />
                    <span className="text-xs font-medium text-[#D64455] uppercase tracking-wider">{post.category}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#1A1A1A] mb-3 group-hover:text-[#D64455] transition-colors leading-snug line-clamp-2">
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

      {/* Newsletter CTA — Brand Light Blue */}
      <section className="relative bg-[#5BA4D9] py-16 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
            <br className="hidden md:block" />
            <span className="md:hidden"> - </span>
            Subscribe to Our Newsletter
          </h2>
          <p className="text-sm md:text-base text-white/90 mb-8 max-w-lg mx-auto">
            Get the latest MEP insights, project updates, and industry news delivered directly to your inbox.
          </p>

          {isSubscribed ? (
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl animate-in fade-in zoom-in duration-500">
              <div className="w-12 h-12 bg-[#60B45A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Thanks for Subscribing!</h3>
              <p className="text-white/90 text-sm">You have successfully joined our newsletter.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full bg-white/20 border border-white/40 text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="group bg-white text-[#5BA4D9] font-display text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </form>
          )}
        </div>
      </section>

      <FooterContactInfo />
    </main>
  );
}
