import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-6">
            Ready to Start Your Canadian Journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Book your free consultation today and take the first step toward your Canadian dream.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-canada-red/10 rounded-full">
                    <Phone className="h-6 w-6 text-canada-red" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Office Phone</div>
                    <a href="tel:6044951927" className="text-canada-red hover:underline">
                      604-495-1927
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-600/10 rounded-full">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">WhatsApp</div>
                    <a href="https://wa.me/16047254814" className="text-green-600 hover:underline">
                      (604) 725-4814
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-canada-red/10 rounded-full">
                    <Mail className="h-6 w-6 text-canada-red" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a href="mailto:info@globalconnectmigration.com" className="text-canada-red hover:underline">
                      info@globalconnectmigration.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-canada-red/10 rounded-full">
                    <MapPin className="h-6 w-6 text-canada-red" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Office Address</div>
                    <div className="text-muted-foreground">
                      #208-8556 120 St<br />
                      Surrey B.C. V3W 3N5
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-canada-red/10 rounded-full">
                    <Clock className="h-6 w-6 text-canada-red" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Business Hours</div>
                    <div className="text-muted-foreground">
                      Monday-Friday 9 AM - 6 PM PST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <Card className="border-canada-red/20 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-poppins text-canada-red">
                  Free Consultation Available
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Schedule a personalized consultation with our licensed RCIC to discuss your immigration options.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:6044951927" className="flex-1">
                    <Button variant="outline" className="w-full border-canada-red text-canada-red hover:bg-canada-red hover:text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </a>
                  <a href="https://wa.me/16047254814?text=Hi, I'd like to book a free consultation." className="flex-1">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-foreground">
                Send Us a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Service Required *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                      <SelectItem value="express-entry">Express Entry</SelectItem>
                      <SelectItem value="pnp">Provincial Nominee Program</SelectItem>
                      <SelectItem value="sponsorship">Family Sponsorship</SelectItem>
                      <SelectItem value="work-permit">Work Permit</SelectItem>
                      <SelectItem value="study-permit">Study Permit</SelectItem>
                      <SelectItem value="visitor-visa">Visitor Visa</SelectItem>
                      <SelectItem value="lmia">LMIA</SelectItem>
                      <SelectItem value="pr-renewal">PR Renewal</SelectItem>
                      <SelectItem value="citizenship">Citizenship</SelectItem>
                      <SelectItem value="business">Business Immigration</SelectItem>
                      <SelectItem value="caregiver">Live-in Caregiver</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea
                    placeholder="Please describe your immigration situation and how we can help you... *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full gradient-primary shadow-red font-semibold">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your information is protected under PIPEDA. We never share client data without consent.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;