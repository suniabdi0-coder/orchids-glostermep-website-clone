"use client";

import React, { useState } from 'react';
import Header from '@/components/sections/header';
import FooterContactInfo from '@/components/sections/footer-contact-info';
import { Briefcase, User, GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

export default function ApprenticeshipsPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

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
                        <p className="text-white/90 font-display text-sm font-bold uppercase tracking-widest mb-4">Careers</p>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Apprenticeships
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Start your career in Mechanical, Electrical, and Plumbing engineering with Ventario. We provide comprehensive field training and support.
                        </p>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-20 bg-[#F7F8FA]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        {isSubmitted ? (
                            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-[#60B45A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(96,180,90,0.2)]">
                                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="font-display text-3xl font-bold text-[#1A1A1A] mb-4">Application Received!</h2>
                                <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
                                    Thank you for your interest in joining Ventario Engineering. Our recruitment team will review your application and contact you soon.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-[#D64455] font-semibold hover:underline"
                                >
                                    Submit another application
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-10 text-center">
                                    <h2 className="font-display text-3xl font-bold text-[#1A1A1A] mb-4">Apply for an Apprenticeship</h2>
                                    <p className="text-gray-600">Fill out the form below to register your interest in our upcoming apprenticeship program.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2"><User className="w-4 h-4 text-[#D64455]" /> Full Name</label>
                                            <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5BA4D9] transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2"><Mail className="w-4 h-4 text-[#D64455]" /> Email Address</label>
                                            <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5BA4D9] transition-all" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2"><Phone className="w-4 h-4 text-[#D64455]" /> Phone Number</label>
                                            <input required type="tel" placeholder="+251 900..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5BA4D9] transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2"><MapPin className="w-4 h-4 text-[#D64455]" /> Location / City</label>
                                            <input required type="text" placeholder="Jigjiga" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5BA4D9] transition-all" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2"><Briefcase className="w-4 h-4 text-[#D64455]" /> Trade Interest</label>
                                        <select required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5BA4D9] transition-all appearance-none cursor-pointer">
                                            <option value="">Select a trade...</option>
                                            <option value="electrical">Electrical Engineering</option>
                                            <option value="mechanical">Mechanical Engineering</option>
                                            <option value="plumbing">Plumbing & Heating</option>
                                            <option value="hvac">HVAC</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2"><GraduationCap className="w-4 h-4 text-[#D64455]" /> Education Background</label>
                                        <textarea required placeholder="Tell us briefly about your current education level or previous experience..." rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5BA4D9] transition-all resize-none"></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <button type="submit" className="w-full bg-[#D64455] text-white font-display font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-[#C13D4D] hover:shadow-lg transition-all duration-300">
                                            Submit Application
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <FooterContactInfo />
        </main>
    );
}
