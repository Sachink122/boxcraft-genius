import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BulkOrderPage = () => {
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "", boxType: "",
    length: "", width: "", height: "", quantity: "",
    ply: "3-ply", printing: "no", deliveryLocation: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.boxType.trim() || !form.quantity.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const msg = encodeURIComponent(
      `*Bulk Order Inquiry*\nName: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nBox Type: ${form.boxType}\nSize: ${form.length}×${form.width}×${form.height}cm\nQty: ${form.quantity}\nPly: ${form.ply}\nPrinting: ${form.printing}\nDelivery: ${form.deliveryLocation}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/918668398960?text=${msg}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  const inputClass = "w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-orange";
  const labelClass = "block text-sm font-body font-medium text-foreground mb-1.5";

  return (
    <>
      <section className="gradient-navy section-padding">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Bulk Order & Consultation</h1>
          <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
            Special pricing for bulk orders. Get a free packaging consultation from our experts.
          </p>
          <div className="w-20 h-1 gradient-orange rounded-full mt-6 mx-auto" />
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Discount tiers */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">Bulk Discount Tiers</h2>
              {[
                { qty: "500 - 999", discount: "8% Off" },
                { qty: "1,000 - 4,999", discount: "12% Off" },
                { qty: "5,000 - 9,999", discount: "20% Off" },
                { qty: "10,000+", discount: "25% Off" },
              ].map((tier) => (
                <div key={tier.qty} className="bg-card rounded-lg p-4 border border-border">
                  <div className="font-heading font-bold text-orange text-lg">{tier.discount}</div>
                  <div className="text-sm text-muted-foreground font-body">{tier.qty} boxes</div>
                </div>
              ))}

              <div className="bg-orange/10 rounded-lg p-4 border border-orange/20 mt-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground font-body">Our packaging experts will help you choose the right box type, material, and printing for your products — at no cost.</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 bg-card rounded-xl p-8 border border-border shadow-lg space-y-5">
              <h2 className="text-xl font-heading font-bold text-foreground">Custom Box Order Form</h2>

              <div className="grid md:grid-cols-2 gap-5">
                <div><label className={labelClass}>Name *</label><input className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={100} /></div>
                <div><label className={labelClass}>Company Name</label><input className={inputClass} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} maxLength={100} /></div>
                <div><label className={labelClass}>Phone *</label><input className={inputClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required maxLength={15} /></div>
                <div><label className={labelClass}>Email</label><input type="email" className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} /></div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Box Type *</label>
                  <select className={inputClass} value={form.boxType} onChange={(e) => setForm({ ...form, boxType: e.target.value })} required>
                    <option value="">Select</option>
                    <option>Corrugated Boxes</option>
                    <option>Printed Corrugated Boxes</option>
                    <option>Carton Boxes</option>
                    <option>Heavy Duty Shipping Boxes</option>
                    <option>Custom Packaging Boxes</option>
                    <option>Die Cut Boxes</option>
                  </select>
                </div>
                <div><label className={labelClass}>Quantity *</label><input className={inputClass} value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} placeholder="e.g., 5000" required maxLength={50} /></div>
              </div>

              <div>
                <label className={labelClass}>Box Dimensions (cm)</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input className={inputClass} type="number" placeholder="Length" value={form.length} onChange={(e) => setForm({ ...form, length: e.target.value })} />
                  <input className={inputClass} type="number" placeholder="Width" value={form.width} onChange={(e) => setForm({ ...form, width: e.target.value })} />
                  <input className={inputClass} type="number" placeholder="Height" value={form.height} onChange={(e) => setForm({ ...form, height: e.target.value })} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Board Type</label>
                  <select className={inputClass} value={form.ply} onChange={(e) => setForm({ ...form, ply: e.target.value })}>
                    <option>3-ply</option><option>5-ply</option><option>7-ply</option><option>Double Wall</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Printing Required</label>
                  <select className={inputClass} value={form.printing} onChange={(e) => setForm({ ...form, printing: e.target.value })}>
                    <option value="no">No Printing</option><option value="single">Single Color</option><option value="multi">Multi Color</option><option value="full">Full Color Offset</option>
                  </select>
                </div>
              </div>

              <div><label className={labelClass}>Delivery Location</label><input className={inputClass} value={form.deliveryLocation} onChange={(e) => setForm({ ...form, deliveryLocation: e.target.value })} placeholder="City, State" maxLength={200} /></div>

              <div><label className={labelClass}>Additional Requirements</label><textarea className={`${inputClass} min-h-[80px]`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} /></div>

              <Button variant="orange" size="lg" type="submit" className="w-full">Send Inquiry via WhatsApp</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BulkOrderPage;
