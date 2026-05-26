import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section data-dark-section className="bg-ink py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-[680px] text-2xl font-semibold leading-tight text-ink-inverted md:text-3xl">
            Build the systems your business needs to grow.
          </h2>
          <Link
            to="/contact"
            className="inline-flex w-fit rounded-sm bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-accent-sage hover:text-white"
          >
            Discuss outcomes
          </Link>
        </div>
      </div>
    </section>
  );
}
