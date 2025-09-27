import { Instagram, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-power text-primary mb-4">
              MUSCLE TECH FITNESS
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transform your body, elevate your mind, and conquer your limits. 
              Where champions are built, one rep at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Membership</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Personal Training</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Group Classes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Nutrition Guidance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Free Trial</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Muscle Tech Fitness. All rights reserved. Built for champions, by champions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;