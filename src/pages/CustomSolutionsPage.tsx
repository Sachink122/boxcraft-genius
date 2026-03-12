import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Ruler, Palette, Shield, Layers, Box, ArrowRight } from "lucide-react";

const features = [
  { icon: Ruler, title: "Custom Dimensions", desc: "Any length, width, and height to perfectly fit your product. We manufacture boxes from small retail sizes to large industrial dimensions." },
  { icon: Palette, title: "Custom Printing", desc: "Multi-color printing with your brand logo, product info, and design. Available in flexo and offset printing technologies." },
  { icon: Shield, title: "Custom Strength", desc: "Choose from 3-ply, 5-ply, 7-ply, or double-wall construction based on your product weight and shipping requirements." },
  { icon: Layers, title: "Custom Inserts", desc: "Die-cut inserts, partitions, and dividers designed to hold your products securely during transportation." },
  { icon: Box, title: "Custom Styles", desc: "Regular slotted, die-cut, mailer boxes, display boxes, and more — any style to match your specific packaging needs." },
];

const CustomSolutionsPage = () => (
  <>
    <section className="gradient-navy section-padding">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Custom Box Solutions</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Tailor-made packaging designed specifically for your products and brand
        </p>
        <div className="w-20 h-1 gradient-orange rounded-full mt-6 mx-auto" />
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading title="Customization Options" subtitle="Every aspect of your packaging can be customized to your exact specifications." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-xl p-8 border border-border hover:shadow-lg hover:border-orange/30 transition-all group">
              <div className="w-14 h-14 rounded-lg bg-orange/10 flex items-center justify-center mb-5 group-hover:bg-orange/20 transition-colors">
                <f.icon className="w-7 h-7 text-orange" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Box Size Calculator */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto max-w-2xl">
        <SectionHeading title="Box Size Calculator" subtitle="Enter your product dimensions to get the recommended box size." />
        <BoxCalculator />
      </div>
    </section>

    <section className="section-padding gradient-orange">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Need a Custom Solution?</h2>
        <p className="text-primary-foreground/90 font-body mb-8 max-w-xl mx-auto">Our packaging experts will design the perfect box for your product. Get a free consultation today.</p>
        <Button variant="heroOutline" size="lg" asChild>
          <Link to="/request-quote">Request Custom Quote <ArrowRight className="w-5 h-5" /></Link>
        </Button>
      </div>
    </section>
  </>
);

import { useState } from "react";

const BoxCalculator = () => {
  const [dims, setDims] = useState({ length: "", width: "", height: "" });
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const l = parseFloat(dims.length);
    const w = parseFloat(dims.width);
    const h = parseFloat(dims.height);
    if (isNaN(l) || isNaN(w) || isNaN(h) || l <= 0 || w <= 0 || h <= 0) {
      setResult("Please enter valid dimensions.");
      return;
    }
    const boxL = l + 2;
    const boxW = w + 2;
    const boxH = h + 2;
    const volume = (boxL * boxW * boxH) / 1000;
    const ply = volume > 50 ? "5-ply or 7-ply" : volume > 10 ? "5-ply" : "3-ply";
    setResult(`Recommended box: ${boxL} × ${boxW} × ${boxH} cm (incl. 1cm padding). Volume: ${volume.toFixed(1)}L. Suggested: ${ply} corrugated board.`);
  };

  return (
    <div className="bg-card rounded-xl p-8 border border-border">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {(["length", "width", "height"] as const).map((d) => (
          <div key={d}>
            <label className="block text-sm font-body font-medium text-foreground mb-2 capitalize">{d} (cm)</label>
            <input
              type="number"
              value={dims[d]}
              onChange={(e) => setDims({ ...dims, [d]: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-orange"
              placeholder="0"
            />
          </div>
        ))}
      </div>
      <Button variant="orange" className="w-full" onClick={calculate}>Calculate Box Size</Button>
      {result && (
        <div className="mt-4 p-4 rounded-lg bg-orange/10 text-foreground font-body text-sm">{result}</div>
      )}
    </div>
  );
};

export default CustomSolutionsPage;
