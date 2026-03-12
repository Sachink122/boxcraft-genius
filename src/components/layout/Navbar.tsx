import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-full.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Industries", path: "/industries" },
  { label: "Custom Solutions", path: "/custom-solutions" },
  { label: "Manufacturing", path: "/manufacturing" },
  { label: "Instant Quote", path: "/instant-quote" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="gradient-navy">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-primary-foreground text-sm">
          <span className="hidden sm:block font-body truncate">Trusted Corrugated Box Manufacturer Since 1998</span>
          <a href="tel:+918888860797" className="flex items-center gap-2 hover:text-orange transition-colors">
            <Phone className="w-3 h-3" />
            +91 8888860797
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoFull} alt="Dr. Jain Print & Pack - Corrugated Box Manufacturers" className="h-12 sm:h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-body font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-orange bg-orange/10"
                    : "text-foreground hover:text-orange hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="orange" asChild>
              <Link to="/request-quote">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-body font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-orange bg-orange/10"
                    : "text-foreground hover:text-orange hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="orange" className="w-full mt-3" asChild>
              <Link to="/request-quote" onClick={() => setIsOpen(false)}>Request Quote</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
