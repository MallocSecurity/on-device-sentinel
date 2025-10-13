import { Card, CardContent } from "@/components/ui/card";

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
                <div className="w-32 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-6">
                  <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/The_Cyprus_Institute_logo.png/250px-The_Cyprus_Institute_logo.png"
                      alt="The Cyprus Institute Logo"
                      className="max-h-12 object-contain"
                      style={{ transform: 'scale(0.8)' }}
                  />
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
                <div className="w-32 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-6">
                  <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGiJsw2UQmb8CxMo3ofXw43gVcTEeoppeiA&s"
                      alt="Malloc Logo"
                      className="max-h-12 object-contain"
                      style={{ transform: 'scale(0.8)' }}
                  />
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
                <div className="w-32 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-6">
                  <img
                      src="https://www.research.org.cy/wp-content/uploads/ENjpg2.jpg"
                      alt="Research & Innovation Foundation Logo"
                      className="max-h-12 object-contain  rounded-lg"
                      style={{ transform: 'scale(1.4)' }}
                  />
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
        </div>
      </section>
  );
};

export default PartnersSection;
