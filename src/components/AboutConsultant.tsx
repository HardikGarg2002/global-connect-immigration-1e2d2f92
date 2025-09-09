import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const AboutConsultant = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-1 shadow-large">
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-canada-red/10 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-canada-red rounded-full flex items-center justify-center">
                    <span className="text-white font-poppins font-bold text-2xl">AA</span>
                  </div>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
                  Ali Anwar
                </h3>
                <p className="text-canada-red font-semibold mb-1">Licensed RCIC Immigration Consultant</p>
                <p className="text-muted-foreground text-sm">RCIC • CICC Member</p>
                
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  <Badge variant="secondary" className="bg-canada-red/10 text-canada-red border-canada-red/20">
                    RCIC Licensed
                  </Badge>
                  <Badge variant="secondary" className="bg-canada-red/10 text-canada-red border-canada-red/20">
                    20+ Years
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-6">
              Meet Your Immigration Expert
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              RCIC licensed consultant with 20+ years of experience helping individuals and families 
              successfully navigate the Canadian immigration system. Ali Anwar is committed to providing 
              honest, transparent advice with personalized attention to every client.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-canada-red/10 rounded-full mb-3">
                  <Clock className="h-6 w-6 text-canada-red" />
                </div>
                <div className="text-2xl font-poppins font-bold text-canada-red">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-canada-red/10 rounded-full mb-3">
                  <Users className="h-6 w-6 text-canada-red" />
                </div>
                <div className="text-2xl font-poppins font-bold text-canada-red">1000+</div>
                <div className="text-sm text-muted-foreground">Successful Cases</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-canada-red/10 rounded-full mb-3">
                  <Award className="h-6 w-6 text-canada-red" />
                </div>
                <div className="text-2xl font-poppins font-bold text-canada-red">95%</div>
                <div className="text-sm text-muted-foreground">Approval Rate</div>
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success-green mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Licensed RCIC (Regulated Canadian Immigration Consultant)</div>
                  <div className="text-sm text-muted-foreground">Member in good standing with CICC</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success-green mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">20+ Years Immigration Law Experience</div>
                  <div className="text-sm text-muted-foreground">Specialized in Express Entry and Family Sponsorship</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-success-green mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Honest & Transparent Practice</div>
                  <div className="text-sm text-muted-foreground">No false promises or hidden fees</div>
                </div>
              </div>
            </div>

            <a href="/about">
              <Button size="lg" variant="outline" className="border-canada-red text-canada-red hover:bg-canada-red hover:text-white">
                Learn More About Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConsultant;