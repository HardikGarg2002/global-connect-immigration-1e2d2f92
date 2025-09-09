import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ];

  const services = [
    { label: "Express Entry", href: "/services/express-entry" },
    { label: "Family Sponsorship", href: "/services/sponsorship" },
    { label: "Work Permits", href: "/services/work-permits" },
    { label: "Study Permits", href: "/services/study-permits" },
    { label: "Business Immigration", href: "/services/business" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Fees", href: "/fees" },
    { label: "Complaints", href: "/complaints" },
    { label: "RCIC Compliance", href: "/rcic-compliance" }
  ];

  return (
    <footer className="bg-professional-gray text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-2xl font-poppins font-bold text-canada-red-light mb-2">
                Global Connect
              </div>
              <div className="text-lg font-poppins font-medium text-white/90 mb-4">
                Immigration
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Honest Advice For All Your Immigration Matters. Licensed RCIC with 20+ years of experience helping individuals and families immigrate to Canada.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex gap-3 mb-6">
              <div className="bg-white/10 rounded px-3 py-1">
                <span className="text-xs font-semibold text-canada-red-light">RCIC</span>
              </div>
              <div className="bg-white/10 rounded px-3 py-1">
                <span className="text-xs font-semibold text-canada-red-light">CICC</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-canada-red-light transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a 
                    href={service.href} 
                    className="text-white/80 hover:text-canada-red-light transition-colors text-sm"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-canada-red-light mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  #208-8556 120 St<br />
                  Surrey B.C. V3W 3N5
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-canada-red-light flex-shrink-0" />
                <a href="tel:6044951927" className="text-white/80 hover:text-canada-red-light transition-colors text-sm">
                  604-495-1927
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <a href="https://wa.me/16047254814" className="text-white/80 hover:text-green-400 transition-colors text-sm">
                  (604) 725-4814
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-canada-red-light flex-shrink-0" />
                <a href="mailto:info@globalconnectmigration.com" className="text-white/80 hover:text-canada-red-light transition-colors text-sm">
                  info@globalconnectmigration.com
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-canada-red-light mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  Monday-Friday<br />
                  9 AM - 6 PM PST
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © {currentYear} Global Connect Immigration. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="text-white/60 hover:text-canada-red-light transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-white/60 text-xs">
              Your information is protected under PIPEDA. We never share client data without consent.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;