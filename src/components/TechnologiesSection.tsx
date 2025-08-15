import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch, 
  Cloud, 
  Terminal,
  Settings,
  Shield,
  Layers,
  Cpu,
  Package,
  Zap,
  Lock,
  Image,
  Search,
  Workflow
} from "lucide-react";

const technologies = [
  { name: "Flutter", icon: Smartphone, delay: "0s", animation: "float" },
  { name: "Dart", icon: Code2, delay: "0.5s", animation: "float-reverse" },
  { name: "Laravel", icon: Server, delay: "1s", animation: "bounce-subtle" },
  { name: "JavaScript", icon: Globe, delay: "1.5s", animation: "float" },
  { name: "Next.js", icon: Layers, delay: "2s", animation: "glow-pulse" },
  { name: "CI/CD", icon: Workflow, delay: "0.2s", animation: "float-reverse" },
  { name: "Docker", icon: Package, delay: "0.7s", animation: "bounce-subtle" },
  { name: "RESTful APIs", icon: Terminal, delay: "1.2s", animation: "float" },
  { name: "PostgreSQL", icon: Database, delay: "1.7s", animation: "glow-pulse" },
  { name: "React", icon: Code2, delay: "2.2s", animation: "float-reverse" },
  { name: "TypeScript", icon: Settings, delay: "0.3s", animation: "bounce-subtle" },
  { name: "MySQL", icon: Database, delay: "0.8s", animation: "float" },
  { name: "Postman", icon: Search, delay: "1.3s", animation: "glow-pulse" },
  { name: "AWS", icon: Cloud, delay: "1.8s", animation: "float-reverse" },
  { name: "Git", icon: GitBranch, delay: "2.3s", animation: "bounce-subtle" },
  { name: "JWT Auth", icon: Lock, delay: "0.4s", animation: "float" },
  { name: "Cloudinary", icon: Image, delay: "0.9s", animation: "glow-pulse" },
  { name: "Node.js", icon: Cpu, delay: "1.4s", animation: "float-reverse" },
  { name: "Nest.js", icon: Shield, delay: "1.9s", animation: "bounce-subtle" }
];

const TechnologiesSection = () => {
  return (
    <section className="py-20 px-6 vsm:px-12 md:px-16 bg-card relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary rounded-full blur-3xl animate-glow-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-6">
          Technologies
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
        </p>
        
        {/* Main grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 place-items-center">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 bg-gradient-card rounded-2xl border border-border/50 backdrop-blur-sm
                  hover:border-primary/50 transition-all duration-500 cursor-pointer
                  hover:shadow-2xl hover:shadow-primary/20 hover:scale-110
                  animate-${tech.animation}`}
                style={{ 
                  animationDelay: tech.delay,
                  animationDuration: tech.animation === 'glow-pulse' ? '4s' : 
                                   tech.animation === 'float' ? '6s' : 
                                   tech.animation === 'float-reverse' ? '8s' : '3s'
                }}
              >
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 
                  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon container */}
                <div className="relative z-10 flex flex-col items-center space-y-3">
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md scale-150 
                      opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Icon background */}
                    <div className="relative w-12 h-12 bg-tech-badge rounded-full flex items-center justify-center
                      group-hover:bg-primary/10 transition-colors duration-300
                      group-hover:rotate-12 transform transition-transform">
                      <Icon 
                        size={24} 
                        className="text-primary group-hover:text-primary-foreground transition-colors duration-300
                          group-hover:scale-110 transform transition-transform" 
                      />
                    </div>
                  </div>
                  
                  {/* Technology name */}
                  <span className="text-sm font-medium text-card-foreground text-center leading-tight
                    group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary 
                    opacity-20 animate-pulse"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative text */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm italic">
            Constantly learning and adapting to new technologies in the ever-evolving landscape of software development
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;