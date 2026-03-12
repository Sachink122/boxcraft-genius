import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage = () => (
  <>
    <section className="gradient-navy section-padding">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Contact Us</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Get in touch for packaging inquiries, bulk orders, and custom solutions
        </p>
        <div className="w-20 h-1 gradient-orange rounded-full mt-6 mx-auto" />
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Get In Touch</h2>
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Our Address", text: "Building No. 3, Survey No. 68/3, Naik Pada, Opposite Minakshi Industrial Estate, Near Raj Prabha Param Industrial Estate, Waliv, Vasai East, Palghar - 401208, Maharashtra, India" },
                { icon: Phone, title: "Phone", text: "+91 8888860797", href: "tel:+918888860797" },
                { icon: Mail, title: "Email", text: "info@drjainprintpack.com", href: "mailto:info@drjainprintpack.com" },
                { icon: Clock, title: "Working Hours", text: "Monday - Saturday: 9:00 AM - 7:00 PM" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground font-body text-sm hover:text-orange transition-colors">{item.text}</a>
                    ) : (
                      <p className="text-muted-foreground font-body text-sm">{item.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Button variant="orange" asChild>
                <Link to="/request-quote">Request Quote</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+918888860797"><Phone className="w-4 h-4" /> Call Now</a>
              </Button>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-xl overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5!2d72.85!3d19.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIyJzQ4LjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Jain Print & Pack Location"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
