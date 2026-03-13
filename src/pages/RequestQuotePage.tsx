import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const RequestQuotePage = () => {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", product: "", quantity: "",
    length: "", width: "", height: "", ply: "3-ply", printing: "no", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.product.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const whatsappMsg = encodeURIComponent(
      `*Quote Request*\nName: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nProduct: ${form.product}\nQty: ${form.quantity}\nSize: ${form.length}×${form.width}×${form.height}cm\nPly: ${form.ply}\nPrinting: ${form.printing}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/918668398960?text=${whatsappMsg}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  const inputClass = "w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-orange";
  const labelClass = "block text-sm font-body font-medium text-foreground mb-1.5";

  return (
    <>
      <section className="gradient-navy section-padding">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Request a Quote</h1>
          <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
            Fill in your packaging requirements and get a competitive quote within 24 hours
          </p>
          <div className="w-20 h-1 gradient-orange rounded-full mt-6 mx-auto" />
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 md:p-10 border border-border shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Name *</label>
                <input className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" required maxLength={100} />
              </div>
              <div>
                <label className={labelClass}>Company</label>
                <input className={inputClass} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company name" maxLength={100} />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input type="email" className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="email@example.com" maxLength={255} />
              </div>
              <div>
                <label className={labelClass}>Phone *</label>
                <input className={inputClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXXXXXXX" required maxLength={15} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Product Type *</label>
                <select className={inputClass} value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} required>
                  <option value="">Select product</option>
                  <option>Corrugated Boxes</option>
                  <option>Printed Corrugated Boxes</option>
                  <option>Carton Boxes</option>
                  <option>Heavy Duty Shipping Boxes</option>
                  <option>Custom Packaging Boxes</option>
                  <option>Die Cut Boxes</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Quantity</label>
                <input className={inputClass} value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} placeholder="e.g., 1000 pieces" maxLength={50} />
              </div>
            </div>

            <div>
              <label className={labelClass}>Box Dimensions (cm)</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input className={inputClass} value={form.length} onChange={(e) => setForm({ ...form, length: e.target.value })} placeholder="Length" type="number" />
                <input className={inputClass} value={form.width} onChange={(e) => setForm({ ...form, width: e.target.value })} placeholder="Width" type="number" />
                <input className={inputClass} value={form.height} onChange={(e) => setForm({ ...form, height: e.target.value })} placeholder="Height" type="number" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Board Type</label>
                <select className={inputClass} value={form.ply} onChange={(e) => setForm({ ...form, ply: e.target.value })}>
                  <option>3-ply</option>
                  <option>5-ply</option>
                  <option>7-ply</option>
                  <option>Double Wall</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Printing Required</label>
                <select className={inputClass} value={form.printing} onChange={(e) => setForm({ ...form, printing: e.target.value })}>
                  <option value="no">No Printing</option>
                  <option value="single">Single Color</option>
                  <option value="multi">Multi Color</option>
                  <option value="full">Full Color Offset</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>Additional Requirements</label>
              <textarea className={`${inputClass} min-h-[100px]`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Describe any special requirements..." maxLength={1000} />
            </div>

            <Button variant="orange" size="lg" type="submit" className="w-full">
              Send Quote Request via WhatsApp
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default RequestQuotePage;
