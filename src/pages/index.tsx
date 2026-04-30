import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Assets
import mangoBottleBg from "../assets/mango-bottle-bg.webp";
import sweetBottleBg from "../assets/sweet-bottle-bg.webp";
import saltBottleBg from "../assets/salt-bottle-bg.webp";
import allBottle from "../assets/hero1.webp";
import storyBg from "../assets/story-bg.webp"; 
import heroBg from "../assets/hero.webp"; 

// Splash Images
import orangeSplash from "../assets/orange-splash.webp";
import sweetSplash from "../assets/sweet-splash.webp";
import saltSplash from "../assets/salt-splash.webp";

/* ─── Product Data ───────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: "mango",
    name: "Mango Lassi",
    bottle: mangoBottleBg,
    splashImg: orangeSplash,
  },
  {
    id: "sweet",
    name: "Sweet Lassi",
    bottle: sweetBottleBg,
    splashImg: sweetSplash,
  },
  {
    id: "salt",
    name: "Himalayan Salt Lassi",
    bottle: saltBottleBg,
    splashImg: saltSplash,
  },
];

/* ─── Why Us Data ────────────────────────────────────────────────────────── */
const WHY_US = [
  {
    title: "Real yogurt, real ingredients",
    desc: "No powders, no substitutes. Just cultured yogurt and authentic ingredients.",
  },
  {
    title: "12g protein per bottle",
    desc: "A breakfast replacement, a post-workout snack, or just a good drink.",
  },
  {
    title: "Made in small batches",
    desc: "Crafted fresh in New Jersey. Bottled, refrigerated, shipped.",
  },
  {
    title: "Clean label",
    desc: "Gluten-free. No preservatives. No artificial flavors. Ever.",
  },
];

/* ─── Interactive Product Card Component ─────────────────────────────────── */
function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  const displayName = product.name.replace(" Lassi", "");

  return (
    <Link 
      to={`/products#${product.id}`}
      className="flex flex-col items-center w-full max-w-100 group cursor-pointer relative z-20"
      aria-label={`View ${product.name} details`}
    >
      <div className="relative w-full h-[60vh] min-h-95 max-h-137.5 mb-6 flex justify-center items-end pb-2">
        
        {/* Front Bottle */}
        <img
          src={product.bottle}
          alt={product.name}
          className="peer h-full w-auto object-contain drop-shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-4 origin-bottom relative z-20"
        />

        {/* Splash Image */}
        {/* FIX: Toned down the translate-y lift so it only gracefully clips the title, and brought the width percentages down to earth! */}
        <div className="absolute inset-0 pointer-events-none flex justify-center items-center z-10 opacity-0 scale-50 transition-all duration-700 ease-out peer-hover:opacity-100 peer-hover:scale-100 peer-hover:-translate-y-24 lg:peer-hover:-translate-y-28 xl:peer-hover:-translate-y-32">
          <img
            src={product.splashImg}
            alt=""
            className="w-[130%] md:w-[140%] xl:w-[150%] max-w-none h-auto object-contain"
          />
        </div>

      </div>

      <div className="flex flex-col items-center justify-center w-full relative z-20">
        <h2 className="font-sans font-black text-[2rem] text-(--charcoal) text-center leading-none uppercase tracking-tight transition-colors duration-300 group-hover:text-(--brand-green)">
          {displayName}
        </h2>
      </div>
    </Link>
  );
}

/* ─── Home Page ─────────────────────────────────────────────────────────────── */

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');

        :root {
          --font-serif: 'Playfair Display', serif; 
          --font-sans: 'Montserrat', sans-serif; 
          --font-condensed: 'Bebas Neue', sans-serif; 

          --brand-green: #207B64; 
          --brand-orange: #E87A00;
          --cream: #FAF6EE;
          --charcoal: #1C1C1C;
          --gray-mid: #6B6B6B;
          --gray-light: #E8E4DC;
        }

        .font-serif { font-family: var(--font-serif); }
        .font-sans { font-family: var(--font-sans); }
        .font-condensed { font-family: var(--font-condensed); }

        html, body {
          -ms-overflow-style: none; 
          scrollbar-width: none;  
        }
        ::-webkit-scrollbar {
          display: none; 
        }

        .blob-shape {
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        }
        .blob-shape-alt {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
      `}</style>

      <div className="overflow-x-hidden font-sans" style={{ minHeight: "100vh", background: "var(--cream)" }}>

        {/* ── HERO SCROLL ── */}
        <section className="relative h-auto min-h-screen md:min-h-[45rem] md:h-screen w-full bg-(--cream) pt-24 pb-20 md:pt-20 md:pb-0 flex flex-col justify-center z-20">
          
          <div className="w-full max-w-480 mx-auto px-6 lg:px-12 xl:px-12 relative z-30 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center h-auto md:h-full pb-16 md:pb-24">
            
            {/* TEXT CONTAINER */}
            <div className="flex flex-col items-start justify-center relative z-20 xl:pr-10">
              
              <h1 className="flex flex-col gap-1 lg:gap-2 font-sans font-black uppercase tracking-tighter text-(--charcoal) text-[clamp(2.2rem,10vw,5.5rem)] leading-[1.05] md:whitespace-nowrap">
                <span>Signature lassi.</span>
                <span className="font-serif italic font-normal text-[clamp(1.8rem,8vw,4rem)] tracking-normal normal-case text-gray-mid leading-none py-1 lg:py-0">
                  Made fresh.
                </span>
                <span style={{ color: "var(--brand-orange)" }}>Shipped to you.</span>
              </h1>
              
              <p className="mt-5 max-w-100 text-[1.15rem] font-normal leading-[1.6] text-gray-mid font-sans">
                12 fl oz bottles. 12g protein. Cultured yogurt, real ingredients, nothing else.
              </p>
            </div>

            <div className="relative h-[45vh] lg:h-[80vh] w-full flex items-center justify-center pointer-events-none z-40">
              <img
                src={allBottle}
                alt="Our Lassi Lineup"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl scale-[1.3] lg:scale-[1.45] translate-y-0 lg:translate-y-[5%] lg:translate-x-[5%] origin-center"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full z-10 leading-none translate-y-1">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="relative block h-20 fill-white"
              style={{
                width: "200%",
                transform: `translateX(-${scrollY * 0.15}px)`,
                willChange: "transform"
              }}
            >
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.15,195.4,97.58,239.3,85.6,281.44,71.21,321.39,56.44Z" />
            </svg>
          </div>
        </section>

        {/* ── PRODUCT GRID SCROLL ── */}
        <section className="bg-white px-6 relative z-10 h-auto md:min-h-screen flex flex-col justify-center pt-20 pb-20 lg:pt-24 lg:pb-32">
          <div className="container mx-auto max-w-7xl flex flex-col h-full justify-center relative z-20 pb-12">
            <div className="flex flex-col items-center justify-center text-center mb-10 lg:mb-14 mt-4 relative z-10">
              <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(2.5rem,5vw,5.5rem)] md:text-[clamp(2.2rem,4.5vw,4.5rem)] text-(--charcoal) leading-none">
                Our lineup.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 lg:gap-8 justify-items-center items-end relative z-20">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY US SECTION ── */}
        <section className="bg-(--charcoal) px-6 relative z-10 h-auto md:min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-36 md:py-20 lg:py-24">
          
          <div className="absolute top-0 left-0 w-full z-20 leading-none pointer-events-none -translate-y-px">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-14 lg:h-20 fill-white">
              <path d="M 0,0 L 0,120 C 300,120 400,0 600,0 C 800,0 900,120 1200,120 L 1200,0 Z" />
            </svg>
          </div>

          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="" 
              className="w-full h-full object-cover opacity-20 mix-blend-luminosity" 
            />
            <div className="absolute inset-0 bg-linear-to-b from-(--charcoal)/80 via-(--charcoal)/40 to-(--charcoal)/80"></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-20 pb-12 text-center pt-10 lg:pt-0">
            <span className="font-serif italic font-bold text-[1.2rem] text-(--brand-orange) mb-4 block">
              Why Us
            </span>
            <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(2.2rem,4.5vw,4.5rem)] text-white leading-none mb-16 lg:mb-20">
              The difference is in the details.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 text-left">
              {WHY_US.map((item, i) => (
                 <div key={i} className="flex flex-col items-start relative group">
                    <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 mb-2 md:mb-0 w-full">
                      <div className="w-14 h-14 shrink-0 relative flex items-center justify-center md:mb-5">
                        <div className="absolute inset-0 bg-(--brand-orange) opacity-20 blob-shape transition-all duration-700 group-hover:blob-shape-alt group-hover:scale-110 group-hover:bg-(--brand-green) group-hover:opacity-40"></div>
                        <span className="font-condensed text-2xl text-(--brand-orange) relative z-10 transition-colors duration-700 group-hover:text-(--brand-green)">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="font-sans font-bold text-[1.25rem] text-white leading-tight md:mb-2">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-sans font-normal text-white/70 leading-relaxed text-[1.05rem]">
                      {item.desc}
                    </p>
                 </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full z-10 leading-none translate-y-1 pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20 fill-white">
              <path d="M0,40 C200,120 400,120 600,60 C800,0 1000,0 1200,80 L1200,120 L0,120 Z" />
            </svg>
          </div>
        </section>

        {/* ── OUR STORY TEASER ── */}
        <section className="bg-white px-6 py-20 lg:py-28 relative z-10 overflow-hidden">
          <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-20 pb-16">
            
            <div className="w-full lg:w-[45%] relative min-h-87.5 lg:min-h-112.5 flex justify-center items-center group">
              <div className="absolute inset-0 bg-(--brand-green) opacity-10 blob-shape-alt translate-x-4 translate-y-4 transition-all duration-1000 group-hover:translate-x-6 group-hover:translate-y-2"></div>
              <img 
                src={storyBg} 
                alt="A recipe passed down through three generations" 
                className="absolute inset-0 w-full h-full object-cover blob-shape shadow-lg transition-all duration-1000 group-hover:blob-shape-alt" 
              />
            </div>

            <div className="w-full lg:w-[50%] flex flex-col items-start justify-center">
              <span className="font-serif italic font-bold text-[1.2rem] text-(--brand-orange) mb-4 block">
                Our Roots
              </span>
              <h2 className="font-sans font-black uppercase tracking-tighter text-[clamp(2.2rem,4.5vw,4.5rem)] text-(--charcoal) mb-5 leading-none">
                A recipe, three generations.
              </h2>
              <p className="font-sans font-normal text-gray-mid text-[1.1rem] mb-8 leading-relaxed max-w-lg">
                It started in a kitchen in New Jersey, but the recipe traveled much further before it got there. A Sunday ritual turned into a small-batch, traditionally cultured craft.
              </p>
              
              <Link
                to="/our-story"
                className="inline-flex items-center text-(--brand-green) font-bold text-[0.95rem] hover:text-(--brand-orange) transition-colors font-sans border-b-2 border-transparent hover:border-(--brand-orange) pb-1"
              >
                Read the full story
              </Link>
            </div>

          </div>

          <div className="absolute bottom-0 left-0 w-full z-10 leading-none translate-y-1">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 md:h-20 fill-(--brand-green)">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.15,195.4,97.58,239.3,85.6,281.44,71.21,321.39,56.44Z" />
            </svg>
          </div>
        </section>

        {/* ── STOCKISTS MAP TEASER ── */}
        <section
          style={{
            background: "var(--brand-green)",
            padding: "clamp(80px, 10vw, 120px) clamp(20px, 5vw, 80px) clamp(60px, 8vw, 100px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.15] pointer-events-none overflow-hidden mix-blend-overlay">
            <svg viewBox="0 0 400 400" className="w-200 h-200 text-white">
              <path d="M50,50 L120,60 L140,150 L110,250 L130,350 L20,380 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M160,80 L180,75 L210,180 L175,230 L150,150 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M220,100 L350,120 L380,250 L300,380 L200,300 L190,200 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              
              <circle cx="165" cy="120" r="6" fill="var(--brand-orange)" />
              <circle cx="185" cy="160" r="8" fill="var(--brand-orange)" />
              <circle cx="250" cy="180" r="6" fill="var(--brand-orange)" />
              <circle cx="280" cy="250" r="9" fill="var(--brand-orange)" />
              <circle cx="120" cy="200" r="7" fill="var(--brand-orange)" />
            </svg>
          </div>

          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              position: "relative",
              zIndex: 2,
              textAlign: "center",
            }}
          >
            <span className="font-serif italic font-bold text-[1.2rem] text-white/90 mb-4 block">
              Tristate Area & Beyond
            </span>

            <h2 className="font-sans font-black uppercase tracking-tighter text-white text-[clamp(2.2rem,4.5vw,4.5rem)] margin-0 mb-4 leading-none">
              Golden Silk is near you.
            </h2>
            <p className="font-sans font-light text-[1.05rem] text-[rgba(255,255,255,0.9)] mb-10 max-w-110 mx-auto mt-4">
              Available at select South Asian grocery stores across New York, New Jersey, and the surrounding areas.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                justifyContent: "center",
                marginBottom: 48,
              }}
            >
              {["Patel Brothers", "Edison Sweet Mart", "Namaste Plaza", "Subzi Mandi", "Apna Bazar"].map((store) => (
                <span
                  key={store}
                  className="font-sans font-semibold text-[0.875rem] text-(--charcoal)"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(255,255,255,1)",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                    borderRadius: 999,
                    padding: "10px 20px",
                  }}
                >
                  {store}
                </span>
              ))}
            </div>

            <Link
              to="/wholesale"
              className="font-sans font-bold text-[0.95rem] text-(--charcoal) transition-transform hover:scale-105"
              style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: 999,
                background: "white",
                padding: "14px 32px",
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
              }}
            >
              Want us in your store? Get in touch
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}