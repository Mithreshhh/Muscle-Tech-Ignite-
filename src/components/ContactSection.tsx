import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-power text-foreground mb-3 sm:mb-4">
            Location & Contact
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your fitness journey? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">
                  Plot No. 15, Hi-Tech City<br />
                  Hyderabad, Telangana 500081<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">info@muscletechfitness.in</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Hours</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                  <p>Saturday: 6:00 AM - 10:00 PM</p>
                  <p>Sunday: 7:00 AM - 9:00 PM</p>
                  <p className="text-primary text-sm font-semibold">Open all 365 days!</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4 sm:mb-6">
              Got Questions? Drop us a message.
            </h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="text-sm sm:text-base" />
                <Input placeholder="Last Name" className="text-sm sm:text-base" />
              </div>
              
              <Input placeholder="Email Address" type="email" className="text-sm sm:text-base" />
              <Input placeholder="Phone Number" type="tel" className="text-sm sm:text-base" />
              
              <Textarea 
                placeholder="Tell us about your fitness goals or ask any questions..."
                rows={4}
                className="text-sm sm:text-base resize-none"
              />
              
              <Button variant="hero" size="lg" className="w-full text-sm sm:text-base font-bold">
                Send Message
              </Button>
            </form>

            <p className="text-xs sm:text-sm text-muted-foreground mt-4 text-center leading-relaxed">
              Or WhatsApp us at <span className="text-primary font-semibold">+91 98765 43210</span> for instant support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;