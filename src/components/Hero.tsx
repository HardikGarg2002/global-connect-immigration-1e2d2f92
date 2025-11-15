"use client";

import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle, Star, Award, Users, TrendingUp } from "lucide-react";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";

const CountUp = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return <span>{count}{suffix}</span>;
};

const FloatingElement = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <div
    className={`animate-[float_6s_ease-in-out_infinite] ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationData, setAnimationData] = useState<unknown>(null);

  useEffect(() => {
    setIsVisible(true);

    // Load Lottie animation from public folder
    fetch("/lottie/canada mapple.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => {
        console.error("Error loading Lottie animation:", error);
      });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-12 sm:py-20">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/canadian-skylines.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-canada-red/40 via-black/50 to-canada-red/30"></div>
      </div>

      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-canada-red/10 via-transparent to-canada-red/5"></div>

        {/* Floating particles - hidden on mobile */}
        <div className="absolute inset-0 hidden sm:block">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-[float_8s_ease-in-out_infinite]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.3}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Geometric shapes - hidden on mobile */}
        <FloatingElement delay={0} className="absolute top-20 left-10 w-20 h-20 border border-white/10 rounded-lg rotate-12 hidden lg:block">
          <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-lg"></div>
        </FloatingElement>

        <FloatingElement delay={2} className="absolute bottom-32 right-20 w-16 h-16 border border-white/10 rounded-full hidden lg:block">
          <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
        </FloatingElement>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Enhanced Content */}
          <div className={`text-white transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-white/20 hover-scale text-sm sm:text-base">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
              <span className="text-xs sm:text-sm font-medium">Licensed RCIC • 20+ Years</span>
            </div>

            {/* Premium typography with gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-poppins font-bold leading-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Honest Advice
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
                For All Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                Immigration Matters
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed font-medium">
              Transform your Canadian dream into reality with expert guidance from a
              <span className="text-white font-semibold"> licensed RCIC consultant</span>.
            </p>

            {/* Premium Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              <div className="text-center p-2 sm:p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover-scale">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                  <CountUp end={20} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-white/80">Years</div>
              </div>
              <div className="text-center p-2 sm:p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover-scale">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                  <CountUp end={98} suffix="%" />
                </div>
                <div className="text-xs sm:text-sm text-white/80">Success</div>
              </div>
              <div className="text-center p-2 sm:p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover-scale">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                  <CountUp end={1000} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-white/80">Clients</div>
              </div>
            </div>

            {/* Trust indicators with animations */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              {[
                { icon: Award, text: "Licensed RCIC" },
                { icon: Star, text: "CICC Member" },
                { icon: TrendingUp, text: "High Success" }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-1.5 sm:gap-2 transition-all duration-300 hover-scale ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                  <span className="text-xs sm:text-sm text-white/90 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a href="/contact" className="group">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-canada-red hover:bg-white/90 shadow-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group-hover:animate-pulse"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 transition-transform group-hover:rotate-12" />
                  Book Consultation
                </Button>
              </a>
              <a href="https://wa.me/16047254814?text=Hi, I'm interested in your immigration services." className="group">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-canada-red font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm bg-white/10"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 transition-transform group-hover:scale-110" />
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Contact Info with enhanced styling */}
            <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-white/90 text-sm sm:text-base">
                <a href="tel:6044951927" className="flex items-center gap-2 hover:text-white transition-all duration-300 hover:scale-105 story-link">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="font-medium">604-495-1927</span>
                </a>
                <span className="hidden sm:block text-white/50">•</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Surrey, BC</span>
                </div>
                <span className="hidden md:block text-white/50">•</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm">Mon-Fri 9 AM - 6 PM</span>
                </div>
              </div>
              <div className="mt-2 sm:mt-3 text-xs text-white/70">
                🏆 Licensed RCIC | 🇨🇦 CICC Member | 📞 Free Consultation
              </div>
            </div>
          </div>

          {/* Premium Visual Element */}
          <div className={`relative lg:block hidden transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            {/* Floating consultant card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                {/* Animated Canada Map */}
                <div className=" relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-canada-red/20 to-transparent rounded-full blur-xl"></div>
                  {animationData ? (
                    <Lottie
                      animationData={animationData}
                      className="w-36 h-36 mx-auto relative z-10"
                      loop={true}
                      autoplay={true}
                    />
                  ) : (
                    <div className="w-36 h-36 mx-auto relative z-10 flex items-center justify-center">
                      <div className="w-16 h-16 border-2 border-white/20 rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>

                {/* Consultant info with premium styling */}
                <div className="text-center mb-8">
                  {/* <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg border-2 border-white/20">
                    <img
                      src="/images/AliAnwar.jpg"
                      alt="Portrait of Ali Anwar"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div> */}
                  <h3 className="text-3xl font-poppins font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent mb-2">
                    Ali Anwar
                  </h3>
                  <p className="text-white/90 font-semibold text-lg mb-1">Licensed RCIC Immigration Consultant</p>
                  <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm">RCIC • CICC • 20+ Years Experience</p>
                </div>

                {/* Enhanced feature list */}
                <div className="space-y-4">
                  {[
                    { icon: Users, text: "1000+ Successful Cases", color: "text-green-400" },
                    { icon: Award, text: "Licensed & Certified Expert", color: "text-yellow-400" },
                    { icon: CheckCircle, text: "Transparent Process", color: "text-blue-400" },
                    { icon: TrendingUp, text: "98% Success Rate", color: "text-purple-400" }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 text-white/90 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover-scale ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                      style={{ animationDelay: `${1 + index * 0.1}s` }}
                    >
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Call to action */}
                <div className="mt-8 p-4 bg-gradient-to-r from-canada-red/20 to-canada-red/10 rounded-xl border border-canada-red/30">
                  <p className="text-center text-white/90 text-sm font-medium">
                    🎯 Start your immigration journey today with a <span className="text-white font-semibold">FREE consultation</span>
                  </p>
                </div>
              </div>

              {/* Floating decorative elements */}
              <FloatingElement delay={1} className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400/20 rounded-full border border-yellow-400/30">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
              </FloatingElement>
              <FloatingElement delay={3} className="absolute -bottom-6 -left-6 w-12 h-12 bg-canada-red/20 rounded-lg border border-canada-red/30">
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-canada-red/10 to-transparent"></div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;