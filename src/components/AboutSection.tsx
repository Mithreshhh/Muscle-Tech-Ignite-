import { Dumbbell, Users, Clock, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [featuresRef, featuresVisible] = useScrollAnimation(0.1);

  const features = [
    {
      icon: Award,
      title: "Certified Trainers",
      description: "Expert guidance from certified fitness professionals",
      stat: "25+ Pros"
    },
    {
      icon: Dumbbell,
      title: "Modern Equipment",
      description: "State-of-the-art fitness equipment and facilities",
      stat: "Latest Tech"
    },
    {
      icon: Clock,
      title: "Flexible Memberships",
      description: "Plans that fit your schedule and lifestyle",
      stat: "24/7 Access"
    },
    {
      icon: Users,
      title: "Community & Support",
      description: "Join a motivated community of fitness enthusiasts",
      stat: "3000+ Members"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={headerRef}
          className="text-center mb-12 sm:mb-16 transition-all duration-800 animate-on-scroll animate"
        >
          <div className="inline-block mb-4">
            <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-wider bg-primary/10 px-3 sm:px-4 py-2 rounded-full">
              💪 Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-power text-primary-foreground mb-4 sm:mb-6 leading-tight">
            <span className="text-bold-impact block sm:inline">WHY TRAIN</span>
            <span className="block text-power">WITH US?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-4xl mx-auto font-bold-condensed leading-relaxed">
            Experience the <span className="text-emphasis">ultimate fitness transformation</span> with our world-class facilities and expert guidance
          </p>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 sm:mt-6" />
        </div>

        <div 
          ref={featuresRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover-lift transition-all duration-800 animate-on-scroll animate p-4 sm:p-6"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-4 sm:mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg mx-auto">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-accent text-primary-foreground text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {feature.stat}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                <span className="text-bold-impact">{feature.title}</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground group-hover:text-primary-foreground/90 transition-colors duration-300 font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 transition-all duration-800 animate-on-scroll animate" style={{ animationDelay: '1s' }}>
          <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl lg:text-2xl font-bold-condensed">
            Ready to <span className="text-emphasis">TRANSFORM YOUR BODY</span>?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;