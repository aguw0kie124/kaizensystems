export default function HowItWorksHome() {
  return (
    <section data-light-section className="bg-[#f6f8fb] py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-ink md:text-4xl">
              How It Works
            </h2>
            <div className="mt-5 h-1 w-16 bg-accent-sage" />
          </div>
          <p className="max-w-[760px] text-lg leading-8 text-ink-light">
            Every system is designed around how your business operates, the tools you already use, and the results you need. The goal is more leads, faster follow-up, smoother operations, and happier clients running in the background.
          </p>
        </div>
      </div>
    </section>
  );
}
