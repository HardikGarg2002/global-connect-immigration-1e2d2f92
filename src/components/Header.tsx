import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import MobileHeaderSheet from "./header/MobileHeaderSheet";

const Header = () => {
  const navigation = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "#",
      dropdown: [
        { label: "Express Entry", href: "/services/express-entry" },
        { label: "Provincial Nominee Programs", href: "/services/pnp" },
        { label: "Family Sponsorship", href: "/services/sponsorship" },
        { label: "Work Permits", href: "/services/work-permits" },
        { label: "Study Permits", href: "/services/study-permits" },
        { label: "Visitor Visa", href: "/services/visitor-visa" },
        { label: "LMIA", href: "/services/lmia" },
        { label: "PR Renewal", href: "/services/pr-renewal" },
        { label: "Citizenship", href: "/services/citizenship" },
        { label: "Business Immigration", href: "/services/business" },
        { label: "Live-in Caregiver", href: "/services/caregiver" },
        { label: "Skilled Trades & CEC", href: "/services/skilled-trades" },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-poppins font-bold text-canada-red">
              Global Connect
              <span className="block text-sm font-medium text-professional-gray">
                Immigration
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="text-foreground hover:text-canada-red transition-colors font-medium"
                >
                  {item.label}
                </a>
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-large border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-light-gray hover:text-canada-red transition-colors"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:6044951927">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/16047254814?text=Hi, I'm interested in your immigration services.">
              <Button
                variant="default"
                size="sm"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
            <a href="/contact">
              <Button variant="default" size="sm" className="gradient-primary">
                Book Consultation
              </Button>
            </a>
          </div>
          <MobileHeaderSheet navigation={navigation} />
        </div>
      </div>
    </header>
  );
};

export default Header;
