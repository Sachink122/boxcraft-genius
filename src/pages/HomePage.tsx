import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Package, Printer, Box, Truck, Settings, Scissors, ShoppingCart, Cpu, Pill, Apple, UtensilsCrossed, Factory, CheckCircle, Star, ArrowRight, Phone, Download, Calculator } from "lucide-react";
import heroImg from "@/assets/hero-factory.jpg";
import corrugatedImg from "@/assets/products-corrugated.jpg";
import printedImg from "@/assets/products-printed.jpg";
import cartonImg from "@/assets/products-carton.jpg";
import heavyImg from "@/assets/products-heavy-duty.jpg";
import customImg from "@/assets/products-custom.jpg";
import dieCutImg from "@/assets/products-die-cut.jpg";

const products = [
  { name: "Corrugated Boxes", img: corrugatedImg, desc: "Standard & custom corrugated boxes for all industries" },
  { name: "Printed Corrugated Boxes", img: printedImg, desc: "Multi-color printed boxes with your branding" },
  { name: "Carton Boxes", img: cartonImg, desc: "Lightweight carton boxes for retail & FMCG" },
  { name: "Heavy Duty Boxes", img: heavyImg, desc: "High-strength shipping boxes for heavy products" },
  { name: "Custom Packaging", img: customImg, desc: "Tailor-made packaging for unique requirements" },
  { name: "Die Cut Boxes", img: dieCutImg, desc: "Precision die-cut boxes in any shape" },
];

const industries = [
  { icon: ShoppingCart, name: "E-commerce", desc: "Shipping & delivery packaging" },
  { icon: Cpu, name: "Electronics", desc: "Protective electronics packaging" },
  { icon: Pill, name: "Pharmaceutical", desc: "Compliant pharma packaging" },
  { icon: Apple, name: "FMCG", desc: "Fast-moving consumer goods packaging" },
  { icon: UtensilsCrossed, name: "Food", desc: "Food-grade packaging solutions" },
  { icon: Factory, name: "Industrial", desc: "Heavy-duty industrial packaging" },
];

const capabilities = [
  "Custom box size manufacturing",
  "Multi-color box printing",
  "High-strength corrugated board",
  "Bulk production capacity",
  "Fast delivery for industrial orders",
  "Quality testing & certification",
];

const testimonials = [
  { name: "Rajesh Patel", company: "TechPack Electronics", text: "Dr. Jain Print & Pack has been our trusted packaging partner for over 5 years. Their quality and delivery consistency is unmatched.", rating: 5 },
  { name: "Sneha Deshmukh", company: "FreshBite Foods", text: "We needed food-grade packaging with custom printing and they delivered beyond expectations. Highly recommended!", rating: 5 },
  { name: "Amit Sharma", company: "MedPharma Solutions", text: "Their pharmaceutical packaging meets all compliance standards. Excellent service and competitive pricing.", rating: 5 },
];

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Dr. Jain Print & Pack corrugated box manufacturing facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-navy opacity-85" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/20 text-orange text-sm font-body font-medium mb-6">
              Trusted Since 1998
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Premium Corrugated Box <span className="text-gradient">Manufacturing</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 font-body mb-8 leading-relaxed max-w-2xl">
              India's leading manufacturer of customized corrugated boxes, printed packaging, and industrial packaging solutions. Serving businesses across Maharashtra and India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/request-quote">Get a Free Quote <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+918888860797"><Phone className="w-5 h-5" /> Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "25+", label: "Years Experience" },
              { num: "5000+", label: "Clients Served" },
              { num: "50L+", label: "Boxes Produced" },
              { num: "100%", label: "Quality Assured" },
            ].map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-6 text-center shadow-lg border border-border">
                <div className="text-3xl md:text-4xl font-heading font-bold text-orange mb-1">{s.num}</div>
                <div className="text-sm font-body text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About intro */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading title="Your Trusted Packaging Partner" subtitle="Dr. Jain Print & Pack is a leading corrugated box manufacturer based in Vasai, Maharashtra, delivering top-quality packaging solutions to businesses across India since 1998." />
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { icon: Package, title: "Custom Manufacturing", desc: "Boxes manufactured to your exact specifications in any size, shape, or strength." },
              { icon: Printer, title: "Premium Printing", desc: "Multi-color offset and flexo printing for brand packaging and product display." },
              { icon: Truck, title: "Fast Delivery", desc: "On-time bulk delivery across Maharashtra and pan-India shipping available." },
            ].map((f) => (
              <div key={f.title} className="bg-card rounded-xl p-8 border border-border hover:shadow-lg hover:border-orange/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-lg gradient-orange flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <f.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground font-body">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto">
          <SectionHeading title="Our Products" subtitle="Complete range of corrugated and carton packaging solutions for every industry need." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{p.name}</h3>
                  <p className="text-muted-foreground font-body text-sm mb-4">{p.desc}</p>
                  <Link to="/products" className="text-orange font-body font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading title="Industries We Serve" subtitle="Packaging solutions tailored for diverse industry requirements." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.name} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-md hover:border-orange/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                  <ind.icon className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{ind.name}</h3>
                  <p className="text-sm text-muted-foreground font-body">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Capacity */}
      <section className="section-padding gradient-navy">
        <div className="container mx-auto">
          <SectionHeading title="Industrial Capacity" subtitle="State-of-the-art manufacturing facility with advanced machinery and large-scale production capability." light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { num: "50,000+", label: "Boxes Per Day" },
              { num: "25+", label: "Years Experience" },
              { num: "100+", label: "Business Clients" },
              { num: "6", label: "Product Lines" },
            ].map((s) => (
              <div key={s.label} className="text-center p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
                <div className="text-3xl md:text-4xl font-heading font-bold text-orange mb-2">{s.num}</div>
                <div className="text-sm font-body text-primary-foreground/80">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-3 p-4 rounded-lg bg-primary-foreground/5 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-orange shrink-0" />
                <span className="text-primary-foreground font-body">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading title="Trusted By Leading Brands" subtitle="We serve businesses across e-commerce, pharma, electronics, food, and FMCG industries." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
            {["TechPack Electronics", "FreshBite Foods", "MedPharma Solutions", "SwiftShip Logistics", "GreenLeaf Organics", "UrbanBox E-commerce"].map((name) => (
              <div key={name} className="bg-card rounded-xl p-6 border border-border flex items-center justify-center min-h-[100px] hover:shadow-md hover:border-orange/30 transition-all">
                <span className="text-sm font-heading font-semibold text-muted-foreground text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tools */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto">
          <SectionHeading title="Quick Tools" subtitle="Use our online tools to estimate pricing and find the right box for your needs." />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-8 border border-border text-center hover:shadow-lg transition-all">
              <Calculator className="w-10 h-10 text-orange mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-foreground mb-2">Instant Quote</h3>
              <p className="text-sm text-muted-foreground font-body mb-4">Get instant price estimates online</p>
              <Button variant="orange" size="sm" asChild><Link to="/instant-quote">Try Now</Link></Button>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border text-center hover:shadow-lg transition-all">
              <Box className="w-10 h-10 text-orange mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-foreground mb-2">Box Calculator</h3>
              <p className="text-sm text-muted-foreground font-body mb-4">Find the perfect box size</p>
              <Button variant="orange" size="sm" asChild><Link to="/custom-solutions">Calculate</Link></Button>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border text-center hover:shadow-lg transition-all">
              <Download className="w-10 h-10 text-orange mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-foreground mb-2">Product Catalog</h3>
              <p className="text-sm text-muted-foreground font-body mb-4">Download our full catalog (PDF)</p>
              <Button variant="orange" size="sm" onClick={() => {
                const link = document.createElement("a");
                link.href = "/Dr-Jain-Print-Pack-Catalog.pdf";
                link.download = "Dr-Jain-Print-Pack-Catalog.pdf";
                link.click();
              }}>Download PDF</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto">
          <SectionHeading title="What Our Clients Say" subtitle="Trusted by hundreds of businesses across India." />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-xl p-8 border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange text-orange" />
                  ))}
                </div>
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-heading font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground font-body">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-orange">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Order Custom Packaging?
          </h2>
          <p className="text-lg text-primary-foreground/90 font-body mb-8 max-w-2xl mx-auto">
            Get a free quote for your corrugated box and packaging requirements. We offer competitive pricing for bulk orders.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/request-quote">Request a Quote</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:+918888860797"><Phone className="w-5 h-5" /> Call +91 8888860797</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
