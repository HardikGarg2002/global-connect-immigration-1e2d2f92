import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import Lottie from "lottie-react";

const AboutConsultant = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-1 shadow-large">
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/AliAnwar.jpg"
                    alt="Portrait of Ali Anwar"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4 sm:mb-6">
              Meet Your Immigration Expert
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              RCIC licensed consultant with 20+ years of experience helping individuals and families 
              successfully navigate the Canadian immigration system. Ali Anwar is committed to providing 
              honest, transparent advice with personalized attention to every client.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-canada-red/10 rounded-full mb-3 group-hover:bg-canada-red/20 transition-all duration-300 group-hover:scale-110">
                  <Clock className="h-6 w-6 text-canada-red" />
                </div>
                <div className="text-2xl font-poppins font-bold text-canada-red">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
                {/* Animated counter effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Lottie 
                    animationData={{
                      "v": "5.7.4",
                      "fr": 30,
                      "ip": 0,
                      "op": 60,
                      "w": 100,
                      "h": 100,
                      "nm": "Counter Animation",
                      "ddd": 0,
                      "assets": [],
                      "layers": [
                        {
                          "ddd": 0,
                          "ind": 1,
                          "ty": 4,
                          "nm": "Numbers",
                          "sr": 1,
                          "ks": {
                            "o": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]}, {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 20, "s": [100]}, {"t": 59, "s": [100]}]},
                            "r": {"a": 0, "k": 0},
                            "p": {"a": 0, "k": [50, 50]},
                            "a": {"a": 0, "k": [0, 0]},
                            "s": {"a": 1, "k": [{"i": {"x": [0.667, 0.667], "y": [1, 1]}, "o": {"x": [0.333, 0.333], "y": [0, 0]}, "t": 0, "s": [80, 80]}, {"t": 59, "s": [120, 120]}]}
                          },
                          "ao": 0,
                          "shapes": [
                            {
                              "ty": "gr",
                              "it": [
                                {
                                  "ind": 0,
                                  "ty": "sh",
                                  "ks": {
                                    "a": 0,
                                    "k": {
                                      "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
                                      "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
                                      "v": [[-10, -5], [10, -5], [10, 5], [-10, 5]],
                                      "c": true
                                    }
                                  }
                                },
                                {
                                  "ty": "fl",
                                  "c": {"a": 0, "k": [0.827, 0.184, 0.184, 0.3]},
                                  "o": {"a": 0, "k": 100}
                                }
                              ]
                            }
                          ],
                          "ip": 0,
                          "op": 60,
                          "st": 0
                        }
                      ]
                    }}
                    className="w-20 h-20 absolute -top-2 left-1/2 transform -translate-x-1/2"
                    loop={false}
                  />
                </div>
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