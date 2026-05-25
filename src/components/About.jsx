import { useInView } from "react-intersection-observer";
import { SectionTitle } from "../components/UI.jsx";
import {
  ShieldCheck,
  PenTool,
  Truck,
  RotateCcw,
  Sparkles,
} from "lucide-react";

const FEATURES = [
  "BIS Certified Hallmarked Gold & Silver",
  "Master Artisans with 20+ years experience",
  "Custom & Bespoke jewellery design",
  "Bridal packages with personal styling",
];

const TRUST_BADGES = [
  { icon: ShieldCheck, title: "BIS Hallmark", subtitle: "Certified Gold" },
  { icon: PenTool, title: "Custom Design", subtitle: "Available" },
  { icon: Truck, title: "Free Delivery", subtitle: "Pan India" },
  { icon: RotateCcw, title: "30 Day", subtitle: "Easy Return" },
];

function About({ onScrollTo }) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      style={{
        padding: "clamp(60px, 8vw, 100px) 5%",
        background: "#FDFAF4",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(40px, 6vw, 70px)",
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE */}
          <div
            className={`scroll-reveal-left${inView ? " visible" : ""}`}
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              {/* Main Card */}
              <div
                style={{
                  width: "100%",
                  minHeight: "620px",
                  background:
                    "linear-gradient(145deg, #0A1628 0%, #122040 100%)",
                  borderRadius: "10px",
                  position: "relative",
                  overflow: "hidden",
                  padding: "clamp(24px, 5vw, 40px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {/* Glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-100px",
                    right: "-100px",
                    width: "220px",
                    height: "220px",
                    background: "rgba(201,168,76,0.08)",
                    borderRadius: "50%",
                    filter: "blur(60px)",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      marginBottom: "22px",
                    }}
                  >
                    <Sparkles
                      size={window.innerWidth <= 768 ? 52 : 70}
                      color="#C9A84C"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Heading */}
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(24px, 4vw, 34px)",
                      color: "#C9A84C",
                      marginBottom: "14px",
                      lineHeight: 1.2,
                    }}
                  >
                    Crafted With Love
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "clamp(14px, 2vw, 16px)",
                      color: "rgba(253,250,244,0.68)",
                      lineHeight: 1.8,
                      marginBottom: "36px",
                      maxWidth: "360px",
                    }}
                  >
                    Every jewellery piece is handcrafted by our master artisans
                    with decades of expertise and unmatched attention to detail.
                  </p>

                  {/* TRUST BADGES */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        window.innerWidth <= 480
                          ? "1fr"
                          : "repeat(2, 1fr)",
                      gap: "14px",
                      width: "100%",
                    }}
                  >
                    {TRUST_BADGES.map(
                      ({ icon: Icon, title, subtitle }) => (
                        <div
                          key={title}
                          style={{
                            padding: "18px 14px",
                            border:
                              "1px solid rgba(201,168,76,0.18)",
                            borderRadius: "10px",
                            textAlign: "center",
                            background: "rgba(255,255,255,0.03)",
                            backdropFilter: "blur(8px)",
                            transition: "0.3s ease",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginBottom: "10px",
                            }}
                          >
                            <Icon
                              size={22}
                              color="#C9A84C"
                              strokeWidth={1.8}
                            />
                          </div>

                          <div
                            style={{
                              fontSize: "13px",
                              color: "#C9A84C",
                              fontWeight: 700,
                              letterSpacing: "1px",
                            }}
                          >
                            {title}
                          </div>

                          <div
                            style={{
                              fontSize: "11px",
                              color: "rgba(253,250,244,0.55)",
                              marginTop: "4px",
                            }}
                          >
                            {subtitle}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative Border */}
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  right: "-14px",
                  bottom: "-14px",
                  border: "2px solid rgba(201,168,76,0.18)",
                  borderRadius: "10px",
                  zIndex: -1,
                }}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`scroll-reveal-right${inView ? " visible" : ""}`}
            style={{
              width: "100%",
            }}
          >
            <SectionTitle
              title="Our Legacy of Excellence"
              subtitle="About Us"
            />

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(17px, 2vw, 21px)",
                color: "#444",
                lineHeight: 1.9,
                marginBottom: "22px",
              }}
            >
              Since 1985, our journey began in the heart of Jaipur. Over three
              generations, we’ve been crafting timeless jewellery that celebrates
              life’s most precious moments.
            </p>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(17px, 2vw, 21px)",
                color: "#666",
                lineHeight: 1.9,
                marginBottom: "40px",
              }}
            >
              Every ornament tells a story — from bridal dreams to anniversary
              gifts and family blessings. We transform emotions into elegant
              gold and diamond creations.
            </p>

            {/* FEATURES */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "40px",
              }}
            >
              {FEATURES.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                  }}
                >
                  <div
                    className="decorative-diamond"
                    style={{
                      minWidth: "10px",
                      marginTop: "8px",
                    }}
                  />

                  <span
                    style={{
                      color: "#333",
                      fontSize: "clamp(14px, 2vw, 16px)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <button
              className="btn-gold"
              style={{
                padding: "15px 32px",
                fontSize: "12px",
                borderRadius: "6px",
                width: "100%",
                maxWidth: "260px",
                display: "block",
              }}
              onClick={() => onScrollTo("Contact")}
            >
              Meet Our Artisans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;