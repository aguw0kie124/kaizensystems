import { ClipboardCheck, FileText, MessageSquareText, Star } from 'lucide-react';

const solutions = [
  {
    title: 'Capture Demand',
    description:
      'Give new opportunities one clear place to land, from your website to intake and first response.',
    Icon: FileText,
  },
  {
    title: 'Respond Faster',
    description:
      'Reach, qualify, and book inquiries before interest cools or a competitor gets there first.',
    Icon: MessageSquareText,
  },
  {
    title: 'Clean Up Operations',
    description:
      'Collect forms, documents, handoffs, and next steps without repeated chasing from your team.',
    Icon: ClipboardCheck,
  },
  {
    title: 'Earn More Trust',
    description:
      'Ask for reviews and referrals at the right moment, while the client experience is still fresh.',
    Icon: Star,
  },
];

export default function ServicesOverview() {
  return (
    <section data-dark-section className="bg-[#07110b] py-16 text-ink-inverted lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Built around the work local businesses repeat every day
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-inverted-muted">
            Practical automation for the moments that decide growth: response speed, follow-up, operations, and trust.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
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
