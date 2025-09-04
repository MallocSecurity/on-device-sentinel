import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Shield, Smartphone, Zap, Network, Eye, Lock, Cpu } from "lucide-react";
import aiNetworkImage from "@/assets/ai-network.jpg";

const TechnologySection = () => {
  const technologies = [
    {
      icon: Brain,
      title: "Unsupervised Machine Learning",
      description: "Advanced ML algorithms that learn normal behavior patterns without requiring labeled training data.",
      features: ["Anomaly Detection", "Pattern Recognition", "Behavioral Analysis", "Adaptive Learning"]
    },
    {
      icon: Shield,
      title: "Real-Time Threat Detection",
      description: "Continuous monitoring and instant identification of malicious activities and security breaches.",
      features: ["Live Monitoring", "Instant Alerts", "Automated Response", "Threat Intelligence"]
    },
    {
      icon: Smartphone,
      title: "Mobile-Optimized Architecture",
      description: "Lightweight models designed specifically for mobile devices with minimal resource consumption.",
      features: ["Energy Efficient", "Low Latency", "Minimal Storage", "Battery Optimized"]
    },
    {
      icon: Network,
      title: "Network Traffic Analysis",
      description: "Deep inspection of encrypted and unencrypted network communications for anomaly detection.",
      features: ["Traffic Monitoring", "Encryption Analysis", "Protocol Inspection", "Data Flow Tracking"]
    }
  ];

  const capabilities = [
    { icon: Eye, label: "Spyware Detection", color: "text-primary" },
    { icon: Lock, label: "Data Protection", color: "text-accent" },
    { icon: Zap, label: "Zero-Day Defense", color: "text-primary" },
    { icon: Cpu, label: "On-Device Processing", color: "text-accent" }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Advanced Technology Stack
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Cutting-Edge AI Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DAEMON-AI leverages state-of-the-art artificial intelligence and machine learning 
            technologies to provide unprecedented mobile cybersecurity protection.
          </p>
        </div>

        {/* Technology Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={aiNetworkImage} 
              alt="AI Network Visualization" 
              className="rounded-2xl shadow-card w-full h-auto border border-cyber-border"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Behavioral Anomaly Detection
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Our system moves beyond traditional signature-based detection to understand 
              and learn from normal device behavior, enabling identification of previously 
              unknown threats and zero-day attacks.
            </p>
            
            {/* Capabilities */}
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-cyber-border">
                  <capability.icon className={`w-5 h-5 ${capability.color}`} />
                  <span className="text-sm font-medium">{capability.label}</span>
                </div>
              ))}
            </div>
            
            {/* TRL Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              <span className="text-primary font-semibold">Technology Readiness Level 6</span>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} className="bg-gradient-card border-cyber-border hover:shadow-cyber transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <tech.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{tech.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {tech.description}
                </p>
                <div className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-xs">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 bg-cyber-surface rounded-2xl p-8 md:p-12 border border-cyber-border">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Technical Specifications</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">&lt; 50ms</div>
              <div className="text-sm text-muted-foreground mb-1">Detection Latency</div>
              <div className="text-xs text-muted-foreground">Real-time threat identification</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">&lt; 5%</div>
              <div className="text-sm text-muted-foreground mb-1">CPU Usage</div>
              <div className="text-xs text-muted-foreground">Minimal system impact</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
              <div className="text-sm text-muted-foreground mb-1">Accuracy Rate</div>
              <div className="text-xs text-muted-foreground">High precision detection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;