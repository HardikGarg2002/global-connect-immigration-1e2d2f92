"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Phone, MessageCircle } from "lucide-react";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-light-gray to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-canada-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-canada-red/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number with gradient */}
          <div className="mb-6">
            <h1 className="text-8xl sm:text-9xl font-poppins font-bold bg-gradient-to-r from-canada-red via-canada-red-light to-canada-red bg-clip-text text-transparent">
              404
            </h1>
          </div>

          {/* Main message */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track with your immigration journey.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto bg-canada-red hover:bg-canada-red-light text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Home className="h-4 w-4 mr-2" />
                Return to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-canada-red text-canada-red hover:bg-canada-red hover:text-white transition-all duration-300">
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="text-canada-red hover:text-canada-red-light transition-colors text-sm font-medium">
                Home
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/#services" className="text-canada-red hover:text-canada-red-light transition-colors text-sm font-medium">
                Services
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/#about" className="text-canada-red hover:text-canada-red-light transition-colors text-sm font-medium">
                About
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/#contact" className="text-canada-red hover:text-canada-red-light transition-colors text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div className="mt-8 p-6 bg-card rounded-xl border border-border shadow-sm">
            <p className="text-sm text-muted-foreground mb-3">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:6044951927" className="flex items-center gap-2 text-foreground hover:text-canada-red transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-medium">604-495-1927</span>
              </a>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <a href="https://wa.me/16047254814?text=Hi, I'm interested in your immigration services." className="flex items-center gap-2 text-foreground hover:text-canada-red transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
