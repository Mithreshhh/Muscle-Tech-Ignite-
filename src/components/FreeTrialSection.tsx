import { Button } from "@/components/ui/button";

const FreeTrialSection = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-power text-primary-foreground mb-4 sm:mb-6 animate-slide-up leading-tight">
          <span className="block sm:inline">15 Days</span> <span className="text-primary">FREE.</span>
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-power text-primary mb-6 sm:mb-8 animate-slide-up [animation-delay:0.2s]">
          No Excuses.
        </h3>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto animate-slide-up [animation-delay:0.4s] leading-relaxed">
          Experience the grind, the energy, the results. Commit only when you're ready.
        </p>

        <div className="animate-slide-up [animation-delay:0.6s] mb-6 sm:mb-8">
          <Button variant="power" size="xl" className="text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 w-full sm:w-auto hover:scale-105 transition-transform duration-300">
            <span className="font-bold">CLAIM YOUR FREE TRIAL TODAY</span>
          </Button>
        </div>

        <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground animate-slide-up [animation-delay:0.8s] space-y-2 sm:space-y-0">
          <div className="block sm:inline">No payment required</div>
          <span className="hidden sm:inline mx-2">•</span>
          <div className="block sm:inline">Cancel anytime</div>
          <span className="hidden sm:inline mx-2">•</span>
          <div className="block sm:inline">Full access included</div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;