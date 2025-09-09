import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael Johnson",
      service: "Spousal Sponsorship",
      rating: 5,
      text: "Ali made our spousal sponsorship process smooth and stress-free. His honest advice and attention to detail got us approved in record time. We couldn't have asked for better guidance.",
      location: "Toronto, ON"
    },
    {
      name: "Rajesh Patel",
      service: "Express Entry",
      rating: 5,
      text: "Thanks to Global Connect Immigration, I received my PR through Express Entry. Ali's expertise and strategic approach made all the difference. Highly recommended!",
      location: "Vancouver, BC"
    },
    {
      name: "Maria Santos",
      service: "Work Permit",
      rating: 5,
      text: "Professional, reliable, and honest. Ali helped me get my work permit renewed without any issues. His transparent communication kept me informed every step of the way.",
      location: "Calgary, AB"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about their experience 
            working with Global Connect Immigration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-medium border-0 hover:shadow-red transition-all duration-300">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-canada-red text-canada-red" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground font-poppins">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-canada-red font-medium">
                    {testimonial.service}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to become our next success story?
          </p>
          <a href="/contact">
            <button className="bg-canada-red hover:bg-canada-red-light text-white font-semibold px-8 py-3 rounded-lg shadow-red transition-all duration-300">
              Start Your Journey Today
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;