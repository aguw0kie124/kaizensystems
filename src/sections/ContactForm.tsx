import { useState } from 'react';

const industries = [
  'Real estate',
  'Insurance',
  'Home services',
  'Professional practice',
  'More / other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full h-11 border border-medium bg-white px-4 text-base text-ink placeholder:text-ink-muted focus:border-accent-sage focus:outline-none';

  return (
    <section data-light-section className="bg-[#f6f8fb] pt-[120px] pb-16 lg:pb-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-8 h-1 w-20 bg-accent-sage" />
            <h2 className="text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Share where work is getting stuck.
            </h2>
            <p className="mt-5 max-w-[460px] text-base leading-7 text-ink-light">
              We will map the workflow and identify where automation can create the biggest impact.
            </p>
            <p className="mt-5 max-w-[460px] text-base leading-7 text-ink-light">
              Leads, follow-up, onboarding, reviews, referrals, operations, or traffic.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8">
            {submitted ? (
              <div>
                <h3 className="text-2xl font-semibold text-ink">Message sent.</h3>
                <p className="mt-3 text-base leading-7 text-ink-light">
                  Thanks. We will review the process you shared and follow up with next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink">Name</label>
                    <input type="text" required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink">Business</label>
                    <input type="text" required placeholder="Business name" className={inputClass} />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink">Email</label>
                    <input type="email" required placeholder="you@business.com" className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink">Phone</label>
                    <input type="tel" placeholder="Phone number" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-ink">Industry</label>
                  <select required className={inputClass}>
                    <option value="">Select an industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-ink">What should improve?</label>
                  <textarea
                    rows={5}
                    placeholder="Example: lead follow-up, booking, reviews, onboarding, traffic..."
                    className={`${inputClass} h-auto resize-none py-3`}
                  />
                </div>

                <button
                  type="submit"
                  className="h-12 w-full rounded-sm bg-ink text-sm font-semibold text-ink-inverted transition-colors duration-200 hover:bg-accent-sage"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
