import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-10">
      <div className="mx-auto w-full max-w-450 px-6 sm:px-10 lg:px-[8vw]">
        
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16 lg:mb-20">
          
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block transition-opacity hover:opacity-80">
              <img
                src={logo}
                alt="Golden Silk Beverages"
                className="h-10 lg:h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 max-w-xs text-[0.95rem] lg:text-[1.05rem] font-medium text-white/70 leading-[1.6]">
              Small-batch lassi, made fresh in New Jersey. Real yogurt, real fruit, real heritage.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-sans font-black uppercase text-[1.2rem] lg:text-[1.4rem] text-white mb-6">
              Shop
            </h4>
            <ul className="space-y-4">
              {[
                { to: "/products", label: "All products" },
                { to: "/products#mango", label: "Mango Lassi" },
                { to: "/products#sweet", label: "Sweet Lassi" },
                { to: "/products#salt", label: "Himalayan Salt Lassi" },
              ].map((l) => (
                <li key={l.to}>
                  <Link 
                    to={l.to} 
                    className="font-sans font-bold uppercase tracking-widest text-[0.8rem] text-white/60 transition-colors hover:text-[#E87A00]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-sans font-black uppercase text-[1.2rem] lg:text-[1.4rem] text-white mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/our-story" className="font-sans font-bold uppercase tracking-widest text-[0.8rem] text-white/60 transition-colors hover:text-[#E87A00]">
                  Our story
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="font-sans font-bold uppercase tracking-widest text-[0.8rem] text-white/60 transition-colors hover:text-[#E87A00]">
                  Wholesale
                </Link>
              </li>
              <li>
                <Link to="/wholesale#pricing" className="font-sans font-bold uppercase tracking-widest text-[0.8rem] text-white/60 transition-colors hover:text-[#E87A00]">
                  Case Pricing
                </Link>
              </li>
              <li>
                <Link to="/wholesale#faq" className="font-sans font-bold uppercase tracking-widest text-[0.8rem] text-white/60 transition-colors hover:text-[#E87A00]">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-sans font-bold uppercase tracking-widest text-[0.8rem] text-white/60 transition-colors hover:text-[#E87A00]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-sans font-black uppercase text-[1.2rem] lg:text-[1.4rem] text-[#E87A00] mb-3">
              Stay in touch
            </h4>
            <p className="text-[0.95rem] font-medium text-white/70 leading-[1.6] mb-5">
              Recipes, new flavors, grocery drops.
            </p>
            
            {/* Sleek inline newsletter form */}
            <form className="relative flex items-center group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                required
                className="w-full border-b-2 border-white/20 bg-transparent py-3 pr-10 font-sans font-bold uppercase tracking-widest text-[0.8rem] text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#E87A00]"
              />
              <button 
                type="submit"
                className="absolute right-0 flex h-full items-center justify-center text-white/30 transition-colors hover:text-[#E87A00] peer-focus:text-[#E87A00]"
                aria-label="Subscribe"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t-2 border-white/10 pt-8 text-center md:text-left">
          <span className="font-sans font-bold uppercase tracking-widest text-[0.65rem] lg:text-[0.75rem] text-white/40">
            © 2026 Golden Silk Beverages. Made with love in NJ.
          </span>
          <span className="font-serif italic font-normal tracking-wide text-[1.1rem] lg:text-[1.3rem] text-[#E87A00]">
            Silky by nature.
          </span>
        </div>
        
      </div>
    </footer>
  );
}