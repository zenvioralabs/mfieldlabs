import Image from "next/image";

export default function DeliveryModel() {
  return (
    <section id="who-we-are" className="relative bg-white px-5 pt-28 pb-32 sm:px-8 md:px-12 lg:px-16 lg:pt-32 lg:pb-36">
      <div className="mx-auto grid max-w-[1160px] items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow mb-4">WHO WE ARE</p>
          <h2 className="section-heading-with-rule mb-7">A Smarter Delivery Model,<br />Not A Cheaper One</h2>
          <div className="prose-mfield text-ink/80">
            <p>MField Labs runs on an integrated global delivery model. Senior strategy and client leadership are based in the US. Delivery is powered by an experienced team with a global footprint. This isn't outsourcing to cut corners, it's a more efficient way to deliver senior-level work. You get sophisticated capability without paying for the overhead structure of a traditional large firm. The economics are a result of a smarter model, not of the work being worth less.</p>
            <p>MField Labs is a new company, founded in 2026. The people behind it aren't new to this work. 50+ years of combined experience in consulting and technology, across Healthcare, Energy &amp; Infrastructure, Financial Services, and State &amp; Local Government.</p>
          </div>
        </div>
        <div className="relative min-h-[430px]">
          <Image src="/images/WHO-WE-ARE-IMAGE.png" alt="MField Labs leadership" fill sizes="50vw" className="object-contain object-center" />
        </div>
      </div>
    </section>
  );
}
