import { Shield, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-surface border-t border-cyber-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-cyber rounded-md flex items-center justify-center">
                <Shield className="w-4 h-4 text-cyber-dark" />
              </div>
              <span className="text-lg font-bold bg-gradient-cyber bg-clip-text text-transparent">
                DAEMON-AI
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Revolutionizing mobile cybersecurity through AI-powered behavioral anomaly detection.
            </p>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Project</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Detection & Elimination</li>
              <li>AI-Powered Security</li>
              <li>Real-Time Protection</li>
              <li>Mobile-First Design</li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Partners</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.cyi.ac.cy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  The Cyprus Institute
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="text-muted-foreground">Malloc</li>
            </ul>
          </div>

          {/* Funding */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Funding</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.research.org.cy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Research Innovation Foundation
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="text-muted-foreground">Republic of Cyprus</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-cyber-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 DAEMON-AI Project. Co-developed by The Cyprus Institute and Malloc.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Technology Readiness Level 6</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;