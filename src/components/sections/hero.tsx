import React from 'react';
import Image from 'next/image';

/**
 * Hero component for Gloster MEP.
 * Featuring a pixel-perfect recreation of the architecture curved-bottom navy background,
 * decorative SVG motifs, and branded CTA buttons.
 */
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* 
        Main Hero Navy Background with Architectural Image Overlay 
        The background uses Primary Navy (#004172). 
        The "hero-curve" effect is handled via mask-image and a pseudo-element strategy 
        to match the high-level design's "concave white curve at bottom of navy hero".
      */}
      <div 
        className="relative min-h-[750px] md:min-h-[850px] w-full flex items-center justify-center text-center px-6"
        style={{
          backgroundColor: '#004172',
          backgroundImage: `linear-gradient(rgba(0, 65, 114, 0.7), rgba(0, 65, 114, 0.7)), url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/Gloster-MEP-Homepage-4-1-2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          clipPath: 'ellipse(130% 100% at 50% 0%)'
        }}
      >
        <div className="container relative z-10 -mt-10 max-w-[1200px]">
          {/* Subtle central 'G' icon motif */}
          <div className="flex justify-center mb-8 opacity-40">
             <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/svgs/Group-11-1.svg" 
              alt="Gloster G Motif"
              width={100}
              height={100}
              className="w-[80px] h-[80px] brightness-0 invert"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-white font-display text-[2.5rem] md:text-[4rem] font-extrabold uppercase leading-[1.1] tracking-[-1px]">
              Welcome to<br />
              <strong className="block text-white font-extrabold">Gloster MEP</strong>
            </h1>

            {/* Red Dot Separator with flanking lines */}
            <div className="flex items-center justify-center gap-4 py-8">
              <div className="h-[2px] w-12 md:w-20 bg-white/40"></div>
              <div className="w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div className="h-[2px] w-12 md:w-20 bg-white/40"></div>
            </div>

            {/* Dual Red CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a 
                href="/gmep" 
                className="bg-[#dc1e2d] hover:bg-[#004172] text-white font-display font-bold text-[0.875rem] uppercase tracking-[1px] px-10 py-4 rounded-full transition-all duration-300 min-w-[200px]"
              >
                MEP
              </a>
              <a 
                href="/company" 
                className="bg-[#dc1e2d] hover:bg-[#004172] text-white font-display font-bold text-[0.875rem] uppercase tracking-[1px] px-10 py-4 rounded-full transition-all duration-300 min-w-[200px]"
              >
                Our Company
              </a>
            </div>
          </div>
        </div>

        {/* Floating Background Assets for Pixel Perfection based on Screenshots */}
        <div className="absolute left-10 md:left-20 top-20 md:top-40 opacity-20 pointer-events-none hidden lg:block">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/svgs/Group-11-1.svg" 
            alt=""
            width={300}
            height={300}
            className="w-[200px] h-auto brightness-0 invert"
          />
        </div>
        
        {/* Large G Motif in center/bottom area */}
        <div className="absolute right-[-5%] bottom-[10%] opacity-10 pointer-events-none">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/svgs/Ellipse-1-2.svg" 
            alt=""
            width={600}
            height={600}
            className="w-[400px] md:w-[600px] h-auto"
          />
        </div>
      </div>

      {/* Decorative Red Dot just below the curve transition */}
      <div className="absolute left-1/2 -translate-x-1/2 translate-y-[-50%] z-20 hidden md:block">
        <div className="w-12 h-12 bg-[#dc1e2d] rounded-full border-[6px] border-white shadow-sm flex items-center justify-center">
            {/* The dot itself from the logos/assets references */}
        </div>
      </div>
      
      {/* Spacing for content below */}
      <div className="h-20 bg-white"></div>
    </section>
  );
};

export default Hero;