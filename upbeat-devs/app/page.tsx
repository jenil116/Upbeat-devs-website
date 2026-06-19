import Hero from "@/components/sections/hero";
import ServicesPreview from "@/components/sections/services-preview";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Stats from "@/components/sections/stats";
import PortfolioPreview from "@/components/sections/portfolio-preview";
import Process from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import BlogPreview from "@/components/sections/blog-preview";
import CTABanner from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Stats />
      <PortfolioPreview />
      <Process />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
