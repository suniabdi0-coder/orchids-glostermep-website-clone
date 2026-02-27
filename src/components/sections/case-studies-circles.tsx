'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Calendar, Building2 } from 'lucide-react';

interface CaseStudy {
  name: string;
  image: string;
  location: string;
  year: string;
  sector: string;
  status: 'ongoing' | 'completed';
  description: string;
}

const projects: CaseStudy[] = [
  {
    name: 'Jigjiga University',
    image: '/for images/Jijiga-Universityd.webp',
    location: 'Jigjiga, Ethiopia',
    year: '2023',
    sector: 'Education',
    status: 'completed',
    description: 'Complete MEP installation for university campus including lecture halls, laboratories, and administrative buildings with advanced HVAC and electrical systems.',
  },
  {
    name: 'Duule Hotel',
    image: '/for images/duule hotel.jpg',
    location: 'Jigjiga, Ethiopia',
    year: '2024',
    sector: 'Hospitality',
    status: 'completed',
    description: 'Luxury hotel MEP systems including HVAC, plumbing, electrical distribution, and specialized kitchen ventilation systems.',
  },
  {
    name: 'Sky Hotel',
    image: '/for images/sky hotel.jpeg',
    location: 'Jigjiga, Ethiopia',
    year: '2025',
    sector: 'Hospitality',
    status: 'ongoing',
    description: 'Modern hotel development with comprehensive MEP solutions including smart building management and energy-efficient systems.',
  },
  {
    name: 'Shabeelay Resort',
    image: '/for images/shabelay resort.jpg',
    location: 'Jigjiga, Ethiopia',
    year: '2024',
    sector: 'Hospitality',
    status: 'completed',
    description: 'Resort facility with complex MEP requirements including pool systems, spa ventilation, and comprehensive utilities infrastructure.',
  },
];

const statusColors = {
  ongoing: 'bg-amber-500',
  completed: 'bg-green-500',
};

const statusLabels = {
  ongoing: 'Ongoing',
  completed: 'Completed',
};

const CaseStudiesCircles = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/case-studies-background-1-18.jpg";

  return (
    <section className="relative w-full py-[60px] md:py-[100px] overflow-hidden bg-white">
      {/* Content Container */}
      <div className="container relative z-10 px-4 mx-auto max-w-[1240px]">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-[28px] md:text-[42px] font-bold text-[#1A1A1A] font-display mb-4">
            Case studies
          </h2>

          {/* Red Dot Separator */}
          <div className="flex items-center justify-center w-full gap-4">
            <div className="h-[1px] bg-[#5BA4D9] w-24"></div>
            <div className="relative flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-[3px] border-[#5BA4D9] bg-white flex items-center justify-center shadow-sm">
                <div className="w-[18px] h-[18px] bg-[#D64455] rounded-full border-[3px] border-white"></div>
              </div>
            </div>
            <div className="h-[1px] bg-[#5BA4D9] w-24"></div>
          </div>
        </div>

        {/* Circles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              <button
                onClick={() => setSelectedProject(project)}
                className="relative block w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px] transition-transform duration-300 transform hover:scale-105 cursor-pointer focus:outline-none"
              >
                {/* Outer Red Ring */}
                <div className="absolute inset-0 rounded-full border-[8px] border-[#D64455] z-30"></div>

                {/* Inner White Ring / Border Space */}
                <div className="absolute inset-[8px] rounded-full border-[8px] border-white z-20"></div>

                {/* Main Blue Circle containing the Image */}
                <div className="absolute inset-[16px] rounded-full bg-[#004172] flex items-center justify-center text-center p-6 z-10 shadow-inner overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700 mix-blend-luminosity hover:mix-blend-normal"
                  />

                  {/* Subtle Dark Gradient for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002846]/90 via-[#004172]/50 to-transparent"></div>

                  <h3 className="relative z-20 text-white font-display font-bold text-[20px] leading-tight drop-shadow-md">
                    {project.name}
                  </h3>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Background Image with Light Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
        <Image
          src={backgroundImage}
          alt="Case studies background"
          fill
          className="object-cover object-center grayscale mix-blend-multiply"
          priority
        />
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#1A1A1A]/70 backdrop-blur-sm cursor-pointer transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
            {/* Image side */}
            <div className="w-full md:w-5/12 relative h-48 md:h-auto min-h-[200px] md:min-h-[400px]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
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
                {selectedProject.name}
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
                <a
                  href="/projects"
                  className="block w-full text-center bg-[#5BA4D9] text-white font-display font-bold uppercase tracking-wider py-3.5 rounded-full hover:bg-[#4A93C8] transition-colors shadow-md"
                >
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudiesCircles;