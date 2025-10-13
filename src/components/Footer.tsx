import { Shield, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
      <footer className="bg-cyber-surface border-t border-cyber-border py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <img
                      src="https://media.licdn.com/dms/image/v2/D4E0BAQHqnVZKzEOkUA/company-logo_200_200/B4EZkTpZHxHgAM-/0/1756971242415/daemon_ai_logo?e=1762992000&v=beta&t=4PlTr6KZqxrtMR3u5vD7JDmqmXaR-QcDJfNWqcyBtWU"
                      alt="DAEMON-AI Logo"
                      className="w-5 h-5 object-contain"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
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

                <li>
                  <a
                      href="https://www.mallocprivacy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Malloc
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>


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
                    Research & Innovation Foundation
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li className="text-muted-foreground">European Union, Republic of Cyprus</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-cyber-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Left Text Section */}
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                  © 2025 DAEMON-AI Project. Co-developed by The Cyprus Institute and Malloc.
                </p>
                <p className="text-xs text-muted-foreground mt-2 max-w-xl">
                  The DAEMON-AI project is funded by the Research and Innovation Foundation of the
                  Republic of Cyprus under the “RIF/CODEVELOP/0824” Call of RESTART 2016–2020.
                </p>
              </div>

              {/* Right Image Section */}
              <div className="flex flex-col items-center gap-3">
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <img
                      src="https://www.cyi.ac.cy/images/projects/castorc/daemon-ai/Picture1.png"
                      alt="DAEMON-AI Funding Logos"
                      className="h-16 object-contain"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
