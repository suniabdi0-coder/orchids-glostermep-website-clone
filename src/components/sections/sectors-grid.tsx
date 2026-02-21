import React from 'react';
import Image from 'next/image';

const sectors = [
  {
    title: 'Commercial',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/Commercial-2-9.jpg',
  },
  {
    title: 'Residential',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/Residential-2-10.jpg',
  },
  {
    title: 'New build',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/Gloster-MEP-Homepage-16-8.jpg',
  },
  {
    title: 'Retail',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/glosterFeb22-147-1-11.jpg',
  },
  {
    title: 'Data centres',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/data_centre_1280_914_99_c1-3-13.jpg',
  },
  {
    title: 'Refurbishment',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/glosterFeb22-156-1-14.jpg',
  },
];

const SectorsGrid = () => {
  return (
    <section className="py-[100px] bg-white">
      <div className="container mb-12 text-center">
        <h2 className="text-[2.625rem] font-bold text-[#004172] mb-6 inline-block relative">
          Our <span className="text-[#DC1E2D]">sectors</span>
        </h2>
        
        {/* Red Dot Separator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] bg-[#004172] w-12"></div>
          <div className="w-8 h-8 rounded-full bg-[#DC1E2D] border-[5px] border-white shadow-[0_0_0_2px_#004172] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
          </div>
          <div className="h-[1px] bg-[#004172] w-12"></div>
        </div>

        <p className="text-[#333333] font-body text-base max-w-2xl mx-auto mb-16 leading-[1.6]">
          We are specialist MEP contractors covering the following sectors:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {sectors.map((sector, index) => (
          <div 
            key={index}
            className="group relative aspect-[1.333] overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={sector.image}
              alt={sector.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-[#004172]/50" />
            
            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-[1.5rem] md:text-[1.75rem] font-bold font-display tracking-tight text-center px-4">
                {sector.title}
              </h3>
            </div>
            
            {/* Bottom Accent - subtle line on hover */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#DC1E2D] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </div>
        ))}
      </div>

      <div className="container mt-16 text-center">
        <p className="text-[#333333] font-body text-base max-w-3xl mx-auto leading-[1.6]">
          We can offer turnkey design and build services across various industries, specialising in mechanical, electrical and public health engineering solutions.
        </p>
      </div>
    </section>
  );
};

export default SectorsGrid;