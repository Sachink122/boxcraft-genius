import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="gradient-navy text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg gradient-orange flex items-center justify-center">
              <span className="font-heading font-bold text-lg">DJ</span>
            </div>
            <div>
              <span className="font-heading font-bold text-lg block">Dr. Jain</span>
              <span className="text-xs text-primary-foreground/70 font-body">Print & Pack</span>
            </div>
          </div>
          <p className="text-primary-foreground/80 text-sm font-body leading-relaxed">
            Trusted manufacturer of corrugated boxes, printed packaging, and custom industrial packaging solutions since 1998.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/80">
            {[
              { label: "About Us", path: "/about" },
              { label: "Products", path: "/products" },
              { label: "Industries", path: "/industries" },
              { label: "Custom Solutions", path: "/custom-solutions" },
              { label: "Request Quote", path: "/request-quote" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-orange transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-4">Our Products</h3>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/80">
            {["Corrugated Boxes", "Printed Corrugated Boxes", "Carton Boxes", "Heavy Duty Shipping Boxes", "Custom Packaging", "Die Cut Boxes"].map((p) => (
              <li key={p}>
                <Link to="/products" className="hover:text-orange transition-colors">{p}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
          <ul className="space-y-3 font-body text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-1 shrink-0 text-orange" />
              <span>Building No. 3, Survey No. 68/3, Naik Pada, Waliv, Vasai East, Palghar - 401208, Maharashtra</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-4 h-4 shrink-0 text-orange" />
              <a href="tel:+918888860797" className="hover:text-orange transition-colors">+91 8888860797</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-4 h-4 shrink-0 text-orange" />
              <a href="mailto:info@drjainprintpack.com" className="hover:text-orange transition-colors">info@drjainprintpack.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60 font-body">
        <p>© {new Date().getFullYear()} Dr. Jain Print & Pack. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Corrugated Box Manufacturer in Vasai, Maharashtra, India</p>
      </div>
    </div>
  </footer>
);

export default Footer;
