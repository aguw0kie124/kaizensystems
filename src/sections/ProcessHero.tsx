export default function ProcessHero() {
  return (
    <section data-light-section className="bg-white pt-[72px]">
      <div className="mx-auto grid max-w-[1200px] gap-6 px-6 py-10 md:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:py-12">
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
          We identify where growth is getting stuck, then build systems around your existing workflow to capture more leads, convert them faster, and compound results through reviews and referrals.
        </p>
      </div>
    </section>
  );
}
