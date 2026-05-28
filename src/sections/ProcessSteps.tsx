import {
  ArrowDown,
  ArrowRight,
  FileText,
  Megaphone,
  MessageSquareText,
  Star,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type GrowthStage = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const growthStages: GrowthStage[] = [
  {
    title: 'Demand enters',
    description: 'Ads, referrals, search, and website traffic have one clear place to go.',
    Icon: Megaphone,
  },
  {
    title: 'Leads are captured',
    description: 'Focused pages and forms collect the right details and route every inquiry.',
    Icon: FileText,
  },
  {
    title: 'Follow-up converts',
    description: 'Fast responses, reminders, and booking paths move leads toward scheduled work.',
    Icon: MessageSquareText,
  },
  {
    title: 'Results compound',
    description: 'Completed jobs trigger review and referral asks that strengthen future demand.',
    Icon: Star,
  },
];

function StageNode({ title, description, Icon }: GrowthStage) {
  return (
    <div className="min-h-[220px] border border-light bg-[#f6f8fb] p-5">
      <Icon size={30} strokeWidth={1.6} className="text-accent-sage" />
      <h3 className="mt-6 text-xl font-semibold leading-tight text-ink">{title}</h3>
      <p className="mt-3 text-base leading-7 text-ink-light">{description}</p>
    </div>
  );
}

export default function ProcessSteps() {
  return (
    <section data-light-section className="bg-white pt-[112px] pb-16 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <div className="mb-6 h-1 w-16 bg-accent-sage" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-sage">
              How it works
            </p>
            <h1 className="mt-4 max-w-[540px] text-3xl font-semibold leading-tight text-ink md:text-4xl">
              A growth system with direction.
            </h1>
          </div>

          <p className="max-w-[700px] text-lg leading-8 text-ink-light">
            We find where revenue is leaking, then connect lead capture, follow-up,
            booking, reviews, and referrals into one system built around how your
            business already operates.
          </p>
        </div>

        <div className="mt-12 border-t border-medium pt-10">
          <div className="hidden grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-4 lg:grid">
            {growthStages.map((stage, index) => (
              <div key={stage.title} className="contents">
                <StageNode {...stage} />
                {index < growthStages.length - 1 ? (
                  <div
                    className="flex h-full items-center justify-center text-accent-sage"
                    aria-hidden="true"
                  >
                    <ArrowRight size={28} strokeWidth={1.8} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:hidden">
            {growthStages.map((stage, index) => (
              <div key={stage.title}>
                <StageNode {...stage} />
                {index < growthStages.length - 1 ? (
                  <div className="flex justify-center py-3 text-accent-sage" aria-hidden="true">
                    <ArrowDown size={28} strokeWidth={1.8} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 border-y border-light py-6 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-ink">Faster response</p>
            <p className="mt-2 text-sm leading-6 text-ink-light">
              New inquiries are acknowledged before interest cools.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">More booked work</p>
            <p className="mt-2 text-sm leading-6 text-ink-light">
              Follow-up and booking steps keep qualified leads moving.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Stronger reputation</p>
            <p className="mt-2 text-sm leading-6 text-ink-light">
              Completed work becomes reviews, referrals, and local trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
