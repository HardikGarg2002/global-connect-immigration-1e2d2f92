"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TabsAnimated } from "@/components/ui/tabs-animated";
import {
  Users,
  Zap,
  MapPin,
  Briefcase,
  GraduationCap,
  FileText,
  Plane,
  RefreshCw,
  Award,
  Heart,
  Building,
  Wrench
} from "lucide-react";

interface Service {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

interface ServiceCategory {
  id: string;
  label: string;
  services: Service[];
}

const ServicesGrid = () => {
  const serviceCategories: ServiceCategory[] = [
    {
      id: "permanent",
      label: "Permanent Residence",
      services: [
        {
          name: "Express Entry",
          icon: Zap,
          description: "Fast-track your Canadian permanent residence"
        },
        {
          name: "Provincial Nominee Programs",
          icon: MapPin,
          description: "Province-specific immigration pathways"
        },
        {
          name: "Skilled Trades & CEC",
          icon: Wrench,
          description: "Canadian Experience Class programs"
        },
        {
          name: "Business Immigration",
          icon: Building,
          description: "Start-up visa and investor programs"
        }
      ]
    },
    {
      id: "temporary",
      label: "Temporary Residence",
      services: [
        {
          name: "Work Permits",
          icon: Briefcase,
          description: "New applications and renewals"
        },
        {
          name: "Study Permits",
          icon: GraduationCap,
          description: "Student visas and college admissions"
        },
        {
          name: "Visitor Visa",
          icon: Plane,
          description: "Visit Canada temporarily"
        },
        {
          name: "LMIA",
          icon: FileText,
          description: "Labour Market Impact Assessment"
        }
      ]
    },
    {
      id: "family",
      label: "Family & Citizenship",
      services: [
        {
          name: "Spousal & Parental Sponsorship",
          icon: Users,
          description: "Reunite with your loved ones in Canada"
        },
        {
          name: "Citizenship Applications",
          icon: Award,
          description: "Become a Canadian citizen"
        },
        {
          name: "PR Renewals",
          icon: RefreshCw,
          description: "Renew your permanent residence"
        },
        {
          name: "Live-in Caregiver Program",
          icon: Heart,
          description: "LMIA, work permit & PR pathway"
        }
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4 sm:mb-6">
            Our Immigration Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Comprehensive immigration solutions tailored to your unique situation.
            Our licensed RCIC provides expert guidance for all Canadian immigration programs.
          </p>
        </div>

        <TabsAnimated
          tabs={serviceCategories.map((category) => ({
            id: category.id,
            label: category.label,
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {category.services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card
                      key={index}
                      className="group hover:shadow-red transition-all duration-300 border-0 shadow-soft relative overflow-hidden hover:scale-105"
                    >
                      <CardHeader className="text-center pb-4 relative z-10">
                        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-canada-red/10 rounded-xl mb-4 mx-auto group-hover:bg-canada-red group-hover:text-white transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-canada-red group-hover:text-white transition-colors duration-300" />
                        </div>
                        {/* Animated sparkles on hover */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-1 h-1 bg-canada-red/60 rounded-full animate-ping"></div>
                        </div>
                        <div
                          className="absolute top-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ animationDelay: "0.2s" }}
                        >
                          <div className="w-1 h-1 bg-canada-red/40 rounded-full animate-ping"></div>
                        </div>
                        <CardTitle className="text-base sm:text-lg font-poppins text-foreground group-hover:text-canada-red transition-colors duration-300">
                          {service.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <CardDescription className="text-sm sm:text-base text-muted-foreground">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ),
          }))}
          containerClassName="w-full"
          activeTabClassName="bg-canada-red"
        />

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Not sure which service you need? Let us help you find the right path.
          </p>
          <a href="/contact">
            <Button size="lg" className="gradient-primary shadow-red font-semibold px-8">
              Get Free Assessment
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;