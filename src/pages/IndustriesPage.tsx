import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Cpu, Pill, Apple, UtensilsCrossed, Factory, ArrowRight } from "lucide-react";

const industries = [
  { icon: ShoppingCart, name: "E-commerce Packaging", desc: "Custom shipping boxes, mailer boxes, and branded packaging for e-commerce businesses. Our boxes are designed to withstand the rigors of courier delivery while presenting your brand beautifully.", solutions: ["Custom mailer boxes", "Branded shipping boxes", "Tamper-evident packaging", "Return-friendly designs"] },
  { icon: Cpu, name: "Electronics Packaging", desc: "Anti-static and protective corrugated packaging for electronic components, devices, and appliances. Engineered for maximum product safety during transit.", solutions: ["Anti-static packaging", "Custom foam inserts", "Double-wall protection", "Component dividers"] },
  { icon: Pill, name: "Pharmaceutical Packaging", desc: "Compliant and secure packaging for pharmaceutical products, medical devices, and healthcare supplies. Meeting all regulatory standards.", solutions: ["FDA-compliant materials", "Temperature-resistant boxes", "Tamper-proof packaging", "Batch tracking labels"] },
  { icon: Apple, name: "FMCG Packaging", desc: "High-volume printed packaging for fast-moving consumer goods with eye-catching designs and durable construction for retail shelf display.", solutions: ["High-volume production", "Retail-ready packaging", "Multi-color printing", "POS display boxes"] },
  { icon: UtensilsCrossed, name: "Food Packaging", desc: "Food-grade corrugated packaging for bakeries, restaurants, food processors, and catering services. Safe, hygienic, and customizable.", solutions: ["Food-grade materials", "Grease-resistant options", "Ventilated designs", "Custom window cutouts"] },
  { icon: Factory, name: "Industrial Packaging", desc: "Heavy-duty packaging solutions for machinery, auto parts, industrial components, and bulk goods. Built to handle maximum weight and rough handling.", solutions: ["Heavy-duty construction", "Pallet-sized boxes", "Custom crating", "Moisture-resistant options"] },
];

const IndustriesPage = () => (
  <>
    <section className="gradient-navy section-padding">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Industries We Serve</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Specialized packaging solutions for every industry vertical
        </p>
        <div className="w-20 h-1 gradient-orange rounded-full mt-6 mx-auto" />
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto space-y-8">
        {industries.map((ind) => (
          <div key={ind.name} className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-16 h-16 rounded-xl gradient-orange flex items-center justify-center shrink-0">
                <ind.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-heading font-bold text-foreground mb-3">{ind.name}</h2>
                <p className="text-muted-foreground font-body mb-4">{ind.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ind.solutions.map((s) => (
                    <span key={s} className="px-3 py-1 bg-orange/10 text-orange text-sm font-body rounded-full">{s}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-start shrink-0">
                <Button variant="outline" asChild>
                  <Link to="/request-quote">Get Quote <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default IndustriesPage;
