import Image from "next/image";

const cases = [
  {
    image: "/images/CASE-STUDY-1-IMAGE.jpg",
    title: "Getting Leadership One Set of Numbers They Could Trust",
    body: "A growing professional services firm was closing out its month across spreadsheets pulled from three different systems, with each department reporting slightly different numbers.",
  },
  {
    image: "/images/CASE-STUDY-2-IMAGE.jpg",
    title: "Freeing Up a Full Day a Week of Manual Work",
    body: "A regional distribution company had one employee spending most of each day manually re-entering order and invoice data between systems, with errors slipping through during busy periods.",
  },
  {
    image: "/images/CASE-STUDY-3-IMAGE.jpg",
    title: "Adopting AI Without the Hype",
    body: "A mid-size firm's leadership was under pressure to \"do something with AI,\" but wary of tools that overpromised or didn't fit how the team actually worked.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white px-5 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[900px]">
        <p className="eyebrow mb-4">CASE STUDIES</p>
        <h2 className="section-heading-with-rule mb-7">Turning Challenges Into Success Stories</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.title} className="case-card">
              <div className="relative aspect-[1.6/1] overflow-hidden rounded-sm">
                <Image src={item.image} alt="" fill sizes="(min-width: 768px) 28vw, 100vw" className="object-cover" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a href="#contact">Read More&gt;&gt;</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
