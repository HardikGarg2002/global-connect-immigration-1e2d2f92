"use client";

import { ClipboardCheck, MessageSquare, FileText, Send, CheckCircle } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

const ImmigrationProcess = () => {
  const timelineData = [
    {
      title: "Assessment",
      content: "We evaluate your eligibility and immigration options based on your unique situation and goals.",
      icon: ClipboardCheck,
    },
    {
      title: "Consultation",
      content: "One-on-one meeting to discuss your pathway, timeline, and answer all your questions.",
      icon: MessageSquare,
    },
    {
      title: "Documentation",
      content: "We help you gather and prepare all required documents with meticulous attention to detail.",
      icon: FileText,
    },
    {
      title: "Submission",
      content: "Your application is carefully reviewed and submitted to immigration authorities.",
      icon: Send,
    },
    {
      title: "Approval",
      content: "Celebrate your success! We guide you through the final steps of your immigration journey.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-canada-red/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-canada-red/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-6">
            Your Immigration Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A clear, step-by-step process designed to make your Canadian dream a
            reality
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Timeline data={timelineData} />
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
