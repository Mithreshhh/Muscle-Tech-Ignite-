const TrainersSection = () => {
  const trainers = [
    {
      name: "Marcus Steel",
      specialty: "Strength & Conditioning",
      quote: "Form First. Weight Later.",
      experience: "8+ years",
      certifications: "NASM-CPT, CSCS"
    },
    {
      name: "Jessica Power",
      specialty: "Functional Training",
      quote: "Movement is Medicine.",
      experience: "6+ years", 
      certifications: "ACSM-CPT, FMS"
    },
    {
      name: "David Forge",
      specialty: "Powerlifting & Nutrition",
      quote: "Discipline Creates Champions.",
      experience: "10+ years",
      certifications: "NSCA-CSCS, Precision Nutrition"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-power text-primary-foreground mb-4">
            Meet Your Trainers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert guidance from certified professionals who are passionate about your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="text-center group hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Trainer Photo Placeholder */}
              <div className="w-48 h-48 mx-auto mb-6 relative overflow-hidden rounded-full bg-muted group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-power text-primary">
                    {trainer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                {trainer.name}
              </h3>
              
              <div className="text-primary font-semibold mb-2">
                {trainer.specialty}
              </div>

              <blockquote className="text-lg italic text-muted-foreground mb-4 font-medium">
                "{trainer.quote}"
              </blockquote>

              <div className="text-sm text-muted-foreground space-y-1">
                <div>{trainer.experience} Experience</div>
                <div>{trainer.certifications}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;