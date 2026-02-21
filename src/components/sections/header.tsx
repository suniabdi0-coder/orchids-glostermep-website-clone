import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full relative z-[1000]">
      {/* Top Utility Bar */}
      <div className="bg-[#dc1e2d] text-white py-[10px] sm:py-[12px] font-display text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 h-auto md:h-[40px] px-4">
          {/* Social Links */}
          <div className="flex items-center space-x-5">
            <a href="https://www.facebook.com/glostermep/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Facebook size={14} fill="currentColor" />
            </a>
            <a href="https://www.instagram.com/gloster_mep/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Instagram size={14} />
            </a>
            <a href="https://twitter.com/gloster_mep" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Twitter size={14} fill="currentColor" />
            </a>
            <a href="https://www.linkedin.com/company/gloster-mep-ltd" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Linkedin size={14} fill="currentColor" />
            </a>
          </div>

          {/* Utility Links & Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            <nav className="hidden lg:flex items-center space-x-6 list-none border-r border-white/20 pr-8">
              <li><a href="/linkedin" className="hover:underline">LinkedIn</a></li>
              <li><a href="/news" className="hover:underline">News</a></li>
              <li><a href="/apprenticeships" className="hover:underline">Apprenticeships</a></li>
              <li><a href="/vacancies" className="hover:underline">Vacancies</a></li>
            </nav>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lowercase">
              <a href="tel:+442070896910" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone size={14} fill="currentColor" className="stroke-none" />
                <span>0207 089 6910</span>
              </a>
              <a href="mailto:enquiries@glostermep.co.uk" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail size={14} fill="currentColor" className="stroke-none" />
                <span>enquiries@glostermep.co.uk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="bg-white shadow-sm h-[90px] border-b border-gray-100 sticky top-0">
        <div className="container h-full flex items-center justify-between px-4">
          {/* Logo Branding */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d4d998e5-27b8-478f-a6f1-0f7bb614d9a0-glostermep-co-uk/assets/images/Gloster-MEP-Ltd-mobile-logo-1.png" 
                alt="Gloster MEP Ltd" 
                width={180} 
                height={64} 
                className="w-[150px] sm:w-[180px] h-auto"
                priority
              />
            </a>
          </div>

          {/* Primary Nav Menu */}
          <nav className="hidden xl:flex items-center h-full">
            <ul className="flex items-center h-full m-0 p-0 list-none">
              <li className="h-full group">
                <a href="/" className="flex items-center px-4 h-full text-brand-navy font-display text-[15px] font-bold uppercase tracking-tight hover:text-brand-red border-b-[3px] border-brand-navy bg-brand-navy/5 transition-all">
                  Home
                </a>
              </li>
              <li className="h-full relative group">
                <a href="/company" className="flex items-center px-4 h-full text-brand-navy font-display text-[15px] font-bold uppercase tracking-tight hover:text-brand-red transition-all">
                  Company <ChevronDown size={14} className="ml-1" />
                </a>
                {/* Mega/Sub Menu Placeholder Style */}
                <div className="absolute top-full left-0 w-[240px] bg-brand-navy text-white invisible group-hover:visible transition-all py-4 flex flex-col shadow-xl">
                    <a href="/company/our-aims-and-ethos" className="px-6 py-3 hover:bg-brand-red transition-colors text-sm font-medium">Our aims and ethos</a>
                    <a href="/company/leadership-team" className="px-6 py-3 hover:bg-brand-red transition-colors text-sm font-medium">Leadership team</a>
                    <a href="/company/innovation" className="px-6 py-3 hover:bg-brand-red transition-colors text-sm font-medium">Innovation</a>
                </div>
              </li>
              <li className="h-full group">
                <a href="/gmep" className="flex items-center px-4 h-full text-brand-navy font-display text-[15px] font-bold uppercase tracking-tight hover:text-brand-red transition-all">
                  GMEP
                </a>
              </li>
              <li className="h-full group">
                <a href="/bim" className="flex items-center px-4 h-full text-brand-navy font-display text-[15px] font-bold uppercase tracking-tight hover:text-brand-red transition-all">
                  BIM
                </a>
              </li>
              <li className="h-full group">
                <a href="/maintenance-aftercare" className="flex items-center px-4 h-full text-brand-navy font-display text-[15px] font-bold uppercase tracking-tight hover:text-brand-red transition-all text-center">
                  Maintenance & Aftercare
                </a>
              </li>
              <li className="h-full group">
                <a href="/case-studies" className="flex items-center px-4 h-full text-brand-navy font-display text-[15px] font-bold uppercase tracking-tight hover:text-brand-red transition-all">
                  Case Studies
                </a>
              </li>
              <li className="h-full group">
                <a href="/data-centres" className="flex items-center px-4 h-full text-brand-navy font-display text-[15px] font-bold uppercase tracking-tight hover:text-brand-red transition-all">
                  Data centres
                </a>
              </li>
            </ul>
            
            {/* CTA Button */}
            <div className="ml-6">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center bg-brand-red text-white font-display text-[14px] font-bold uppercase tracking-[1px] px-[25px] py-[14px] rounded-full hover:bg-brand-navy transition-all duration-300 shadow-[0_4px_10px_rgba(220,30,45,0.2)]"
              >
                Contact us
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle (Small devices) */}
          <button className="xl:hidden p-2 text-brand-navy" aria-label="Toggle Menu">
            <div className="flex flex-col gap-[6px]">
              <span className="w-8 h-[2px] bg-current"></span>
              <span className="w-8 h-[2px] bg-current"></span>
              <span className="w-8 h-[2px] bg-current"></span>
            </div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;