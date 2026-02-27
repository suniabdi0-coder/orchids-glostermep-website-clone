"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/sections/header';
import FooterContactInfo from '@/components/sections/footer-contact-info';
import { Wrench, Zap, Droplets, Wind, Shield, Settings, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: "Mechanical Services",
    description: "Comprehensive mechanical engineering solutions including HVAC systems, heating installations, and ventilation systems designed for optimal efficiency and comfort.",
    features: ["HVAC Systems", "Heating Solutions", "Ventilation Design", "Energy Recovery"]
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Full electrical contracting services from power distribution to lighting design, ensuring safe and efficient electrical infrastructure for all building types.",
    features: ["Power Distribution", "Lighting Design", "Emergency Systems", "Data Infrastructure"]
  },
  {
    icon: Droplets,
    title: "Plumbing",
    description: "Expert Plumbing engineering including water supply, drainage systems, and sanitary installations meeting all regulatory requirements.",
    features: ["Water Supply", "Drainage Systems", "Sanitary Design", "Rainwater Harvesting"]
  },
  {
    icon: Wind,
    title: "Ventilation & Air Conditioning",
    description: "State-of-the-art ventilation and air conditioning systems designed to provide exceptional indoor air quality and thermal comfort.",
    features: ["AC Installation", "Air Quality Control", "Ductwork Design", "Climate Control"]
  },
  {
    icon: Shield,
    title: "Fire Protection",
    description: "Comprehensive fire protection systems including sprinklers, alarms, and suppression systems to keep buildings and occupants safe.",
    features: ["Sprinkler Systems", "Fire Alarms", "Suppression Systems", "Emergency Lighting"]
  },
  {
    icon: Settings,
    title: "Building Management Systems",
    description: "Intelligent BMS solutions that integrate all building services for efficient monitoring, control, and energy management.",
    features: ["System Integration", "Energy Monitoring", "Remote Control", "Performance Analytics"]
  }
];

export default function ServicesPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-white/90 font-display text-sm font-bold uppercase tracking-widest mb-4">What We Do</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Delivering innovative MEP engineering solutions across mechanical, electrical and Plumbing disciplines with excellence and precision.
            </p>
          </div>
        </div>

        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ borderRadius: '100% 100% 0 0' }}></div>
      </section>

      {/* Services Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
              Complete MEP Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ventario Engineering provides comprehensive mechanical, electrical, and Plumbing engineering services. Our experienced team delivers high-quality installations across commercial, residential, and industrial sectors throughout Ethiopia.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-[#D64455]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D64455] transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-[#D64455] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-display text-xl font-bold text-[#1A1A1A] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-[#D64455] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/blog"
                  className="inline-flex items-center text-[#D64455] font-display font-semibold text-sm hover:text-[#1A1A1A] transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#D64455] font-display text-sm font-bold uppercase tracking-widest mb-4">Why Ventario Engineering</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                Engineering Excellence Since Day One
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We pride ourselves on delivering exceptional MEP services that exceed client expectations. Our commitment to quality, safety, and innovation sets us apart in the industry.
              </p>

              <div className="space-y-4">
                {[
                  "Experienced team of qualified engineers",
                  "24/7 maintenance and support services",
                  "Sustainable and energy-efficient solutions",
                  "Nationwide project delivery capability"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-[#D64455] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center justify-center bg-[#D64455] text-white font-display text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#C13D4D] transition-all duration-300 mt-10 focus:outline-none"
              >
                Get a Quote
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=800&fit=crop"
                  alt="Engineering team at work"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#5BA4D9] rounded-full flex items-center justify-center text-white text-center p-4">
                <div>
                  <span className="block font-display text-3xl font-bold">5+</span>
                  <span className="text-sm">Years of Excellent Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — Compact White */}
      <section className="relative bg-white py-16 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="inline-flex items-center justify-center bg-[#D64455] text-white font-display text-sm font-bold uppercase tracking-wider px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(214,68,85,0.4)] transition-all duration-300 focus:outline-none"
          >
            Contact Us Today
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </section>

      <FooterContactInfo />

      {/* Quote/Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#1A1A1A]/70 backdrop-blur-sm cursor-pointer transition-opacity"
            onClick={() => setIsContactModalOpen(false)}
          ></div>
          <div className="relative bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 animate-in zoom-in duration-300">
                <div className="w-16 h-16 bg-[#60B45A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-2">Request Sent!</h2>
                <p className="text-gray-600 mb-6">Thank you. Our team will get back to you with a quote within 24 hours.</p>
                <button
                  onClick={() => { setIsSubmitted(false); setIsContactModalOpen(false); }}
                  className="text-[#D64455] font-semibold hover:underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-2">Get a Quote</h3>
                <p className="text-gray-600 text-sm mb-6">Fill out the details below and we will send you a comprehensive quote for your requirements.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1A1A1A] uppercase">Full Name</label>
                    <input required type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA4D9]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1A1A1A] uppercase">Email</label>
                    <input required type="email" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA4D9]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1A1A1A] uppercase">Service Type</label>
                    <select required className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA4D9] cursor-pointer">
                      <option value="">Select service...</option>
                      <option value="mechanical">Mechanical</option>
                      <option value="electrical">Electrical</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="all">Full MEP Package</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1A1A1A] uppercase">Project Details</label>
                    <textarea required rows={3} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA4D9] resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#D64455] text-white font-display font-bold uppercase tracking-wider py-3 rounded-lg hover:bg-[#C13D4D] transition-colors mt-2">
                    Submit Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
