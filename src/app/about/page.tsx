"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/sections/header';
import FooterContactInfo from '@/components/sections/footer-contact-info';
import { Target, Eye, Heart, Award, Users, Building2, Clock, Shield, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Technical accuracy",
    description: "Ensuring precision and excellence in all technical aspects."
  },
  {
    icon: Shield,
    title: "Professional integrity",
    description: "Maintaining high ethical standards and transparency in all our business relationships."
  },
  {
    icon: Heart,
    title: "Client satisfaction",
    description: "Dedicated to meeting and exceeding client expectations through quality service delivery."
  },
  {
    icon: Users,
    title: "Safety and quality",
    description: "Committed to maintaining the highest safety standards and quality in all our operations."
  },
  {
    icon: TrendingUp,
    title: "Continuous improvement",
    description: "Constantly enhancing our processes and capabilities to deliver better engineering solutions."
  }
];

const milestones = [
  { year: "2020", event: "Ventario Engineering founded in Jigjiga" },
  { year: "2021", event: "Expanded services to mechanical engineering and electrical engineering" },
  { year: "2022", event: "Achieved award certification" },
  { year: "2023", event: "Introduced BIM Level 2 capability across all projects" },
  { year: "2024", event: "Reached 10 million birr annual turnover milestone" },
  { year: "2025", event: "Celebrating 500+ completed projects" }
];

const team = [
  {
    name: "Hassan Ali",
    role: "Managing Director",
    image: "/generated-sectors/person 1.jpeg"
  },
  {
    name: "Noor Ahmed",
    role: "Operations Director",
    image: "/generated-sectors/person2.png"
  },
  {
    name: "Nimco Ali",
    role: "Technical Director",
    image: "/generated-sectors/person3.png"
  },
  {
    name: "Khalid Ali",
    role: "Commercial Director",
    image: "/generated-sectors/person4.png"
  }
];

/* ─── Scroll-Animated Timeline Component ─── */
function TimelineSection({ milestones }: { milestones: { year: string; event: string }[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const itemEls = sectionRef.current?.querySelectorAll('[data-milestone]');

    if (itemEls) {
      itemEls.forEach((el, i) => {
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set(prev).add(i));
              obs.unobserve(el);
            }
          },
          { threshold: 0.3, rootMargin: '0px 0px -60px 0px' }
        );
        obs.observe(el);
        observers.push(obs);
      });
    }

    // Scroll-driven line growth
    const handleScroll = () => {
      if (!sectionRef.current || !lineRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionH = rect.height;
      const viewH = window.innerHeight;
      const scrolled = Math.max(0, viewH - sectionTop);
      const pct = Math.min(100, (scrolled / sectionH) * 100);
      lineRef.current.style.height = `${pct}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observers.forEach(o => o.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#5BA4D9] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-20 bg-white" style={{ borderRadius: '0 0 100% 100%' }}></div>

      <div className="container mx-auto px-6 pt-10">
        <div className="text-center mb-16">
          <p className="text-white/90 font-display text-sm font-bold uppercase tracking-widest mb-4">Our Journey</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Key Milestones
          </h2>
        </div>

        <div className="relative">
          {/* Background track */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-white/10"></div>
          {/* Animated growing line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-white/60 transition-none top-0" ref={lineRef} style={{ height: '0%' }}></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const isVisible = visibleItems.has(index);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  data-milestone
                  className={`relative flex items-center md:${isLeft ? 'justify-start' : 'justify-end'} justify-start`}
                >
                  <div
                    className={`w-full pl-12 md:pl-0 md:w-5/12 transition-all duration-700 ease-out md:${isLeft ? 'text-right md:pr-12' : 'text-left md:pl-12'} text-left
                      ${isVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-10'
                      }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <span className="inline-block font-display text-sm font-bold text-white bg-[#D64455] px-4 py-1.5 rounded-full mb-3 shadow-lg">
                      {milestone.year}
                    </span>
                    <p className="text-white/90 text-[15px] leading-relaxed">{milestone.event}</p>
                  </div>

                  {/* Animated dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}
                    style={{ transitionDelay: `${index * 80 + 100}ms` }}
                  >
                    <div className="w-5 h-5 bg-[#D64455] rounded-full border-[4px] border-white shadow-[0_0_20px_rgba(214,68,85,0.5)]"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ borderRadius: '100% 100% 0 0' }}></div>
    </section>
  );
}

export default function AboutPage() {
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
            <p className="text-white/90 font-display text-sm font-bold uppercase tracking-widest mb-4">Who We Are</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ventario Engineering is committed to delivering practical engineering solutions
              that meet client needs while adhering to technical standards and best
              practices. Our team combines field experience with strong technical
              knowledge to support projects of varying scale and complexity.
            </p>
          </div>
        </div>

        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ borderRadius: '100% 100% 0 0' }}></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="container mx-auto px-6">
          <div className="bg-[#5BA4D9] rounded-[32px] p-2 md:p-3 max-w-5xl mx-auto flex flex-col md:flex-row shadow-2xl">
            {/* Mission (Blue side) */}
            <div className="flex-1 p-10 md:p-14 md:pr-12 text-white">
              <div className="w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-6">Mission</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                To provide reliable, efficient, and sustainable engineering solutions through technical excellence and professional integrity.
              </p>
            </div>

            {/* Vision (White side) */}
            <div className="flex-1 bg-white rounded-[24px] p-10 md:p-14 text-[#1A1A1A]">
              <div className="w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-6">Vision</h3>
              <p className="text-[#1A1A1A]/80 leading-relaxed text-lg">
                To become a trusted engineering partner recognized for quality, innovation, and technical competence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values — Bento Grid Layout */}
      <section className="py-24 bg-[#F7F8FA] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Centered heading */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-[#D64455]"></div>
              <p className="text-[#D64455] font-display text-xs font-bold uppercase tracking-[0.25em]">What Drives Us</p>
              <div className="h-[2px] w-8 bg-[#D64455]"></div>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Our Core Values
            </h2>
          </div>

          {/* Bento Grid — hero card left, 4 stacked right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
            {/* Hero Card — blue, full-height */}
            {(() => {
              const HeroIcon = values[0].icon;
              return (
                <div className="group relative rounded-3xl overflow-hidden bg-[#5BA4D9] p-10 md:p-12 flex flex-col justify-between h-full transition-all duration-500 hover:shadow-2xl">
                  <HeroIcon className="absolute -bottom-6 -right-6 w-48 h-48 text-white/[0.04] pointer-events-none" strokeWidth={1} />
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#D64455] flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <HeroIcon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      {values[0].title}
                    </h3>
                    <p className="text-white/90 leading-[1.8] text-lg max-w-md">
                      {values[0].description}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2">
                    <div className="w-8 h-[3px] rounded-full bg-[#D64455]"></div>
                    <div className="w-3 h-[3px] rounded-full bg-[#D64455]/40"></div>
                  </div>
                </div>
              );
            })()}

            {/* Right column — 4 cards stacked */}
            <div className="flex flex-col h-full justify-between gap-4">
              {values.slice(1).map((value, index) => {
                const accents = ['#D64455', '#5BA4D9', '#60B45A', '#FF6B6B'];
                const accent = accents[index % accents.length];
                const ValueIcon = value.icon;
                return (
                  <div
                    key={index}
                    className="group relative rounded-3xl overflow-hidden bg-white p-6 md:p-8 flex-1 flex items-center transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
                  >
                    {/* Background icon silhouette */}
                    <ValueIcon className="absolute -bottom-3 -right-3 w-24 h-24 text-gray-50 pointer-events-none transition-colors duration-500 group-hover:text-gray-100" strokeWidth={1} />
                    <div className="relative z-10 flex items-center gap-5 w-full">
                      <div
                        className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                        style={{ backgroundColor: accent }}
                      >
                        <ValueIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-[#1A1A1A] mb-1 transition-colors duration-300 group-hover:text-[#004172]">
                          {value.title}
                        </h3>
                        <p className="text-gray-500 leading-snug text-[14px]">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline — Scroll-Animated */}
      <TimelineSection milestones={milestones} />

      {/* Leadership Team */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF6B6B] font-display text-sm font-bold uppercase tracking-widest mb-4">OUR TEAM</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Meet our dedicated team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-[#D64455] transition-colors">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-[#1A1A1A] mb-1">{member.name}</h3>
                <p className="text-[#D64455] font-medium">{member.role}</p>
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
              { icon: Clock, value: "5+", label: "Years of Excellent Experience" }
            ].map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="p-6">
                  <StatIcon className="w-10 h-10 text-[#D64455] mx-auto mb-4" />
                  <span className="block font-display text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-2">{stat.value}</span>
                  <span className="text-gray-600 text-sm uppercase tracking-wider">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      <FooterContactInfo />
    </main>
  );
}
