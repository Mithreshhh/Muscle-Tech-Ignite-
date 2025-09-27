import { Button } from "@/components/ui/button";
import { Check, Crown, Zap, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MembershipSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [plansRef, plansVisible] = useScrollAnimation(0.1);

  const plans = [
    {
      name: "Monthly",
      price: "₹6,999",
      period: "per month",
      description: "Perfect for exploring our world-class facilities",
      icon: Zap,
      features: [
        "Complete gym access",
        "All modern equipment usage", 
        "Locker & changing room access",
        "Mobile app access",
        "Free Wi-Fi"
      ],
      highlighted: false,
      badge: "STARTER",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Quarterly",
      price: "₹15,999",
      period: "per quarter",
      originalPrice: "₹20,997",
      discount: "25% OFF",
      description: "Excellent value for dedicated fitness enthusiasts",
      icon: Star,
      features: [
        "Everything in Monthly",
        "2 personal training sessions",
        "Nutrition consultation by experts",
        "Group fitness classes access",
        "Priority booking system",
        "Diet chart included"
      ],
      highlighted: true,
      badge: "MOST POPULAR",
      color: "from-primary to-accent"
    },
    {
      name: "Yearly",
      price: "₹47,999",
      period: "per year",
      originalPrice: "₹83,988",
      discount: "44% OFF",
      description: "Best value for complete fitness transformation",
      icon: Crown,
      features: [
        "Everything in Quarterly",
        "8 personal training sessions",
        "Monthly nutrition consultations",
        "Guest passes (4/month)",
        "Supplement discounts",
        "VIP locker access",
        "Free fitness assessment"
      ],
      highlighted: false,
      badge: "PREMIUM",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 text-8xl font-power text-primary rotate-45">$</div>
        <div className="absolute bottom-20 right-1/4 text-6xl font-power text-primary -rotate-45">%</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
          className="text-center mb-16 transition-all duration-800 animate-on-scroll animate"
        >
          <div className="inline-block mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              💳 Membership Plans
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-power text-primary-foreground mb-6">
            <span className="text-bold-impact">MEMBERSHIP</span>
            <span className="block text-power">PLANS</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-bold-condensed">
            Choose the plan that fits your <span className="text-emphasis">fitness goals</span> and budget
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        <div 
          ref={plansRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 hover-lift transition-all duration-800 group animate-on-scroll animate ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground ring-4 ring-accent/50 scale-105 shadow-2xl'
                  : 'bg-card text-card-foreground shadow-lg hover:shadow-2xl'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge */}
              <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${plan.color} shadow-lg`}>
                {plan.badge}
              </div>

              {/* Discount Badge */}
              {plan.discount && (
                <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  {plan.discount}
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <plan.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  <span className="text-bold-impact">{plan.name}</span>
                </h3>
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="text-lg line-through opacity-60 mb-1">
                      {plan.originalPrice}
                    </div>
                  )}
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl md:text-6xl font-power">{plan.price}</span>
                    <span className="text-lg opacity-80 ml-1">/{plan.period.split(' ')[1]}</span>
                  </div>
                </div>
                <p className="text-sm opacity-80 font-medium">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 0.1}s` }}>
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.highlighted ? "outline-hero" : "hero"}
                size="lg"
                className="w-full group-hover:scale-105 transition-transform duration-300 font-bold"
              >
                <span className="text-lg">JOIN NOW</span>
              </Button>

              {/* Popular indicator */}
              {plan.highlighted && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 pointer-events-none animate-pulse" style={{ animationDuration: '3s' }} />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 transition-all duration-800 animate-on-scroll animate" style={{ animationDelay: '1s' }}>
          <p className="text-primary-foreground/80 text-lg md:text-xl font-bold-condensed mb-4">
            Still confused? <span className="text-emphasis">FREE TRIAL</span> for 15 days!
          </p>
          <div className="inline-flex items-center space-x-2 text-primary font-bold">
            <span>🎁</span>
            <span className="text-sm uppercase tracking-wider">No Payment Required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;