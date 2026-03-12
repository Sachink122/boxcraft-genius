import SectionHeading from "@/components/SectionHeading";
import { ClipboardList, Ruler, Settings, Printer, Scissors, PackageCheck, Truck, CheckCircle } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Order Consultation", desc: "Understanding your product specifications, quantity, and packaging requirements." },
  { icon: Ruler, title: "Design & Planning", desc: "Creating custom box designs with exact dimensions, printing artwork, and structural planning." },
  { icon: Settings, title: "Material Selection", desc: "Selecting the right grade of corrugated board, paper quality, and flute type for optimal strength." },
  { icon: Printer, title: "Printing", desc: "Multi-color flexo or offset printing of your brand design, logos, and product information." },
  { icon: Scissors, title: "Cutting & Creasing", desc: "Precision die-cutting, slotting, and creasing to create the box structure with clean folds." },
  { icon: PackageCheck, title: "Quality Testing", desc: "Burst strength, compression, and drop tests to ensure boxes meet performance standards." },
  { icon: Truck, title: "Packaging & Dispatch", desc: "Careful packaging of finished boxes and timely delivery to your facility." },
  { icon: CheckCircle, title: "After-Sales Support", desc: "Ongoing quality monitoring and support for repeat orders and design improvements." },
];

const ManufacturingPage = () => (
  <>
    <section className="gradient-navy section-padding">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Manufacturing Process</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          From raw material to finished packaging — our quality-controlled manufacturing workflow
        </p>
        <div className="w-20 h-1 gradient-orange rounded-full mt-6 mx-auto" />
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Our Process" subtitle="Every box goes through a rigorous 8-step manufacturing process to ensure top quality." />
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
