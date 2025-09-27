import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Star } from "lucide-react";
// Background image now sourced from public directory

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/IMG_9626.JPG"
          alt="Modern gym interior with professional equipment"
          className="w-full h-full object-cover scale-105 animate-float"
        />
        <div className="absolute inset-0 hero-overlay" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-primary/20 animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-primary/20 backdrop-blur-sm rounded-full p-4 border border-primary/30">
          <Star className="h-6 w-6 text-primary" />
        </div>
      </div>
      
      <div className="absolute top-1/3 right-16 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
        <div className="bg-primary/20 backdrop-blur-sm rounded-full p-4 border border-primary/30">
          <Play className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 mb-4 sm:mb-6 opacity-100">
          <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-wider">
            🔥 #1 Fitness Destination in India
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-power text-primary-foreground mb-4 sm:mb-6 opacity-100 leading-tight">
          <span className="block text-bold-impact">BUILD.</span>
          <span className="block text-power">SWEAT.</span>
          <span className="block text-emphasis">CONQUER.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-foreground/90 mb-4 sm:mb-6 font-bold-condensed opacity-100 leading-tight">
          Transform Your Body at 
          <span className="text-power block sm:inline sm:ml-2 md:ml-3">Muscle Tech Fitness</span>
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-6 sm:mb-8 opacity-100">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-power text-primary">3000+</div>
            <div className="text-xs sm:text-sm md:text-base text-primary-foreground/80 font-bold uppercase tracking-wide">Happy Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-power text-primary">25+</div>
            <div className="text-xs sm:text-sm md:text-base text-primary-foreground/80 font-bold uppercase tracking-wide">Expert Trainers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-power text-primary">24/7</div>
            <div className="text-xs sm:text-sm md:text-base text-primary-foreground/80 font-bold uppercase tracking-wide">Access</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center opacity-100 max-w-2xl mx-auto">
          <Button variant="hero" size="xl" className="power-pulse hover:scale-105 transition-transform duration-300 group w-full sm:w-auto">
            <span className="font-bold text-sm sm:text-base md:text-lg">START 15-DAY FREE TRIAL</span>
            <Play className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline-hero" size="xl" className="hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
            <span className="font-bold text-sm sm:text-base md:text-lg">VIEW MEMBERSHIP PLANS</span>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 sm:mt-8 opacity-100">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-primary-foreground/70 text-xs sm:text-sm md:text-base font-medium">
            <span className="text-emphasis">TRUSTED BY ATHLETES</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-emphasis">PROVEN RESULTS</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-emphasis">NO COMMITMENT</span>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform cursor-pointer group"
      >
        <div className="w-8 h-12 border-2 border-primary-foreground/50 rounded-full flex justify-center items-end pb-2 group-hover:border-primary transition-colors">
          <ChevronDown className="h-4 w-4 text-primary-foreground/50 group-hover:text-primary transition-colors animate-pulse" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;