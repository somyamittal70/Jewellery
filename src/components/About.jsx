import { useInView } from "react-intersection-observer";
import { SectionTitle } from "../components/UI.jsx";
import {
  ShieldCheck,
  PenTool,
  Truck,
  RotateCcw,
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
        padding: "clamp(50px, 8vw, 100px) 5%",
        background: "#FDFAF4",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(30px, 5vw, 70px)",
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
                  minHeight: "auto",
                  background:
                    "linear-gradient(145deg, #0A1628 0%, #122040 100%)",
                  borderRadius: "12px",
                  position: "relative",
                  overflow: "hidden",
                  padding: "clamp(12px, 2vw, 20px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* IMAGE */}
                <img
                  src="/img8.jpg"
                  alt="Jewellery"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "580px",
                    aspectRatio: "4 / 5",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>

              {/* Decorative Border */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  right: "-12px",
                  bottom: "-12px",
                  border: "2px solid #e41f59",
                  borderRadius: "15px",
                  zIndex: 1,
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
                fontSize: "clamp(16px, 2vw, 21px)",
                color: "#444",
                lineHeight: 1.9,
                marginBottom: "20px",
              }}
            >
              Since 1985, our journey began in the heart of Jaipur. Over three
              generations, we’ve been crafting timeless jewellery that
              celebrates life’s most precious moments.
            </p>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(16px, 2vw, 21px)",
                color: "#666",
                lineHeight: 1.9,
                marginBottom: "35px",
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
                gap: "15px",
                marginBottom: "35px",
              }}
            >
              {FEATURES.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
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
                      fontSize: "clamp(14px, 1.8vw, 16px)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* TRUST BADGES */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "15px",
                marginBottom: "35px",
              }}
            >
              {TRUST_BADGES.map((badge, index) => {
                const Icon = badge.icon;

                return (
                  <div
                    key={index}
                    style={{
                      background: "#fff",
                      padding: "16px",
                      borderRadius: "10px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: "8px",
                    }}
                  >
                    <Icon size={24} color="#e41f59" />

                    <h4
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        color: "#222",
                      }}
                    >
                      {badge.title}
                    </h4>

                    <p
                      style={{
                        margin: 0,
                        fontSize: "12px",
                        color: "#666",
                      }}
                    >
                      {badge.subtitle}
                    </p>
                  </div>
                );
              })}
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