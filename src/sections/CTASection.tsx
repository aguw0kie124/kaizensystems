import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section data-light-section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="border-t border-medium pt-10">
          <h2 className="max-w-[760px] text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Build the systems your business needs to grow and scale.
          </h2>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-ink-inverted transition-colors duration-200 hover:bg-accent-sage"
            >
              Discuss growth
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
