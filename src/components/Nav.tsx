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
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 10px rgba(32,123,100,0.3);
          flex-shrink: 0;
        }
        .ws-btn:hover {
          background: #1a6354;
          transform: translateY(-1px);
          box-shadow: 0 5px 18px rgba(32,123,100,0.35);
        }

        /* Mobile menu */
        .mobile-menu {
          position: fixed; inset: 0; z-index: 60;
          display: flex; flex-direction: column;
          background: #FAF6EE;
        }
        .mobile-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 2rem; font-weight: 900;
          letter-spacing: -0.01em; text-transform: uppercase;
          color: #1C1C1C; text-decoration: none;
          transition: color 0.2s;
        }
        .mobile-link:hover { color: #207B64; }
      `}</style>

      {/* Fixed header — transparent, just positions the island */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: "transparent",
          pointerEvents: "none",
          display: "flex",
          justifyContent: "center",
          /* Gap above the island */
          paddingTop: "0.55rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        {/* The island pill */}
        <div
          className={`nav-island ${scrolled ? "nav-island-scrolled" : "nav-island-top"}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            height: "3.25rem",
            padding: "0 0.6rem 0 0.9rem",
            pointerEvents: "auto",
            width: "100%",
            maxWidth: "86rem",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Golden Silk Beverages"
            style={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}
          >
            <img src={logo} alt="Golden Silk Beverages" style={{ height: "2.6rem", width: "auto" }} />
          </Link>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Nav links — desktop only */}
          <nav
            className="hidden md:flex"
            style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}
          >
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

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Wholesale — desktop only */}
          <Link to="/wholesale" className="ws-btn hidden md:flex">
            Wholesale
          </Link>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "#1C1C1C", padding: "0.25rem 0.5rem",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      {open && (
        <div className="mobile-menu">
          <div style={{ display: "flex", height: "4rem", alignItems: "center", justifyContent: "space-between", padding: "0 1.25rem" }}>
            <img src={logo} alt="Golden Silk Beverages" style={{ height: "2.25rem", width: "auto" }} />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#1C1C1C" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </button>
          </div>

          <div style={{ height: "2px", background: "linear-gradient(90deg, #E87A00 40%, transparent 100%)" }} />

          <nav style={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem" }}>
            {LINKS.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="mobile-link">
                {link.label}
              </Link>
            ))}
            <Link
              to="/wholesale"
              onClick={() => setOpen(false)}
              style={{
                marginTop: "0.75rem",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.8rem", fontWeight: 900,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#FAF6EE", background: "#207B64",
                padding: "0.85rem 2.75rem", borderRadius: "9999px",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(32,123,100,0.25)",
              }}
            >
              Wholesale
            </Link>
          </nav>

          <p style={{
            textAlign: "center", padding: "1.5rem",
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic", fontSize: "0.9rem", color: "#6B6B6B",
          }}>
            Three lassis. Made fresh.
          </p>
        </div>
      )}
    </>
  );
}