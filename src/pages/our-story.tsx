import { Link } from "react-router-dom";

// Images
import storyBg from "../assets/story-bg.webp";
import alphonsoMango from "../assets/alphonso-mango.webp";
import culturedYogurt from "../assets/cultured-yogurt.webp";
import himalayanSalt from "../assets/himalayan-salt.webp";

export default function StoryPage() {
  return (
    <div className="bg-cream font-sans overflow-x-hidden">
      
      {/* Custom Liquid Animations */}
      <style>{`
        @keyframes liquidShape {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        .liquid-image {
          animation: liquidShape 10s ease-in-out infinite;
          overflow: hidden;
        }
        .liquid-blob {
          animation: liquidShape 15s ease-in-out infinite;
        }
      `}</style>

      <main>
        
        {/* ── HERO SCROLL ── */}
        <section className="relative flex h-dvh max-h-dvh w-full items-center justify-center bg-charcoal pt-20 lg:pt-28 pb-20 lg:pb-32">
          
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={storyBg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-linear-to-b from-charcoal/80 via-charcoal/50 to-charcoal/90" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <span className="font-serif italic font-bold text-[1rem] lg:text-[1.2rem] text-[#E87A00] mb-3 lg:mb-4 block">
              Our Story
            </span>
            <h1 className="font-sans font-black uppercase tracking-tighter text-[clamp(3rem,6vw,5.5rem)] text-white leading-[0.95]">
              It started with <br />
              <span className="text-white/70">a recipe.</span>
            </h1>
          </div>
        </section>

        {/* ── ORIGIN SECTION ── */}
        <section className="relative z-10 flex h-dvh max-h-dvh w-full flex-col items-center justify-center bg-cream pb-24 lg:pb-32 pt-16 lg:pt-24">
          
          <div className="absolute -top-0.5 left-0 w-full z-20 leading-none rotate-180">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 lg:h-24 fill-charcoal text-charcoal stroke-current stroke-[2px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.15,195.4,97.58,239.3,85.6,281.44,71.21,321.39,56.44Z" />
            </svg>
          </div>

          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-[#E87A00] opacity-[0.07] blur-3xl liquid-blob"></div>
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-450 gap-6 lg:gap-[6vw] px-6 sm:px-10 lg:px-[8vw] lg:grid-cols-2 items-center">
            
            <div className="flex flex-col justify-center lg:pr-[2vw] xl:pr-[4vw]">
              <span className="font-serif italic font-bold text-[1rem] lg:text-[1.2rem] text-[#207B64] mb-2 lg:mb-3 block">
                The Roots
              </span>
              <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(2.2rem,5vw,4.5rem)] text-charcoal leading-[0.95] mb-4 lg:mb-6">
                A recipe, <br />
                <span className="text-gray-mid">three generations.</span>
              </h2>
              
              <div className="space-y-3 lg:space-y-6 text-[0.9rem] lg:text-[1.05rem] font-normal leading-[1.6] lg:leading-[1.7] text-gray-mid font-sans">
                <p>
                  It started in a kitchen in New Jersey, but the recipe traveled much
                  further before it got there. Lassi was a Sunday ritual, a tall glass
                  with lunch, the cardamom mortar still warm from grinding.
                </p>
                <p>
                  When friends started asking for it by the bottle, then their friends,
                  then the neighborhood grocer, we knew it was time. Golden Silk is what
                  happens when a Pakistani family recipe meets a Department of Agriculture
                  certification.
                </p>
                <p className="hidden md:block">
                  We are based in New Jersey. We are Pakistani-American. We bottle in small
                  batches and ship refrigerated. The recipe has not changed.
                </p>
              </div>
            </div>

            <div className="relative w-full h-[35vh] lg:h-[60vh] liquid-image drop-shadow-2xl">
              <img
                src={storyBg}
                alt="Modern kitchen counter with lassi and fresh ingredients"
                className="absolute inset-0 h-full w-full object-cover scale-110"
              />
            </div>

          </div>
        </section>

        {/* ── PROCESS SECTION ── */}
        <section className="relative flex h-dvh max-h-dvh w-full flex-col items-center justify-center bg-charcoal pb-24 lg:pb-32 pt-16 lg:pt-24">
          
          <div className="absolute -top-0.5 left-0 w-full z-20 leading-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 lg:h-24 fill-cream text-cream stroke-current stroke-[2px]">
              <path d="M 0,0 L 0,120 C 300,120 400,0 600,0 C 800,0 900,120 1200,120 L 1200,0 Z" />
            </svg>
          </div>

          <div className="relative z-10 w-full mx-auto max-w-450 px-6 sm:px-10 lg:px-[8vw]">
            
            <div className="text-center mb-8 lg:mb-16">
              <span className="font-serif italic font-bold text-[1rem] lg:text-[1.2rem] text-[#E87A00] mb-2 lg:mb-3 block">
                The Process
              </span>
              <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[0.95]">
                How we make it.
              </h2>
            </div>

            <div className="grid gap-4 lg:gap-10 md:grid-cols-3">
              {[
                {
                  title: "Slow Cultured",
                  body: "Whole milk from regional dairies, cultured slowly with traditional starters until thick and tangy.",
                  icon: (
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 lg:h-10 lg:w-10 text-[#E87A00]">
                      <path d="M10 4 L22 4 L22 10 L26 14 L26 28 L6 28 L6 14 L10 10 Z" />
                      <line x1="10" y1="18" x2="22" y2="18" />
                    </svg>
                  ),
                },
                {
                  title: "Real Ingredients",
                  body: "Never essences or powders. Real Alphonso pulp, real Himalayan salt, freshly ground cardamom.",
                  icon: (
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 lg:h-10 lg:w-10 text-[#E87A00]">
                      <circle cx="16" cy="16" r="10" />
                      <path d="M16 6 C12 12 12 20 16 26" />
                      <path d="M16 6 C20 12 20 20 16 26" />
                    </svg>
                  ),
                },
                {
                  title: "Bottled Fresh",
                  body: "Bottled, refrigerated, and shipped within days. Nothing sits on a warehouse shelf.",
                  icon: (
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 lg:h-10 lg:w-10 text-[#E87A00]">
                      <path d="M13 4 L19 4 L19 9 L21 12 L21 28 L11 28 L11 12 L13 9 Z" />
                      <line x1="13" y1="16" x2="19" y2="16" />
                    </svg>
                  ),
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="flex flex-col items-start rounded-[1.5rem] lg:rounded-[2rem] border border-white/10 bg-white/5 p-6 lg:p-10 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2"
                >
                  <div className="mb-4 lg:mb-6 rounded-full bg-[#E87A00]/10 p-3 lg:p-4">
                    {step.icon}
                  </div>
                  <h3 className="font-sans font-black uppercase text-[1.2rem] lg:text-[1.8rem] text-white mb-2 lg:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[0.85rem] lg:text-[1rem] font-normal leading-normal lg:leading-[1.6] text-white/70">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INGREDIENTS SECTION ── */}
        <section className="relative flex h-dvh max-h-dvh w-full flex-col items-center justify-center bg-white pb-24 lg:pb-32 pt-16 lg:pt-24">
          
          <div className="absolute -top-0.5 left-0 w-full z-20 leading-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 lg:h-24 fill-charcoal text-charcoal stroke-current stroke-[2px]">
               <path d="M 0,0 L 0,120 C 250,120 400,0 650,0 C 900,0 1000,120 1200,120 L 1200,0 Z" />
            </svg>
          </div>

          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-[-5%] w-[50vw] h-[50vw] bg-[#207B64] opacity-[0.06] blur-3xl liquid-blob" style={{ animationDelay: '-4s' }}></div>
          </div>

          <div className="relative z-10 w-full mx-auto max-w-450 px-6 sm:px-10 lg:px-[8vw]">
            
            <div className="text-center mb-8 lg:mb-12">
              <span className="font-serif italic font-bold text-[1rem] lg:text-[1.2rem] text-[#207B64] mb-2 lg:mb-3 block">
                The Ingredients
              </span>
              <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(2.5rem,5vw,4.5rem)] text-charcoal leading-[0.95]">
                From three places.
              </h2>
            </div>

            <div className="grid gap-6 lg:gap-12 md:grid-cols-3">
              {[
                {
                  img: alphonsoMango,
                  name: "Alphonso Mango",
                  origin: "Sindh, Pakistan",
                  body: "Picked at peak ripeness, pulped within hours. The richest, most fragrant variety in the world.",
                  delay: "0s"
                },
                {
                  img: culturedYogurt,
                  name: "Cultured Yogurt",
                  origin: "Regional dairies, New Jersey",
                  body: "Whole milk, traditional cultures. Slow-set until creamy and tangy. The body of every bottle.",
                  delay: "-3s"
                },
                {
                  img: himalayanSalt,
                  name: "Pink Himalayan Salt",
                  origin: "Khewra range, Pakistan",
                  body: "Mineral-rich rock salt mined by hand. Subtle, balanced, with trace minerals you can taste.",
                  delay: "-7s"
                },
              ].map((ing) => (
                <div key={ing.name} className="flex flex-col group cursor-pointer">
                  {/* Image container made significantly taller (lg:h-[38vh]) and text pushed down (lg:mb-10) */}
                  <div 
                    className="h-[22vh] lg:h-[38vh] w-full overflow-hidden liquid-image drop-shadow-xl mb-6 lg:mb-10"
                    style={{ animationDelay: ing.delay }}
                  >
                    <img
                      src={ing.img}
                      alt={ing.name}
                      className="h-full w-full object-cover scale-110 transition-transform duration-700 group-hover:scale-125"
                    />
                  </div>
                  <h3 className="font-sans font-black uppercase text-[1.2rem] lg:text-[1.4rem] text-charcoal mb-1">
                    {ing.name}
                  </h3>
                  <div className="font-condensed text-[0.85rem] lg:text-[0.95rem] tracking-widest text-[#E87A00] mb-2 lg:mb-3 uppercase">
                    {ing.origin}
                  </div>
                  <p className="text-[0.85rem] lg:text-[1rem] font-normal leading-normal lg:leading-[1.6] text-gray-mid">
                    {ing.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROMISE SECTION ── */}
        <section className="relative flex h-dvh max-h-dvh w-full flex-col items-center justify-center bg-[#207B64] pb-16 lg:pb-20 pt-16 lg:pt-24">
          
          <div className="absolute -top-0.5 left-0 w-full z-20 leading-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 lg:h-24 fill-white text-white stroke-current stroke-[2px]">
              <path d="M 0,0 L 0,40 C 200,120 400,120 600,60 C 800,0 1000,0 1200,40 L 1200,0 Z" />
            </svg>
          </div>

          <div className="relative z-10 w-full mx-auto max-w-450 px-6 text-center sm:px-10 lg:px-[8vw]">
            <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[0.95] mb-10 lg:mb-16">
              Made the way <br/> it should be.
            </h2>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {["No Preservatives", "No Artificial Flavors", "No Shortcuts", "Small Batch Only"].map((p) => (
                <div
                  key={p}
                  className="flex items-center justify-center rounded-full border-2 border-white/20 bg-white/10 px-4 py-4 lg:px-6 lg:py-6 backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  <div className="font-sans font-bold uppercase tracking-wider text-[0.8rem] lg:text-[0.95rem] text-white">
                    {p}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 lg:mt-20">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 lg:px-10 lg:py-4 font-sans font-bold text-[0.9rem] lg:text-[1rem] uppercase tracking-widest text-[#207B64] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-cream"
              >
                See the products
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}