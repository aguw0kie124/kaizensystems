import ServicesHero from '@/sections/ServicesHero';
import ServiceDetail from '@/sections/ServiceDetail';
import CTABanner from '@/sections/CTABanner';

const serviceData = [
  {
    title: 'Landing Page & Lead Capture',
    description:
      'A clean, optimized, conversion-focused page that represents your business professionally and feeds directly into your automation system.',
  },
  {
    title: 'Lead & Follow-Up System',
    description:
      'Every inquiry is responded to, qualified, and booked automatically, helping create more bookings, shorter response times, and higher conversion.',
  },
  {
    title: 'Client Onboarding System',
    description:
      'New clients onboard themselves. No chasing, no paperwork headaches, and fewer manual steps for your team.',
  },
  {
    title: 'Reputation & Referral System',
    description:
      'After a transaction closes or a service is completed, the system sends a timely email or SMS asking the client to leave a Google review or referral. More reviews and word-of-mouth help build reputation and local visibility over time.',
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
