import { Button } from "@/components/ui/button";
import { Shield, Zap, Brain, Network } from "lucide-react";
import heroImage from "@/assets/daemon-ai-hero.jpg";

const HeroSection = () => {
  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse-glow animation-delay-1000" />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow animation-delay-2000" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center">
          <div className="animate-fade-in flex flex-col items-center">
            {/* Logo */}
            <img
                src="/favicon.svg"
                className="w-50 h-50 object-contain"
                alt="Daemon AI Logo"
            />

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent leading-tight">
              DAEMON-AI
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl">
              Detection and Active Elimination of Malicious anomalies through{" "}
              <span className="text-primary font-semibold">Ongoing Network</span> analysis with AI
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
              Revolutionizing mobile cybersecurity with behavior-based anomaly detection. Real-time
              threat identification through unsupervised machine learning.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="flex flex-col items-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-cyber-border">
                <Brain className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">AI-Powered Detection</h3>
                <p className="text-sm text-muted-foreground">Unsupervised ML identifies unknown threats</p>
              </div>

              <div className="flex flex-col items-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-cyber-border">
                <Zap className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold mb-2">Real-Time Protection</h3>
                <p className="text-sm text-muted-foreground">Instant response to emerging threats</p>
              </div>

              <div className="flex flex-col items-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-cyber-border">
                <Network className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">On-Device Security</h3>
                <p className="text-sm text-muted-foreground">Privacy-first, lightweight models</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cyber" size="lg">
                Learn More
              </Button>
              <Button variant="outline" size="lg">
                View Research
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
