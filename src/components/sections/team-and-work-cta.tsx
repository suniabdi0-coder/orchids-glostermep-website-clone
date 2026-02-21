import React from 'react';
import Image from 'next/image';

/**
 * TeamAndWorkCTA Component
 * 
 * A split-color section (navy left, red right) with a group photo of engineers 
 * overlapping the top, featuring white outlined pill buttons.
 * 
 * Primary Navy: #004172
 * Accent Red: #DC1E2D
 */
const TeamAndWorkCTA = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Group photo overlapping container */}
      <div className="relative z-20 w-full flex justify-center -mb-[120px] px-6">
        <div className="relative w-full max-w-[1240px]">
          {/* Graphic G logo element behind the team photo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
             <svg 
              viewBox="0 0 800 400" 
              className="w-full h-full fill-[#004172]"
              aria-hidden="true"
             >
                <path d="M400,0 C179.086,0 0,179.086 0,400 L0,400 L800,400 L800,400 C800,179.086 620.914,0 400,0 Z" />
             </svg>
          </div>

          <div className="relative w-full flex justify-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/glostermep-team-4.jpg"
              alt="Gloster MEP Leadership Team"
              width={1200}
              height={500}
              className="object-cover w-auto h-auto max-w-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Split CTA Section */}
      <div className="flex flex-col md:flex-row w-full min-h-[500px] pt-[150px]">
        {/* Left Side: Navy */}
        <div className="flex-1 bg-[#004172] flex items-center justify-center py-16 px-8 md:px-12 text-center md:text-left">
          <div className="max-w-[480px] w-full flex flex-col items-center justify-center text-center">
            <h2 className="font-display text-[32px] md:text-[42px] font-bold text-white mb-6 uppercase leading-tight tracking-tight">
              Meet the people who will run your project
            </h2>
            <p className="font-body text-white/90 text-[16px] leading-[1.6] mb-10 max-w-[400px]">
              Our leaders are highly accomplished, friendly and committed to excellence. Most importantly, the right people are there when you need them thanks to the exceptional team we have built.
            </p>
            <a 
              href="/company/leadership-team"
              className="inline-flex items-center justify-center bg-white text-[#004172] hover:bg-white/90 transition-all duration-300 font-display font-bold text-[14px] uppercase tracking-[1px] px-10 py-4 rounded-full"
            >
              Meet our business leaders
            </a>
          </div>
        </div>

        {/* Right Side: Red */}
        <div className="flex-1 bg-[#DC1E2D] flex items-center justify-center py-16 px-8 md:px-12 text-center md:text-left">
          <div className="max-w-[480px] w-full flex flex-col items-center justify-center text-center">
            <h2 className="font-display text-[32px] md:text-[42px] font-bold text-white mb-6 uppercase leading-tight tracking-tight">
              See our work
            </h2>
            <p className="font-body text-white/90 text-[16px] leading-[1.6] mb-10 max-w-[440px]">
              See our projects in action and explore the quality results we achieve each and every time. See our case studies.
            </p>
            <a 
              href="/case-studies"
              className="inline-flex items-center justify-center bg-white text-[#DC1E2D] hover:bg-white/90 transition-all duration-300 font-display font-bold text-[14px] uppercase tracking-[1px] px-10 py-4 rounded-full"
            >
              Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAndWorkCTA;