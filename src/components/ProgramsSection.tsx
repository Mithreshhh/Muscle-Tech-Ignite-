import { ArrowRight, Star, Zap, Heart, Target, Users, Apple } from "lucide-react";
import personalTraining from "@/assets/personal-training.jpg";
import equipment from "@/assets/equipment.jpg";
import groupClass from "@/assets/group-class.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProgramsSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [programsRef, programsVisible] = useScrollAnimation(0.1);

  const programs = [
    {
      title: "Weight Training",
      description: "Build strength and muscle with our comprehensive weight training programs",
      image: equipment,
      alt: "Professional weight training equipment",
      icon: Zap,
      badge: "STRENGTH",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers for personalized fitness goals",
      image: personalTraining,
      alt: "Personal trainer helping client with weight training",
      icon: Target,
      badge: "1-ON-1",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Group Classes",
      description: "High-energy group workouts that motivate and challenge you",
      image: groupClass,
      alt: "Group fitness class in action",
      icon: Users,
      badge: "ENERGY",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Nutrition Guidance",
      description: "Expert nutrition counseling to complement your fitness journey",
      image: equipment,
      alt: "Nutrition guidance and meal planning",
      icon: Apple,
      badge: "NUTRITION",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Cardio & Endurance",
      description: "Improve cardiovascular health with our cardio training programs",
      image: groupClass,
      alt: "Cardio and endurance training",
      icon: Heart,
      badge: "CARDIO",
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Functional Training",
      description: "Movement-based exercises for real-world strength and mobility",
      image: personalTraining,
      alt: "Functional training exercises",
      icon: Star,
      badge: "FUNCTIONAL",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 text-9xl font-power text-primary rotate-12">TRAIN</div>
        <div className="absolute bottom-1/4 left-10 text-6xl font-power text-primary -rotate-12">GROW</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={headerRef}
          className="text-center mb-12 sm:mb-16 transition-all duration-800 animate-on-scroll animate"
        >
          <div className="inline-block mb-4">
            <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-wider bg-primary/10 px-3 sm:px-4 py-2 rounded-full">
              🏋️ Our Programs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-power text-foreground mb-4 sm:mb-6 leading-tight">
            <span className="text-bold-impact block sm:inline">PROGRAMS &</span>
            <span className="block text-power">SERVICES</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-bold-condensed leading-relaxed">
            Choose from our <span className="text-emphasis">comprehensive range</span> of fitness programs designed to help you achieve your goals
          </p>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 sm:mt-6" />
        </div>

        <div 
          ref={programsRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/30 cursor-pointer ${
                programsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Image Container with Advanced Effects */}
              <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={program.image}
                  alt={program.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                />
                
                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500" />
                
                {/* Floating Badge with Glow Effect */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`bg-gradient-to-r ${program.color} text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    {program.badge}
                  </span>
                </div>

                {/* Animated Icon with Pulse Effect */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`p-3 bg-gradient-to-br ${program.color} rounded-full shadow-lg backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl transition-all duration-500`}>
                    <program.icon className="h-5 w-5 text-white group-hover:animate-pulse" />
                  </div>
                </div>

                {/* Bottom Fade for Smooth Transition */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Enhanced Content Section */}
              <div className="relative p-6 lg:p-8 space-y-4">
                {/* Title with Gradient Text Effect */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-power text-foreground mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {program.title}
                </h3>
                
                {/* Description with Better Typography */}
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium text-sm sm:text-base leading-relaxed">
                  {program.description}
                </p>
                
                {/* Enhanced CTA with Hover Effects */}
                <div className="pt-4 border-t border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm uppercase tracking-wider">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    
                    {/* Interactive Dots */}
                    <div className="flex space-x-1">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color} opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300`} />
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color} opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300 delay-75`} />
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color} opacity-20 group-hover:opacity-60 group-hover:scale-105 transition-all duration-300 delay-150`} />
                    </div>
                  </div>
                </div>

                {/* Subtle Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-800 ${
          programsVisible ? 'animate-on-scroll animate' : 'animate-on-scroll'
        }`} style={{ animationDelay: '1.2s' }}>
          <p className="text-muted-foreground text-lg md:text-xl font-bold-condensed mb-4">
            Can't decide? <span className="text-emphasis">TRY THEM ALL</span> with our free trial!
          </p>
          <div className="inline-flex items-center space-x-2 text-primary font-bold">
            <span>🎯</span>
            <span className="text-sm uppercase tracking-wider">All Programs Included</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;