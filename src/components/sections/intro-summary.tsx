import React from 'react';
import Image from 'next/image';

const IntroSummary = () => {
  return (
    <section className="py-[100px] bg-white relative overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Circular Framed Image */}
          <div className="w-full md:w-5/12 lg:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] flex items-center justify-center">
              {/* Main Circular Mask with Red Border */}
              <div className="absolute inset-0 circle-mask border-[8px] border-[#DC1E2D] z-10 shadow-lg">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/Gloster-MEP-Homepage-7-3.jpg"
                  alt="Gloster MEP Head Office Sign"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative Background Elements from high level design */}
              <div className="absolute -top-6 -left-6 w-full h-full rounded-full border border-[#004172]/10 pointer-events-none"></div>
              
              {/* Red Dot (Target Motif) */}
              <div className="absolute bottom-[10%] right-[3%] w-8 h-8 bg-[#DC1E2D] rounded-full z-20 border-4 border-white shadow-md"></div>
            </div>
          </div>

          {/* Right Side: Descriptive Text */}
          <div className="w-full md:w-7/12 lg:w-1/2">
            <div className="max-w-[540px]">
              <p className="font-body text-[16px] leading-[1.8] text-[#333333] mb-6">
                Gloster MEP Ltd. is a dynamic, driven mechanical, electrical and
                public health contractor, well-known in the industry for
                providing innovative solutions. We have been operating
                successfully for more than 10 years, with an unwavering
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