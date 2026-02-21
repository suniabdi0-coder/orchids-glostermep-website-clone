"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/sections/header';
import FooterContactInfo from '@/components/sections/footer-contact-info';
import { ArrowRight, MapPin, Calendar, Building2 } from 'lucide-react';

type ProjectStatus = 'all' | 'ongoing' | 'completed' | 'coming';

interface Project {
  id: number;
  title: string;
  location: string;
  sector: string;
  status: 'ongoing' | 'completed' | 'coming';
  image: string;
  description: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "The Shard Commercial Tower",
    location: "London, UK",
    sector: "Commercial",
    status: "completed",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
    description: "Complete MEP installation for a 45-storey commercial development including HVAC, electrical distribution, and fire protection systems.",
    year: "2024"
  },
  {
    id: 2,
    title: "Manchester Data Centre",
    location: "Manchester, UK",
    sector: "Data Centres",
    status: "completed",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    description: "High-specification MEP infrastructure for a Tier 4 data centre with redundant cooling and power systems.",
    year: "2024"
  },
  {
    id: 3,
    title: "Royal Hospital Wing Extension",
    location: "Birmingham, UK",
    sector: "Healthcare",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    description: "Critical care MEP systems including medical gas, specialist ventilation, and emergency backup power.",
    year: "2025"
  },
  {
    id: 4,
    title: "Canary Wharf Office Complex",
    location: "London, UK",
    sector: "Commercial",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    description: "Sustainable MEP solutions featuring heat recovery, solar integration, and smart building management.",
    year: "2025"
  },
  {
    id: 5,
    title: "Bristol Residential Tower",
    location: "Bristol, UK",
    sector: "Residential",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    description: "Luxury residential development with underfloor heating, smart home integration, and communal systems.",
    year: "2025"
  },
  {
    id: 6,
    title: "Leeds Innovation Hub",
    location: "Leeds, UK",
    sector: "Education",
    status: "coming",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
    description: "State-of-the-art university facility with laboratory-grade ventilation and sustainable energy systems.",
    year: "2026"
  },
  {
    id: 7,
    title: "Edinburgh Hotel & Spa",
    location: "Edinburgh, UK",
    sector: "Hospitality",
    status: "coming",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    description: "Luxury hospitality MEP including pool plant, spa facilities, and bespoke lighting throughout.",
    year: "2026"
  },
  {
    id: 8,
    title: "Cardiff Retail Development",
    location: "Cardiff, UK",
    sector: "Retail",
    status: "completed",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    description: "Major retail centre with complex tenant fit-out coordination and central plant systems.",
    year: "2023"
  },
  {
    id: 9,
    title: "Glasgow Tech Campus",
    location: "Glasgow, UK",
    sector: "Commercial",
    status: "coming",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    description: "Multi-building tech campus with district heating network and cutting-edge BMS integration.",
    year: "2026"
  }
];

const statusLabels = {
  all: "All Projects",
  ongoing: "Ongoing",
  completed: "Completed",
  coming: "Coming Soon"
};

const statusColors = {
  ongoing: "bg-amber-500",
  completed: "bg-green-500",
  coming: "bg-blue-500"
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectStatus>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.status === activeFilter);

  const projectCounts = {
    all: projects.length,
    ongoing: projects.filter(p => p.status === 'ongoing').length,
    completed: projects.filter(p => p.status === 'completed').length,
    coming: projects.filter(p => p.status === 'coming').length
  };

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
            <p className="text-[#DC1E2D] font-display text-sm font-bold uppercase tracking-widest mb-4">Our Portfolio</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Projects
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our diverse portfolio of mechanical, electrical, and public health engineering projects delivered across the UK.
            </p>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ borderRadius: '100% 100% 0 0' }}></div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {(Object.keys(statusLabels) as ProjectStatus[]).map((status) => (
              <button
                key={status}
                onClick={() => setActiveFilter(status)}
                className={`px-8 py-3 rounded-full font-display text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === status
                    ? 'bg-[#DC1E2D] text-white shadow-lg'
                    : 'bg-gray-100 text-[#004172] hover:bg-gray-200'
                }`}
              >
                {statusLabels[status]}
                <span className="ml-2 opacity-70">({projectCounts[status]})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article 
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${statusColors[project.status]} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
                      {statusLabels[project.status]}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-[#004172] mb-3 group-hover:text-[#DC1E2D] transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-4 h-4 text-[#DC1E2D]" />
                    <span className="text-sm font-medium text-gray-600">{project.sector}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <Link 
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-[#DC1E2D] font-display font-semibold text-sm hover:text-[#004172] transition-colors"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#004172]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "150+", label: "Active Clients" },
              { value: "£200M+", label: "Contract Value" },
              { value: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index}>
                <span className="block font-display text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</span>
                <span className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#004172] mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can bring your vision to life with our expert MEP solutions.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-[#DC1E2D] text-white font-display text-sm font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:bg-[#004172] transition-all duration-300"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <FooterContactInfo />
    </main>
  );
}
