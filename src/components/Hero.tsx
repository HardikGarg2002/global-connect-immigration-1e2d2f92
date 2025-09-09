import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight mb-6">
              Honest Advice For All Your 
              <span className="block text-white/90">Immigration Matters</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Over 20 years of experience handling Canadian immigration cases successfully.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-white" />
                <span className="text-white/90 font-medium">Licensed RCIC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-white" />
                <span className="text-white/90 font-medium">20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-white" />
                <span className="text-white/90 font-medium">High Success Rate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-canada-red hover:bg-white/90 shadow-large font-semibold px-8"
                >
                  Book Free Consultation
                </Button>
              </a>
              <a href="https://wa.me/16047254814?text=Hi, I'm interested in your immigration services.">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-canada-red font-semibold px-8"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row gap-4 text-white/90">
                <a href="tel:6044951927" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>604-495-1927</span>
                </a>
                <span className="hidden sm:block">•</span>
                <span>Surrey, BC</span>
                <span className="hidden sm:block">•</span>
                <span>Monday-Friday 9 AM - 6 PM PST</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:block hidden">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-large">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-poppins font-semibold text-white mb-2">
                  Ali Anwar
                </h3>
                <p className="text-white/90 font-medium">Licensed RCIC Immigration Consultant</p>
                <p className="text-white/80 text-sm">RCIC • CICC • 20+ Years Experience</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span className="text-sm">Personalized immigration strategies</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span className="text-sm">Transparent fees & honest advice</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span className="text-sm">Support throughout the process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;