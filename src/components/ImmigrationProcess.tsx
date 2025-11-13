import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, MessageSquare, FileText, Send, CheckCircle } from "lucide-react";

const ImmigrationProcess = () => {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      number: 1,
      title: "Assessment",
      description: "We evaluate your eligibility and immigration options based on your unique situation and goals.",
      icon: ClipboardCheck,
      color: "text-canada-red"
    },
    {
      number: 2,
      title: "Consultation",
      description: "One-on-one meeting to discuss your pathway, timeline, and answer all your questions.",
      icon: MessageSquare,
      color: "text-canada-red"
    },
    {
      number: 3,
      title: "Documentation",
      description: "We help you gather and prepare all required documents with meticulous attention to detail.",
      icon: FileText,
      color: "text-canada-red"
    },
    {
      number: 4,
      title: "Submission",
      description: "Your application is carefully reviewed and submitted to immigration authorities.",
      icon: Send,
      color: "text-canada-red"
    },
    {
      number: 5,
      title: "Approval",
      description: "Celebrate your success! We guide you through the final steps of your immigration journey.",
      icon: CheckCircle,
      color: "text-canada-red"
    }
  ];

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSteps((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index].sort((a, b) => a - b);
                }
                return prev;
              });
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-canada-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-canada-red rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-6">
            Your Immigration Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A clear, step-by-step process designed to make your Canadian dream a reality
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-border hidden sm:block">
            {/* Animated progress line */}
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-canada-red via-canada-red-light to-canada-red transition-all duration-1000 ease-out"
              style={{ 
                height: `${(activeSteps.length / steps.length) * 100}%`,
              }}
            ></div>
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeSteps.includes(index);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <Card 
                      className={`transition-all duration-700 transform ${
                        isActive 
                          ? 'opacity-100 translate-y-0 shadow-red scale-100' 
                          : 'opacity-30 translate-y-8 scale-95'
                      } border-0`}
                    >
                      <CardContent className="p-6">
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                          <div className={`p-3 rounded-full bg-canada-red/10 ${isActive ? 'animate-pulse' : ''}`}>
                            <Icon className={`h-6 w-6 ${step.color}`} />
                          </div>
                          <h3 className="text-2xl font-poppins font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Circle Indicator */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-20 my-4 md:my-0">
                    <div 
                      className={`w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold text-xl transition-all duration-700 ${
                        isActive 
                          ? 'bg-canada-red border-canada-red text-white shadow-red scale-110' 
                          : 'bg-background border-border text-muted-foreground scale-100'
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Spacer for even distribution */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to start your immigration journey?
          </p>
          <a href="#contact">
            <button className="bg-canada-red hover:bg-canada-red-light text-white font-semibold px-8 py-3 rounded-lg shadow-red transition-all duration-300 hover:scale-105">
              Begin Your Assessment
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationProcess;