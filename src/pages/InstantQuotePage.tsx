import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const boxTypes = [
  { label: "Corrugated Box (3-ply)", baseRate: 12 },
  { label: "Corrugated Box (5-ply)", baseRate: 18 },
  { label: "Corrugated Box (7-ply)", baseRate: 28 },
  { label: "Printed Corrugated Box", baseRate: 22 },
  { label: "Carton Box", baseRate: 8 },
  { label: "Heavy Duty Shipping Box", baseRate: 32 },
  { label: "Die Cut Box", baseRate: 20 },
  { label: "Custom Packaging Box", baseRate: 25 },
];

const printingOptions = [
  { label: "No Printing", multiplier: 1 },
  { label: "Single Color", multiplier: 1.15 },
  { label: "Multi Color (2-3)", multiplier: 1.3 },
  { label: "Full Color Offset", multiplier: 1.5 },
];

const InstantQuotePage = () => {
  const [form, setForm] = useState({
    boxType: 0,
    length: "",
    width: "",
    height: "",
    quantity: "",
    printing: 0,
  });
  const [estimate, setEstimate] = useState<{ perUnit: number; total: number } | null>(null);

  const calculate = () => {
    const l = parseFloat(form.length);
    const w = parseFloat(form.width);
    const h = parseFloat(form.height);
    const qty = parseInt(form.quantity);

    if (isNaN(l) || isNaN(w) || isNaN(h) || isNaN(qty) || l <= 0 || w <= 0 || h <= 0 || qty <= 0) {
      setEstimate(null);
      return;
    }

    const surfaceArea = 2 * (l * w + w * h + h * l) / 10000; // m²
    const baseRate = boxTypes[form.boxType].baseRate;
    const printMultiplier = printingOptions[form.printing].multiplier;

    let perUnit = surfaceArea * baseRate * printMultiplier * 100;
    // Volume discount
    if (qty >= 10000) perUnit *= 0.75;
    else if (qty >= 5000) perUnit *= 0.8;
    else if (qty >= 1000) perUnit *= 0.88;
    else if (qty >= 500) perUnit *= 0.92;

    perUnit = Math.max(perUnit, 2); // minimum ₹2 per box

    setEstimate({
      perUnit: Math.round(perUnit * 100) / 100,
      total: Math.round(perUnit * qty * 100) / 100,
    });
  };

  const inputClass = "w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-orange";
  const labelClass = "block text-sm font-body font-medium text-foreground mb-1.5";

  return (
    <>
      <section className="gradient-navy section-padding">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Instant Quote Generator</h1>
          <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
            Get an instant price estimate for your packaging requirements
          </p>
          <div className="w-20 h-1 gradient-orange rounded-full mt-6 mx-auto" />
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card rounded-xl p-8 md:p-10 border border-border shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg gradient-orange flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold text-foreground">Price Estimator</h2>
                <p className="text-sm text-muted-foreground font-body">Select options below for an instant estimate</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Box Type *</label>
                  <select className={inputClass} value={form.boxType} onChange={(e) => setForm({ ...form, boxType: parseInt(e.target.value) })}>
                    {boxTypes.map((bt, i) => (
                      <option key={bt.label} value={i}>{bt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Printing *</label>
                  <select className={inputClass} value={form.printing} onChange={(e) => setForm({ ...form, printing: parseInt(e.target.value) })}>
                    {printingOptions.map((po, i) => (
                      <option key={po.label} value={i}>{po.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>Box Dimensions (cm)</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input className={inputClass} type="number" placeholder="Length" value={form.length} onChange={(e) => setForm({ ...form, length: e.target.value })} />
                  <input className={inputClass} type="number" placeholder="Width" value={form.width} onChange={(e) => setForm({ ...form, width: e.target.value })} />
                  <input className={inputClass} type="number" placeholder="Height" value={form.height} onChange={(e) => setForm({ ...form, height: e.target.value })} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Quantity *</label>
                <input className={inputClass} type="number" placeholder="e.g., 1000" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
                <p className="text-xs text-muted-foreground font-body mt-1">Bulk discounts applied automatically: 500+ (8%), 1000+ (12%), 5000+ (20%), 10000+ (25%)</p>
              </div>

              <Button variant="orange" size="lg" className="w-full" onClick={calculate}>
                Get Instant Estimate
              </Button>
            </div>

            {estimate && (
              <div className="mt-8 p-6 rounded-xl bg-orange/10 border border-orange/20">
                <h3 className="text-lg font-heading font-bold text-foreground mb-4">Estimated Quote</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-background rounded-lg p-4 text-center">
                    <div className="text-2xl font-heading font-bold text-orange">₹{estimate.perUnit}</div>
                    <div className="text-sm text-muted-foreground font-body">Per Box</div>
                  </div>
                  <div className="bg-background rounded-lg p-4 text-center">
                    <div className="text-2xl font-heading font-bold text-orange">₹{estimate.total.toLocaleString("en-IN")}</div>
                    <div className="text-sm text-muted-foreground font-body">Total Estimate</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground font-body mb-4">
                  * This is an approximate estimate. Final pricing may vary based on material availability, design complexity, and order specifications.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="orange" asChild>
                    <Link to="/request-quote">Request Exact Quote <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={`https://wa.me/918668398960?text=${encodeURIComponent(`Hi, I got an estimate of ₹${estimate.perUnit}/box for ${form.quantity} ${boxTypes[form.boxType].label} (${form.length}×${form.width}×${form.height}cm, ${printingOptions[form.printing].label}). Total: ₹${estimate.total.toLocaleString("en-IN")}. Please confirm final pricing.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Confirm on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default InstantQuotePage;
