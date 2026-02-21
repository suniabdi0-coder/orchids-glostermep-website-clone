import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/svgs/Award-winning-constructors-3.svg",
    title: "Award-winning constructors.",
    description: (
      <>
        We are proud to have obtained multiple <span className="text-brand-red font-semibold">awards</span> and high-profile recognitions across the industry. Our titles include UK Project of the Year, Contractor of the Year and winners of the Construction News Awards.
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
        We have robust <span className="text-brand-red font-semibold">CSR</span> and <span className="text-brand-red font-semibold">environmental</span> policies in place to fulfil our industry commitments. We truly believe in the power of innovation and the need to continually <span className="text-brand-red font-semibold">regenerate the construction industry</span>.
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
    <section className="py-24 bg-white font-body overflow-hidden">
      <div className="container px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[2.625rem] font-display font-bold text-brand-navy leading-tight mb-4">
            What makes <span className="text-brand-red">Gloster MEP</span> different?
          </h2>
          <div className="red-dot-separator">
            <div className="dot"></div>
          </div>
        </div>

        {/* First Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 text-center flex flex-col items-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-2 border-b-4 border-brand-navy"
            >
              <div className="w-24 h-24 mb-8 relative flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[#333333] text-base leading-[1.6] m-0">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row: 2 Centered Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {features.slice(3, 5).map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 text-center flex flex-col items-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-2 border-b-4 border-brand-navy max-w-sm"
            >
              <div className="w-24 h-24 mb-8 relative flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[#333333] text-base leading-[1.6] m-0">
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