import { useState } from 'react';
import { Briefcase, Hammer, Home, MoreHorizontal, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Industry = {
  title: string;
  summary: string;
  exampleServices: string[];
  Icon: LucideIcon;
};

const industries: Industry[] = [
  {
    title: 'Real estate agencies',
    summary:
      'For teams managing buyer, seller, showing, listing, and referral follow-up.',
    exampleServices: ['Lead routing', 'Showing follow-up', 'Listing intake', 'Post-close reviews'],
    Icon: Home,
  },
  {
    title: 'Insurance agencies',
    summary:
      'For agencies handling quote requests, renewals, appointments, and policy check-ins.',
    exampleServices: ['Quote intake', 'Renewal reminders', 'Appointment booking', 'Coverage check-ins'],
    Icon: ShieldCheck,
  },
  {
    title: 'Home services',
    summary:
      'For contractors and service teams responding to estimate requests, bookings, and job reviews.',
    exampleServices: ['Estimate requests', 'Quote follow-up', 'Booking reminders', 'Job-completion reviews'],
    Icon: Hammer,
  },
  {
    title: 'Professional practices',
    summary:
      'For legal, financial, consulting, and advisory firms with repeatable client intake.',
    exampleServices: ['Consultation requests', 'Client intake', 'Document collection', 'Follow-up reminders'],
    Icon: Briefcase,
  },
  {
    title: 'Other local businesses',
    summary:
      'For any owner-led business where missed follow-up, handoffs, or admin work slows growth.',
    exampleServices: ['Lead capture', 'Customer follow-up', 'Internal handoffs', 'Review requests'],
    Icon: MoreHorizontal,
  },
];

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <section id="industries" data-light-section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Made for businesses where speed, trust, and consistency shape revenue
          </h2>
        </div>

        <div className="mt-12">
          <div className="grid border-t border-medium sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry) => {
              const Icon = industry.Icon;
              const isSelected = selectedIndustry.title === industry.title;

              return (
                <button
                  key={industry.title}
                  type="button"
                  onClick={() => setSelectedIndustry(industry)}
                  aria-pressed={isSelected}
                  className={`relative min-h-[132px] border-b border-light px-4 py-5 text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-sage sm:border-r lg:last:border-r-0 ${
                    isSelected ? 'text-ink' : 'text-ink-light hover:text-ink'
                  }`}
                >
                  <Icon
                    size={30}
                    strokeWidth={1.6}
                    className={isSelected ? 'text-accent-sage' : 'text-ink-light'}
                  />
                  <span className="mt-4 block text-base font-semibold leading-tight">
                    {industry.title}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-1 w-full transition-colors duration-200 ${
                      isSelected ? 'bg-accent-sage' : 'bg-transparent'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="grid gap-8 border-b border-light py-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h3 className="text-2xl font-semibold leading-tight text-ink">
                {selectedIndustry.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-ink-light">
                {selectedIndustry.summary}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-ink">Example services</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {selectedIndustry.exampleServices.map((service) => (
                  <div key={service} className="border-t border-light pt-3">
                    <p className="text-sm font-semibold leading-6 text-ink-light">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
