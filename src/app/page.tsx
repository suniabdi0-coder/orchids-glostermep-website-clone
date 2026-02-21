import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import IntroSummary from "@/components/sections/intro-summary";
import FeaturesGrid from "@/components/sections/features-grid";
import SectorsGrid from "@/components/sections/sectors-grid";
import ServicesPreview from "@/components/sections/services-preview";
import CtaContactForm from "@/components/sections/cta-contact-form";
import CoverageAndVacancies from "@/components/sections/coverage-and-vacancies";
import TeamAndWorkCta from "@/components/sections/team-and-work-cta";
import CaseStudiesCircles from "@/components/sections/case-studies-circles";
import FooterContactInfo from "@/components/sections/footer-contact-info";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <IntroSummary />
      <FeaturesGrid />
      <SectorsGrid />
      <ServicesPreview />
      <CtaContactForm />
      <CoverageAndVacancies />
      <TeamAndWorkCta />
      <CaseStudiesCircles />
      <FooterContactInfo />
    </div>
  );
}
