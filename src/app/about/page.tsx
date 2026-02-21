"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/sections/header';
import FooterContactInfo from '@/components/sections/footer-contact-info';
import { Target, Eye, Heart, Award, Users, Building2, Clock, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Delivering exceptional quality in every project through meticulous attention to detail and engineering expertise."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Maintaining the highest safety standards across all our operations to protect our team and clients."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Building lasting relationships through honest communication, transparency, and ethical business practices."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients, consultants, and contractors to achieve outstanding project outcomes."
  }
];

const milestones = [
  { year: "2005", event: "Gloster MEP Ltd founded in London" },
  { year: "2010", event: "Expanded services to include public health engineering" },
  { year: "2014", event: "Achieved ISO 9001 certification" },
  { year: "2016", event: "Launched dedicated data centre division" },
  { year: "2018", event: "Opened regional offices in Manchester and Birmingham" },
  { year: "2020", event: "Introduced BIM Level 2 capability across all projects" },
  { year: "2022", event: "Reached £100M annual turnover milestone" },
  { year: "2024", event: "Celebrating 500+ completed projects" }
];

const team = [
  {
    name: "John Gloster",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Sarah Mitchell",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "David Thompson",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Emma Roberts",
    role: "Commercial Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  }
];

export default function AboutPage() {
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
            <p className="text-[#DC1E2D] font-display text-sm font-bold uppercase tracking-widest mb-4">Who We Are</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A dynamic, driven mechanical, electrical and public health contractor delivering innovative engineering solutions across various sectors.
            </p>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ borderRadius: '100% 100% 0 0' }}></div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#DC1E2D] font-display text-sm font-bold uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#004172] mb-6">
                Building the Future, One Project at a Time
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to transform the MEP contracting landscape, Gloster MEP Ltd has grown from a small specialist contractor into one of the UK&apos;s most respected mechanical, electrical, and public health engineering companies.
                </p>
                <p>
                  Our journey has been defined by an unwavering commitment to quality, innovation, and client satisfaction. We believe that exceptional engineering is about more than technical expertise – it&apos;s about understanding our clients&apos; needs and delivering solutions that exceed expectations.
                </p>
                <p>
                  Today, we work across diverse sectors including commercial, healthcare, data centres, education, and residential developments, bringing the same dedication to excellence to every project regardless of size or complexity.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=1000&fit=crop"
                  alt="Gloster MEP team at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#DC1E2D] rounded-2xl p-8 text-white shadow-2xl">
                <span className="block font-display text-5xl font-bold">20+</span>
                <span className="text-sm uppercase tracking-wider">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="w-16 h-16 bg-[#004172] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#004172] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional mechanical, electrical, and public health engineering solutions that create sustainable, efficient, and comfortable built environments for generations to come.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="w-16 h-16 bg-[#DC1E2D] rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#004172] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognised as the UK&apos;s leading MEP contractor, known for innovation, reliability, and our commitment to developing the next generation of engineering talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#DC1E2D] font-display text-sm font-bold uppercase tracking-widest mb-4">What Drives Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#004172]">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-[#004172] group transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#DC1E2D]/10 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                  <value.icon className="w-8 h-8 text-[#DC1E2D] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#004172] group-hover:text-white mb-4 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#004172] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-white" style={{ borderRadius: '0 0 100% 100%' }}></div>
        
        <div className="container mx-auto px-6 pt-10">
          <div className="text-center mb-16">
            <p className="text-[#DC1E2D] font-display text-sm font-bold uppercase tracking-widest mb-4">Our Journey</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Key Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <span className="block font-display text-3xl font-bold text-[#DC1E2D] mb-2">{milestone.year}</span>
                    <p className="text-white/90">{milestone.event}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#DC1E2D] rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ borderRadius: '100% 100% 0 0' }}></div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#DC1E2D] font-display text-sm font-bold uppercase tracking-widest mb-4">Our People</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#004172]">
              Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-[#DC1E2D] transition-colors">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-[#004172] mb-1">{member.name}</h3>
                <p className="text-[#DC1E2D] font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Building2, value: "500+", label: "Projects Delivered" },
              { icon: Users, value: "200+", label: "Team Members" },
              { icon: Award, value: "15+", label: "Industry Awards" },
              { icon: Clock, value: "20+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <stat.icon className="w-10 h-10 text-[#DC1E2D] mx-auto mb-4" />
                <span className="block font-display text-4xl md:text-5xl font-bold text-[#004172] mb-2">{stat.value}</span>
                <span className="text-gray-600 text-sm uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004172] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gray-50" style={{ borderRadius: '0 0 100% 100%' }}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10 pt-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join the many clients who trust Gloster MEP to deliver exceptional engineering solutions for their projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-[#DC1E2D] text-white font-display text-sm font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:bg-white hover:text-[#004172] transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link 
              href="/projects"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-display text-sm font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:bg-white hover:text-[#004172] transition-all duration-300"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      <FooterContactInfo />
    </main>
  );
}
