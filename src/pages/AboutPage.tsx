import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Users, Target, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-factory.jpg";

const AboutPage = () => (
  <>
    {/* Hero */}
    <section className="gradient-navy section-padding">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">About Dr. Jain Print & Pack</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          A legacy of quality corrugated packaging since 1998
        </p>
        <div className="w-20 h-1 gradient-orange rounded-full mt-6 mx-auto" />
      </div>
    </section>

    {/* Content */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={aboutImg} alt="Dr. Jain Print & Pack manufacturing facility" className="rounded-xl shadow-lg w-full" loading="lazy" />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Pioneering Packaging Excellence</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Established in 1998 by Mr. Siddhen A. Jain, Dr. Jain Print & Pack has grown from a small corrugated box manufacturing unit in Vasai, Maharashtra to one of the most trusted packaging solution providers in Western India.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              With over 25 years of expertise, we specialize in manufacturing customized corrugated boxes, printed packaging, carton boxes, and heavy-duty shipping solutions for businesses across diverse industries.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Award, label: "25+ Years Experience" },
                { icon: Users, label: "5000+ Happy Clients" },
                { icon: Target, label: "ISO Quality Standards" },
                { icon: CheckCircle, label: "Pan-India Delivery" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-orange shrink-0" />
                  <span className="font-body text-sm text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
            <Button variant="orange" asChild>
              <Link to="/contact">Contact Us <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              To provide superior quality corrugated packaging solutions that protect products, enhance brand visibility, and offer excellent value to our clients, while maintaining sustainable manufacturing practices.
            </p>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              To be recognized as India's most reliable and innovative corrugated packaging manufacturer, setting industry benchmarks in quality, customization, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
