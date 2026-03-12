import SectionHeading from "@/components/SectionHeading";
import { Cylinder, Layers, Scissors, Printer, Box, FoldVertical, CheckCircle } from "lucide-react";

const steps = [
  { icon: Cylinder, title: "Paper Roll Selection", desc: "Selecting the right grade of kraft paper and fluting medium rolls based on required strength and finish." },
  { icon: Layers, title: "Corrugation Process", desc: "Feeding paper through corrugation rollers to create the fluted medium, then bonding with liner sheets using starch-based adhesive." },
  { icon: Scissors, title: "Sheet Cutting", desc: "Cutting large corrugated sheets into precise dimensions as per box design specifications." },
  { icon: Printer, title: "Printing", desc: "Multi-color flexo or offset printing of your brand logo, product details, and design artwork on the box surface." },
  { icon: Box, title: "Die Cutting", desc: "Precision die-cutting and creasing to create the exact box shape, slots, flaps, and fold lines." },
  { icon: FoldVertical, title: "Folding & Gluing", desc: "Machine folding along creased lines and applying adhesive to join box panels into the final structure." },
  { icon: CheckCircle, title: "Final Quality Check", desc: "Rigorous quality inspection including burst strength test, compression test, and visual inspection before dispatch." },
];

const ManufacturingPage = () => (
  <>
    <section className="gradient-navy section-padding">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Manufacturing Process</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          From raw material to finished packaging — our quality-controlled manufacturing workflow
        </p>
        <div className="w-20 h-1 gradient-orange rounded-full mt-6 mx-auto" />
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Our 7-Step Process" subtitle="Every box goes through a rigorous manufacturing process to ensure top quality." />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-6 items-start">
                <div className="relative z-10 w-16 h-16 rounded-full gradient-orange flex items-center justify-center shrink-0 shadow-lg">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="bg-card rounded-xl p-6 border border-border flex-1 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-body font-medium text-orange bg-orange/10 px-2 py-0.5 rounded-full">Step {i + 1}</span>
                    <h3 className="text-lg font-heading font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-body text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ManufacturingPage;
