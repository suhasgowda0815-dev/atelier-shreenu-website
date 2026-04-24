import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-bone md:py-36">
      {/* Background image with heavy dark overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
        />
        {/* Multi-layer gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/40 to-ink/50" />
        <div className="absolute inset-0 bg-ink/20" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left column: pitch + details */}
          <div className="col-span-12 md:col-span-5">
            <FadeIn>
              <SectionLabel className="mb-6 block text-terracotta">
                Start here
              </SectionLabel>
              <h2 className="font-serif text-[52px] leading-[1.05] md:text-[80px]">
                Begin a
                <br />
                <span className="italic text-sandstone">conversation.</span>
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-bone/70">
                Tell us about your project — its site, its nature, and the kind of life you
                want to live within it. We reply to all enquiries personally.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-14 space-y-5 border-t border-bone/15 pt-10">
              <div>
                <div className="text-micro text-bone/50">Studio</div>
                <div className="mt-2 font-serif text-xl italic">
                  {site.contact.address.line1}
                </div>
                <div className="text-sm text-bone/75">
                  {site.contact.address.line2}, {site.contact.address.city} —{" "}
                  {site.contact.address.postal}
                </div>
              </div>

              <div>
                <div className="text-micro text-bone/50">Contact</div>
                <div className="mt-2 text-sm">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="block hover:text-terracotta"
                  >
                    {site.contact.email}
                  </a>
                  <a
                    href={`tel:+${site.contact.phoneIntl}`}
                    className="mt-1 block hover:text-terracotta"
                  >
                    {site.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-5 pt-2 text-micro">
                <a
                  href={site.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-bone/40 pb-0.5 hover:border-bone"
                >
                  Maps
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-bone/40 pb-0.5 hover:border-bone"
                >
                  Instagram
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-bone/40 pb-0.5 hover:border-bone"
                >
                  LinkedIn
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right column: form */}
          <FadeIn delay={0.1} className="col-span-12 md:col-span-7">
            <form
              name="enquiry"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-8"
            >
              {/* Netlify form fields */}
              <input type="hidden" name="form-name" value="enquiry" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <FormField label="Name" name="name" placeholder="Your full name" autoComplete="name" required />
              <FormField
                label="Email"
                name="email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                required
              />
              <FormField
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                autoComplete="tel"
              />
              <FormField
                label="Project Location"
                name="location"
                placeholder="City, state"
                autoComplete="address-level2"
              />

              <div>
                <label
                  htmlFor="projectType"
                  className="text-micro block text-bone/55"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="mt-3 w-full border-b border-bone/25 bg-transparent py-3 text-[15px] outline-none focus:border-bone"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-ink">
                    Select a type
                  </option>
                  <option value="architecture" className="bg-ink">Architecture</option>
                  <option value="interior" className="bg-ink">Interior Design</option>
                  <option value="both" className="bg-ink">Architecture + Interiors</option>
                  <option value="turnkey" className="bg-ink">Turnkey</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-micro block text-bone/55">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project — location, brief, timeline..."
                  className="mt-3 w-full border-b border-bone/25 bg-transparent py-3 text-[15px] placeholder:text-bone/40 outline-none focus:border-bone"
                />
              </div>

              <button
                type="submit"
                className="text-micro mt-4 inline-flex items-center border border-bone/60 px-8 py-4 transition-colors hover:bg-bone hover:text-ink"
              >
                Send enquiry
              </button>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-micro block text-bone/55">
        {label}
        {required && <span className="ml-1 text-terracotta">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="mt-3 w-full border-b border-bone/25 bg-transparent py-3 text-[15px] placeholder:text-bone/40 outline-none focus:border-bone"
      />
    </div>
  );
}