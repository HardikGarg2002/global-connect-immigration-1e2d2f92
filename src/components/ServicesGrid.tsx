import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

const ServicesGrid = () => {
  const services = [
    {
      name: "Spousal & Parental Sponsorship",
      icon: Users,
      description: "Reunite with your loved ones in Canada",
      link: "/services/sponsorship"
    },
    {
      name: "Express Entry",
      icon: Zap,
      description: "Fast-track your Canadian permanent residence",
      link: "/services/express-entry"
    },
    {
      name: "Provincial Nominee Programs",
      icon: MapPin,
      description: "Province-specific immigration pathways",
      link: "/services/pnp"
    },
    {
      name: "Work Permits",
      icon: Briefcase,
      description: "New applications and renewals",
      link: "/services/work-permits"
    },
    {
      name: "Study Permits",
      icon: GraduationCap,
      description: "Student visas and college admissions",
      link: "/services/study-permits"
    },
    {
      name: "LMIA",
      icon: FileText,
      description: "Labour Market Impact Assessment",
      link: "/services/lmia"
    },
    {
      name: "Visitor Visa",
      icon: Plane,
      description: "Visit Canada temporarily",
      link: "/services/visitor-visa"
    },
    {
      name: "PR Renewals",
      icon: RefreshCw,
      description: "Renew your permanent residence",
      link: "/services/pr-renewal"
    },
    {
      name: "Citizenship Applications",
      icon: Award,
      description: "Become a Canadian citizen",
      link: "/services/citizenship"
    },
    {
      name: "Live-in Caregiver Program",
      icon: Heart,
      description: "LMIA, work permit & PR pathway",
      link: "/services/caregiver"
    },
    {
      name: "Business Immigration",
      icon: Building,
      description: "Start-up visa and investor programs",
      link: "/services/business"
    },
    {
      name: "Skilled Trades & CEC",
      icon: Wrench,
      description: "Canadian Experience Class programs",
      link: "/services/skilled-trades"
    }
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-6">
            Our Immigration Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive immigration solutions tailored to your unique situation. 
            Our licensed RCIC provides expert guidance for all Canadian immigration programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-red transition-all duration-300 border-0 shadow-soft">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-canada-red/10 rounded-full mb-4 mx-auto group-hover:bg-canada-red group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-canada-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg font-poppins text-foreground group-hover:text-canada-red transition-colors duration-300">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-4">
                    {service.description}
                  </CardDescription>
                  <a href={service.link}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:border-canada-red group-hover:text-canada-red transition-colors duration-300"
                    >
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

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