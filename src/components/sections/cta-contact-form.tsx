"use client";

import React from "react";
import Image from "next/image";

/**
 * CtaContactForm Section
 * A pixel-perfect clone of the Gloster MEP contact section.
 * Features: Arched top/bottom borders, navy gradient background, 
 * watermark logo, and a modern inquiry form.
 */
export default function CtaContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Curved Masks - Top and Bottom White Dividers */}
      <div 
        className="absolute top-0 left-[-25%] w-[150%] h-[120px] bg-white z-10"
        style={{ borderRadius: "0 0 100% 100%" }}
      />
      
      <div className="relative bg-[#004172] pt-[140px] pb-[160px] min-h-[600px] flex items-center">
        {/* Background Gradient / Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#003660] to-[#01518c] opacity-90"
          aria-hidden="true"
        />

        {/* Watermark Logo Container */}
        <div className="absolute left-[-150px] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/svgs/Group-66-9.svg"
            alt="Gloster Watermark"
            width={800}
            height={800}
            priority
          />
        </div>

        <div className="container relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="text-white max-w-lg">
              <h2 className="text-white font-display text-[42px] font-bold leading-tight mb-6">
                Contact us
              </h2>
              <p className="font-body text-lg leading-relaxed opacity-90">
                Send us a message and our project management team will be in touch soon to discuss your requirements.
              </p>
            </div>

            {/* Right Form */}
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="relative group">
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name *"
                      required
                      className="w-full bg-transparent border-b border-white/40 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors font-body"
                    />
                  </div>
                  {/* Last Name */}
                  <div className="relative group">
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name *"
                      required
                      className="w-full bg-transparent border-b border-white/40 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors font-body"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email *"
                      required
                      className="w-full bg-transparent border-b border-white/40 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors font-body"
                    />
                  </div>
                  {/* Telephone */}
                  <div className="relative group">
                    <input
                      type="tel"
                      id="telephone"
                      placeholder="Telephone *"
                      className="w-full bg-transparent border-b border-white/40 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors font-body"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <textarea
                    id="message"
                    rows={1}
                    placeholder="Message"
                    className="w-full bg-transparent border-b border-white/40 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors font-body resize-none min-h-[50px]"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-6 flex justify-end">
                  <button
                    type="submit"
                    className="bg-white text-[#004172] font-display font-bold uppercase tracking-wider text-sm px-10 py-4 rounded-full hover:bg-white/90 transition-all shadow-lg active:scale-95"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Arched Bottom Divider */}
      <div 
        className="absolute bottom-0 left-[-25%] w-[150%] h-[120px] bg-white z-10"
        style={{ borderRadius: "100% 100% 0 0" }}
      />
    </section>
  );
}