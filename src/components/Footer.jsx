import { useState } from "react";
import { NAV_LINKS } from "../data/constants";

const COLLECTIONS = [
  "Bridal Sets", "Diamond Rings", "Gold Necklaces",
  "Earrings", "Bangles & Kadas", "Customized",
];

function Footer({ onNavClick }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      alert(`${email} — I have subscribed to you! ✨`);
      setEmail("");
    }
  };

  return (
    <footer style={{
      background: "#050D1A",
      padding: "clamp(40px, 8vw, 60px) 5% clamp(24px, 4vw, 30px)",
      borderTop: "1px solid rgba(201,168,76,0.15)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* ── Main grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "clamp(28px, 5vw, 50px)",
          marginBottom: "clamp(32px, 5vw, 50px)",
        }}>

          {/* Brand column */}
          <div>
            <div style={{
              display: "flex", alignItems: "center",
              gap: "12px", marginBottom: "18px",
            }}>
              <div style={{
                width: "36px", height: "36px",
                border: "2px solid #C9A84C",
                transform: "rotate(45deg)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <div style={{ width: "16px", height: "16px", background: "#C9A84C" }} />
              </div>
              <span style={{
                color: "#FDFAF4",
                fontFamily: "'Playfair Display', serif",
                fontSize: "20px",
              }}>
                Jewellery
              </span>
            </div>

            <p style={{
              color: "rgba(253,250,244,0.45)",
              fontSize: "clamp(13px, 2vw, 14px)",
              lineHeight: 1.8, marginBottom: "0",
            }}>
              Crafting timeless jewellery since 1985. Every piece is a
              masterwork of tradition and artistry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={colHeadingStyle}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {NAV_LINKS.map((l) => (
                <span
                  key={l}
                  onClick={() => onNavClick(l)}
                  style={{
                    color: "rgba(253,250,244,0.5)",
                    fontSize: "clamp(12px, 2vw, 14px)",
                    cursor: "pointer", transition: "color 0.3s",
                  }}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 style={colHeadingStyle}>Collections</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {COLLECTIONS.map((c) => (
                <span key={c} style={{
                  color: "rgba(253,250,244,0.5)",
                  fontSize: "clamp(12px, 2vw, 14px)",
                  cursor: "pointer",
                }}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={colHeadingStyle}>Newsletter</h4>
            <p style={{
              color: "rgba(253,250,244,0.45)",
              fontSize: "clamp(12px, 2vw, 14px)",
              marginBottom: "14px", lineHeight: 1.7,
            }}>
              New collections aur exclusive offers ke liye subscribe karein.
            </p>

            <div style={{ display: "flex", width: "100%" }}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                style={{
                  flex: 1,
                  minWidth: 0,
                  padding: "11px 12px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRight: "none",
                  color: "#FDFAF4",
                  fontSize: "13px",
                  outline: "none",
                  borderRadius: "2px 0 0 2px",
                }}
              />
              <button
                className="btn-gold"
                onClick={handleSubscribe}
                style={{
                  padding: "11px 16px",
                  fontSize: "12px",
                  borderRadius: "0 2px 2px 0",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                Go
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          borderTop: "1px solid rgba(201,168,76,0.1)",
          paddingTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}>
          <p style={{
            color: "rgba(253,250,244,0.3)",
            fontSize: "clamp(11px, 2vw, 13px)",
            margin: 0,
          }}>
            © 2025 Jewellers. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div className="decorative-diamond" style={{ width: "6px", height: "6px" }} />
            <span style={{
              color: "rgba(253,250,244,0.3)",
              fontSize: "clamp(11px, 2vw, 13px)",
            }}>
              Made with ♥ for timeless beauty
            </span>
            <div className="decorative-diamond" style={{ width: "6px", height: "6px" }} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const colHeadingStyle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "clamp(13px, 2vw, 16px)",
  color: "#C9A84C",
  letterSpacing: "2px",
  textTransform: "uppercase",
  marginBottom: "16px",
};