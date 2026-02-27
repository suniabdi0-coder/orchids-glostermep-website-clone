import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * ServiceCTA Component
 * 
 * Clones the "How can we bring your project to life?" section featuring:
 * - Large imagery for MEP and Maintenance.
 * - Logo branding for BIM.
 * - Floating cards with service descriptions.
 * - Red pill-shaped "Learn More" buttons.
 */

const ServiceCTA: React.FC = () => {
  type ServiceItem = {
    title: string;
    description: string;
    image?: string;
    logo?: string;
    link: string;
    type: string;
  };

  const services: ServiceItem[] = [
    {
      title: "MEP",
      description: "Learn about our mechanical, electrical and Plumbing solutions, plus our cutting-edge design capabilities.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b22fc997-d51f-4ec7-ba5e-6de54ba85556-glostermep-co-uk/assets/images/SpinKreative-Gloster-MEP-ISQ-12-1-15.jpg",
      link: "/gmep",
      type: "image"
    },
    {
      title: "Maintenance and aftercare",
      description: "If you need us post completion, our engineers are on hand 24/7. We also offer tailored maintenance contracts.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b22fc997-d51f-4ec7-ba5e-6de54ba85556-glostermep-co-uk/assets/images/glosterFeb22-170-1-16.jpg",
      link: "/maintenance-aftercare",
      type: "image"
    },
    {
      title: "BIM",
      description: "Take a look at how we use BIM software to help you understand what your development will look like.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b22fc997-d51f-4ec7-ba5e-6de54ba85556-glostermep-co-uk/assets/images/data_centre_1280_914_99_c1-3-13.jpg",
      link: "/bim",
      type: "image"
    }
  ];

  return (
    <section className="relative z-20 bg-white pt-[60px] md:pt-[100px] pb-[24px] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-[60px]">
          <h2 className="font-display text-[28px] md:text-[42px] font-extrabold text-[#1A1A1A] mb-4">
            How can we bring <span className="text-[#D64455]">your project to life?</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-[60px] bg-[#5BA4D9]"></div>
            <div className="w-[30px] h-[30px] border-2 border-[#D64455] rounded-full flex items-center justify-center">
              <div className="w-[12px] h-[12px] bg-[#D64455] rounded-full"></div>
            </div>
            <div className="h-[1px] w-[60px] bg-[#5BA4D9]"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col relative group">
              {/* Media Container */}
              <div className="h-[280px] md:h-[430px] w-full relative overflow-hidden bg-[#f7f7f7]">
                {service.type === 'image' ? (
                  <Image
                    src={service.image!}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-12 bg-white">
                    <div className="relative w-full h-40">
                      <Image
                        src={service.logo!}
                        alt="Ventario Engineering Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    {/* Visual Flourish for BIM card */}
                    <div className="mt-8 flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#5BA4D9]"></span>
                      <span className="w-2 h-2 rounded-full bg-[#D64455]"></span>
                      <span className="w-2 h-2 rounded-full bg-[#5BA4D9]"></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Card Content */}
              <div className="mx-auto -mt-[80px] md:-mt-[120px] mb-8 md:mb-12 w-[90%] md:w-[85%] bg-white p-6 md:p-8 pt-8 md:pt-10 shadow-[0px_20px_40px_rgba(91,164,217,0.12)] rounded-[8px] flex flex-col items-center text-center z-10 min-h-[240px] md:min-h-[300px] transition-transform duration-300 hover:-translate-y-2">
                <h3 className="font-display text-[20px] md:text-[24px] font-extrabold text-[#1A1A1A] mb-4 md:mb-6 min-h-[48px] md:min-h-[64px] flex items-center">
                  {service.title}
                </h3>
                <p className="font-body text-[#666666] text-[16px] leading-[1.6] mb-8 flex-grow">
                  {service.description}
                </p>
                <Link
                  href="/blog"
                  className="bg-[#D64455] text-white font-display text-[13px] font-bold py-3 px-8 rounded-full uppercase tracking-widest transition-colors duration-300 hover:bg-[#C13D4D]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ServiceCTA;