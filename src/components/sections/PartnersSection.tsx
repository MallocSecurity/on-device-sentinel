import { Card, CardContent } from "@/components/ui/card";
import { Building2, University, Coins } from "lucide-react";

const PartnersSection = () => {
  return (
    <section className="py-24 px-6 bg-cyber-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Partnership & Funding
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collaborative effort between leading research institutions and industry partners, 
            supported by Cyprus's innovation ecosystem.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* The Cyprus Institute */}
          <Card className="bg-gradient-card border-cyber-border hover:shadow-cyber transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <University className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">The Cyprus Institute</h3>
              <p className="text-muted-foreground mb-6">
                Leading research organization providing advanced computational research capabilities 
                and expertise in artificial intelligence and cybersecurity.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2 text-primary">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Research & Development
                </div>
                <div className="flex items-center justify-center gap-2 text-primary">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  AI/ML Expertise
                </div>
                <div className="flex items-center justify-center gap-2 text-primary">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Academic Research
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Malloc */}
          <Card className="bg-gradient-card border-cyber-border hover:shadow-cyber transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Malloc</h3>
              <p className="text-muted-foreground mb-6">
                Industry partner providing real-world application expertise and integration 
                platform for the enhanced cybersecurity prototype development.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2 text-accent">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Application Integration
                </div>
                <div className="flex items-center justify-center gap-2 text-accent">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Industry Expertise
                </div>
                <div className="flex items-center justify-center gap-2 text-accent">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Commercial Development
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Innovation Foundation */}
          <Card className="bg-gradient-card border-cyber-border hover:shadow-cyber transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coins className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">RIF Cyprus</h3>
              <p className="text-muted-foreground mb-6">
                Research Innovation Foundation of Cyprus, providing strategic funding 
                and supporting Cyprus's position in cutting-edge technology research.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2 text-primary">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Strategic Funding
                </div>
                <div className="flex items-center justify-center gap-2 text-primary">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Innovation Support
                </div>
                <div className="flex items-center justify-center gap-2 text-primary">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Research Excellence
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 border border-cyber-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Official Partner Logos</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 inline-block">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                  {/* The Cyprus Institute */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-white rounded-lg p-3 mb-3 shadow-lg">
                      <div className="w-full h-full bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                        CYI
                      </div>
                    </div>
                    <span className="text-sm font-medium text-foreground">The Cyprus Institute</span>
                  </div>
                  
                  {/* Malloc */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-white rounded-lg p-3 mb-3 shadow-lg">
                      <div className="w-full h-full bg-black rounded flex items-center justify-center text-white font-bold text-xs">
                        M
                      </div>
                    </div>
                    <span className="text-sm font-medium text-foreground">Malloc</span>
                  </div>
                  
                  {/* Research & Innovation Foundation */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-white rounded-lg p-3 mb-3 shadow-lg">
                      <div className="w-full h-full bg-primary rounded flex items-center justify-center text-white font-bold text-xs">
                        RIF
                      </div>
                    </div>
                    <span className="text-sm font-medium text-foreground">Research & Innovation Foundation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default PartnersSection;