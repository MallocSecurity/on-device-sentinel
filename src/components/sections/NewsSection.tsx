import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Award, Users, Presentation } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      type: "milestone",
      title: "DAEMON-AI Prototype Successfully Integrated",
      date: "2024-11-15",
      summary: "The first working prototype of DAEMON-AI has been successfully integrated into Malloc's existing mobile application, marking a significant milestone in the project development.",
      content: "The integration includes real-time behavioral anomaly detection capabilities and initial encrypted traffic classification features. Early testing shows promising results with 95% accuracy in detecting known spyware patterns.",
      tags: ["Integration", "Prototype", "TRL6"],
      icon: Award
    },
    {
      id: 2, 
      type: "publication",
      title: "Research Paper Accepted at IEEE CyberSec 2024",
      date: "2024-10-28",
      summary: "Our research on 'Lightweight Behavioral Anomaly Detection for Mobile Cybersecurity' has been accepted for presentation at the prestigious IEEE CyberSec 2024 conference.",
      content: "The paper details our novel approach to on-device machine learning for spyware detection, highlighting the energy-efficient algorithms developed through the DAEMON-AI project. The conference presentation is scheduled for December 2024 in Cyprus.",
      tags: ["Publication", "IEEE", "Conference"],
      icon: Presentation
    },
    {
      id: 3,
      type: "partnership",
      title: "User Testing Program Launched",
      date: "2024-10-10", 
      summary: "DAEMON-AI has launched its user testing program, inviting volunteers to test the new anomaly detection features and provide valuable feedback for system improvement.",
      content: "Over 150 users have already signed up to participate in the testing program, exceeding our initial target of 100 opt-ins. The feedback collected will be crucial for refining the detection algorithms and user interface.",
      tags: ["User Testing", "Beta", "Feedback"],
      icon: Users
    },
    {
      id: 4,
      type: "development",
      title: "Advanced ML Models Achieve 99.5% Accuracy", 
      date: "2024-09-22",
      summary: "The latest iteration of our behavioral anomaly detection models has achieved 99.5% accuracy in controlled testing environments while maintaining energy efficiency.",
      content: "The breakthrough comes from our innovative graph-based neural network approach combined with advanced model optimization techniques. The models can now detect previously unknown spyware variants with minimal false positives.",
      tags: ["Machine Learning", "Accuracy", "Innovation"],
      icon: Award
    },
    {
      id: 5,
      type: "collaboration",
      title: "Knowledge Exchange Workshop Completed",
      date: "2024-09-05",
      summary: "A successful three-day knowledge exchange workshop was conducted between The Cyprus Institute and Malloc teams, fostering deeper collaboration and technical alignment.",
      content: "The workshop covered advanced ML techniques, mobile security architectures, and real-world deployment challenges. Both teams reported significant knowledge transfer and strengthened working relationships.",
      tags: ["Workshop", "Collaboration", "Knowledge Transfer"], 
      icon: Users
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'milestone': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'publication': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'partnership': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'development': return 'bg-primary/20 text-primary border-primary/30';
      case 'collaboration': return 'bg-accent/20 text-accent border-accent/30';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Latest Updates
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Project News & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest developments, milestones, and achievements 
            from the DAEMON-AI project.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {newsItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.id} className="bg-gradient-card border-cyber-border hover:shadow-cyber transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={`${getTypeColor(item.type)} text-xs`}>
                      {item.type.replace('-', ' ')}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.summary}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.content}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="group/btn">
                    Read More 
                    <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* News Statistics */}
        <div className="bg-cyber-surface rounded-2xl p-8 md:p-12 border border-cyber-border">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Project Impact</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Research Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Beta Testers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">8</div>
              <div className="text-sm text-muted-foreground">Conference Presentations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">60+</div>
              <div className="text-sm text-muted-foreground">Team Meetings</div>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 border border-cyber-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates on DAEMON-AI 
              project developments, research breakthroughs, and publication announcements.
            </p>
            <Button variant="cyber" size="lg">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;