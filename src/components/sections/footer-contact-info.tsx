'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

const FooterContactInfo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particleCount = 80;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
      const span = document.createElement('span');
      span.classList.add('footer-particle');

      const size = 3 + Math.random() * 6;
      const distance = 10 + Math.random() * 15;
      const position = Math.random() * 100;
      const time = 3 + Math.random() * 3;
      const delay = -1 * (Math.random() * 10);

      span.style.setProperty('--dim', `${size}rem`);
      span.style.setProperty('--uplift', `${distance}rem`);
      span.style.setProperty('--pos-x', `${position}%`);
      span.style.setProperty('--dur', `${time}s`);
      span.style.setProperty('--delay', `${delay}s`);

      fragment.appendChild(span);
    }

    container.appendChild(fragment);

    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return (
    <footer className="w-full relative">

      {/* SVG liquid filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="liquid-effect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="liquid"
            />
          </filter>
        </defs>
      </svg>

      {/* Gooey bubble riser — sits ABOVE the footer edge */}
      <div
        className="footer-gooey-riser"
        ref={containerRef}
        style={{ filter: 'url(#liquid-effect)' }}
      />

      {/* ─── Main Footer ─── */}
      <section className="footer-main-bg relative pt-6 pb-6">

        <div className="container mx-auto px-5 md:px-6 max-w-[1240px] relative z-20">

          {/* Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-10 mb-8 text-center sm:text-left">

            {/* Col 1 – Brand */}
            <div className="sm:col-span-1 md:col-span-4 flex flex-col gap-6 items-center sm:items-start">
              <div className="max-w-[200px]">
                <Image
                  src="/for images/logo of the company.png"
                  alt="Ventario Engineering"
                  width={200}
                  height={70}
                  className="object-contain"
                />
              </div>
              <p className="text-[#1A1A1A]/80 text-[14px] font-body leading-[1.9] max-w-[300px]">
                Ventario Engineering is committed to delivering practical engineering solutions
                that meet client needs while adhering to technical standards and best
                practices. Our team combines field experience with strong technical
                knowledge to support projects of varying scale and complexity.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4 items-center mt-2 justify-center sm:justify-start">
                {[
                  { Icon: Facebook, href: 'https://www.facebook.com/ventario.engineering' },
                  { Icon: Instagram, href: '#' },
                  { Icon: Twitter, href: '#' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/company/ventario-engineering' },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-10 h-10 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-[#FF6B6B] hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(255,107,107,0.5)] transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 – Contact */}
            <div className="sm:col-span-1 md:col-span-3">
              <h3 className="text-[#1A1A1A] font-display text-[15px] font-bold uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
                <span className="w-5 h-[2px] bg-[#FF6B6B] inline-block"></span>
                Contact Us
              </h3>
              <ul className="flex flex-col gap-5">
                <li className="flex gap-4 items-start group">
                  <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B6B] transition-colors duration-300">
                    <MapPin className="text-[#1A1A1A] group-hover:text-white w-4 h-4 transition-colors duration-300" />
                  </div>
                  <span className="text-[#1A1A1A]/80 text-[14px] font-body leading-relaxed mt-1">
                    Jigjiga, Somali Region<br />Ethiopia
                  </span>
                </li>
                <li className="flex gap-4 items-center group">
                  <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B6B] transition-colors duration-300">
                    <Phone className="text-[#1A1A1A] group-hover:text-white w-4 h-4 transition-colors duration-300" />
                  </div>
                  <a href="tel:+251945512222" className="text-[#1A1A1A]/80 text-[14px] font-body group-hover:text-[#FF6B6B] font-semibold transition-colors">
                    094 551 2222
                  </a>
                </li>
                <li className="flex gap-4 items-center group">
                  <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B6B] transition-colors duration-300">
                    <Mail className="text-[#1A1A1A] group-hover:text-white w-4 h-4 transition-colors duration-300" />
                  </div>
                  <a href="mailto:info@ventario.com" className="text-[#1A1A1A]/80 text-[14px] font-body group-hover:text-[#FF6B6B] font-semibold transition-colors">
                    info@ventario.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 – Pages */}
            <div className="sm:col-span-1 md:col-span-2">
              <h3 className="text-[#1A1A1A] font-display text-[15px] font-bold uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
                <span className="w-5 h-[2px] bg-[#FF6B6B] inline-block"></span>
                Pages
              </h3>
              <ul className="flex flex-col gap-3">
                {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                      className="text-[#1A1A1A]/80 text-[14px] font-body hover:text-[#FF6B6B] hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2 font-medium"
                    >
                      <span className="text-[#FF6B6B]">»</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 – Legal */}
            <div className="sm:col-span-1 md:col-span-3">
              <h3 className="text-[#1A1A1A] font-display text-[15px] font-bold uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
                <span className="w-5 h-[2px] bg-[#FF6B6B] inline-block"></span>
                Legal
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  ['Privacy Policy', '/privacy-policy'],
                  ['Cookie Policy', '/cookie-policy'],
                  ['Disclaimer', '/disclaimer'],
                  ['Modern Slavery Policy', '/modern-slavery'],
                  ['Qual Env OHS Policy', '/ohs-policy'],
                  ['Sitemap', '/sitemap'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[#1A1A1A]/80 text-[14px] font-body hover:text-[#FF6B6B] hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2 font-medium"
                    >
                      <span className="text-[#FF6B6B]">»</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#1A1A1A]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#1A1A1A]/60 text-[13px] font-body font-medium">
              © {new Date().getFullYear()} Ventario Engineering. All rights reserved.
            </p>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A1A1A] shadow-md hover:bg-[#FF6B6B] hover:text-white transition-all duration-300"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Styles ─── */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .footer-main-bg {
            background: #89CFF0;
          }

          /* The container that sits just above the footer and shoots bubbles up */
          .footer-gooey-riser {
            position: relative;
            width: 120%;
            left: -10%;
            height: 1.5rem;
            background: #89CFF0;
            transform: translateY(0);
            z-index: 0;
            overflow: visible;
            pointer-events: none;
            margin-bottom: -1px;
          }

          .footer-particle {
            position: absolute;
            background: #89CFF0;
            border-radius: 50%;
            top: 50%;
            left: var(--pos-x, 50%);
            width: var(--dim, 5rem);
            height: var(--dim, 5rem);
            transform: translate(-50%, -50%);
            animation: footer-float-up var(--dur, 4s) ease-in infinite;
            animation-delay: var(--delay, 0s);
          }

          @keyframes footer-float-up {
            0% {
              top: 50%;
              transform: translate(-50%, -50%) scale(1);
            }
            100% {
              top: calc(var(--uplift, 12rem) * -1);
              transform: translate(-50%, -50%) scale(0);
            }
          }
        `
      }} />
    </footer>
  );
};

export default FooterContactInfo;