import { useState, type FormEvent, useRef, useEffect } from "react";
// Bottle Images for the Form
import mangoBottleBg from "../assets/mango-bottle-bg.webp";
import sweetBottleBg from "../assets/sweet-bottle-bg.webp";
import saltBottleBg from "../assets/salt-bottle-bg.webp";

const FAQS = [
  {
    q: "What is your case size?",
    a: "Each case contains 36 bottles (12 fl oz each), weighing approximately 11.5 lbs.",
  },
  {
    q: "What is the lead time?",
    a: "We ship within 7 to 10 business days of confirmed orders. Refrigerated freight is required.",
  },
  {
    q: "Do you offer net terms?",
    a: "Yes, after the first three orders we offer Net 30 terms to qualifying retailers.",
  },
  {
    q: "What is the minimum order?",
    a: "Our minimum is 4 cases per order, mixed flavors welcome.",
  },
  {
    q: "Where do you ship?",
    a: "We ship nationwide via refrigerated freight. Local NJ, NY, and PA delivery is available with our trucks.",
  },
  {
    q: "What is the shelf life?",
    a: "Each bottle is good for 45 to 60 days from production, kept refrigerated at all times.",
  },
  {
    q: "Can we get samples?",
    a: "Yes. Reach out via the inquiry form or call us directly to arrange samples before committing to a case order.",
  },
];

export default function WholesalePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-cream font-sans overflow-x-hidden">
      <main>
        
        {/* ── 1. COMBINED HERO & FEATURES (Charcoal) ── */}
        <section className="relative flex h-auto min-h-screen lg:min-h-0 lg:h-dvh w-full flex-col items-center justify-center bg-charcoal pt-[clamp(5rem,12vh,8rem)] pb-[clamp(3rem,8vh,5rem)] overflow-hidden">
          
          <div className="relative z-10 w-full mx-auto max-w-450 px-6 sm:px-10 lg:px-[8vw]">
            
            <div className="max-w-5xl mx-auto text-center">
              <span className="font-serif italic font-bold text-[clamp(0.9rem,2vh,1.2rem)] 2xl:text-[1.3rem] text-[#E87A00] mb-[clamp(0.5rem,1.5vh,0.75rem)] block">
                For retailers, restaurants & cafes.
              </span>
              <h1 className="font-sans font-black uppercase tracking-tighter text-[clamp(2rem,5vw,4.5rem)] 2xl:text-[5.5rem] text-white leading-[0.95]">
                Stock the lassi your <br />
                <span className="text-white/70">customers will <br className="md:hidden" />come back for.</span>
              </h1>
              <p className="mx-auto mt-[clamp(0.75rem,2vh,1rem)] max-w-2xl text-[clamp(0.95rem,2vh,1.1rem)] 2xl:text-[1.2rem] font-medium leading-normal text-white/80">
                Direct from our New Jersey kitchen, shipped refrigerated, nationwide.
              </p>
            </div>

            <div className="mt-[clamp(1rem,3vh,2rem)] text-center">
              <a
                href="#inquiry"
                className="inline-flex rounded-full bg-[#E87A00] px-8 py-3 2xl:px-10 2xl:py-4 font-sans font-bold uppercase tracking-widest text-[clamp(0.85rem,1.5vh,0.9rem)] 2xl:text-[1rem] text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-[#ff8c00]"
              >
                Start an Order
              </a>
            </div>

          </div>

          <div className="absolute -bottom-0.5 left-0 w-full z-20 leading-none pointer-events-none">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="relative block w-full h-12 lg:h-16 fill-cream"
              style={{ transform: 'translateY(6%)' }} 
            >
              <path 
                d="M 0,0 L 0,40 C 200,120 400,120 600,60 C 800,0 1000,0 1200,40 L 1200,0 Z" 
                transform="rotate(180 600 60)" 
              />
            </svg>
          </div>
        </section>

        {/* ── 2. WHY CHOOSE US (Cream) ── */}
        <section className="relative z-10 flex h-auto w-full flex-col items-center justify-center bg-cream py-20 lg:py-28 -mt-px">
          
          <div className="relative z-10 w-full mx-auto max-w-450 px-6 sm:px-10 lg:px-[8vw]">
            <div className="text-center mb-10 lg:mb-16">
              <span className="font-serif italic font-bold text-[clamp(1rem,2vh,1.2rem)] 2xl:text-[1.3rem] text-[#207B64] mb-2 block">
                The Advantage
              </span>
              <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(2.2rem,5vh,4rem)] 2xl:text-[5rem] text-charcoal leading-[0.95]">
                Why retailers choose us.
              </h2>
            </div>
            
            <div className="grid gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  t: "Authentic Sourcing",
                  b: "Real Alphonso pulp. Real Himalayan salt. Never concentrates or powders.",
                },
                {
                  t: "Clean Label",
                  b: "No artificial additives. Gluten-free. Appeals to health-conscious shoppers.",
                },
                // FIX: Commented out the protein mention and swapped it for the Authentic Family Recipe point!
                // {
                //   t: "12g Protein",
                //   b: "An ideal grab-and-go breakfast replacement or post-workout drink.",
                // },
                {
                  t: "Authentic Family Recipe",
                  b: "Passed down through three generations to bring a true taste of home to every bottle.",
                },
                {
                  t: "Direct Relationship",
                  b: "Talk directly to the family. No distributor markup.",
                },
              ].map((v) => (
                <div
                  key={v.t}
                  className="rounded-[1.5rem] 2xl:rounded-[2rem] bg-white p-5 lg:p-10 drop-shadow-xl transition-transform duration-500 hover:-translate-y-2"
                >
                  <h3 className="font-sans font-black uppercase text-[clamp(1.05rem,2vh,1.3rem)] 2xl:text-[1.5rem] text-charcoal mb-2 2xl:mb-4">
                    {v.t}
                  </h3>
                  <p className="text-[clamp(0.85rem,1.5vh,1rem)] 2xl:text-[1.1rem] font-normal leading-normal text-gray-mid">
                    {v.b}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full z-20 leading-none translate-y-0.5 pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 lg:h-14 fill-[#207B64] text-[#207B64] stroke-current stroke-[2px]">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" />
            </svg>
          </div>
        </section>

        {/* ── 3. PRICING & SHIPPING (Brand Green) ── */}
        <section id="pricing" className="relative flex h-auto w-full flex-col items-center justify-center bg-[#207B64] py-20 lg:py-28">
          
          <div className="relative z-10 w-full mx-auto grid max-w-450 gap-8 lg:gap-16 px-6 sm:px-10 lg:px-[8vw] lg:grid-cols-2 items-center">
            
            {/* Pricing Table */}
            <div className="flex flex-col justify-center min-w-0 w-full">
              <span className="font-serif italic font-bold text-[clamp(1rem,2vh,1.2rem)] 2xl:text-[1.3rem] text-[#E87A00] mb-2 block">
                The Details
              </span>
              <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(2.2rem,5vh,4rem)] 2xl:text-[5rem] text-white leading-[0.95] mb-6 lg:mb-10">
                Case Pricing
              </h2>
              
              <div className="overflow-x-auto w-full max-w-full">
                <table className="w-full text-left text-white">
                  <thead>
                    <tr className="border-b-2 border-white/20 font-sans font-bold uppercase tracking-widest text-[clamp(0.7rem,1.2vh,0.85rem)] 2xl:text-[0.85rem] text-white/70">
                      <th className="py-2 font-normal min-w-27.5 md:min-w-0">Volume</th>
                      <th className="py-2 font-normal min-w-27.5 md:min-w-0">Per Unit</th>
                      <th className="py-2 font-normal min-w-35 md:min-w-0">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["4 to 9 cases", "Standard pricing", "Mixed flavors welcome"],
                      ["10 to 24 cases", "Volume tier 1", "Contact for rate"],
                      ["25 plus cases", "Volume tier 2", "Contact for rate"],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-white/10 transition-colors hover:bg-white/5">
                        <td className="py-4 lg:py-5 font-sans font-black text-[clamp(0.9rem,1.8vh,1rem)] 2xl:text-[1.15rem] uppercase">{row[0]}</td>
                        <td className="py-4 lg:py-5 font-medium text-[clamp(0.85rem,1.5vh,0.95rem)] 2xl:text-[1.05rem] text-white/90">{row[1]}</td>
                        <td className="py-4 lg:py-5 font-medium text-[clamp(0.8rem,1.4vh,0.9rem)] 2xl:text-[1rem] text-[#E87A00]">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <ul className="mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-2 lg:gap-y-4 gap-x-6 text-[clamp(0.8rem,1.5vh,0.9rem)] 2xl:text-[1rem] font-medium text-white/80">
                <li><span className="text-[#E87A00] mr-2">✔</span> Each case: 36 units x 12 fl oz</li>
                <li><span className="text-[#E87A00] mr-2">✔</span> Case weight: approx. 11.5 lbs</li>
                <li><span className="text-[#E87A00] mr-2">✔</span> Pallet: 30 cases (15 x 6 tie/high)</li>
                <li><span className="text-[#E87A00] mr-2">✔</span> Lead time: 7 to 10 days</li>
                <li><span className="text-[#E87A00] mr-2">✔</span> Refrigerated freight required</li>
                <li><span className="text-[#E87A00] mr-2">✔</span> Shelf life: 45 to 60 days</li>
              </ul>
            </div>

            {/* Shipping Box */}
            <div id="shipping" className="rounded-[1.5rem] 2xl:rounded-[2rem] border border-white/20 bg-white/10 p-6 lg:p-12 backdrop-blur-md drop-shadow-2xl min-w-0 w-full">
              <h3 className="font-sans font-black uppercase text-[clamp(1.5rem,3vh,1.8rem)] 2xl:text-[2rem] text-white">Shipping</h3>
              <p className="mt-4 lg:mt-6 text-[clamp(0.85rem,1.5vh,1rem)] 2xl:text-[1.1rem] font-normal leading-[1.6] text-white/90">
                We ship nationwide via refrigerated freight. Local NJ, NY, and PA delivery is
                available with our own trucks. Minimum order is 4 cases per order, mixed flavors
                welcome.
              </p>
              <div className="mt-6 lg:mt-8 flex flex-wrap gap-2 lg:gap-3">
                {["Nationwide", "Refrigerated", "NJ/NY/PA Local"].map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 2xl:px-4 2xl:py-2 font-sans font-bold uppercase tracking-widest text-[clamp(0.65rem,1.2vh,0.75rem)] 2xl:text-[0.85rem] text-white"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full z-20 leading-none translate-y-0.5 pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 lg:h-14 fill-cream text-cream stroke-current stroke-[2px]">
               <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.15,195.4,97.58,239.3,85.6,281.44,71.21,321.39,56.44Z" transform="scale(-1, 1) translate(-1200, 0)" />
            </svg>
          </div>
        </section>

        {/* ── 4. COMPACT INQUIRY FORM (Cream) ── */}
        <section id="inquiry" className="relative flex h-auto w-full flex-col items-center justify-center bg-cream overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32">
          
          <div className="relative z-10 w-full mx-auto max-w-4xl 2xl:max-w-5xl px-4 sm:px-10">
            <div className="text-center mb-5 lg:mb-8">
              <span className="font-serif italic font-bold text-[clamp(0.9rem,1.5vh,1.1rem)] 2xl:text-[1.3rem] text-[#207B64] mb-2 block">
                Let's Work Together
              </span>
              <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(1.8rem,4vh,3.2rem)] 2xl:text-[4rem] text-charcoal leading-[0.95]">
                Start an order.
              </h2>
            </div>

            <div className="rounded-[1.5rem] 2xl:rounded-[2rem] bg-white border border-black/5 p-5 lg:p-10 drop-shadow-xl">
              {submitted ? (
                <div className="py-16 lg:py-20 text-center">
                  <h3 className="font-sans font-black uppercase text-[clamp(2rem,4vh,3rem)] 2xl:text-[3rem] text-[#207B64]">Thank you.</h3>
                  <p className="mt-2 text-[clamp(1rem,2vh,1.2rem)] 2xl:text-[1.2rem] font-medium text-gray-mid">
                    We will be in touch within 1 to 2 business days.
                  </p>
                </div>
              ) : (
                <form className="grid gap-x-6 2xl:gap-x-10 gap-y-4 lg:gap-y-6 sm:grid-cols-2" onSubmit={onSubmit}>
                  
                  <Field label="Business Name" name="business" required />
                  <Field label="Your Name" name="name" required />
                  
                  <Field label="Email Address" name="email" type="email" required />
                  <Field label="Phone Number" name="phone" type="tel" />
                  
                  <Select
                    label="Business Type"
                    name="business_type"
                    options={["Retail Store", "Restaurant", "Cafe", "Distributor", "Other"]}
                  />
                  <Select
                    label="Monthly Volume"
                    name="volume"
                    options={["4 to 10 cases", "10 to 25 cases", "25 plus cases"]}
                  />
                  
                  <div className="sm:col-span-2 mt-1.5">
                    <div className="text-[clamp(0.65rem,1.2vh,0.75rem)] 2xl:text-[0.85rem] font-sans font-bold uppercase tracking-widest text-charcoal/70 mb-2 2xl:mb-3">
                      Products of interest
                    </div>
                    {/* Visual Product Selectors */}
                    <div className="grid grid-cols-3 gap-2 lg:gap-4">
                      {[
                        { name: "Mango", img: mangoBottleBg },
                        { name: "Sweet", img: sweetBottleBg },
                        { name: "Salt", img: saltBottleBg },
                      ].map((p) => (
                        <label
                          key={p.name}
                          className="group relative flex cursor-pointer flex-col items-center justify-center rounded-3xl 2xl:rounded-[1.5rem] p-2 lg:p-4"
                        >
                          {/* Hidden Checkbox */}
                          <input type="checkbox" name="products" value={p.name} className="peer sr-only" />
                          
                          {/* Background Layer */}
                          <div className="absolute inset-0 rounded-3xl 2xl:rounded-[1.5rem] border-2 border-charcoal/10 bg-cream transition-all group-hover:border-[#207B64] peer-checked:border-[#207B64] peer-checked:bg-[#207B64]"></div>
                          
                          <img 
                            src={p.img} 
                            alt={p.name} 
                            className="h-12 lg:h-16 w-auto object-contain drop-shadow-sm pointer-events-none relative z-10 transition-transform peer-checked:scale-110" 
                          />
                          
                          {/* Text Layer */}
                          <div className="font-sans font-bold uppercase tracking-widest text-[clamp(0.55rem,1.1vh,0.65rem)] 2xl:text-[0.85rem] text-charcoal mt-1.5 relative z-10 transition-colors peer-checked:text-white text-center">
                            {p.name}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[clamp(0.65rem,1.2vh,0.75rem)] 2xl:text-[0.85rem] font-sans font-bold uppercase tracking-widest text-charcoal/70">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={1}
                      className="mt-1 w-full resize-none border-b-2 border-charcoal/20 bg-transparent py-2 2xl:py-2 text-[clamp(0.85rem,1.5vh,0.9rem)] 2xl:text-[1rem] font-medium text-charcoal outline-none transition-colors focus:border-[#E87A00]"
                    />
                  </div>

                  <div className="sm:col-span-2 mt-1.5">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#E87A00] py-3 lg:py-4 font-sans font-black uppercase tracking-widest text-[clamp(0.8rem,1.5vh,0.9rem)] 2xl:text-[1rem] text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-[#ff8c00] relative z-30"
                    >
                      Send Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full z-20 leading-none translate-y-0.5 pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 lg:h-14 fill-charcoal text-charcoal stroke-current stroke-[2px]">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" transform="scale(-1, 1) translate(-1200, 0)" />
            </svg>
          </div>
        </section>

        {/* ── 5. FAQs (Charcoal) ── */}
        <section id="faq" className="relative flex h-auto lg:h-dvh w-full flex-col items-center justify-center bg-charcoal py-20 lg:py-28">
          
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

/* ── Form Components ── */
function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[clamp(0.65rem,1.2vh,0.75rem)] 2xl:text-[0.85rem] font-sans font-bold uppercase tracking-widest text-charcoal/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1 w-full border-b-2 border-charcoal/20 bg-transparent py-2 2xl:py-2 text-[clamp(0.85rem,1.5vh,0.9rem)] 2xl:text-[1rem] font-medium text-charcoal outline-none transition-colors focus:border-[#E87A00]"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown if the user clicks anywhere outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative min-w-0">
      
      <label className="block text-[clamp(0.65rem,1.2vh,0.75rem)] 2xl:text-[0.85rem] font-sans font-bold uppercase tracking-widest text-charcoal/70">
        {label}
      </label>

      {/* Hidden input ensures standard form submission still works exactly the same! */}
      <input type="hidden" name={name} value={selected} required />

      {/* Custom Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`mt-1 w-full flex items-center justify-between border-b-2 bg-transparent py-2 2xl:py-2 text-left text-[clamp(0.85rem,1.5vh,0.9rem)] 2xl:text-[1rem] font-medium outline-none transition-colors ${
          isOpen ? "border-[#E87A00] text-charcoal" : "border-charcoal/20 text-charcoal focus:border-[#E87A00]"
        }`}
      >
        <span className={selected ? "text-charcoal" : "text-charcoal/50"}>
          {selected || "Select"}
        </span>
        <svg
          className={`h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#E87A00]" : "text-charcoal/50"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* The Premium Floating Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-3xl border border-black/5 bg-white shadow-xl drop-shadow-2xl">
          {options.map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => {
                setSelected(o);
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left text-[0.85rem] 2xl:text-[1rem] font-medium text-charcoal transition-colors hover:bg-cream hover:text-[#E87A00]"
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}