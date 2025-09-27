import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content: "Muscle Tech Fitness transformed my life! The trainers are incredible and the community is so supportive. I've never felt stronger.",
      rating: 5,
      transformation: "Lost 30 lbs in 4 months"
    },
    {
      name: "Mike Rodriguez",
      role: "Busy Professional",
      content: "The flexible membership and 24/7 access fit perfectly with my schedule. The equipment is top-notch and always clean.",
      rating: 5,
      transformation: "Gained 15 lbs muscle"
    },
    {
      name: "Emily Chen",
      role: "Former Athlete",
      content: "Coming back to fitness after injury was scary, but the trainers here made it safe and effective. I'm stronger than ever!",
      rating: 5,
      transformation: "Full recovery & strength gain"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-power text-foreground mb-4">
            Member Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real transformations from real people who chose to build their best selves
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 hover-lift animate-slide-up shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-card-foreground mb-6 text-lg italic">
                "{testimonial.content}"
              </blockquote>

              <div className="border-t border-border pt-4">
                <div className="font-bold text-card-foreground">{testimonial.name}</div>
                <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                <div className="text-primary text-sm font-semibold mt-2">
                  ✨ {testimonial.transformation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;