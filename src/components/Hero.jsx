import { useState, useEffect } from "react";
import { Gem, Diamond, Sparkles, CircleEllipsis } from "lucide-react";
import hero from "../../public/img1.jpg";

const FLOATING_CARDS = [
  { icon: Diamond, label: "Rings", top: "6%", left: "0%", delay: "0s" },
  { icon: Gem, label: "Necklace", top: "6%", right: "0%", delay: "0.5s" },
  { icon: Sparkles, label: "Earrings", bottom: "6%", left: "0%", delay: "1s" },
  {
    icon: CircleEllipsis,
    label: "Bangles",
    bottom: "6%",
    right: "0%",
    delay: "1.5s",
  },
];

const STATS = [
  ["40+", "Years Legacy"],
  ["50K+", "Happy Clients"],
  ["5000+", "Designs"],
];

function Hero({ onScrollTo }) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false,
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
        background:
          "linear-gradient(135deg, #050D1A 0%, #0A1628 40%, #122040 70%, #0A1628 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: isMobile ? "90px 0 80px" : "0",
        maxWidth: "100vw",
        boxSizing: "border-box",
      }}
    >
      {/* Background rotating diamonds */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${10 + i * 12}%`,
              left: `${5 + i * 13}%`,
              width: isMobile ? "30px" : "60px",
              height: isMobile ? "30px" : "60px",
              border: "1px solid #C9A84C",
              transform: "rotate(45deg)",
              animation: `spin-slow ${8 + i * 2}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: isMobile ? "300px" : "700px",
          height: isMobile ? "300px" : "700px",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "0 20px" : "100px 5% 0",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "48px" : "60px",
          alignItems: "center",
          width: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {/* LEFT CONTENT */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            animation: visible ? "slide-in-left 0.9s ease forwards" : "none",
            textAlign: isMobile ? "center" : "left",
            order: isMobile ? 2 : 1,
            overflow: "hidden",
            minWidth: 0,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: "10px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          ></div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: isMobile
                ? "clamp(28px, 8vw, 48px)"
                : "clamp(40px, 6vw, 72px)",
              fontWeight: 700,
              color: "#FDFAF4",
              lineHeight: 1.15,
              marginBottom: "20px",
              wordBreak: "break-word",
            }}
          >
            Where Every Jewel
            <br />
            <span className="gold-text">Tells A Story</span>
          </h1>

          {/* Sub-copy */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? "15px" : "20px",
              color: "rgba(253,250,244,0.65)",
              lineHeight: 1.75,
              marginBottom: "36px",
              maxWidth: isMobile ? "100%" : "480px",
              marginInline: isMobile ? "auto" : "0",
            }}
          >
            Exquisite handcrafted jewellery that celebrates life's most precious
            moments. From bridal collections to everyday elegance.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <button
              className="btn-gold"
              style={{
                padding: isMobile ? "12px 22px" : "16px 36px",
                fontSize: "12px",
                borderRadius: "2px",
              }}
              onClick={() => onScrollTo("Gallery")}
            >
              Explore Collection
            </button>
            <button
              onClick={() => onScrollTo("About")}
              style={{
                padding: isMobile ? "12px 22px" : "16px 36px",
                fontSize: "12px",
                background: "transparent",
                border: "1.5px solid rgba(201,168,76,0.5)",
                color: "#C9A84C",
                cursor: "pointer",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                borderRadius: "2px",
                transition: "all 0.3s",
              }}
            >
              Our Story
            </button>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: isMobile ? "20px" : "40px",
              marginTop: isMobile ? "36px" : "46px",
              paddingTop: "30px",
              borderTop: "1px solid rgba(201,168,76,0.15)",
              flexWrap: "wrap",
              marginBottom: isMobile ? "5px" : "8px",
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
                    fontSize: isMobile ? "20px" : "32px",
                    fontWeight: 700,
                    color: "#C9A84C",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "2px",
                    color: "rgba(253,250,244,0.45)",
                    textTransform: "uppercase",
                    marginTop: "6px",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            animation: visible
              ? "slide-in-right 0.9s ease 0.2s forwards"
              : "none",
            display: "flex",
            justifyContent: "center",
            order: isMobile ? 1 : 2,
            overflow: "hidden",
            minWidth: 0,
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              width: isMobile ? "260px" : "400px",
              height: isMobile ? "320px" : "500px",
              flexShrink: 0,
            }}
          >
            {/* Rotating diamond frame */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%) rotate(45deg)",
                width: isMobile ? "140px" : "220px",
                height: isMobile ? "140px" : "220px",
                border: "2px solid rgba(201,168,76,0.4)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "14px",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              />
            </div>

            {/* Main Image */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: 1,
              }}
            >
              <img
                src={hero}
                alt="Jewellery"
                style={{
                  width: isMobile ? "150px" : "240px",
                  height: isMobile ? "150px" : "240px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  border: "2px solid rgba(201,168,76,0.3)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                }}
              />
            </div>

            {/* Floating Cards */}
            {FLOATING_CARDS.map(
              ({ icon: Icon, label, top, left, right, bottom, delay }) => (
                <div
                  key={label}
                  style={{
                    position: "absolute",
                    top,
                    left,
                    right,
                    bottom,
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    borderRadius: "10px",
                    padding: isMobile ? "7px 9px" : "16px 14px",
                    textAlign: "center",
                    animationDelay: delay,
                    width: isMobile ? "70px" : "84px",
                    boxSizing: "border-box",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      size={isMobile ? 16 : 32}
                      color="#C9A84C"
                      strokeWidth={1.8}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "6px" : "9px",
                      letterSpacing: "1px",
                      color: "#C9A84C",
                      textTransform: "uppercase",
                      marginTop: "4px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ),
            )}

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: isMobile ? "190px" : "320px",
                height: isMobile ? "190px" : "320px",
                border: "1px solid rgba(201,168,76,0.08)",
                borderRadius: "50%",
                animation: "spin-slow 20s linear infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: isMobile ? "240px" : "380px",
                height: isMobile ? "240px" : "380px",
                border: "1px solid rgba(201,168,76,0.05)",
                borderRadius: "50%",
                animation: "spin-slow 30s linear infinite reverse",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator — desktop only */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0.6,
          }}
        >
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              color: "#C9A84C",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "50px",
              background: "linear-gradient(to bottom, #C9A84C, transparent)",
              animation: "fadeIn 2s ease infinite alternate",
            }}
          />
        </div>
      )}
    </section>
  );
}

export default Hero;
