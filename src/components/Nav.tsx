import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/our-story", label: "Our Story" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Handle scroll state for the nav island background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap');

        .nav-island {
          border-radius: 9999px;
          transition: background 0.35s, box-shadow 0.35s;
        }
        .nav-island-scrolled {
          background: #FAF6EE;
          box-shadow: 0 8px 36px rgba(28,28,28,0.12), 0 2px 8px rgba(28,28,28,0.07);
        }
        .nav-island-top {
          background: rgba(250,246,238,0.88);
          box-shadow: 0 4px 20px rgba(28,28,28,0.08);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .nav-link-idle {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1C1C1C;
          text-decoration: none;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nav-link-idle:hover { color: #207B64; }

        .nav-link-active {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #207B64;
          text-decoration: none;
          white-space: nowrap;
        }

        .ws-btn {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #FAF6EE;
          background: #207B64;
          border-radius: 9999px;
          padding: 0.55rem 1.4rem;
          text-decoration: none;
          white-space: nowrap;
          transform: translateY(0); /* FIX: Gives the button a stable base so it doesn't jump on load */
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 10px rgba(32,123,100,0.3);
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .ws-btn:hover {
          background: #1a6354;
          transform: translateY(-1px);
          box-shadow: 0 5px 18px rgba(32,123,100,0.35);
        }
      `}</style>

      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 px-4 pointer-events-none">
        
        {/* The island pill */}
        <div className={`nav-island relative flex items-center justify-between w-full max-w-344 h-13 pl-4 pr-3 pointer-events-auto ${scrolled ? "nav-island-scrolled" : "nav-island-top"}`}>
          
          {/* Logo */}
          <Link to="/" aria-label="Golden Silk Beverages" className="flex items-center shrink-0 z-20">
            <img src={logo} alt="Golden Silk Beverages" className="h-[2.6rem] w-auto" />
          </Link>

          {/* Nav links — Desktop only */}
          <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => isActive ? "nav-link-active" : "nav-link-idle"}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Wholesale — Desktop only (Strictly hidden on mobile) */}
          <div className="hidden md:flex shrink-0 z-20">
            <Link to="/wholesale" className="ws-btn">
              Wholesale
            </Link>
          </div>

          {/* Hamburger Menu Icon — Mobile only */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center text-[#1C1C1C] bg-transparent border-none p-2 cursor-pointer transition-colors hover:text-[#207B64] z-20"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>

          {/* Sleek Top-Right Mobile Dropdown */}
          {open && (
            <>
              {/* Invisible backdrop to close menu when clicking outside */}
              <div 
                className="fixed inset-0 z-40 md:hidden" 
                onClick={() => setOpen(false)}
              />
              
              {/* FIX: Removed the conflicting transition-all and transform classes that caused the layout jumping on mount */}
              {/* The Dropdown Card */}
              <div className="absolute top-[120%] right-0 z-50 w-56 rounded-4xl bg-[#FAF6EE] shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-[#1C1C1C]/5 p-5 flex flex-col gap-5 md:hidden">
                <nav className="flex flex-col gap-4">
                  {LINKS.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) => 
                        `font-sans font-black text-[1.05rem] tracking-widest uppercase transition-colors ${
                          isActive ? "text-[#207B64]" : "text-[#1C1C1C] hover:text-[#207B64]"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>

                {/* Separator line */}
                <div className="h-0.5 w-full bg-linear-to-r from-[#E87A00]/50 to-transparent" />

                <Link
                  to="/wholesale"
                  onClick={() => setOpen(false)}
                  className="ws-btn text-center"
                >
                  Wholesale
                </Link>
              </div>
            </>
          )}

        </div>
      </header>
    </>
  );
}