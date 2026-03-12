import SectionHeading from "@/components/SectionHeading";
import corrugatedImg from "@/assets/products-corrugated.jpg";
import printedImg from "@/assets/products-printed.jpg";
import cartonImg from "@/assets/products-carton.jpg";
import heavyImg from "@/assets/products-heavy-duty.jpg";
import customImg from "@/assets/products-custom.jpg";
import dieCutImg from "@/assets/products-die-cut.jpg";
import heroImg from "@/assets/hero-factory.jpg";
import aboutImg from "@/assets/about-factory.jpg";

const images = [
  { src: heroImg, alt: "Corrugated box manufacturing facility" },
  { src: corrugatedImg, alt: "Corrugated boxes" },
  { src: printedImg, alt: "Printed corrugated boxes" },
  { src: cartonImg, alt: "Carton boxes" },
  { src: heavyImg, alt: "Heavy duty shipping boxes" },
  { src: customImg, alt: "Custom packaging boxes" },
  { src: dieCutImg, alt: "Die cut boxes" },
  { src: aboutImg, alt: "Factory exterior" },
];

const GalleryPage = () => (
  <>
    <section className="gradient-navy section-padding">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Product Gallery</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Explore our wide range of corrugated packaging products and manufacturing facility
        </p>
        <div className="w-20 h-1 gradient-orange rounded-full mt-6 mx-auto" />
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4 bg-card">
                <p className="text-sm font-body text-muted-foreground">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default GalleryPage;
