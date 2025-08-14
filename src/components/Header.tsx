import { Github, Linkedin, Twitter } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nav/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-primary">
            <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
              UO
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-nav-foreground hover:bg-social-hover hover:text-primary transition-all duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-nav-foreground hover:bg-social-hover hover:text-primary transition-all duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-nav-foreground hover:bg-social-hover hover:text-primary transition-all duration-200"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;