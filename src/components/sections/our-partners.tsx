import React from 'react';
import Image from 'next/image';

const partners = [
    { name: "Ethiopian Airlines", logo: "/partners/ethiopian_airlines-removebg-preview (1).png" },
    { name: "Ethio Telecom", logo: "/partners/Ethio_Telecom-removebg-preview.png" },
    { name: "Dashen Bank", logo: "/partners/dashen_bank-removebg-preview.png" },
    { name: "Cigna Healthcare", logo: "/partners/cigna_healthcare-removebg-preview.png" },
    { name: "Amaanah Insurance", logo: "/partners/amaanah_insurance-removebg-preview.png" },
    { name: "Awaash Insurance", logo: "/partners/awaash_insurance-removebg-preview.png" },
];

export default function OurPartners() {
    return (
        <section className="bg-white pt-14 pb-16 mb-20 relative flex flex-col items-center overflow-hidden border-b border-gray-100">
            <div className="text-center mb-10 px-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="h-[2px] w-10 bg-[#5BA4D9]"></div>
                    <p className="text-[#5BA4D9] font-display text-xs font-bold uppercase tracking-[0.3em]">Trusted By</p>
                    <div className="h-[2px] w-10 bg-[#5BA4D9]"></div>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#002846]">Our Partners</h2>
            </div>

            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                {[partners, partners].map((list, listIdx) => (
                    <ul
                        key={listIdx}
                        aria-hidden={listIdx === 1}
                        className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-[infinite-scroll_35s_linear_infinite]"
                    >
                        {list.map((partner, i) => (
                            <li key={i}>
                                <div className="flex flex-col items-center gap-3 group cursor-default">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        width={140}
                                        height={70}
                                        unoptimized
                                        className="object-contain max-h-16 transition-all duration-300 group-hover:scale-110"
                                    />
                                    <span className="font-display text-xs font-semibold text-[#002846]/60 uppercase tracking-widest whitespace-nowrap group-hover:text-[#D64455] transition-colors">
                                        {partner.name}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      ` }} />
        </section>
    );
}
