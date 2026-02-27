import React from 'react';
import Image from 'next/image';

const sectors = [
  {
    title: 'Mechanical Engineering',
    image: '/generated-sectors/mechanical_engineering_1771846079394.png',
  },
  {
    title: 'Electrical Engineering',
    image: '/generated-sectors/electrical_engineering_1771846235056.webp',
  },
  {
    title: 'Plumbing & Water Supply Systems',
    image: '/generated-sectors/plumbing_systems_1771846325239.jpg',
  },
  {
    title: 'HVAC Systems',
    image: '/generated-sectors/HVAC Systems.png',
  },
  {
    title: 'Firefighting Systems',
    image: '/generated-sectors/firefighting_systems_v2_1771846525092.png',
  },
  {
    title: 'Water Treatment & RO Systems',
    image: '/generated-sectors/water_treatment_v2_1771846557142.webp',
  },
];

const SectorsGrid = () => {
  return (
    <section className="py-[60px] md:py-[100px] bg-white relative overflow-hidden">
      {/* Decorative Circle — Left Side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block" aria-hidden="true">
        {/* Large arc - SOLID FILLED */}
        <div className="absolute -left-[380px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#5BA4D9]/15"></div>
        {/* Small outlined circle */}
        <div className="absolute left-[8px] top-1/2 translate-y-[60px] w-[36px] h-[36px] rounded-full border-[2px] border-[#5BA4D9]/30"></div>
        {/* Solid dot */}
        <div className="absolute left-[18px] top-1/2 translate-y-[200px] w-[48px] h-[48px] rounded-full bg-[#5BA4D9]"></div>
      </div>

      {/* Decorative Circle — Right Side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block" aria-hidden="true">
        {/* Large arc - SOLID FILLED */}
        <div className="absolute -right-[380px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#5BA4D9]/15"></div>
        {/* Small outlined circle */}
        <div className="absolute right-[8px] top-1/2 -translate-y-[60px] w-[36px] h-[36px] rounded-full border-[2px] border-[#5BA4D9]/30"></div>
        {/* Solid dot */}
        <div className="absolute right-[18px] top-1/2 -translate-y-[200px] w-[48px] h-[48px] rounded-full bg-[#5BA4D9]"></div>
      </div>
      <div className="container mb-12 text-center">
        <h2 className="text-[1.75rem] md:text-[2.625rem] font-bold text-[#1A1A1A] mb-6 inline-block relative">
          Our <span className="text-[#D64455]">sectors</span>
        </h2>

        {/* Baby Blue Dot Separator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] bg-[#5BA4D9] w-12"></div>
          <div className="w-8 h-8 rounded-full bg-[#D64455] border-[5px] border-white shadow-[0_0_0_2px_#5BA4D9] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
          </div>
          <div className="h-[1px] bg-[#5BA4D9] w-12"></div>
        </div>

        <p className="text-[#333333] font-body text-base max-w-2xl mx-auto mb-16 leading-[1.6]">
          We are specialist MEP contractors covering the following sectors:
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="group relative aspect-square rounded-[2rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-[0_20px_50px_rgba(0,65,114,0.3)] transition-all duration-700 hover:-translate-y-3"
          >
            {/* Background Image */}
            <Image
              src={sector.image}
              alt={sector.title}
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#002846]/95 via-[#004172]/40 to-transparent transition-colors duration-700 group-hover:via-[#004172]/60" />

            {/* Additional hover tint (Red Brand Color) */}
            <div className="absolute inset-0 bg-[#D64455]/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100 mix-blend-multiply" />

            {/* Elevated Text Treatment */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 p-8 transition-transform duration-700 group-hover:-translate-y-4">
              <div className="w-12 h-[3px] bg-[#D64455] mb-5 scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100"></div>
              <h3 className="text-white text-[1.5rem] md:text-[1.8rem] font-bold font-display tracking-tight text-center leading-tight drop-shadow-md">
                {sector.title}
              </h3>
            </div>

            {/* Decorative Glass Outline */}
            <div className="absolute inset-0 border-[3px] border-white/10 rounded-[2rem] pointer-events-none transition-colors duration-700 group-hover:border-white/30"></div>
          </div>
        ))}
      </div>


    </section>
  );
};

export default SectorsGrid;