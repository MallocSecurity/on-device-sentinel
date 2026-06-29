import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Award, Users, Presentation, Cpu } from "lucide-react";

// Import your local newsletter image asset here
import newsletterImg1 from "@/assets/newsletter-2026-1.png";

const NewsSection = () => {

  const newsItems = [
    {
      id: 7,
      type: "presentation",
      title: "DAEMON-AI at the sCYence Fair by The Cyprus Institute!",
      date: "2026-05-06",
      summary: "We had an incredible time presenting DAEMON-AI to the next generation of scientists, innovators, teachers, and professors at this year's sCYence Fair.",
      content: "Developed through a collaboration between Malloc and The Cyprus Institute, DAEMON-AI acts as a digital 'detective' designed to safeguard your mobile privacy against sophisticated spyware. During our live demo, we challenged visitors to rethink mobile security through three pillars: Invisible Protection (how AI uncovers hidden monitoring apps), Data X-Ray (identifying encrypted traffic types simply by its 'shape'), and Real-Time Action (stopping digital intruders before they access personal data).",
      funding: "The DAEMON-AI project is funded by the Ίδρυμα Έρευνας και Καινοτομίας/Research and Innovation Foundation of the Republic of Cyprus under the “RIF/CODEVELOP/0824” Call of RESTART 2016–2020.",
      tags: ["sCYence Fair", "CyberSecurity", "AIInnovation", "MobileSecurity"],
      icon: Presentation,
      images: [
        "https://media.licdn.com/dms/image/v2/D4D22AQE8iWlFQ1q1ZQ/feedshare-shrink_800/B4DZ38tLo7GQAc-/0/1778061196351?e=1784160000&v=beta&t=slaT3yUzF8OeXwKtqGuimDXgFL4SPYoQEEcCncwbY6I"
      ]
    },
    {
      id: 8,
      type: "development",
      title: "Project Update: DAEMON-AI Newsletter",
      date: "2026-03-11",
      summary: "Our mission to revolutionize mobile cybersecurity through unsupervised machine learning is hitting key milestones ahead of schedule.",
      content: "🧠 Active Model Training: Developing first-generation AI models focused on real-time payload classification (browsing vs streaming vs photos) to detect potential data exfiltration.\n\n🔍 Triple-Source Anomaly Detection: Synthesizing data across devices, sensors, and network traffic to identify abnormal recordings with absolute precision.\n\n📱 New Dedicated Mobile App: Built a dedicated mobile framework tracking 20+ indicators—including battery temperature and sensor loops—to train models live.\n\n🤝 The Power of Partnership: Researchers from The Cyprus Institute are now embedded directly in Malloc offices, accelerating real-time, on-device inference engineering.",
      funding: "The DAEMON-AI project is funded by the Ίδρυμα Έρευνας και Καινοτομίας/Research and Innovation Foundation of the Republic of Cyprus under the “RIF/CODEVELOP/0824” Call of RESTART 2016–2020.",
      tags: ["Cybersecurity", "AI", "MobileSecurity", "Innovation", "Malloc", "DAEMONAI", "6G", "PrivacyFirst"],
      icon: Cpu,
      images: [newsletterImg1] // Added your local imported image right here!
    },
    {
      id: 6,
      type: "publication",
      title: "Project Represented at Workshop on Cybersecurity for Research Infrastructures",
      date: "2026-04-15",
      summary: "Andreas Athenodorou from The Cyprus Institute represented DAEMON-AI in the Eastern Mediterranean and Middle East regional workshop.",
      content: "During the workshop, titled 'Strengthening capacities across research infrastructures in the Eastern Mediterranean and Middle East', Andreas presented a poster highlighting our latest progress in using unsupervised machine learning for real-time, behavior-based anomaly detection on mobile devices. Discover more about the project at www.daemon-ai.eu.",
      funding: "The DAEMON-AI project is funded by the Ίδρυμα Έρευνας και Καινοτομίας/Research and Innovation Foundation of the Republic of Cyprus under the “RIF/CODEVELOP/0824” Call of RESTART 2016–2020.",
      tags: ["Workshop", "Unsupervised ML", "DAEMONAI", "CyberSecurity"],
      icon: Award,
      images: [
        "https://media.licdn.com/dms/image/v2/D4D22AQFYOxRE5qwIJA/feedshare-image-high-res/B4DZyPq7MeI8AU-/0/1771936920907?e=1784160000&v=beta&t=4TY31By5haD2MIwzQYv2yTs9u5D8sdD-4X48ZpvNWKU",
        "https://media.licdn.com/dms/image/v2/D4D22AQEcFljMinsfxw/feedshare-shrink_800/B4DZyPq7PRIoAg-/0/1771936921091?e=1784160000&v=beta&t=aPkNGKGvm_ZCIMTkLwKRcBjW7tDuBOiycGw-YcY4VWQ"
      ]
    },
    {
      id: 5,
      type: "collaboration",
      title: "Kick-Off Meeting Completed",
      date: "2024-09-04",
      summary: "A successful kick-off meeting conducted between The Cyprus Institute and Malloc teams, fostering deeper collaboration and technical alignment.",
      content: "The kickoff meeting for the DAEMON-AI Project was held on the 4th of September, marking the official start of the collaboration between The Cyprus Institute and Malloc LTD. During the meeting, we aligned on the project’s objectives, defined key milestones, and discussed the technical roadmap for developing our AI-powered behavior-based anomaly detection system.\nThis productive session set the foundation for a strong partnership focused on advancing mobile cybersecurity through privacy-preserving, real-time threat detection.",
      tags: ["Collaboration", "Knowledge Transfer"],
      icon: Users,
      images: [
        "https://media.licdn.com/dms/image/v2/D4E22AQHm9CL-HNSCxA/feedshare-image-high-res/B4EZkZI4s3IkAs-/0/1757063385554?e=1784160000&v=beta&t=XxOG8TK31tHZb1w4DB30NhecqMTBtw6gACGkvA0mbg0"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'milestone': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'publication': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'partnership': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'development': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'collaboration': return 'bg-accent/20 text-accent border-accent/30';
      case 'presentation': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
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
            <p className="text-sm font-semibold text-muted-foreground mb-4">
              By Maria Terzi • Updated June 2026
            </p>
          </div>

          {/* News Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {newsItems.map((item) => {
              const IconComponent = item.icon;
              return (
                  <Card key={item.id} className="bg-gradient-card border-cyber-border hover:shadow-cyber transition-all duration-300 group flex flex-col justify-between overflow-hidden">
                    <div>
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-3">
                          <Badge className={`${getTypeColor(item.type)} text-xs capitalize`}>
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
                      <CardContent className="pb-4">
                        <p className="text-base font-semibold text-foreground mb-3 leading-relaxed">
                          {item.summary}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line leading-relaxed">
                          {item.content}
                        </p>

                        {item.funding && (
                            <p className="text-xs italic text-muted-foreground/80 border-l-2 border-primary/30 pl-3 mb-4">
                              {item.funding}
                            </p>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                              <span
                                  key={tag}
                                  className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground font-medium"
                              >
                          #{tag.replace('#', '')}
                        </span>
                          ))}
                        </div>
                      </CardContent>
                    </div>

                    {/* Big Square Images Section */}
                    <CardContent className="pt-2">
                      {item.images && item.images.length > 0 && (
                          <div className={`grid gap-4 ${item.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                            {item.images.map((imgUrl, idx) => (
                                <div key={idx} className="w-full aspect-square overflow-hidden rounded-2xl border border-cyber-border bg-muted shadow-sm">
                                  <img
                                      src={imgUrl}
                                      alt={`${item.title} visual display ${idx + 1}`}
                                      className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-300"
                                  />
                                </div>
                            ))}
                          </div>
                      )}
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
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Research Publications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Beta Testers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Conference and Event Presentations</div>
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
                Follow the project updates on our LinkedIn page to receive the latest updates on DAEMON-AI
                project developments, research breakthroughs, and publication announcements.
              </p>
              <Button
                  variant="cyber"
                  size="lg"
                  onClick={() => window.location.href = 'https://www.linkedin.com/showcase/daemon-ai'}
              >
                Follow the Project on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default NewsSection;