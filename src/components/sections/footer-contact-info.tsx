import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin, Phone, MapPin } from 'lucide-react';

const FooterContactInfo = () => {
  return (
    <footer className="w-full">
      {/* Top Dark Contact Strip */}
      <section className="bg-[#051626] text-white pt-[100px] pb-[120px] relative overflow-hidden">
        {/* Curved top edge simulation if needed, but based on screenshots it's a deep arched section */}
        <div className="container mx-auto px-6 text-center z-10 relative">
          <h2 className="text-white font-display text-[42px] font-bold mb-8 uppercase tracking-tight">
            Get in touch with Gloster MEP.
          </h2>
          
          <div className="red-dot-separator my-8">
            <div className="dot">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 mt-8">
            <p className="font-display text-[16px] m-0">
              Call: <a href="tel:02070896910" className="text-[#DC1E2D] font-bold hover:text-white transition-colors">0207 089 6910</a>
            </p>
            <p className="font-display text-[16px] m-0">
              Email: <a href="mailto:enquiries@glostermep.co.uk" className="text-[#DC1E2D] font-bold hover:text-white transition-colors">enquiries@glostermep.co.uk</a>
            </p>
          </div>
        </div>

        {/* Arched Bottom Curve Decor */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[100px] bg-white rounded-[100%_100%_0_0]"></div>
      </section>

      {/* Main Footer Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Column 1: Logo & Bio */}
            <div className="flex flex-col gap-6">
              <div className="max-w-[180px]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/Gloster-MEP-Ltd-mobile-logo-1.png"
                  alt="Gloster MEP Ltd"
                  width={180}
                  height={64}
                  className="object-contain"
                />
              </div>
              <p className="text-[#333333] text-[15px] leading-relaxed">
                Gloster MEP Ltd. is a dynamic, driven mechanical, electrical and public health contractor delivering innovative engineering solutions across various sectors.
              </p>
            </div>

            {/* Column 2: Contact Information */}
            <div>
              <h3 className="text-[#004172] font-display text-[22px] font-bold mb-8">Contact information</h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-3 items-start">
                  <MapPin className="text-[#DC1E2D] w-5 h-5 flex-shrink-0 mt-1" />
                  <p className="text-[#333333] text-[15px] leading-snug m-0">
                    29 Great Guildford Street<br />
                    London<br />
                    SE1 0ES
                  </p>
                </div>
                
                <div className="border-t border-[#e5e5e5] pt-6">
                  <div className="flex gap-3 items-center">
                    <Phone className="text-[#DC1E2D] w-5 h-5 flex-shrink-0" />
                    <a href="tel:02070896910" className="text-[#333333] text-[15px] hover:text-[#DC1E2D] transition-colors">
                      0207 089 6910
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center pt-2">
                  <a href="#" className="text-[#333333] hover:text-[#DC1E2D] transition-colors"><Facebook size={18} /></a>
                  <a href="#" className="text-[#333333] hover:text-[#DC1E2D] transition-colors"><Instagram size={18} /></a>
                  <a href="#" className="text-[#333333] hover:text-[#DC1E2D] transition-colors"><Twitter size={18} /></a>
                  <a href="#" className="text-[#333333] hover:text-[#DC1E2D] transition-colors"><Linkedin size={18} /></a>
                </div>
              </div>
            </div>

            {/* Column 3: Site Links 1 */}
              <div>
                <h3 className="text-[#004172] font-display text-[22px] font-bold mb-8">Links</h3>
                <ul className="flex flex-col gap-3">
                  <li><a href="/" className="text-[#333333] text-[14px] hover:text-[#DC1E2D] transition-colors">Home</a></li>
                  <li><a href="/about" className="text-[#333333] text-[14px] hover:text-[#DC1E2D] transition-colors">About</a></li>
                  <li><a href="/services" className="text-[#333333] text-[14px] hover:text-[#DC1E2D] transition-colors">Our Services</a></li>
                  <li><a href="/projects" className="text-[#333333] text-[14px] hover:text-[#DC1E2D] transition-colors">Projects</a></li>
                  <li><a href="/blog" className="text-[#333333] text-[14px] hover:text-[#DC1E2D] transition-colors">Blog</a></li>
                  <li><a href="/contact" className="text-[#333333] text-[14px] hover:text-[#DC1E2D] transition-colors">Contact</a></li>
                </ul>
              </div>

            {/* Column 4: Site Links 2 */}
            <div className="pt-0 md:pt-[60px]">
              <ul className="flex flex-col gap-3">
                <li><a href="/contact" className="text-[#333333] text-[14px] hover:text-[#DC1E2D] transition-colors">Contact</a></li>
                <li><a href="#" className="text-[#333333] text-[14px] hover:text-[#DC1E2D] transition-colors">Disclaimer</a></li>
                <li><a href="#" className="text-[#333333] text-[14px] hover:text-[#DC1E2D] transition-colors">Privacy policy</a></li>
                <li><a href="#" className="text-[#333333] text-[14px] hover:text-[#DC1E2D] transition-colors">Cookie policy</a></li>
                <li><a href="#" className="text-[#333333] text-[14px] hover:text-[#DC1E2D] transition-colors">Modern slavery policy</a></li>
                <li><a href="#" className="text-[#333333] text-[14px] hover:text-[#DC1E2D] transition-colors">Qual Env OHS Policy</a></li>
                <li><a href="#" className="text-[#333333] text-[14px] hover:text-[#DC1E2D] transition-colors">Sitemap</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar Details */}
          <div className="mt-20 border-t border-[#e5e5e5] pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/help-for-heroes-6.png"
                alt="In support of Help for Heroes"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deepest shade for site conclusion */}
      <div className="bg-[#051626] py-8 w-full"></div>
    </footer>
  );
};

export default FooterContactInfo;