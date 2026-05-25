import useInView from "../hooks/useInView";
import { SectionTitle, StarRating } from "../components/UI";
import { TESTIMONIALS } from "../data/constants";
import { Star, Award, ShieldCheck, Truck } from "lucide-react";

const TRUST_BADGES = [
  { icon: Star,       title: "4.9/5 Rating",   sub: "10,000+ Reviews"   },
  { icon: Award,      title: "Award Winning",   sub: "Best Jeweller 2023"},
  { icon: ShieldCheck,title: "100% Genuine",    sub: "BIS Hallmarked"    },
  { icon: Truck,      title: "Free Delivery",   sub: "Pan India"         },
];

function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section
      id="testimonials"
      style={{
        padding: "clamp(60px, 10vw, 120px) 5%",
        background: "#FDFAF4",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Heading */}
        <div ref={ref} className={`scroll-reveal${inView ? " visible" : ""}`}>
          <SectionTitle title="What Our Clients Say" subtitle="Testimonials" />
        </div>

        {/* Review cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "clamp(16px, 3vw, 28px)",
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="testimonial-card"
              style={{
                background: "#fff",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "4px",
                padding: "clamp(20px, 4vw, 36px)",
                position: "relative",
                overflow: "hidden",
                opacity: inView ? 1 : 0,
                animation: inView ? `fadeUp 0.6s ease ${i * 0.15}s forwards` : "none",
              }}
            >
              {/* Gold top accent line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: "3px",
                background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
              }} />

              {/* Opening quote mark */}
              <div style={{
                fontSize: "clamp(36px, 6vw, 48px)",
                color: "rgba(201,168,76,0.15)",
                fontFamily: "Georgia",
                lineHeight: 1, marginBottom: "14px",
              }}>
                "
              </div>

              <StarRating count={t.rating} />

              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(14px, 2vw, 16px)",
                fontStyle: "italic",
                color: "#555",
                lineHeight: 1.8,
                marginBottom: "clamp(18px, 4vw, 28px)",
              }}>
                {t.text}
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "44px", height: "44px", flexShrink: 0,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0A1628, #C9A84C)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, color: "#fff",
                  fontSize: "13px", fontFamily: "'Lato', sans-serif",
                }}>
                  {t.avatar}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{
                    fontWeight: 700, color: "#0A1628",
                    fontSize: "clamp(13px, 2vw, 15px)",
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontSize: "12px", color: "#C9A84C", letterSpacing: "1px",
                  }}>
                    {t.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges strip */}
        <div
          className={`scroll-reveal${inView ? " visible" : ""}`}
          style={{
            marginTop: "clamp(40px, 6vw, 70px)",
            padding: "clamp(24px, 4vw, 40px) clamp(16px, 4vw, 40px)",
            background: "linear-gradient(135deg, #0A1628, #122040)",
            borderRadius: "clamp(16px, 3vw, 30px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "clamp(20px, 4vw, 30px)",
          }}
        >
          {TRUST_BADGES.map(({ icon: Icon, title, sub }) => (
            <div key={title} style={{ textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                <Icon size={28} color="#C9A84C" strokeWidth={1.8} />
              </div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                color: "#C9A84C",
                fontSize: "clamp(13px, 2vw, 16px)",
                marginBottom: "4px",
              }}>
                {title}
              </div>
              <div style={{
                fontSize: "clamp(10px, 1.5vw, 12px)",
                color: "rgba(253,250,244,0.5)", letterSpacing: "1px",
              }}>
                {sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;