'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, ChevronDown, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <div className="w-full relative z-[1000]">
      {/* Top Utility Bar */}
      <div className="bg-[#5BA4D9] text-white py-[7px] font-display text-[11px] font-semibold uppercase tracking-wider">
        <div className="container flex justify-between items-center h-[32px] px-4">
          {/* Social Links — hidden on mobile */}
          <div className="hidden md:flex items-center space-x-5">
            <a href="https://www.facebook.com/ventario.engineering" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Facebook size={14} fill="currentColor" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Instagram size={14} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Twitter size={14} fill="currentColor" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Linkedin size={14} fill="currentColor" />
            </a>
          </div>

          {/* Utility Links & Contact */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 w-full md:w-auto justify-between md:justify-end">
            <nav className="hidden lg:flex items-center space-x-6 list-none border-r border-white/20 pr-8">
              <li><a href="https://www.linkedin.com/company/ventario-engineering" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
              <li><a href="/blog" className="hover:underline">News</a></li>
              <li><a href="/apprenticeships" className="hover:underline">Apprenticeships</a></li>
              <li><a href="/services" className="hover:underline">MEP Services</a></li>
            </nav>
            <div className="flex items-center gap-4 sm:gap-6 lowercase">
              <a href="tel:+251945512222" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone size={14} fill="currentColor" className="stroke-none" />
                <span className="hidden sm:inline">094 551 2222</span>
              </a>
              <a href="mailto:info@Ventarioengineering.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail size={14} fill="currentColor" className="stroke-none" />
                <span className="hidden sm:inline">info@Ventarioengineering.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="bg-white shadow-sm h-[65px] md:h-[75px] border-b border-gray-100 sticky top-0 z-[1000]">
        <div className="container h-full flex items-center justify-between px-4">
          {/* Logo Branding */}
          <div className="flex-shrink-0 h-full flex items-center">
            <Link href="/" className="block flex items-center">
              <Image
                src="/for images/logo of the company.png"
                alt="Ventario Engineering"
                width={180}
                height={64}
                className="w-auto h-[50px] md:h-[70px] object-contain"
                priority
              />
            </Link>
          </div>

          {/* Primary Nav Menu — Desktop */}
          <nav className="hidden xl:flex items-center h-full">
            <ul className="flex items-center h-full m-0 p-0 list-none">
              <li className="h-full group bg-[#5BA4D9]">
                <Link href="/" className="flex items-center px-5 h-full text-white font-display text-[15px] font-semibold tracking-normal transition-all">
                  Home
                </Link>
              </li>
              <li className="h-full group">
                <a href="/about" className="flex items-center px-5 h-full text-[#1A1A1A] font-display text-[15px] font-semibold tracking-normal hover:text-[#D64455] transition-all">
                  About
                </a>
              </li>
              <li className="h-full group">
                <a href="/services" className="flex items-center px-5 h-full text-[#1A1A1A] font-display text-[15px] font-semibold tracking-normal hover:text-[#D64455] transition-all">
                  Our Services
                </a>
              </li>
              <li className="h-full relative group">
                <a href="/projects" className="flex items-center px-5 h-full text-[#1A1A1A] font-display text-[15px] font-semibold tracking-normal hover:text-[#D64455] transition-all">
                  Projects <ChevronDown size={13} className="ml-1" />
                </a>
                {/* Projects Sub Menu */}
                <div className="absolute top-full left-0 w-[190px] bg-[#5BA4D9] text-white invisible group-hover:visible transition-all py-3 flex flex-col shadow-xl z-[1001]">
                  <a href="/projects?filter=ongoing" className="px-5 py-[10px] hover:bg-[#D64455] transition-colors text-[14px] font-medium">Ongoing</a>
                  <a href="/projects?filter=completed" className="px-5 py-[10px] hover:bg-[#D64455] transition-colors text-[14px] font-medium">Completed</a>
                  <a href="/projects?filter=coming" className="px-5 py-[10px] hover:bg-[#D64455] transition-colors text-[14px] font-medium">Coming Soon</a>
                </div>
              </li>
              <li className="h-full group">
                <a href="/blog" className="flex items-center px-5 h-full text-[#1A1A1A] font-display text-[15px] font-semibold tracking-normal hover:text-[#D64455] transition-all">
                  Blog
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="ml-6 flex items-center">
              <button
                onClick={() => setContactModalOpen(true)}
                className="inline-flex items-center justify-center bg-[#D64455] text-white font-display text-[14px] font-bold px-[28px] py-[11px] rounded-full hover:bg-[#C13D4D] transition-colors duration-300 focus:outline-none"
              >
                Contact us
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 text-[#1A1A1A] min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <div className="flex flex-col gap-[6px]">
                <span className="w-7 h-[2px] bg-current"></span>
                <span className="w-7 h-[2px] bg-current"></span>
                <span className="w-7 h-[2px] bg-current"></span>
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-0 z-[999] bg-white flex flex-col animate-in slide-in-from-right duration-300">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/for images/logo of the company.png"
                alt="Ventario Engineering"
                width={140}
                height={50}
                className="w-auto h-[40px] object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#1A1A1A]"
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="flex flex-col gap-1 list-none m-0 p-0">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Our Services', href: '/services' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 px-3 text-[#1A1A1A] font-display text-[17px] font-semibold border-b border-gray-100 hover:text-[#D64455] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              {/* Projects with sub-menu */}
              <li>
                <button
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  className="w-full flex items-center justify-between py-4 px-3 text-[#1A1A1A] font-display text-[17px] font-semibold border-b border-gray-100 hover:text-[#D64455] transition-colors"
                >
                  Projects
                  <ChevronDown size={18} className={`transition-transform duration-300 ${projectsOpen ? 'rotate-180' : ''}`} />
                </button>
                {projectsOpen && (
                  <div className="bg-gray-50 rounded-lg ml-3 mb-2">
                    {[
                      { label: 'All Projects', href: '/projects' },
                      { label: 'Ongoing', href: '/projects?filter=ongoing' },
                      { label: 'Completed', href: '/projects?filter=completed' },
                      { label: 'Coming Soon', href: '/projects?filter=coming' },
                    ].map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3 px-5 text-[#555] font-display text-[15px] font-medium hover:text-[#D64455] transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>

              {[
                { label: 'Blog', href: '/blog' },
                { label: 'Apprenticeships', href: '/apprenticeships' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 px-3 text-[#1A1A1A] font-display text-[17px] font-semibold border-b border-gray-100 hover:text-[#D64455] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact CTA */}
            <div className="mt-8">
              <button
                onClick={() => { setMobileMenuOpen(false); setContactModalOpen(true); }}
                className="block w-full text-center bg-[#D64455] text-white font-display text-[15px] font-bold py-4 rounded-full hover:bg-[#C13D4D] transition-colors focus:outline-none"
              >
                Contact Us
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 flex flex-col gap-4 text-[14px]">
              <a href="tel:+251945512222" className="flex items-center gap-3 text-[#555] hover:text-[#D64455]">
                <Phone size={16} className="text-[#5BA4D9]" />
                094 551 2222
              </a>
              <a href="mailto:info@Ventarioengineering.com" className="flex items-center gap-3 text-[#555] hover:text-[#D64455]">
                <Mail size={16} className="text-[#5BA4D9]" />
                info@Ventarioengineering.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/ventario.engineering' },
                { Icon: Instagram, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/ventario-engineering' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-[#5BA4D9] hover:text-white transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Contact Form Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#1A1A1A]/70 backdrop-blur-sm cursor-pointer"
            onClick={() => setContactModalOpen(false)}
          ></div>
          <div className="relative bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
            >
              <X size={16} />
            </button>

            {contactSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#60B45A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-2">Message Sent!</h2>
                <p className="text-gray-600 mb-6">Thank you for reaching out. Our team will get back to you shortly.</p>
                <button
                  onClick={() => { setContactSubmitted(false); setContactModalOpen(false); }}
                  className="text-[#D64455] font-semibold hover:underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm mb-6">Send us a message and we&apos;ll get back to you as soon as possible.</p>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1A1A1A] uppercase">Full Name</label>
                    <input required type="text" placeholder="Your name" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA4D9]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1A1A1A] uppercase">Email</label>
                      <input required type="email" placeholder="you@email.com" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA4D9]" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1A1A1A] uppercase">Phone</label>
                      <input type="tel" placeholder="+251..." className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA4D9]" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1A1A1A] uppercase">Subject</label>
                    <select required className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA4D9] cursor-pointer">
                      <option value="">Select a topic...</option>
                      <option value="quote">Request a Quote</option>
                      <option value="services">Service Inquiry</option>
                      <option value="project">Project Discussion</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1A1A1A] uppercase">Message</label>
                    <textarea required rows={3} placeholder="Tell us how we can help..." className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA4D9] resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#D64455] text-white font-display font-bold uppercase tracking-wider py-3 rounded-lg hover:bg-[#C13D4D] transition-colors mt-2">
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;