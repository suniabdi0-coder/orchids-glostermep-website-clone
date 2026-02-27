import React from 'react';
import Image from 'next/image';

const IntroSummary = () => {
  return (
    <section className="py-[50px] md:py-[100px] bg-white relative overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Circular Framed Image */}
          <div className="w-full md:w-5/12 lg:w-1/2 flex justify-center md:justify-end relative items-center">
            <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] flex items-center justify-center">

              {/* Decorative Background Wireframe Circles */}
              <div className="absolute top-[-40px] left-[-40px] w-full h-full rounded-full border-[1px] border-[#e5e5e5] pointer-events-none z-0"></div>
              <div className="absolute bottom-[-30px] right-[-30px] w-[80%] h-[80%] rounded-full border-[1px] border-[#e5e5e5] pointer-events-none z-0"></div>
              <div className="absolute top-[20px] left-[-60px] w-4 h-4 rounded-full border-[2px] border-[#5BA4D9] pointer-events-none z-0"></div>

              {/* Main Circular Mask with Thicker Red Border */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-[5px] border-[#D64455] z-10 bg-white">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/Gloster-MEP-Homepage-7-3.jpg"
                  alt="Ventario Engineering Head Office Sign"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Red Accent Dot - Overlapping bottom-right edge */}
              <div className="absolute bottom-[5%] right-[5%] w-[45px] h-[45px] bg-[#D64455] rounded-full z-20 translate-x-1/2 translate-y-1/2 shadow-sm"></div>
            </div>
          </div>

          {/* Right Side: Descriptive Text */}
          <div className="w-full md:w-7/12 lg:w-1/2 flex items-center">
            <div className="max-w-[540px]">
              <p className="font-body text-[15px] leading-[1.6] text-[#555555] m-0">
                Ventario Engineering is a <span className="text-[#2A7AB5] font-semibold">dynamic</span>, driven mechanical, electrical and
                Plumbing contractor, well-known in the industry for
                providing <span className="text-[#2A7AB5] font-semibold">innovative</span> solutions. We have been operating
                successfully for more than <span className="text-[#2A7AB5] font-semibold">10 years</span>, with an unwavering
                commitment to clients and a track record of achieving
                excellence. Through the quality of our work and our drive to
                grow and regenerate our industry, we have built a reputation as
                a leading contractor in the MEP space.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Graphic Elements - subtle accents mentioned in design */}
      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#f5f5f5] rounded-full -z-10 opacity-50"></div>
    </section>
  );
};

export default IntroSummary;