import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionHeading";

export function FoundersNote() {
  return (
    <section id="studio" className="border-t border-ink/10 py-24 md:py-36">
      <Container>
        <FadeIn>
          <SectionLabel className="mb-6 block">The Studio</SectionLabel>
        </FadeIn>

        <div className="mt-12 grid grid-cols-12 gap-8 md:mt-16 md:gap-12">
          {/* Photo - full width on mobile, spans 5 cols on desktop */}
          <FadeIn delay={0.1} className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
              <Image
                src="/images/team/founders.jpg"
                alt="Ranjeet and Shreenu Mukherjee — Founders of Atelier Shreenu"
                fill
                className="object-cover grayscale-[15%] transition-all duration-700 hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              {/* Subtle vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/5 to-transparent" />
            </div>
          </FadeIn>

          {/* Text content */}
          <div className="col-span-12 md:col-span-7">
            <FadeIn delay={0.15}>
              <h2 className="font-serif text-[40px] leading-tight md:text-[56px]">
                Ranjeet &amp;<br />
                <span className="italic">Shreenu</span> Mukherjee.
              </h2>
            </FadeIn>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-ink/75 md:mt-10 md:text-[17px]">
              <FadeIn delay={0.2}>
                <p>
                  Ranjeet attended The Doon School before graduating from the Faculty of
                  Architecture, CEPT University, Ahmedabad. He then spent five years as a
                  citizen of Auroville — where he met Shreenu, an interior designer trained
                  at L.S. Raheja School of Architecture, Mumbai.
                </p>
              </FadeIn>

              <FadeIn delay={0.25}>
                <p>
                  In 2012, they embarked upon a journey to explore ecologically sensitive,
                  contextually appropriate design and construction techniques. Their practice
                  is an evolving process — one that grows organically and adapts to each task
                  with complete flexibility.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-ink/65">
                  The overall resultant continuum is a{" "}
                  <span className="italic text-ink">&lsquo;Project&rsquo;</span> in itself —
                  not static or set in any particular form. Vrindavan is a reference to the
                  Divine abode. Therefore — The Vrindavan Project.
                </p>
              </FadeIn>

              <FadeIn delay={0.35}>
                <div className="text-micro mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-8 text-ink/55">
                  <span>Council of Architecture · CA/2009/44099</span>
                  <span>Indian Institute of Architects · F26195</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}