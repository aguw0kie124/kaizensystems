import { FileText, MessageSquareText, Star } from 'lucide-react';

const solutions = [
  {
    title: 'Capture Leads',
    description:
      'Give interested prospects one focused place to act, from landing page to form submission and first response.',
    Icon: FileText,
  },
  {
    title: 'Convert Faster',
    description:
      'Respond, follow up, and book inquiries before interest cools or a competitor gets there first.',
    Icon: MessageSquareText,
  },
  {
    title: 'Compound Growth',
    description:
      'Turn completed jobs into Google reviews and referrals that strengthen trust and bring in the next opportunity.',
    Icon: Star,
  },
];

export default function ServicesOverview() {
  return (
    <section data-dark-section className="bg-[#07110b] py-16 text-ink-inverted lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Built to help your business grow and scale
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-inverted-muted">
            Systems made for the moments that decide revenue.
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-3">
          {solutions.map(({ title, description, Icon }) => (
            <div key={title}>
              <Icon size={36} strokeWidth={1.6} className="text-accent-sage" />
              <h3 className="mt-8 text-2xl font-semibold leading-tight text-accent-sage">
                {title}
              </h3>
              <p className="mt-4 text-base leading-7 text-ink-inverted-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
