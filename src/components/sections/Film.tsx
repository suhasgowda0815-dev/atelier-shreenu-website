import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { site } from "@/content/site";

export function Film() {
  return (
    <section className="bg-ink py-24 text-bone md:py-32">
      <Container>
        <FadeIn className="mb-12 text-center">
          <span className="text-micro text-bone/60">Film</span>
          <h2 className="mt-4 font-serif text-4xl italic md:text-6xl">
            The practice, in motion.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative aspect-video w-full overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${site.filmVideoId}`}
              title="The Vrindavan Project — Studio film"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
