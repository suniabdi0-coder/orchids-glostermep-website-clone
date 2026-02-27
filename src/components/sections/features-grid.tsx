import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/svgs/Award-winning-constructors-3.svg",
    title: "Award-winning constructors.",
    description: (
      <>
        We are proud to have obtained multiple <span className="text-brand-red font-semibold">awards</span> and high-profile recognitions across the industry. Our titles include Ethiopia Project of the Year, Contractor of the Year and winners of the Construction News Awards.
      </>
    ),
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/svgs/Technologically-advanced-4.svg",
    title: "Technologically advanced.",
    description: (
      <>
        We have cutting-edge design and project modelling capabilities, with teams dedicated entirely to BIM and CAD. We can bring your project to life before your eyes, as well as streamlining processes and offering cost savings.
      </>
    ),
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/svgs/Community-players-5.svg",
    title: "Community players.",
    description: (
      <>
        We owe so much to our community and running our business provides an opportunity to give back, bring people together and support those around us. Learn more about our <span className="text-brand-red font-semibold">community values</span> and initiatives, including support for our chosen charity Help for Heroes.
      </>
    ),
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/svgs/Conscientious-contractors-6.svg",
    title: "Conscientious contractors.",
    description: (
      <>
        We have robust <span className="text-brand-green font-semibold">CSR</span> and <span className="text-brand-green font-semibold">environmental</span> policies in place to fulfil our industry commitments. We truly believe in the power of innovation and the need to continually <span className="text-brand-green font-semibold">regenerate the construction industry</span>.
      </>
    ),
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/svgs/client-focused-7.svg",
    title: "Client focused.",
    description: (
      <>
        We champion our clients in all that we do, delivering solutions for every project, of any complexity. Our systems and solutions ensure we can partner closely with clients and give simple yet detailed insights into project progress. We manage all projects from inception to completion, ensuring client needs are met at every touchpoint.
      </>
    ),
  },
];

const FeaturesGrid = () => {
  return (
    <section className="pt-[60px] md:pt-[140px] pb-[60px] md:pb-[100px] bg-white font-body overflow-hidden relative">
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

      <div className="container px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[1.75rem] md:text-[2.625rem] font-display font-bold text-[#1A1A1A] leading-tight mb-4 tracking-tight">
            What makes <span className="text-[#D64455]">Ventario Engineering</span> different?
          </h2>

          {/* Custom Horizontal Divider with 'G' icon matching target */}
          <div className="flex items-center justify-center gap-0 py-4 max-w-[400px] mx-auto">
            <div className="h-[1px] flex-grow bg-[#5BA4D9] opacity-30"></div>
            <div className="w-10 h-10 flex items-center justify-center mx-4 relative bg-[#D64455] rounded-full shadow-sm z-10">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/svgs/Group-11-1.svg"
                alt="G motif"
                width={16}
                height={16}
                className="brightness-0 invert w-[16px] h-auto"
              />
            </div>
            <div className="h-[1px] flex-grow bg-[#5BA4D9] opacity-30"></div>
          </div>
        </div>

        {/* First Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 relative z-10">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-10 text-center flex flex-col items-center shadow-[0_15px_40px_rgba(0,32,77,0.05)] rounded-md transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-[110px] h-[110px] mb-6 relative flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={110}
                  height={110}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[1.35rem] font-display font-bold text-[#1A1A1A] mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[#555555] text-[15px] leading-[1.65] m-0">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row: 2 Centered Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8 relative z-10">
          {features.slice(3, 5).map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-10 text-center flex flex-col items-center shadow-[0_15px_40px_rgba(0,32,77,0.05)] rounded-md transition-transform duration-300 hover:-translate-y-2 max-w-sm w-full"
            >
              <div className="w-[110px] h-[110px] mb-6 relative flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={110}
                  height={110}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[1.35rem] font-display font-bold text-[#1A1A1A] mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[#555555] text-[15px] leading-[1.65] m-0">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;