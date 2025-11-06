import HeroSection from '@/components/HeroSection';
import PortfolioPreview from '@/components/PortfolioPreview';
import ServicesSection from '@/components/ServicesSection';
import AboutUs from '@/components/AboutUs';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioPreview />
      <ServicesSection />
      <AboutUs />
      <ContactSection />
    </>
  );
}
