import React from 'react';
import Image from 'next/image';

const CoverageAndVacancies = () => {
  return (
    <div className="bg-white pt-[24px] pb-[60px] md:pb-[100px] font-body text-[#333333]">
      <div className="container mx-auto px-6">
        {/* Areas of Coverage Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 mb-24">
          {/* Circular Overlapping Images Sidebar - Expanded Composition */}
          <div className="relative w-full max-w-[650px] flex justify-center lg:justify-start lg:-ml-6 min-h-[350px] md:min-h-[550px] items-center">

            {/* Background Decorative Orbit Rings */}
            <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-[45%] w-[130%] h-[130%] pointer-events-none opacity-20">
              <div className="w-full h-full border-[1px] border-dashed border-[#5BA4D9] rounded-full animate-[spin_60s_linear_infinite]"></div>
            </div>
            <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-[45%] w-[100%] h-[100%] pointer-events-none opacity-30">
              <div className="w-full h-full border-[2px] border-[#5BA4D9] rounded-full"></div>
            </div>

            {/* Glowing Backdrop Blob for Depth */}
            <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#5BA4D9]/10 blur-3xl rounded-full z-0 pointer-events-none"></div>

            {/* Main Interactive Cluster Container */}
            <div className="relative w-[320px] h-[340px] sm:w-[400px] sm:h-[420px] md:w-[500px] md:h-[520px] z-10 hover:*:z-50 group/cluster">

              {/* 1. Large Primary Focal Circle (Top Left) */}
              <div className="absolute top-[5%] left-[5%] w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[340px] md:h-[340px] rounded-full border-[6px] md:border-[8px] border-white ring-4 ring-[#D64455]/20 overflow-hidden shadow-[0_20px_50px_rgba(214,68,85,0.2)] transition-all duration-700 hover:shadow-[0_25px_60px_rgba(214,68,85,0.4)] hover:-translate-y-2 hover:scale-[1.02] z-20 group">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b22fc997-d51f-4ec7-ba5e-6de54ba85556-glostermep-co-uk/assets/images/Gloster-MEP-Homepage-7-3.jpg"
                  alt="Industrial MEP project"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
              </div>

              {/* Secondary Solid Navy Accent Circle (Repositioned to create layering depth) */}
              <div className="absolute top-[25%] right-[10%] w-[120px] h-[120px] md:w-[180px] md:h-[180px] bg-[#5BA4D9] rounded-full z-10 opacity-80 backdrop-blur-sm transition-transform duration-700 group-hover/cluster:scale-110 group-hover/cluster:-translate-x-4"></div>

              {/* 2. Medium Secondary Circle (Bottom Right) */}
              <div className="absolute bottom-[2%] right-[5%] w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[260px] md:h-[260px] rounded-full border-[4px] md:border-[6px] border-[#5BA4D9] overflow-hidden shadow-[0_15px_40px_rgba(91,164,217,0.3)] transition-all duration-700 hover:-translate-y-2 hover:-translate-x-2 hover:scale-[1.05] z-30 group">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b22fc997-d51f-4ec7-ba5e-6de54ba85556-glostermep-co-uk/assets/images/Gloster-MEP-Homepage-16-8.jpg"
                  alt="Battersea Power Station Project"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-[1.5s] ease-out group-hover:scale-110 filter hover:contrast-110"
                />
              </div>

              {/* 3. Small Accent Circle 1 (Top Right) */}
              <div className="absolute top-[2%] right-[5%] md:right-[-5%] w-[80px] h-[80px] md:w-[130px] md:h-[130px] rounded-full border-[3px] md:border-[4px] border-white overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-3 hover:translate-x-2 hover:scale-[1.08] z-40 group hover:border-[#5BA4D9]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/glosterFeb22-170-1-16.jpg"
                  alt="Maintenance and Aftercare"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
              </div>

              {/* 4. Small Accent Circle 2 (Bottom Left) */}
              <div className="absolute bottom-[10%] left-[-5%] w-[100px] h-[100px] md:w-[160px] md:h-[160px] rounded-full border-[4px] md:border-[5px] border-[#D64455] overflow-hidden shadow-[0_10px_25px_rgba(214,68,85,0.4)] transition-all duration-700 hover:translate-y-2 hover:-translate-x-3 hover:scale-[1.08] z-40 group hover:border-white">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/SpinKreative-Gloster-MEP-ISQ-12-1-15.jpg"
                  alt="MEP Solutions"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-[1.5s] ease-out group-hover:scale-110 filter saturate-150"
                />
              </div>

              {/* 5. Minimal Typography Graphic Circle (Far Right Middle) */}
              <div className="absolute top-[45%] right-[-15%] w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-white border-2 border-[#5BA4D9]/30 shadow-xl flex items-center justify-center transition-all duration-700 hover:rotate-12 hover:scale-[1.15] z-50 cursor-default hidden sm:flex">
                <span className="text-[#004172] font-display font-bold text-[18px] text-center leading-tight">100%<br /><span className="text-[10px] uppercase tracking-wider text-[#D64455]">Coverage</span></span>
              </div>

              {/* Floating Decorative Orbs */}
              <div className="absolute top-[35%] right-[10%] w-4 h-4 bg-[#D64455] rounded-full z-50 shadow-[0_0_15px_rgba(214,68,85,0.6)] animate-pulse"></div>
              <div className="absolute bottom-[25%] left-[10%] w-6 h-6 border-[3px] border-[#5BA4D9] rounded-full z-10 transition-transform hover:scale-150 duration-500"></div>
              <div className="absolute top-[8%] left-[45%] w-3 h-3 bg-[#5BA4D9] rounded-full z-50 shadow-[0_0_10px_rgba(91,164,217,0.8)]"></div>
            </div>
          </div>

          {/* Right Side: Text Content - Elevated Typography and Layout */}
          <div className="w-full lg:w-[45%] lg:pl-10 relative mt-16 lg:mt-0">
            {/* Watermark text */}
            <div className="absolute top-[-80px] left-0 text-[#f2f2f2] text-[60px] md:text-[120px] font-display font-black uppercase tracking-tighter opacity-70 -z-10 pointer-events-none select-none hidden md:block">
              Reach
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#5BA4D9]/10 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-[#D64455] animate-pulse"></span>
                <span className="text-[#004172] font-display font-bold text-[11px] uppercase tracking-widest">Nationwide Reach</span>
              </div>

              <h2 className="text-[#004172] text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-extrabold font-display leading-[1.1] mb-6 tracking-tight">
                Areas of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D64455] to-[#c13040]">coverage</span>
              </h2>

              <div className="flex items-center gap-3 mb-10 opacity-80">
                <div className="h-[2px] bg-gradient-to-r from-[#D64455] to-transparent w-24"></div>
              </div>

              <div className="relative pl-6 border-l-[3px] border-[#5BA4D9]/30 mb-8">
                <p className="text-[1.1rem] leading-[1.8] text-[#555555] font-body">
                  Ventario Engineering maintains a formidable operational presence across <strong className="text-[#004172]">Ethiopia</strong>. Anchored by our strategic headquarters in Jigjiga, our reach extends far beyond.
                </p>
              </div>

              <p className="text-[1rem] leading-[1.7] text-[#666666] font-body mb-10 max-w-[500px]">
                From our central base in the capital, we possess the logistical framework and expert personnel to deploy dedicated, nationwide coverage tailored to our clients&apos; most demanding portfolios.
              </p>

              {/* Location Badges */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-[#f0f0f0] transition-transform hover:-translate-y-1">
                  <div className="w-8 h-8 rounded-full bg-[#5BA4D9]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#5BA4D9]"></div>
                  </div>
                  <span className="font-display font-semibold text-[#004172] text-[13px] uppercase tracking-wide">Jigjiga HQ</span>
                </div>
                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-[#f0f0f0] transition-transform hover:-translate-y-1">
                  <div className="w-8 h-8 rounded-full bg-[#D64455]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#D64455]"></div>
                  </div>
                  <span className="font-display font-semibold text-[#004172] text-[13px] uppercase tracking-wide">Nationwide Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Full Width Team Image Section */}
        <div className="mt-12 md:mt-20 w-full relative h-[200px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group cursor-default">
          <Image
            src="/for images/group image to use.jpeg"
            alt="Ventario Engineering Team"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            className="transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default CoverageAndVacancies;