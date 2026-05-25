import { useState } from "react";
import useInView from "../hooks/useInView";
import { SectionTitle } from "../components/UI";

const CONTACT_INFO = [
  {
    icon: "📍",
    label: "Address",
    val: "Second Floor, 14/252, Block-14, Trilokpuri Near Aman Band, East Delhi, Delhi, 110091",
  },
  { icon: "📞", label: "Phone", val: "+91 98716 55831" },
  { icon: "✉️", label: "Email", val: "sakkmr183.sk@gmail.com" },
];

const EMPTY_FORM = { name: "", email: "", phone: "", message: "" };

function Contact() {
  const [ref, inView] = useInView();
  const [formData, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(EMPTY_FORM);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(60px, 10vw, 120px) 5%",
        background: "linear-gradient(135deg, #0A1628 0%, #050D1A 100%)",
        position: "relative",
      }}
    >
      {/* Background decorative diamonds */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${20 + i * 15}%`,
              right: `${5 + i * 8}%`,
              width: "40px",
              height: "40px",
              border: "1px solid #C9A84C",
              transform: "rotate(45deg)",
              animation: `spin-slow ${10 + i * 3}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div
        style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}
      >
        {/* Heading */}
        <div ref={ref} className={`scroll-reveal${inView ? " visible" : ""}`}>
          <SectionTitle title="Get In Touch" subtitle="Contact Us" light />
        </div>

        <div
          className={`scroll-reveal${inView ? " visible" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(32px, 6vw, 60px)",
          }}
        >
          {/* ── Left: info ── */}
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(20px, 4vw, 26px)",
                color: "#FDFAF4",
                marginBottom: "16px",
              }}
            >
              Visit Our Showroom
            </h3>

            <p
              style={{
                color: "rgba(253,250,244,0.6)",
                lineHeight: 1.8,
                marginBottom: "clamp(24px, 5vw, 40px)",
                fontSize: "clamp(14px, 2vw, 16px)",
              }}
            >
              Come to our Showroom and Buy your Dream Jewellery. Free
              consultation available here.
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {CONTACT_INFO.map(({ icon, label, val }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ fontSize: "22px", minWidth: "28px" }}>
                    {icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        letterSpacing: "2px",
                        color: "#C9A84C",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        color: "rgba(253,250,244,0.75)",
                        fontSize: "clamp(13px, 2vw, 15px)",
                        wordBreak: "break-word",
                        lineHeight: 1.6,
                      }}
                    >
                      {val}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(201,168,76,0.15)",
              borderRadius: "4px",
              padding: "clamp(20px, 5vw, 44px)",
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 0",
                  animation: "scale-in 0.4s ease",
                }}
              >
                <div style={{ fontSize: "56px", marginBottom: "20px" }}>✨</div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#C9A84C",
                    fontSize: "clamp(20px, 4vw, 26px)",
                    marginBottom: "12px",
                  }}
                >
                  Thank you!
                </h3>
                <p style={{ color: "rgba(253,250,244,0.6)", lineHeight: 1.7 }}>
                  Message Sent! We will contact you as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: "16px",
                  }}
                >
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input
                      className="input-field"
                      required
                      placeholder="John Deo"
                      value={formData.name}
                      onChange={update("name")}
                      style={{ padding: "12px 16px", width: "100%" }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input
                      className="input-field"
                      placeholder="+91 xxxxx xxxxx"
                      value={formData.phone}
                      onChange={update("phone")}
                      style={{ padding: "12px 16px", width: "100%" }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    className="input-field"
                    type="email"
                    required
                    placeholder="aap@example.com"
                    value={formData.email}
                    onChange={update("email")}
                    style={{ padding: "12px 16px", width: "100%" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    className="input-field"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={update("message")}
                    style={{
                      padding: "12px 16px",
                      resize: "vertical",
                      width: "100%",
                    }}
                  />
                </div>

                <button
                  className="btn-gold"
                  type="submit"
                  style={{
                    padding: "16px",
                    fontSize: "13px",
                    borderRadius: "2px",
                    width: "100%",
                  }}
                >
                  Send Message ✦
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

const labelStyle = {
  fontSize: "11px",
  letterSpacing: "2px",
  color: "#C9A84C",
  textTransform: "uppercase",
  display: "block",
  marginBottom: "8px",
};
