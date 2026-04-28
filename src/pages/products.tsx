import { useState } from "react";
import { Link } from "react-router-dom";

// Bottle Images
import mangoBottleBg from "../assets/mango-bottle-bg.webp";
import sweetBottleBg from "../assets/sweet-bottle-bg.webp";
import saltBottleBg from "../assets/salt-bottle-bg.webp";

// Nutrition Images
import mangoBottleNutrition from "../assets/mango-bottle-nutrition.webp";
import sweetBottleNutrition from "../assets/sweet-bottle-nutrition.webp";
import saltBottleNutrition from "../assets/salt-bottle-nutrition.webp";

// Backgrounds
import heroBg from "../assets/hero.webp";
import saltBg from "../assets/salt-bg.webp";
import mangoBg from "../assets/mango-bg.webp";
import sweetBg from "../assets/sweet-bg.webp"; 

/* ─── Product Data ───────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: "mango",
    name: "Mango",
    bottle: mangoBottleBg,
    nutritionImg: mangoBottleNutrition,
    bgImg: mangoBg,
    bg: "#FFF7E6", // Text side color (Soft Mango Orange)
    imageSideBg: "#FFEDCC", 
    accent: "#FF9F00",
    description: "Real Alphonso mango pulp from Pakistan, slow-cultured yogurt, a whisper of cane sugar. The mango does most of the work.",
    ingredients: ["Cultured Yogurt", "Alphonso Mango Pulp", "Cane Sugar"],
    pairs: "Pairs with: Brunch, post-workout, or anytime the afternoon needs lifting.",
  },
  {
    id: "sweet",
    name: "Sweet",
    bottle: sweetBottleBg,
    nutritionImg: sweetBottleNutrition,
    bgImg: sweetBg, 
    bg: "#F0F8FF", // Text side color (Soft Sweet Blue)
    imageSideBg: "#E6F4FF", 
    accent: "#63B3ED",
    description: "The traditional recipe. Cultured yogurt, cane sugar, freshly ground green cardamom. Soft, fragrant, gently sweet.",
    ingredients: ["Cultured Yogurt", "Cane Sugar", "Green Cardamom"],
    pairs: "Pairs with: Sunday lunch, biryani, or a slow morning on the porch.",
  },
  {
    id: "salt",
    name: "Himalayan Salt",
    bottle: saltBottleBg,
    nutritionImg: saltBottleNutrition,
    bgImg: saltBg,
    bg: "#FFF0F5", // Text side color (Soft Salt Pink)
    imageSideBg: "#FFE6EE", 
    accent: "#F687B3",
    description: "Cultured yogurt, pink Himalayan salt, roasted cumin. Savory, cooling, electrolyte-rich. The roadside classic.",
    ingredients: ["Cultured Yogurt", "Pink Himalayan Salt", "Roasted Cumin"],
    pairs: "Pairs with: A long run, a hot day, or the spiciest curry on the table.",
  },
];

/* ─── Individual Product Section Component ───────────────────────────────── */
function ProductSection({ p, index }: { p: typeof PRODUCTS[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      id={p.id}
      className="relative flex h-auto w-full items-center justify-center overflow-hidden pt-28 pb-8 lg:h-dvh lg:pt-28 lg:pb-10"
      style={{ backgroundColor: p.imageSideBg }}
    >
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        {p.bgImg && (
          <img 
            src={p.bgImg} 
            alt="" 
            className={`object-cover w-full absolute bottom-0 h-[60%] md:h-full md:bottom-auto md:top-0 transition-transform lg:w-auto lg:max-w-none ${
              index % 2 === 0 ? "lg:right-0 lg:object-[35%_center]" : "lg:left-0 lg:object-[65%_center]"
            }`}
          />
        )}
      </div>

      {/* 2. SVG Vertical Curve Mask */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Desktop Vertical Curve */}
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="hidden lg:block w-full h-full"
        >
          {index % 2 === 0 ? (
            <path d="M 0 0 L 50 0 Q 40 50 50 100 L 0 100 Z" fill={p.bg} />
          ) : (
            <path d="M 100 0 L 50 0 Q 60 50 50 100 L 100 100 Z" fill={p.bg} />
          )}
        </svg>

        {/* Mobile Horizontal Curve */}
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="block lg:hidden w-full h-full"
        >
          <path d="M 0 0 L 100 0 L 100 60 Q 50 50 0 60 Z" fill={p.bg} />
        </svg>
      </div>

      {/* 3. Main Content Grid */}
      <div className="relative z-20 mx-auto grid w-full max-w-450 gap-6 lg:gap-[8vw] xl:gap-[12vw] px-6 sm:px-10 lg:px-[5vw] xl:px-[6vw] lg:grid-cols-2 items-center">
        
        {/* Text Side */}
        <div className={`flex flex-col justify-center ${index % 2 === 0 ? "lg:pr-[4vw] xl:pr-[8vw]" : "lg:order-2 lg:pl-[4vw] xl:pl-[8vw]"}`}>
          <span 
            className="font-serif italic font-bold text-[1rem] lg:text-[1.2rem] mb-1 lg:mb-3 block"
            style={{ color: p.accent }}
          >
            Signature Flavor
          </span>
          
          <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(2.5rem,5vw,4.5rem)] text-charcoal leading-[0.95] mb-2 lg:mb-4">
            {p.name} <br />
            Lassi
          </h2>
          
          <div className="mt-2 lg:mt-3 flex items-center gap-3 font-condensed text-[1rem] lg:text-xl tracking-widest text-charcoal/60">
            <span>12 FL OZ</span>
            <span className="h-1 w-1 rounded-full bg-charcoal/40"></span>
            <span>12G PROTEIN</span>
          </div>

          <p className="mt-4 lg:mt-5 max-w-lg text-[0.95rem] lg:text-[1.1rem] font-normal leading-normal lg:leading-[1.7] text-gray-mid font-sans">
            {p.description}
          </p>

          {/* Ingredients */}
          <div className="mt-5 lg:mt-8">
            <div className="font-condensed text-[0.9rem] lg:text-lg tracking-[0.15em] text-gray-mid mb-2 lg:mb-3">
              Ingredients
            </div>
            <div className="flex flex-wrap gap-2">
              {p.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="rounded-full bg-white/60 px-3 lg:px-4 py-1.5 lg:py-2 text-[0.75rem] lg:text-[0.85rem] font-semibold text-charcoal shadow-sm border border-white/40"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-5 lg:mt-6 text-[0.85rem] lg:text-[0.95rem] font-medium text-gray-mid">
            {p.pairs}
          </p>
        </div>

        {/* Flipping Bottle Side */}
        <div className={`flex flex-col items-center justify-center w-full relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
          
          <div 
            className="relative h-100 sm:h-112.5 lg:h-[65vh] w-fit perspective-[1000px] z-10 cursor-pointer group" 
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Double-Shadow Effect */}
            <div className="absolute bottom-1 lg:bottom-2 left-1/2 w-[85%] -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none transition-all duration-500 group-hover:scale-75 group-hover:opacity-20 z-0">
              <div className="absolute w-full h-6 lg:h-8 bg-black/60 blur-[10px] rounded-[100%]"></div>
              <div className="absolute w-[40%] lg:w-[35%] h-2 lg:h-3 bg-black/90 blur-xs rounded-[100%]"></div>
            </div>

            <div className={`relative h-full transition-transform duration-700 transform-3d z-10 ${isFlipped ? 'transform-[rotateY(180deg)]' : ''}`}>
              
              {/* Front Bottle */}
              <div className="h-full backface-hidden flex justify-center items-start md:items-center pt-2 md:pt-0">
                <img
                  src={p.bottle}
                  alt={`${p.name} bottle`}
                  className="h-full w-auto object-contain object-top md:object-center drop-shadow-xl transition-transform duration-500 group-hover:-translate-y-4 relative z-10 scale-110 md:scale-100"
                />
              </div>

              {/* Back Nutrition Label Image */}
              <div className="absolute inset-0 backface-hidden transform-[rotateY(180deg)] flex justify-center items-start md:items-center pt-2 md:pt-0">
                <img
                  src={p.nutritionImg}
                  alt={`${p.name} nutrition facts`}
                  className="h-full w-auto object-contain object-top md:object-center drop-shadow-xl transition-transform duration-500 group-hover:-translate-y-4 relative z-10 scale-110 md:scale-100"
                />
              </div>
            </div>
          </div>

          <button 
            onClick={() => setIsFlipped(!isFlipped)}
            className="mt-8 md:mt-6 lg:mt-8 mb-0 font-sans font-bold text-[0.8rem] lg:text-[0.9rem] uppercase tracking-widest transition-all duration-300 bg-charcoal text-white px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:bg-charcoal/90 hover:-translate-y-1 z-20"
          >
            {isFlipped ? "View Front Label" : "View Nutrition Facts"}
          </button>

        </div>
      </div>
    </section>
  );
}

/* ─── Main Page Component ────────────────────────────────────────────────── */
export default function ProductsPage() {
  return (
    <div className="bg-cream font-sans overflow-x-hidden">
      <main>
        {/* ── HERO SCROLL ── */}
        {/* FIX: Applied min-h-screen to ensure the section reaches the absolute bottom of the physical mobile display, avoiding the "short/ugly" look without triggering scroll jumps. */}
        <section className="relative flex h-auto min-h-screen lg:h-screen w-full items-center justify-center overflow-hidden bg-charcoal pt-32 pb-24 lg:pt-28 lg:pb-0">
          
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="Golden Silk Beverages" 
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
            />
            <div className="absolute inset-0 bg-linear-to-b from-charcoal/80 via-charcoal/50 to-charcoal/90"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            
            <span className="font-serif italic font-bold text-[1.2rem] text-[#E87A00] mb-4 block">
              Golden Silk Beverages
            </span>
            
            <h1 className="font-sans font-black uppercase tracking-tighter text-[clamp(3.5rem,6vw,5.5rem)] text-white leading-[0.95]">
              Three lassis.<br/>
              <span className="text-white/70">Nothing more.</span>
            </h1>
            
            <p className="mx-auto mt-8 max-w-xl text-[1.1rem] font-medium leading-[1.6] text-white/80">
              Each bottle is 12 fl oz. Each has 12g of protein. Each is made with cultured
              yogurt and real ingredients.
            </p>
          </div>
        </section>

        {/* ── PRODUCT SECTIONS ── */}
        {PRODUCTS.map((p, i) => (
          <ProductSection key={p.id} p={p} index={i} />
        ))}

        {/* ── STOCKISTS MAP TEASER ── */}
        <section className="relative overflow-hidden bg-[#207B64] pt-[clamp(120px,15vw,180px)] px-[clamp(20px,5vw,80px)] pb-[clamp(160px,20vw,240px)]">
          
          {/* Map SVG background */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.15] pointer-events-none overflow-hidden mix-blend-overlay">
            <svg viewBox="0 0 400 400" className="w-[200vw] sm:w-200 h-[200vw] sm:h-200 text-white">
              <path d="M50,50 L120,60 L140,150 L110,250 L130,350 L20,380 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M160,80 L180,75 L210,180 L175,230 L150,150 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M220,100 L350,120 L380,250 L300,380 L200,300 L190,200 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              
              <circle cx="165" cy="120" r="6" fill="#E87A00" />
              <circle cx="185" cy="160" r="8" fill="#E87A00" />
              <circle cx="250" cy="180" r="6" fill="#E87A00" />
              <circle cx="280" cy="250" r="9" fill="#E87A00" />
              <circle cx="120" cy="200" r="7" fill="#E87A00" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl text-center">
            <span className="font-serif italic font-bold text-[1.2rem] text-white/90 mb-4 block">
              Tristate Area & Beyond
            </span>

            <h2 className="font-sans font-black uppercase tracking-tighter text-white text-[clamp(2.2rem,4.5vw,4.5rem)] m-0 mb-4 leading-none">
              Golden Silk is near you.
            </h2>
            <p className="font-sans font-light text-[1.05rem] text-white/90 mb-10 max-w-275 mx-auto mt-4">
              Available at select South Asian grocery stores across New York, New Jersey, and the surrounding areas.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {["Patel Brothers", "Edison Sweet Mart", "Namaste Plaza", "Subzi Mandi", "Apna Bazar"].map((store) => (
                <span
                  key={store}
                  className="font-sans font-semibold text-[0.875rem] text-[#1C1C1C] bg-white/95 border border-white rounded-full px-5 py-2.5 shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
                >
                  {store}
                </span>
              ))}
            </div>

            <Link
              to="/wholesale"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 font-sans font-bold text-[0.95rem] text-[#1C1C1C] shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-transform hover:scale-105"
            >
              Want us in your store? Get in touch
            </Link>
          </div>

          {/* Bottom Wave Transition to Newsletter (Cream) */}
          <div className="absolute bottom-0 left-0 w-full z-20 leading-none translate-y-px pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 lg:h-20 fill-cream">
              <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
            </svg>
          </div>
        </section>

        {/* ── NEWSLETTER CTA ── */}
        <section className="relative flex flex-col items-center justify-center bg-cream min-h-[70vh] py-32 lg:py-48 px-6">
          <div className="relative z-10 w-full max-w-2xl text-center">
            <span className="font-serif italic font-bold text-[1rem] lg:text-[1.2rem] text-[#207B64] mb-3 block">
              Stay in the loop
            </span>
            <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(2.5rem,4.5vw,4.5rem)] text-charcoal leading-[0.95] mb-4">
              Get the latest.
            </h2>
            <p className="font-sans font-medium text-[1.05rem] lg:text-[1.15rem] text-gray-mid mb-2">
              Recipes, new flavors, grocery drops.
            </p>
            <p className="font-sans font-bold text-[0.85rem] uppercase tracking-widest text-charcoal/40 mb-10">
              No spam. We promise.
            </p>

            {/* Newsletter Form */}
            <form className="relative flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg mx-auto group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                required
                className="w-full border-b-2 border-charcoal/20 bg-transparent py-3 font-sans font-bold uppercase tracking-widest text-[0.9rem] text-charcoal outline-none transition-colors placeholder:text-charcoal/30 focus:border-[#E87A00]"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto shrink-0 rounded-full bg-[#E87A00] px-8 py-3.5 font-sans font-black uppercase tracking-widest text-[0.9rem] text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-[#ff8c00]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}