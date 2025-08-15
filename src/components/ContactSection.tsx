import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 vsm:px-12 md:px-16 bg-background">
      <div className="mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-16">
          Let's Connect
        </h2>
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-8 lg:gap-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-tech-badge rounded-lg group-hover:bg-accent transition-colors duration-200">
              <MapPin className="text-tech-badge-foreground" size={24} />
            </div>
            <span className="text-lg text-muted-foreground">Enugu, Nigeria</span>
          </div>
          
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-tech-badge rounded-lg group-hover:bg-accent transition-colors duration-200">
              <Phone className="text-tech-badge-foreground" size={24} />
            </div>
            <span className="text-lg text-muted-foreground">+2347039487884</span>
          </div>
          
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-tech-badge rounded-lg group-hover:bg-accent transition-colors duration-200">
              <Mail className="text-tech-badge-foreground" size={24} />
            </div>
            <a 
              href="mailto:sirmugido707@gmail.com"
              className="text-lg text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              emperorchris36@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;