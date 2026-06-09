export function SectionTitle({ title, subtitle, light = false }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "clamp(36px, 6vw, 60px)" }}>
      <p
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(10px, 2.5vw, 13px)",
          letterSpacing: "clamp(2px, 1vw, 4px)",
          textTransform: "uppercase",
          color: "#e41f59",
          marginBottom: "10px",
          fontWeight: 500,
          wordBreak: "break-word",
          padding: "0 16px",
        }}
      >
        {subtitle}
      </p>

      <h2
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(26px, 5vw, 52px)",
          fontWeight: 700,
          color: light ? "#fff" : "#0A1628",
          margin: 0,
          lineHeight: 1.15,
          padding: "0 16px",
          wordBreak: "break-word",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          margin: "16px auto 0",
          width: "clamp(50px, 15vw, 80px)",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #e41f59, transparent)",
        }}
      />
    </div>
  );
}

export function StarRating({ count }) {
  return (
    <div style={{
      display: "flex",
      gap: "clamp(2px, 0.5vw, 3px)",
      marginBottom: "12px",
      flexWrap: "wrap",
    }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            color: "#e41f59",
            fontSize: "clamp(14px, 4vw, 18px)",
            lineHeight: 1,
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}