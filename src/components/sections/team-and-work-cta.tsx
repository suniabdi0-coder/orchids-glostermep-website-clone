import Image from 'next/image';
import Link from 'next/link';

/**
 * TeamAndWorkCTA Component
 * 
 * A split-color section (navy left, red right) with a group photo of engineers 
 * overlapping the top, featuring white outlined pill buttons.
 * 
 * Primary Navy: #004172
 * Accent Red: #DC1E2D
 */
const TeamAndWorkCTA = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Split CTA Section */}
      <div className="flex flex-col md:flex-row w-full min-h-[400px]">
        {/* Left Side: Navy */}
        <div className="flex-1 bg-[#5BA4D9] flex items-center justify-center py-16 px-8 md:px-12 text-center md:text-left">
          <div className="max-w-[480px] w-full flex flex-col items-center justify-center text-center">
            <h2 className="font-display text-[32px] md:text-[42px] font-bold text-white mb-6 uppercase leading-tight tracking-tight">
              Meet the people who will run your project
            </h2>
            <p className="font-body text-white/90 text-[16px] leading-[1.6] mb-10 max-w-[400px]">
              Our leaders are highly accomplished, friendly and committed to excellence. Most importantly, the right people are there when you need them thanks to the exceptional team we have built.
            </p>
            <Link
              href="/about#team"
              className="inline-flex items-center justify-center bg-white text-[#2A7AB5] hover:bg-white/90 transition-all duration-300 font-display font-bold text-[14px] uppercase tracking-[1px] px-10 py-4 rounded-full"
            >
              Meet our business leaders
            </Link>
          </div>
        </div>

        {/* Right Side: Red */}
        <div className="flex-1 bg-[#D64455] flex items-center justify-center py-16 px-8 md:px-12 text-center md:text-left">
          <div className="max-w-[480px] w-full flex flex-col items-center justify-center text-center">
            <h2 className="font-display text-[32px] md:text-[42px] font-bold text-white mb-6 uppercase leading-tight tracking-tight">
              See our work
            </h2>
            <p className="font-body text-white/90 text-[16px] leading-[1.6] mb-10 max-w-[440px]">
              See our projects in action and explore the quality results we achieve each and every time. See our case studies.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center bg-white text-[#D64455] hover:bg-white/90 transition-all duration-300 font-display font-bold text-[14px] uppercase tracking-[1px] px-10 py-4 rounded-full"
            >
              Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAndWorkCTA;