import { useState, type FormEvent } from "react";
import heroBg from "../assets/hero.webp";

const FAQS = [
  { q: "What is your case size?", a: "Each case contains 36 bottles (12 fl oz each), weighing approximately 11.5 lbs." },
  { q: "What is the minimum order?", a: "4 cases per order. Mixed flavors are welcome." },
  { q: "What is the lead time?", a: "We ship within 7 to 10 business days of a confirmed order. Refrigerated freight is required." },
  { q: "Do you offer net terms?", a: "Yes. After the first three orders, we offer Net 30 terms to qualifying retailers." },
  { q: "Where do you ship?", a: "We ship nationwide via refrigerated freight. Local NJ, NY, and PA delivery is available with our own trucks." },
  { q: "What is the shelf life?", a: "45 to 60 days from production, kept refrigerated at all times." },
  { q: "Can we get samples first?", a: "Yes. Reach out via the trade inquiry form or call us directly to arrange samples before committing." },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-cream font-sans overflow-x-hidden">
      <main>

        {/* ── HERO (Charcoal) ── */}
        <section className="relative flex h-dvh w-full items-center justify-center bg-charcoal pt-20 lg:pt-28">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-linear-to-b from-charcoal/80 via-charcoal/50 to-charcoal/90"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <span className="font-serif italic font-bold text-[1rem] lg:text-[1.2rem] text-[#E87A00] mb-3 lg:mb-4 block">
              Get in touch
            </span>
            <h1 className="font-sans font-black uppercase tracking-tighter text-[clamp(3.5rem,7vw,6rem)] text-white leading-[0.95]">
              Say hello.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[1rem] lg:text-[1.1rem] font-normal leading-[1.6] text-white/75">
              Stock us, partner with us, or just tell us you tried the mango. We read every note.
            </p>
          </div>

          {/* Wave down to cream */}
          <div className="absolute bottom-0 left-0 w-full z-20 leading-none pointer-events-none translate-y-px">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="relative block w-full h-10 lg:h-14 fill-cream text-cream stroke-current stroke-[2px]" 
            >
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
                transform="scale(-1, 1) translate(-1200, 0)" 
              />
            </svg>
          </div>
        </section>
        
        {/* ── CONTACT + FORM (Cream) ── */}
        <section className="relative z-10 bg-cream py-20 lg:py-28 -mt-px">
          <div className="mx-auto grid max-w-6xl gap-12 lg:gap-20 px-6 sm:px-10 lg:grid-cols-2 items-end">
            
            {/* Left — contact info */}
            <div className="flex flex-col justify-center">
              <span className="font-serif italic font-bold text-[1rem] lg:text-[1.2rem] text-[#207B64] mb-2 lg:mb-3 block">
                Direct Lines
              </span>
              <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(2.2rem,4vw,3.5rem)] text-charcoal leading-[0.95] mb-8 lg:mb-10">
                Reach us <br />
                <span className="text-gray-mid">directly.</span>
              </h2>

              <div className="flex flex-col gap-4">
                {[
                  {
                    label: "Phone",
                    value: "(732) 599-5299",
                    href: "tel:+17325995299",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Email",
                    value: "hello@goldensilkbeverages.com",
                    href: "mailto:hello@goldensilkbeverages.com",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    ),
                  },
                  {
                    label: "Location",
                    value: "New Jersey, USA",
                    href: undefined,
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                        <path d="M12 22s-8-7.5-8-13a8 8 0 1 1 16 0c0 5.5-8 13-8 13Z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                    ),
                  },
                  {
                    label: "Instagram",
                    value: "@goldensilkbeverages",
                    href: "https://instagram.com/goldensilkbeverages",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                      </svg>
                    ),
                  },
                ].map((c) => {
                  const Inner = (
                    <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm border border-black/5">
                      <span className="text-[#207B64] shrink-0">{c.icon}</span>
                      <div>
                        <div className="font-sans font-bold text-[0.65rem] uppercase tracking-widest text-charcoal/50 mb-0.5">
                          {c.label}
                        </div>
                        <div className="font-sans font-semibold text-[0.95rem] text-charcoal">{c.value}</div>
                      </div>
                    </div>
                  );
                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="block transition-opacity hover:opacity-75"
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div key={c.label}>{Inner}</div>
                  );
                })}
              </div>
            </div>

            {/* Right — form */}
            <div className="rounded-[1.5rem] bg-white border border-black/5 p-8 lg:p-10 drop-shadow-xl">
              {sent ? (
                <div className="py-16 text-center">
                  <h3 className="font-sans font-black uppercase tracking-tighter text-[clamp(2rem,4vw,3rem)] text-[#207B64]">Thank you.</h3>
                  <p className="mt-3 text-[1rem] font-medium text-gray-mid">
                    We'll be in touch within 1 to 2 business days.
                  </p>
                </div>
              ) : (
                <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                  <span className="font-serif italic font-bold text-[1rem] lg:text-[1.1rem] text-[#E87A00] block">
                    Send a message
                  </span>
                  {[
                    { label: "Name", name: "name", type: "text" },
                    { label: "Email", name: "email", type: "email" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block font-sans font-bold text-[0.65rem] uppercase tracking-widest text-charcoal/60 mb-1">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        required
                        className="w-full border-b-2 border-charcoal/20 bg-transparent py-2 text-[0.95rem] font-medium text-charcoal outline-none transition-colors focus:border-[#E87A00]"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block font-sans font-bold text-[0.65rem] uppercase tracking-widest text-charcoal/60 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full resize-none border-b-2 border-charcoal/20 bg-transparent py-2 text-[0.95rem] font-medium text-charcoal outline-none transition-colors focus:border-[#E87A00]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-charcoal py-3.5 font-sans font-black uppercase tracking-widest text-[0.85rem] text-white shadow-lg transition-all hover:bg-charcoal/85 hover:-translate-y-0.5 hover:shadow-xl mt-1"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Wave down to charcoal */}
          <div className="absolute bottom-0 left-0 w-full z-20 leading-none translate-y-0.5 pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 lg:h-14 fill-charcoal">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" transform="scale(-1, 1) translate(-1200, 0)" />
            </svg>
          </div>
        </section>

        {/* ── FAQ (Charcoal) ── */}
        <section id="faq" className="relative flex h-dvh w-full flex-col items-center justify-center bg-charcoal py-20 lg:py-28">
          
          <div className="relative z-10 w-full mx-auto max-w-4xl 2xl:max-w-5xl px-6 sm:px-10">
            <div className="text-center mb-[clamp(1rem,4vh,3rem)]">
              <span className="font-serif italic font-bold text-[clamp(1rem,2vh,1.2rem)] 2xl:text-[1.3rem] text-[#E87A00] mb-[clamp(0.25rem,1vh,0.5rem)] block">
                Support
              </span>
              <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(2.5rem,5vh,4rem)] 2xl:text-[5rem] text-white leading-[0.95]">
                FAQs
              </h2>
            </div>
            
            <div className="divide-y-2 divide-white/10 border-y-2 border-white/10">
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} className="group">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-[clamp(0.6rem,2vh,1.25rem)] text-left outline-none"
                      aria-expanded={open}
                    >
                      <span className={`font-sans font-black uppercase text-[clamp(0.95rem,2vh,1.1rem)] 2xl:text-[1.4rem] transition-colors ${open ? "text-[#E87A00]" : "text-white group-hover:text-white/80"}`}>
                        {f.q}
                      </span>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-all ${open ? "rotate-45 border-[#E87A00] text-[#E87A00]" : "border-white text-white group-hover:border-white/80 group-hover:text-white/80"}`}
                        aria-hidden="true"
                      >
                        <svg className="w-[60%] h-[60%]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="8" y1="2" x2="8" y2="14" />
                          <line x1="2" y1="8" x2="14" y2="8" />
                        </svg>
                      </span>
                    </button>
                    {open ? (
                      <div className="pb-[clamp(0.6rem,2vh,1.25rem)] text-[clamp(0.85rem,1.5vh,0.95rem)] 2xl:text-[1.15rem] font-medium leading-[1.6] text-white/80 pr-10">
                        {f.a}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}