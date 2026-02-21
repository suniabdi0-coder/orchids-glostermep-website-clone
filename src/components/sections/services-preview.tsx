import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'MEP',
    description: 'Learn about our mechanical, electrical and public health solutions, plus our cutting-edge design capabilities.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/SpinKreative-Gloster-MEP-ISQ-12-1-15.jpg',
    link: 'https://www.glostermep.co.uk/gmep',
    type: 'image'
  },
  {
    title: 'Maintenance and aftercare',
    description: 'If you need us post completion, our engineers are on hand 24/7. We also offer tailored maintenance contracts.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/glosterFeb22-170-1-16.jpg',
    link: 'https://www.glostermep.co.uk/maintenance-aftercare',
    type: 'image'
  },
  {
    title: 'BIM',
    description: 'Take a look at how we use BIM software to help you understand what your development will look like.',
    image: 'https://www.glostermep.co.uk/wp-content/uploads/2022/07/Gloster-MEP-Ltd-mobile-logo.png',
    link: 'https://www.glostermep.co.uk/bim',
    type: 'logo'
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-[100px] bg-white overflow-hidden">
      <div className="container px-6 mx-auto max-w-[1240px]">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-[42px] font-bold text-[#004172] font-display leading-[1.2]">
            How can we bring <span className="text-[#dc1e2d]">your project to life?</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-[1px] bg-[#004172] w-[60px]" />
            <div className="w-[24px] h-[24px] rounded-full bg-[#dc1e2d] border-[4px] border-white ring-2 ring-[#004172] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <div className="h-[1px] bg-[#004172] w-[60px]" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col relative group">
              {/* Background/Top Half */}
              <div className="relative h-[400px] w-full overflow-hidden">
                {service.type === 'image' ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-[#f5f5f5] flex items-center justify-center p-12">
                     <div className="relative w-full h-full max-w-[250px]">
                        {/* The logo replacement for BIM card */}
                        <Image 
                          src="https://www.glostermep.co.uk/wp-content/uploads/2022/07/Gloster-MEP-Ltd-mobile-logo.png"
                          alt="Gloster Logo"
                          fill
                          className="object-contain"
                        />
                     </div>
                  </div>
                )}
              </div>

              {/* Text Card - Overlapping half */}
              <div className="relative -mt-[80px] px-4 pb-8 z-10 w-full">
                <div className="bg-white p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex flex-col items-center h-full min-h-[320px]">
                  <h3 className="text-[24px] font-bold text-[#004172] font-display mb-4 uppercase leading-tight min-h-[58px] flex items-center">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-[#333333] font-body leading-[1.6] mb-8 flex-grow">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="inline-flex items-center justify-center bg-[#dc1e2d] hover:bg-[#004172] text-white text-[14px] font-bold uppercase tracking-[1px] px-8 py-3 rounded-full transition-colors duration-300"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 max-w-[800px] mx-auto px-4">
          <p className="text-[14px] font-body text-[#333333] leading-[1.6]">
            Gloster MEP is driven by outstanding results, innovative solutions and strong partnerships. Learn more about{' '}
            <a href="https://www.glostermep.co.uk/company" className="text-[#dc1e2d] font-bold hover:underline">
              our company
            </a>{' '}
            and our forward-thinking approach, which benefits our clients in a multitude of ways.
          </p>
        </div>
      </div>
    </section>
  );
}