import HeroSection from '@/sections/HeroSection';
import ServicesOverview from '@/sections/ServicesOverview';
import Industries from '@/sections/Industries';
import HowItWorksHome from '@/sections/HowItWorksHome';
import CTASection from '@/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <Industries />
      <HowItWorksHome />
      <CTASection />
    </>
  );
}
