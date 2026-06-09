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
          background: scrolled ? "rgb(255, 255, 255)" : "rgb(249, 252, 255)",
          backdropFilter: "blur(14px)",
          borderBottom: scrolled ? "1px solid rgb(255, 255, 255)" : "1px solid transparent",
          transition: "all 0.35s ease",
          padding: isMobile ? "0 14px" : "0 5%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            height: isMobile ? "70px" : "60px",
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
                width: isMobile ? "48px" : "54px",
                height: isMobile ? "48px" : "54px",
                objectFit: "contain",
                flexShrink: "0",
              }}
            />

             <span
              className={[
                "text-[#0A1628] font-bold font-['Playfair_Display',serif] ",
                isMobile ? "text-[18px]" : "text-[27px]",
              ].join(" ")}
              style={{ whiteSpace: "nowrap" }}
            >
              New Fashion Jewellers
            </span>
          </div>

          {/* Desktop Nav */}
          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: "30px", marginLeft: "8px" }}>
              {NAV_LINKS.map((link) => (
                <span
                  key={link}
                  onClick={() => handleClick(link)}
                  className={`nav-link${activeNav === link ? " active" : ""}`}
                  style={{
                    color: activeNav === link ? "#e41f59" : "#0A1628",
                    cursor: "pointer",
                    fontSize: "10px",
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
                  Call Us
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
                Call Us
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;