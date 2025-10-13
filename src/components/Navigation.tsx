import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img
                  src="https://media.licdn.com/dms/image/v2/D4E0BAQHqnVZKzEOkUA/company-logo_200_200/B4EZkTpZHxHgAM-/0/1756971242415/daemon_ai_logo?e=1762992000&v=beta&t=4PlTr6KZqxrtMR3u5vD7JDmqmXaR-QcDJfNWqcyBtWU"
                  className="w-5 h-5 object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
            DAEMON-AI
          </span>
                  </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#technology" className="text-muted-foreground hover:text-primary transition-colors">
              Technology
            </a>
            <a href="#work-packages" className="text-muted-foreground hover:text-primary transition-colors">
              Work Packages
            </a>
            <a href="#news" className="text-muted-foreground hover:text-primary transition-colors">
              News
            </a>
            <a href="#partners" className="text-muted-foreground hover:text-primary transition-colors">
              Partners
            </a>
            <Button
                variant="outline"
                size="sm"
                onClick={() =>
                    (window.location.href =
                        "mailto:info@mallocprivacy.com?subject=DAEMON-AI%20Project%20Request")
                }
            >
              Contact
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyber-border">
            <div className="flex flex-col gap-4">
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#technology" 
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </a>
              <a 
                href="#work-packages" 
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Work Packages
              </a>
              <a 
                href="#news" 
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </a>
              <a 
                href="#partners" 
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Partners
              </a>
              <Button variant="outline" size="sm" className="self-start">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;