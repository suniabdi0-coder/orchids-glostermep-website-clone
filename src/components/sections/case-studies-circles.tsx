import React from 'react';
import Image from 'next/image';

const CaseStudiesCircles = () => {
  const projects = [
    { name: 'Fulton Road', href: '#' },
    { name: 'Hays Galleria', href: '#' },
    { name: 'Schroders', href: '#' },
    { name: 'Daiwa Capital Bank', href: '#' },
  ];

  const backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/case-studies-background-1-18.jpg";

  return (
    <section className="relative w-full py-[100px] overflow-hidden bg-white">
      {/* Content Container */}
      <div className="container relative z-10 px-4 mx-auto max-w-[1240px]">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-[42px] font-bold text-[#004172] font-display mb-4">
            Case studies
          </h2>
          
          {/* Red Dot Separator */}
          <div className="flex items-center justify-center w-full gap-4">
            <div className="h-[1px] bg-[#004172] w-24"></div>
            <div className="relative flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-[3px] border-[#004172] bg-white flex items-center justify-center shadow-sm">
                <div className="w-[18px] h-[18px] bg-[#dc1e2d] rounded-full border-[3px] border-white"></div>
              </div>
            </div>
            <div className="h-[1px] bg-[#004172] w-24"></div>
          </div>
        </div>

        {/* Circles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              <a 
                href={project.href} 
                className="relative block w-[260px] h-[260px] transition-transform duration-300 transform hover:scale-105"
              >
                {/* Outer Red Ring */}
                <div className="absolute inset-0 rounded-full border-[8px] border-[#dc1e2d] z-30"></div>
                
                {/* Inner White Ring / Border Space */}
                <div className="absolute inset-[8px] rounded-full border-[8px] border-white z-20"></div>
                
                {/* Main Blue Circle */}
                <div className="absolute inset-[16px] rounded-full bg-[#004172] flex items-center justify-center text-center p-6 z-10 shadow-inner overflow-hidden">
                  {/* Subtle Graphic Pattern Overlay (Faded 'G' logo visual reference) */}
                  <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                    <div className="w-32 h-32 border-[20px] border-white rounded-full"></div>
                  </div>
                  
                  <h3 className="relative z-20 text-white font-display font-bold text-[20px] leading-tight">
                    {project.name}
                  </h3>
                </div>
              </a>
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
    </section>
  );
};

export default CaseStudiesCircles;