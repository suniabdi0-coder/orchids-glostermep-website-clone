import React from 'react';
import Image from 'next/image';

const CoverageAndVacancies = () => {
  return (
    <div className="bg-white py-[100px] font-body text-[#333333]">
      <div className="container mx-auto px-6">
        {/* Areas of Coverage Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 mb-24">
          {/* Left Side: Circular Image Accents */}
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            {/* Main Image Circle */}
            <div className="relative z-20 w-[65%] aspect-square rounded-full overflow-hidden border-[8px] border-[#DC1E2D] shadow-lg">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/Gloster-MEP-Homepage-7-3.jpg"
                alt="Gloster MEP operational presence"
                fill
                className="object-cover"
              />
            </div>

            {/* Navy Solid Circle (Right) */}
            <div className="absolute top-[20%] left-[55%] z-10 w-[45%] h-[45%] rounded-full bg-[#004172]"></div>

            {/* Red Hollow Circle Overlay (Inner right) */}
            <div className="absolute top-[35%] left-[45%] z-30 w-[40%] h-[40%] rounded-full border-[8px] border-[#DC1E2D]"></div>

            {/* Decorative Dots/Smaller circles from brand system */}
            <div className="absolute top-[15%] left-[65%] z-40 w-6 h-6 rounded-full bg-[#DC1E2D]"></div>
            <div className="absolute bottom-[10%] left-[15%] z-40 w-10 h-10 rounded-full border-[3px] border-[#004172]"></div>
            
            {/* Background SVG Curve - using the provided asset or a fallback shape */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/svgs/bluecirclewithtransparentdotleft-8.svg" 
                    alt="" 
                    fill 
                    className="object-contain"
                />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#004172] text-[2.625rem] font-bold font-display leading-[1.2] mb-4">
              Areas of <span className="text-[#DC1E2D]">coverage</span>
            </h2>
            
            <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] bg-[#004172] w-16"></div>
                <div className="w-5 h-5 rounded-full bg-[#DC1E2D] border-[3px] border-white ring-2 ring-[#004172]"></div>
                <div className="h-[1px] bg-[#004172] w-16"></div>
            </div>

            <p className="text-[1rem] leading-[1.6] text-[#333333] max-w-[540px]">
              Gloster MEP has a strong operational presence in the South-East of England, with offices located at London Bridge. From our base in London, we are able to offer nationwide coverage for our clients.
            </p>
          </div>
        </div>

        {/* Work for Us Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-[#f0f0f0]">
          <div className="w-full md:w-3/5">
            <h2 className="text-[#004172] text-[2.2rem] font-bold font-display mb-4">
              Work for <span className="text-[#DC1E2D]">us</span>
            </h2>
            <p className="text-[1rem] leading-[1.6] text-[#333333] max-w-[650px]">
              We have extensive talent in our team, much of which is homegrown thanks to our <span className="text-[#DC1E2D] font-semibold underline decoration-[#DC1E2D]">trainee and apprenticeship programmes</span>. We are committed to nurturing and retaining talent, offering training, growth opportunities and career development.
            </p>
          </div>
          
          <div className="w-full md:w-auto mt-6 md:mt-0">
            <a 
              href="/vacancies" 
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-[#DC1E2D] text-white font-display font-bold text-[0.875rem] tracking-[1px] uppercase rounded-full transition-all duration-300 hover:bg-[#004172] shadow-md hover:shadow-lg"
            >
              SEE OUR CURRENT VACANCIES
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageAndVacancies;