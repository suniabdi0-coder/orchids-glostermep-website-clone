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
  // First 4 projects from home page case studies
  {
    id: 1,
    title: "Jigjiga University",
    location: "Jigjiga, Ethiopia",
    sector: "Education",
    status: "completed",
    image: "/for images/Jijiga-Universityd.webp",
    description: "Complete MEP installation for university campus including lecture halls, laboratories, and administrative buildings with advanced HVAC and electrical systems.",
    year: "2023"
  },
  {
    id: 2,
    title: "Duule Hotel",
    location: "Jigjiga, Ethiopia",
    sector: "Hospitality",
    status: "completed",
    image: "/for images/duule hotel.jpg",
    description: "Luxury hotel MEP systems including HVAC, plumbing, electrical distribution, and specialized kitchen ventilation systems.",
    year: "2024"
  },
  {
    id: 3,
    title: "Sky Hotel",
    location: "Jigjiga, Ethiopia",
    sector: "Hospitality",
    status: "ongoing",
    image: "/for images/sky hotel.jpeg",
    description: "Modern hotel development with comprehensive MEP solutions including smart building management and energy-efficient systems.",
    year: "2025"
  },
  {
    id: 4,
    title: "Shabeelay Resort",
    location: "Jigjiga, Ethiopia",
    sector: "Hospitality",
    status: "completed",
    image: "/for images/shabelay resort.jpg",
    description: "Resort facility with complex MEP requirements including pool systems, spa ventilation, and comprehensive utilities infrastructure.",
    year: "2024"
  },
  // 5 new Ethiopian projects
  {
    id: 5,
    title: "Kabri Dahar Airport",
    location: "Kabri Dahar, Ethiopia",
    sector: "Aviation",
    status: "ongoing",
    image: "/for images/pantnagar-airport-dehradun-pgh.webp",
    description: "Airport terminal MEP systems including specialized HVAC for passenger areas, runway lighting, and fire protection systems.",
    year: "2025"
  },
  {
    id: 6,
    title: "Ethio Telecom Office",
    location: "Jigjiga, Ethiopia",
    sector: "Commercial",
    status: "completed",
    image: "/for images/ethio telecom office.jpeg",
    description: "Corporate office complex with advanced MEP infrastructure including data center cooling and redundant power systems.",
    year: "2024"
  },
  {
    id: 7,
    title: "Mina Factory",
    location: "Dire Dawa, Ethiopia",
    sector: "Industrial",
    status: "ongoing",
    image: "/for images/mina factory.jpeg",
    description: "Industrial manufacturing facility with specialized MEP systems including process ventilation, compressed air, and heavy-duty electrical infrastructure.",
    year: "2025"
  },
  {
    id: 8,
    title: "Mubaric Business Center",
    location: "Jigjiga, Ethiopia",
    sector: "Commercial",
    status: "completed",
    image: "/for images/mubarik business center.jpeg",
    description: "Mixed-use commercial development with integrated MEP solutions including retail, office, and parking facilities.",
    year: "2023"
  },
  {
    id: 9,
    title: "Ethiopian Railway Station",
    location: "Addis Ababa, Ethiopia",
    sector: "Transportation",
    status: "ongoing",
    image: "/for images/ethiopian railway station.jpeg",
    description: "Modern railway station with comprehensive MEP systems including platform services, station control systems, and passenger facilities.",
    year: "2025"
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectFormModalOpen, setIsProjectFormModalOpen] = useState(false);
  const [isProjectFormSubmitted, setIsProjectFormSubmitted] = useState(false);

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProjectFormSubmitted(true);
  };

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
      <section className="relative bg-[#5BA4D9] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-white/90 font-display text-sm font-bold uppercase tracking-widest mb-4">Our Portfolio</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Projects
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our diverse portfolio of mechanical, electrical, and Plumbing engineering projects delivered across Ethiopia.
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
                className={`px-8 py-3 rounded-full font-display text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeFilter === status
                  ? 'bg-[#D64455] text-white shadow-lg'
                  : 'bg-gray-100 text-[#1A1A1A] hover:bg-gray-200'
                  }`}
              >
                {statusLabels[status]}
                <span className="ml-2 opacity-70">({projectCounts[status]})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid — Circular Cards */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 justify-items-center">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col items-center text-center max-w-[300px]"
              >
                {/* Circular Image Card */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="relative block w-[260px] h-[260px] transition-transform duration-300 hover:scale-105 mb-6 focus:outline-none"
                >
                  {/* Outer Red Ring */}
                  <div className="absolute inset-0 rounded-full border-[8px] border-[#D64455] z-30"></div>

                  {/* Inner White Ring */}
                  <div className="absolute inset-[8px] rounded-full border-[8px] border-white z-20"></div>

                  {/* Main Blue Circle with Project Image */}
                  <div className="absolute inset-[16px] rounded-full bg-[#5BA4D9] z-10 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Dark overlay for text readability on hover */}
                    <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/50 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white font-display font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 leading-tight">
                        {project.title}
                      </span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute -top-1 right-4 z-40">
                    <span className={`${statusColors[project.status]} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md`}>
                      {statusLabels[project.status]}
                    </span>
                  </div>
                </button>

                {/* Project Info Below Circle */}
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#D64455] transition-colors leading-tight">
                  {project.title}
                </h3>

                <div className="flex items-center justify-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-1.5 mb-3">
                  <Building2 className="w-3.5 h-3.5 text-[#D64455]" />
                  <span className="text-xs font-medium text-gray-600">{project.sector}</span>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center text-[#D64455] font-display font-semibold text-sm hover:text-[#1A1A1A] transition-colors focus:outline-none"
                >
                  View Project Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
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
      <section className="py-12 bg-[#5BA4D9]">
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

      {/* CTA Section — Compact White */}
      <section className="relative bg-[#5BA4D9] py-16 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <button
            onClick={() => setIsProjectFormModalOpen(true)}
            className="inline-flex items-center justify-center bg-[#D64455] text-white font-display text-sm font-bold uppercase tracking-wider px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(214,68,85,0.4)] transition-all duration-300 focus:outline-none"
          >
            Start Your Project
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </section>

      <FooterContactInfo />

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#1A1A1A]/70 backdrop-blur-sm cursor-pointer transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
            {/* Image side */}
            <div className="w-full md:w-5/12 relative h-48 md:h-auto">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className={`${statusColors[selectedProject.status]} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm`}>
                  {statusLabels[selectedProject.status]}
                </span>
              </div>
            </div>

            {/* Details side */}
            <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 pr-6">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-100">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D64455]" /> {selectedProject.location}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#D64455]" /> {selectedProject.year}</span>
                <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-[#D64455]" /> {selectedProject.sector}</span>
              </div>

              <div className="flex-grow">
                <h4 className="font-display font-bold text-[#1A1A1A] mb-2 uppercase text-sm tracking-wider">Services Delivered</h4>
                <p className="text-gray-600 leading-relaxed font-body text-[15px] mb-6">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setIsProjectFormModalOpen(true);
                  }}
                  className="w-full bg-[#5BA4D9] text-white font-display font-bold uppercase tracking-wider py-3.5 rounded-full hover:bg-[#4A93C8] transition-colors shadow-md"
                >
                  Request Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Start Project Form Modal */}
      {isProjectFormModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#1A1A1A]/70 backdrop-blur-sm cursor-pointer transition-opacity"
            onClick={() => setIsProjectFormModalOpen(false)}
          ></div>
          <div className="relative bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setIsProjectFormModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {isProjectFormSubmitted ? (
              <div className="text-center py-8 animate-in zoom-in duration-300">
                <div className="w-16 h-16 bg-[#60B45A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-2">Project Submitted!</h2>
                <p className="text-gray-600 mb-6">Awesome! We&apos;ll review your project requirements and connect with you shortly.</p>
                <button
                  onClick={() => { setIsProjectFormSubmitted(false); setIsProjectFormModalOpen(false); }}
                  className="text-[#5BA4D9] font-semibold hover:underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-2">Start Your Project</h3>
                <p className="text-gray-600 text-sm mb-6">Tell us about your next project, and our experts will help you bring it to life.</p>
                <form onSubmit={handleProjectSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1A1A1A] uppercase">Full Name</label>
                    <input required type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA4D9]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1A1A1A] uppercase">Email</label>
                      <input required type="email" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA4D9]" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1A1A1A] uppercase">Phone</label>
                      <input required type="tel" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA4D9]" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1A1A1A] uppercase">Project Type</label>
                    <select required className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA4D9] cursor-pointer">
                      <option value="">Select project type...</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="residential">Residential Complex</option>
                      <option value="industrial">Industrial Facility</option>
                      <option value="hospitality">Hotel / Hospitality</option>
                      <option value="education">Education Campus</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1A1A1A] uppercase">Required Services</label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#D64455] focus:ring-[#D64455]" /> Mechanical</label>
                      <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#D64455] focus:ring-[#D64455]" /> Electrical</label>
                      <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#D64455] focus:ring-[#D64455]" /> Plumbing</label>
                      <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#D64455] focus:ring-[#D64455]" /> Full MEP</label>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-[#D64455] text-white font-display font-bold uppercase tracking-wider py-3 rounded-lg hover:bg-[#C13D4D] transition-colors mt-4">
                    Send Inquiry
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
