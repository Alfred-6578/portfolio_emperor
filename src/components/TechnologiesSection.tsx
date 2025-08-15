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
  // Featured technologies (larger and more prominent)
  { name: "Flutter", icon: Smartphone, delay: "0s", animation: "glow-pulse", featured: true, position: { top: "20%", left: "15%" } },
  { name: "Laravel", icon: Server, delay: "1s", animation: "float", featured: true, position: { top: "60%", left: "80%" } },
  { name: "React", icon: Code2, delay: "0.5s", animation: "glow-pulse", featured: true, position: { top: "30%", left: "70%" } },
  { name: "TypeScript", icon: Settings, delay: "1.5s", animation: "float-reverse", featured: true, position: { top: "70%", left: "20%" } },
  { name: "Next.js", icon: Layers, delay: "2s", animation: "glow-pulse", featured: true, position: { top: "15%", left: "50%" } },
  { name: "Dart", icon: Code2, delay: "0.8s", animation: "bounce-subtle", featured: true, position: { top: "45%", left: "30%" } },
  { name: "JavaScript", icon: Globe, delay: "1.2s", animation: "float", featured: true, position: { top: "25%", left: "85%" } },
  
  // Regular technologies (smaller)
  { name: "CI/CD", icon: Workflow, delay: "0.2s", animation: "float-reverse", featured: false, position: { top: "10%", left: "25%" } },
  { name: "Docker", icon: Package, delay: "0.7s", animation: "bounce-subtle", featured: false, position: { top: "35%", left: "10%" } },
  { name: "RESTful APIs", icon: Terminal, delay: "1.1s", animation: "float", featured: false, position: { top: "80%", left: "60%" } },
  { name: "PostgreSQL", icon: Database, delay: "1.7s", animation: "glow-pulse", featured: false, position: { top: "50%", left: "75%" } },
  { name: "MySQL", icon: Database, delay: "0.9s", animation: "float", featured: false, position: { top: "65%", left: "45%" } },
  { name: "Postman", icon: Search, delay: "1.3s", animation: "bounce-subtle", featured: false, position: { top: "40%", left: "90%" } },
  { name: "AWS", icon: Cloud, delay: "1.8s", animation: "float-reverse", featured: false, position: { top: "75%", left: "10%" } },
  { name: "Git", icon: GitBranch, delay: "2.3s", animation: "float", featured: false, position: { top: "20%", left: "40%" } },
  { name: "JWT Auth", icon: Lock, delay: "0.4s", animation: "glow-pulse", featured: false, position: { top: "55%", left: "5%" } },
  { name: "Cloudinary", icon: Image, delay: "1.4s", animation: "bounce-subtle", featured: false, position: { top: "85%", left: "35%" } },
  { name: "Node.js", icon: Cpu, delay: "1.6s", animation: "float-reverse", featured: false, position: { top: "30%", left: "95%" } },
  { name: "Nest.js", icon: Shield, delay: "1.9s", animation: "float", featured: false, position: { top: "90%", left: "75%" } }
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
        
        {/* Random positioned technologies container */}
        <div className="relative h-[600px] md:h-[700px] w-full">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className={`absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2
                  animate-${tech.animation} ${tech.featured ? 'z-20' : 'z-10'}`}
                style={{ 
                  top: tech.position.top,
                  left: tech.position.left,
                  animationDelay: tech.delay,
                  animationDuration: tech.animation === 'glow-pulse' ? '4s' : 
                                   tech.animation === 'float' ? '6s' : 
                                   tech.animation === 'float-reverse' ? '8s' : '3s'
                }}
              >
                {tech.featured ? (
                  // Featured technology design (larger)
                  <div className="relative">
                    {/* Outer glow for featured */}
                    <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl scale-150 
                      opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative p-4 bg-gradient-card rounded-2xl border-2 border-primary/50 
                      backdrop-blur-sm hover:border-primary transition-all duration-500 
                      hover:shadow-2xl hover:shadow-primary/40 hover:scale-110">
                      
                      {/* Icon background for featured */}
                      <div className="relative w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center
                        group-hover:bg-primary/30 transition-colors duration-300
                        group-hover:rotate-12 transform transition-transform">
                        <Icon 
                          size={32} 
                          className="text-primary group-hover:text-primary-foreground transition-colors duration-300
                            group-hover:scale-110 transform transition-transform" 
                        />
                      </div>
                      
                      {/* Technology name for featured */}
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                        text-sm font-semibold text-primary whitespace-nowrap
                        group-hover:text-primary-foreground transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ) : (
                  // Regular technology design (smaller)
                  <div className="relative">
                    {/* Subtle glow for regular */}
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg scale-125 
                      opacity-0 group-hover:opacity-80 transition-all duration-300"></div>
                    
                    <div className="relative p-2 bg-tech-badge/80 rounded-lg border border-border/30 
                      backdrop-blur-sm hover:border-accent/60 transition-all duration-300 
                      hover:shadow-lg hover:shadow-accent/20 hover:scale-105">
                      
                      {/* Icon for regular */}
                      <div className="w-8 h-8 flex items-center justify-center
                        group-hover:rotate-6 transform transition-transform duration-300">
                        <Icon 
                          size={18} 
                          className="text-muted-foreground group-hover:text-accent transition-colors duration-300" 
                        />
                      </div>
                    </div>
                    
                    {/* Hidden name that appears on hover */}
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                      text-xs text-muted-foreground whitespace-nowrap opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300">
                      {tech.name}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
          
          {/* Connection lines between featured technologies */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
            {/* Draw some connecting lines between featured technologies */}
            <path d="M 15% 20% Q 35% 10% 50% 15%" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" />
            <path d="M 50% 15% Q 60% 25% 70% 30%" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" />
            <path d="M 70% 30% Q 50% 40% 30% 45%" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" />
            <path d="M 30% 45% Q 25% 60% 20% 70%" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" />
          </svg>
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