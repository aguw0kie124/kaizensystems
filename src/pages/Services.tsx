import ServicesHero from '@/sections/ServicesHero';
import ServiceDetail from '@/sections/ServiceDetail';
import CTABanner from '@/sections/CTABanner';

const serviceData = [
  {
    title: 'Landing Page & Lead Capture',
    description:
      'A clean, optimized, conversion-focused page that represents your business professionally and turns traffic into leads, feeding every inquiry directly into your follow-up system.',
  },
  {
    title: 'Lead & Follow-Up System',
    description:
      'Every inquiry gets an immediate response, timed follow-up, and a clear path to book before interest goes cold.',
  },
  {
    title: 'Reputation & Referral System',
    description:
      'After a job, appointment, or engagement is completed, the system asks for a Google review or referral while the experience is still fresh.',
  },
];

export default function Services() {
  return (
    <>
      <ServicesHero />
      {serviceData.map((service) => (
        <ServiceDetail key={service.title} {...service} />
      ))}
      <CTABanner />
    </>
  );
}
