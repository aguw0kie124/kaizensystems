interface ServiceDetailProps {
  title: string;
  description: string;
}

export default function ServiceDetail({ title, description }: ServiceDetailProps) {
  return (
    <section data-light-section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid gap-5 border-t border-light py-9 md:grid-cols-[0.75fr_1.25fr]">
          <h2 className="text-2xl font-semibold leading-tight text-ink">{title}</h2>
          <p className="max-w-[720px] text-base leading-7 text-ink-light">{description}</p>
        </div>
      </div>
    </section>
  );
}
