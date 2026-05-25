import useInView from "../hooks/useInView";
import { SectionTitle } from "../components/UI";

// Images
import ringImg from "../../public/img7.jpg";
import necklaceImg from "../../public/img2.jpg";
import earringsImg from "../../public/img3.jpg";
import banglesImg from "../../public/img4.jpg";
import bridalImg from "../../public/img5.jpg";
import pendantImg from "../../public/img6.jpg";

const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Rings",
    name: "Royal Diamond Ring",
    desc: "Elegant handcrafted diamond ring for timeless beauty.",
    img: ringImg,
  },
  {
    id: 2,
    category: "Necklace",
    name: "Luxury Necklace Set",
    desc: "Premium necklace crafted with exquisite detailing.",
    img: necklaceImg,
  },
  {
    id: 3,
    category: "Earrings",
    name: "Golden Earrings",
    desc: "Classic earrings designed for modern elegance.",
    img: earringsImg,
  },
  {
    id: 4,
    category: "Bangles",
    name: "Traditional Bangles",
    desc: "Beautiful gold bangles inspired by royal heritage.",
    img: banglesImg,
  },
  {
    id: 5,
    category: "Bridal",
    name: "Bridal Collection",
    desc: "Exclusive bridal jewellery collection for weddings.",
    img: bridalImg,
  },
  {
    id: 6,
    category: "Pendant",
    name: "Diamond Pendant",
    desc: "Minimal and luxurious pendant for everyday wear.",
    img: pendantImg,
  },
];

function Gallery() {
  const [ref, inView] = useInView();

  return (
    <section
      id="gallery"
      style={{
        padding: "120px 5%",
        background: "linear-gradient(180deg, #0A1628 0%, #122040 100%)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <div ref={ref} className={`scroll-reveal${inView ? " visible" : ""}`}>
          <SectionTitle
            title="Our Exquisite Collection"
            subtitle="Gallery"
            light
          />
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "28px",
            marginTop: "60px",
          }}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className="gallery-card"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "8px",
                overflow: "hidden",
                opacity: inView ? 1 : 0,
                animation: inView
                  ? `scale-in 0.5s ease ${i * 0.1}s forwards`
                  : "none",
                transition: "all 0.4s ease",
                cursor: "pointer",
              }}
            >
              {/* Image */}
              <div
                className="gallery-image"
                style={{
                  height: "320px",
                  overflow: "hidden",
                  borderBottom: "1px solid rgba(201,168,76,0.1)",
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                />
              </div>

              {/* Card Content */}
              <div style={{ padding: "24px" }}>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "3px",
                    color: "#C9A84C",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {item.category}
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "22px",
                    color: "#FDFAF4",
                    marginBottom: "10px",
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(253,250,244,0.6)",
                    lineHeight: "1.7",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Effects */}
      <style>
        {`
          .gallery-card:hover {
            transform: translateY(-10px);
            border: 1px solid rgba(201,168,76,0.5);
            box-shadow: 0 15px 35px rgba(0,0,0,0.35);
          }

          .gallery-card:hover img {
            transform: scale(1.08);
          }
        `}
      </style>
    </section>
  );
}

export default Gallery;