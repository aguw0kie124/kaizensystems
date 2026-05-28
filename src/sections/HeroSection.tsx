import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const heroItems = [
  {
    businessType: 'real estate agency',
    image:
      'https://images.unsplash.com/photo-1652878530627-cc6f063e3947?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Real estate paperwork and office materials on a desk',
  },
  {
    businessType: 'insurance agency',
    image:
      'https://images.unsplash.com/photo-1758518729841-308509f69a7f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Professionals reviewing charts together in an office',
  },
  {
    businessType: 'home services company',
    image:
      'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Home services technician working with equipment',
  },
  {
    businessType: 'professional practice',
    image:
      'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Professional meeting with materials on a table',
  },
  {
    businessType: 'local business',
    image:
      'https://images.unsplash.com/photo-1687422808248-f807f4ea2a2e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Local business owner using a phone at work',
  },
];

export default function HeroSection() {
  const [businessIndex, setBusinessIndex] = useState(0);
  const [typedBusiness, setTypedBusiness] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const activeItem = heroItems[businessIndex];

  useEffect(() => {
    const businessType = heroItems[businessIndex].businessType;
    const wordIsTyped = typedBusiness === businessType;
    const wordIsCleared = typedBusiness.length === 0;
    const delay = wordIsTyped && !isDeleting ? 1200 : isDeleting ? 34 : 64;

    const timeout = window.setTimeout(() => {
      if (wordIsTyped && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (wordIsCleared && isDeleting) {
        setIsDeleting(false);
        setBusinessIndex((currentIndex) => (currentIndex + 1) % heroItems.length);
        return;
      }

      const nextLength = typedBusiness.length + (isDeleting ? -1 : 1);
      setTypedBusiness(businessType.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [businessIndex, isDeleting, typedBusiness]);

  return (
    <section data-light-section className="bg-white pt-[72px]">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-14 md:px-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:py-20">
        <div>
          <div className="mb-8 h-1 w-20 bg-accent-sage" />
          <h1 className="max-w-[600px] text-3xl font-semibold leading-[1.08] text-ink md:text-4xl lg:text-[46px]">
            Grow and scale your{' '}
            <span className="inline-flex min-w-[14ch] items-baseline text-accent-sage sm:min-w-[17ch]">
              <span>{typedBusiness}</span>
              <span className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.12em] animate-pulse bg-accent-sage" aria-hidden="true" />
            </span>{' '}
            with growth systems.
          </h1>
          <p className="mt-6 max-w-[560px] text-base leading-7 text-ink-light md:text-lg md:leading-8">
            <span className="font-semibold text-accent-sage">AI-powered growth automation</span> custom-built to capture more leads, convert them faster, and turn completed work into reviews and referrals that help the next job close easier.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-ink-inverted transition-colors duration-200 hover:bg-accent-sage"
            >
              Discuss growth
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-medium px-6 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent-sage hover:text-ink"
            >
              View systems
            </Link>
          </div>
        </div>

        <div className="relative min-h-[340px] overflow-hidden border border-light bg-[#f6f8fb] md:min-h-[440px]">
          {heroItems.map((item, index) => {
            const isActive = activeItem.businessType === item.businessType;

            return (
              <img
                key={item.businessType}
                src={item.image}
                alt={isActive ? item.imageAlt : ''}
                aria-hidden={!isActive}
                loading={index === 0 ? 'eager' : 'lazy'}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
