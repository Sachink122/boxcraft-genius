import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import corrugatedImg from "@/assets/products-corrugated.jpg";
import printedImg from "@/assets/products-printed.jpg";
import cartonImg from "@/assets/products-carton.jpg";
import heavyImg from "@/assets/products-heavy-duty.jpg";
import customImg from "@/assets/products-custom.jpg";
import dieCutImg from "@/assets/products-die-cut.jpg";

const products = [
  { name: "Corrugated Boxes", img: corrugatedImg, desc: "Standard and custom-size corrugated boxes in 3-ply, 5-ply, and 7-ply configurations. Ideal for shipping, storage, and product protection.", features: ["3-ply, 5-ply, 7-ply options", "Custom sizes available", "High burst & compression strength", "Recyclable & eco-friendly"] },
  { name: "Printed Corrugated Boxes", img: printedImg, desc: "High-quality printed corrugated boxes with multi-color flexo and offset printing. Perfect for brand packaging and retail display.", features: ["Multi-color printing", "Custom brand designs", "Flexo & offset printing", "Matte/gloss lamination"] },
  { name: "Carton Boxes", img: cartonImg, desc: "Lightweight yet sturdy carton boxes for retail, FMCG, and consumer goods packaging. Available in white and brown options.", features: ["Lightweight design", "White & brown options", "Perfect for retail packaging", "Food-grade available"] },
  { name: "Heavy Duty Shipping Boxes", img: heavyImg, desc: "Extra-strong double and triple-wall corrugated boxes designed for heavy industrial products and long-distance shipping.", features: ["Double & triple wall", "Extra high strength", "Industrial grade", "Stackable design"] },
  { name: "Custom Packaging Boxes", img: customImg, desc: "Completely customized packaging solutions tailored to your product dimensions, branding requirements, and industry specifications.", features: ["Any size & shape", "Custom inserts & dividers", "Brand-specific design", "Prototype development"] },
  { name: "Die Cut Boxes", img: dieCutImg, desc: "Precision die-cut boxes in unique shapes and designs. Ideal for consumer products, electronics, and specialty packaging.", features: ["Precision die cutting", "Unique shapes", "Self-locking designs", "Display-ready packaging"] },
];

const ProductsPage = () => (
  <>
    <section className="gradient-navy section-padding">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Products</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Complete range of corrugated boxes and packaging solutions for every business need
        </p>
        <div className="w-20 h-1 gradient-orange rounded-full mt-6 mx-auto" />
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto space-y-16">
        {products.map((p, i) => (
          <div key={p.name} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <img src={p.img} alt={p.name} className="rounded-xl shadow-lg w-full" loading="lazy" />
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">{p.name}</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">{p.desc}</p>
              <ul className="space-y-3 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-foreground font-body text-sm">
                    <div className="w-2 h-2 rounded-full bg-orange shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="orange" asChild>
                <Link to="/request-quote">Get Quote <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default ProductsPage;
