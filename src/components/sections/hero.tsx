import Image from 'next/image';
import Link from 'next/link';

/**
 * Hero component for Ventario Engineering.
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
        className="relative min-h-[500px] md:min-h-[850px] w-full flex flex-col items-center justify-center text-center px-4 md:px-6"
        style={{
          backgroundColor: '#5BA4D9',
          backgroundImage: `linear-gradient(rgba(42, 122, 181, 0.80), rgba(42, 122, 181, 0.80)), url('/for images/for hero section.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container relative z-10 -mt-[40px] md:-mt-[100px] max-w-[1200px] flex flex-col items-center justify-center">
          {/* Subtle central 'G' icon motif - Positioned centrally behind the heading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15] pointer-events-none z-[-1] mt-[-20px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/svgs/Group-11-1.svg"
              alt="Ventario Motif"
              width={350}
              height={350}
              className="w-[200px] md:w-[350px] h-auto brightness-0 invert"
            />
          </div>

          <div className="w-full relative z-10">
            <h1 className="text-white font-display text-[1.75rem] sm:text-[2.5rem] md:text-[4.5rem] font-medium leading-[1.1] tracking-wide mb-2 uppercase">
              Welcome to
            </h1>
            <h2 className="text-white font-display text-[2.25rem] sm:text-[3.5rem] md:text-[6rem] font-[800] leading-[1] tracking-tight uppercase">
              Ventario
            </h2>

            {/* Separator icon matching exact design */}
            <div className="flex items-center justify-center gap-0 py-6 md:py-10">
              <div className="h-[2px] w-[60px] sm:w-[100px] md:w-[220px] bg-white"></div>
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mx-3 md:mx-4 relative">
                <div className="absolute inset-0 rounded-full border-2 border-white"></div>
                <span className="text-white font-display font-bold text-[14px] md:text-[16px] relative z-10">V</span>
              </div>
              <div className="h-[2px] w-[60px] sm:w-[100px] md:w-[220px] bg-white"></div>
            </div>

            {/* Dual Red CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link
                href="/services"
                className="bg-[#D64455] hover:bg-white hover:text-[#D64455] text-white font-display font-bold text-[13px] md:text-[15px] uppercase tracking-wide px-8 md:px-14 py-[12px] md:py-[14px] rounded-full transition-all duration-300 min-w-[180px] md:min-w-[220px]"
              >
                MEP
              </Link>
              <Link
                href="/about"
                className="bg-[#D64455] hover:bg-white hover:text-[#D64455] text-white font-display font-bold text-[13px] md:text-[15px] uppercase tracking-wide px-8 md:px-14 py-[12px] md:py-[14px] rounded-full transition-all duration-300 min-w-[180px] md:min-w-[220px]"
              >
                Our Company
              </Link>
            </div>
          </div>
        </div>
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

      {/* Deep Concave Bottom SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none transform translate-y-[2px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[130px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,120 L1200,120 L1200,0 C900,120 300,120 0,0 Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* Decorative Red Dot - full solid circle sitting above the curve, right side */}
      <div className="absolute right-[19%] z-30 pointer-events-none hidden md:block" style={{ bottom: '80px' }}>
        <div className="w-[60px] h-[60px] bg-[#D64455] rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;