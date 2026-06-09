import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const STATS = [
  ["40+", "Years Legacy"],
  ["50K+", "Happy Clients"],
  ["5000+", "Designs"],
];

function Hero({ onScrollTo }) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        boxSizing: "border-box",
        backgroundImage: "url('./banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: isMobile ? "110px 0 70px" : "90px 0 40px",
      }}
    >

      {/* Radial Glow — #e41f59 instead of gold */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: isMobile ? "300px" : "700px",
          height: isMobile ? "300px" : "700px",
          background:
            "radial-gradient(circle, rgba(228,31,89,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* MAIN CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 5%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "40px" : "60px",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* LEFT CONTENT */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? "slide-in-left 0.9s ease forwards" : "none",
              textAlign: isMobile ? "center" : "left",
              width: "100%",
              minWidth: 0,
            }}
          >
            {/* SMALL TAG — border was gold, now #e41f59 */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: isMobile ? "8px 14px" : "10px 18px",
                border: "1px solid rgba(228,31,89,0.4)",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(6px)",
                borderRadius: "50px",
                marginBottom: "24px",
              }}
            >
              <Sparkles size={16} color="#e41f59" />
              <span
                style={{
                  color: "#e41f59",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Luxury Jewellery Collection
              </span>
            </div>

            {/* HEADLINE */}
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile
                  ? "clamp(32px, 8vw, 48px)"
                  : "clamp(54px, 6vw, 78px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: "22px",
                wordBreak: "break-word",
                textShadow: "3px 3px 15px rgba(0,0,0,0.9)",
              }}
            >
              Where Every Jewel
              <br />
              <span style={{ color: "#e41f59" }}>Tells A Story</span>
            </h1>

            {/* SUB TEXT */}
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile ? "17px" : "24px",
                color: "#ffffff",
                lineHeight: 1.8,
                marginBottom: "38px",
                maxWidth: isMobile ? "100%" : "560px",
                marginInline: isMobile ? "auto" : "0",
                textShadow: "2px 2px 10px rgba(0,0,0,0.95)",
                fontWeight: 500,
              }}
            >
              Exquisite handcrafted jewellery that celebrates life's most
              precious moments. From bridal collections to timeless everyday
              elegance.
            </p>

            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <button
                className="btn-gold"
                style={{
                  padding: isMobile ? "13px 24px" : "16px 38px",
                  fontSize: "12px",
                  borderRadius: "4px",
                  width: isMobile ? "100%" : "auto",
                  maxWidth: isMobile ? "260px" : "unset",
                }}
                onClick={() => onScrollTo("Gallery")}
              >
                Explore Collection
              </button>

              {/* Outline button — border & color was gold, now #e41f59 (unchanged, already was #e41f59) */}
              <button
                onClick={() => onScrollTo("About")}
                style={{
                  padding: isMobile ? "13px 24px" : "16px 38px",
                  fontSize: "12px",
                  background: "rgba(0,0,0,0.35)",
                  border: "1.5px solid #e41f59",
                  color: "#e41f59",
                  backdropFilter: "blur(4px)",
                  cursor: "pointer",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  borderRadius: "4px",
                  transition: "all 0.3s",
                  width: isMobile ? "100%" : "auto",
                  maxWidth: isMobile ? "260px" : "unset",
                }}
              >
                Our Story
              </button>
            </div>

            {/* STATS — border was white/gold, stat nums were gold, now #e41f59 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "repeat(3, 1fr)"
                  : "repeat(3, auto)",
                justifyContent: isMobile ? "center" : "flex-start",
                gap: isMobile ? "20px" : "50px",
                marginTop: isMobile ? "42px" : "55px",
                paddingTop: "28px",
                borderTop: "1px solid rgba(228,31,89,0.25)",
              }}
            >
              {STATS.map(([num, label]) => (
                <div
                  key={label}
                  style={{ textAlign: isMobile ? "center" : "left" }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: isMobile ? "22px" : "36px",
                      fontWeight: 700,
                      color: "#e41f59",
                      lineHeight: 1,
                      textShadow: "2px 2px 10px rgba(0,0,0,0.9)",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "9px" : "10px",
                      letterSpacing: "2px",
                      color: "rgba(255,255,255,0.75)",
                      textTransform: "uppercase",
                      marginTop: "8px",
                      lineHeight: 1.5,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;