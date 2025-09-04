import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Shield, Cpu, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About DAEMON-AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collaborative research project revolutionizing mobile cybersecurity through 
            advanced AI-driven anomaly detection and real-time threat elimination.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">TRL6</div>
            <div className="text-sm text-muted-foreground">Technology Readiness Level</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">Real-Time</div>
            <div className="text-sm text-muted-foreground">Threat Detection</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">On-Device</div>
            <div className="text-sm text-muted-foreground">ML Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">Zero-Day</div>
            <div className="text-sm text-muted-foreground">Threat Protection</div>
          </div>
        </div>

        {/* Main Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Beyond Traditional Cybersecurity
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The DAEMON-AI project represents a paradigm shift from signature-based 
                security approaches to intelligent, behavior-based anomaly detection. 
                By leveraging unsupervised machine learning, we can identify previously 
                unknown cyber threats in real-time.
              </p>
              <p>
                Our system focuses on protecting users from sophisticated threats including 
                spyware, unauthorized data transmission, and encrypted traffic anomalies 
                through lightweight, privacy-preserving on-device models.
              </p>
              <p>
                This innovative approach ensures enhanced security while maintaining 
                user privacy and reducing dependency on cloud infrastructure.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-cyber-border">
              <CardContent className="p-6 text-center">
                <Smartphone className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Mobile-First</h4>
                <p className="text-sm text-muted-foreground">
                  Designed specifically for mobile threat detection
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-cyber-border">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Privacy-First</h4>
                <p className="text-sm text-muted-foreground">
                  All processing happens locally on device
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-cyber-border">
              <CardContent className="p-6 text-center">
                <Cpu className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Efficient</h4>
                <p className="text-sm text-muted-foreground">
                  Energy-optimized ML algorithms
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-cyber-border">
              <CardContent className="p-6 text-center">
                <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Scalable</h4>
                <p className="text-sm text-muted-foreground">
                  Designed for global deployment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Objectives */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Key Objectives</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full animate-pulse-glow" />
              </div>
              <h4 className="font-semibold mb-3">Energy Efficiency</h4>
              <p className="text-sm text-muted-foreground">
                Develop lightweight anomaly detection systems optimized for mobile devices with minimal battery impact
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-accent rounded-full animate-pulse-glow" />
              </div>
              <h4 className="font-semibold mb-3">Real-Time Detection</h4>
              <p className="text-sm text-muted-foreground">
                Enhance malware detection capabilities with immediate response to emerging threats
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full animate-pulse-glow" />
              </div>
              <h4 className="font-semibold mb-3">Cloud Independence</h4>
              <p className="text-sm text-muted-foreground">
                Reduce reliance on cloud infrastructure while maintaining high accuracy and robust protection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;