import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/constants";

function Header({ activeNav, onNavClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    const onResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleClick = (link) => {
    onNavClick(link);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(10,22,40,0.96)" : "rgba(10,22,40,0.35)",
          backdropFilter: "blur(14px)",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "1px solid transparent",
          transition: "all 0.35s ease",
          padding: isMobile ? "0 18px" : "0 5%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            height: isMobile ? "70px" : "84px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <div
            onClick={() => handleClick("Home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "10px" : "14px",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <img
              src="/logo.png"
              alt="Jewellery Logo"
              style={{
                width: isMobile ? "40px" : "48px",
                height: isMobile ? "40px" : "48px",
                objectFit: "contain",
              }}
            />

            <h2
              style={{
                color: "#FDFAF4",
                fontFamily: "'Playfair Display', serif",
                fontSize: isMobile ? "20px" : "28px",
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              NF Jewellers
            </h2>
          </div>

          {/* Desktop Nav */}
          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: "30px" }}>
              {NAV_LINKS.map((link) => (
                <span
                  key={link}
                  onClick={() => handleClick(link)}
                  className={`nav-link${activeNav === link ? " active" : ""}`}
                  style={{
                    color: activeNav === link ? "#e41f59" : "rgba(253,250,244,0.85)",
                    cursor: "pointer",
                    fontSize: "13px",
                    letterSpacing: "1.8px",
                    textTransform: "uppercase",
                    transition: "0.3s ease",
                  }}
                >
                  {link}
                </span>
              ))}

              <a href="tel:+919871655831">
                <button
                  className="btn-gold"
                  style={{
                    padding: "11px 22px",
                    fontSize: "11px",
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Call Us!
                </button>
              </a>
            </nav>
          )}

          {/* Mobile Toggle */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
              style={{
                background: "transparent",
                border: "none",
                color: "#e41f59",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: "8px",
                minWidth: "44px",
                minHeight: "44px",
                zIndex: 1100,
              }}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            width: "100%",
            height: "calc(100vh - 70px)",
            background: "rgba(10,22,40,0.98)",
            backdropFilter: "blur(14px)",
            transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.35s ease",
            zIndex: 999,
            padding: "30px 24px",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {NAV_LINKS.map((link) => (
              <div
                key={link}
                onClick={() => handleClick(link)}
                style={{
                  padding: "16px 0",
                  color: activeNav === link ? "#e41f59" : "rgba(253,250,244,0.9)",
                  fontSize: "15px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                  transition: "0.3s ease",
                  minHeight: "44px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {link}
              </div>
            ))}

            <a href="tel:+919871655831" style={{ textDecoration: "none" }}>
              <button
                className="btn-gold"
                style={{
                  width: "100%",
                  marginTop: "24px",
                  padding: "15px",
                  fontSize: "12px",
                  borderRadius: "6px",
                }}
              >
                Call Us!
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;