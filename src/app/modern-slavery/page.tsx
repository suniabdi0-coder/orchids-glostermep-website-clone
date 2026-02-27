import React from 'react';
import Header from '@/components/sections/header';
import FooterContactInfo from '@/components/sections/footer-contact-info';

export default function ModernSlaveryPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <section className="py-32 bg-[#F7F8FA]">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">Modern Slavery Policy</h1>
                    <p className="text-gray-600 text-lg">Our Modern Slavery policy is currently being updated. Please check back later.</p>
                </div>
            </section>
            <FooterContactInfo />
        </div>
    );
}
