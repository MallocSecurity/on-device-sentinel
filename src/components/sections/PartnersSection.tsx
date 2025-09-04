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

        {/* Collaboration Benefits */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 border border-cyber-border">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Co-Development Excellence</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              This collaborative approach combines academic research excellence with industry expertise, 
              accelerating the development of innovative cybersecurity solutions while ensuring 
              practical applicability and market readiness.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h4 className="font-semibold mb-3 text-primary">Research Impact</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Advanced ML algorithm development</li>
                  <li>• Rigorous scientific validation</li>
                  <li>• Academic publication and dissemination</li>
                  <li>• Knowledge transfer to industry</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h4 className="font-semibold mb-3 text-accent">Commercial Viability</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-world application testing</li>
                  <li>• Scalable solution architecture</li>
                  <li>• Market-ready prototype development</li>
                  <li>• Sustainable business model integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;