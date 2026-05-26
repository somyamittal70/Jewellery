import { useInView } from "react-intersection-observer";
import { SectionTitle } from "../components/UI.jsx";
import { ShieldCheck, PenTool, Truck, RotateCcw, Sparkles } from "lucide-react";
import img8 from "../../public/img8.jpg";

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
                  padding: "20px",
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
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>

              {/* Decorative Border */}
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  right: "-14px",
                  bottom: "-14px",
                  border: "3px solid rgba(192, 150, 36, 0.96)",
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
                fontSize: "clamp(17px, 2vw, 21px)",
                color: "#444",
                lineHeight: 1.9,
                marginBottom: "22px",
              }}
            >
              Since 1985, our journey began in the heart of Jaipur. Over three
              generations, we’ve been crafting timeless jewellery that
              celebrates life’s most precious moments.
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
