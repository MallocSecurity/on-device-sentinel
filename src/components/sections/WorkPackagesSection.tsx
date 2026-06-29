import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, Package, Target, Users, FileText } from "lucide-react";

const WorkPackagesSection = () => {
  const workPackages = [
    {
      id: "WP1",
      title: "Project Management & Coordination",
      lead: "The Cyprus Institute",
      duration: "M1-M24",
      objectives: [
        "Project coordination and management",
        "Risk assessment and mitigation",
        "Quality assurance and monitoring",
        "Stakeholder communication"
      ],
      deliverables: [
        "D1.1 Project Management Plan",
        "D1.2 Risk Assessment Report",
        "D1.3 Quality Assurance Plan"
      ]
    },
    {
      id: "WP2",
      title: "Threat Analysis & Data Collection",
      lead: "Malloc",
      duration: "M1-M8",
      objectives: [
        "Comprehensive threat landscape analysis",
        "Mobile device data collection framework",
        "Anomaly patterns identification",
        "Use case scenarios development"
      ],
      deliverables: [
        "D2.1 Threat Analysis Report",
        "D2.2 Data Collection Framework",
        "D2.3 Anomaly Patterns Database"
      ]
    },
    {
      id: "WP3",
      title: "AI/ML Model Development",
      lead: "The Cyprus Institute",
      duration: "M6-M18",
      objectives: [
        "Behavioral anomaly detection algorithms",
        "Encrypted traffic classification models",
        "On-device optimization techniques",
        "Model validation and testing"
      ],
      deliverables: [
        "D3.1 Anomaly Detection Models",
        "D3.2 Traffic Classification Engine",
        "D3.3 Mobile Optimization Framework"
      ]
    },
    {
      id: "WP4",
      title: "Integration & Prototype Development",
      lead: "Malloc",
      duration: "M12-M22",
      objectives: [
        "DAEMON-AI integration into existing app",
        "Real-time processing implementation",
        "User interface development",
        "Performance optimization"
      ],
      deliverables: [
        "D4.1 Integrated Prototype v1.0",
        "D4.2 Performance Benchmark Report",
        "D4.3 Enhanced Mobile Application"
      ]
    },
    {
      id: "WP5",
      title: "Validation & Dissemination",
      lead: "Joint Leadership",
      duration: "M18-M24",
      objectives: [
        "Prototype testing and validation",
        "User feedback collection and analysis",
        "Research dissemination activities",
        "Commercial deployment preparation"
      ],
      deliverables: [
        "D5.1 Validation Test Results",
        "D5.2 User Study Report",
        "D5.3 Dissemination Package"
      ]
    }
  ];

  // Updated statuses based on the 12-month milestone progression
  const keyDeliverables = [
    {
      id: "D2.1",
      title: "Threat Analysis Report",
      month: "M4",
      status: "completed",
      description: "Comprehensive analysis of current mobile cybersecurity threat landscape"
    },
    {
      id: "D3.1",
      title: "Anomaly Detection Models",
      month: "M12",
      status: "completed", // Updated from in-progress to completed
      description: "Core ML models for behavioral anomaly detection on mobile devices"
    },
    {
      id: "D4.1",
      title: "Integrated Prototype v1.0",
      month: "M16",
      status: "in-progress", // Updated from upcoming to in-progress
      description: "First working prototype with DAEMON-AI functionality integrated"
    },
    {
      id: "D5.1",
      title: "Validation Test Results",
      month: "M22",
      status: "upcoming",
      description: "Comprehensive testing and validation of the DAEMON-AI system"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress': return 'bg-primary/20 text-primary border-primary/30 animate-pulse-glow';
      case 'upcoming': return 'bg-muted text-muted-foreground border-border';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
      <section className="py-24 px-6 bg-cyber-surface">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Project Structure
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Work Packages & Deliverables
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              DAEMON-AI is structured into five comprehensive work packages. Showing progress 12 months into active project timelines.
            </p>
          </div>

          {/* Work Packages */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <Package className="w-6 h-6 text-primary" />
              Work Packages Overview
            </h3>
            <div className="grid gap-6">
              {workPackages.map((wp) => (
                  <Card key={wp.id} className="bg-gradient-card border-cyber-border hover:shadow-cyber transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                              <span className="text-primary font-bold">{wp.id}</span>
                            </div>
                            {wp.title}
                          </CardTitle>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              Lead: {wp.lead}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {wp.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            Key Objectives
                          </h4>
                          <ul className="space-y-2">
                            {wp.objectives.map((objective, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  {objective}
                                </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                            <FileText className="w-4 h-4 text-accent" />
                            Key Deliverables
                          </h4>
                          <ul className="space-y-2">
                            {wp.deliverables.map((deliverable, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                  {deliverable}
                                </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>

          {/* Key Deliverables Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary" />
              Key Deliverables Status (Month 12 Update)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {keyDeliverables.map((deliverable) => (
                  <Card key={deliverable.id} className="bg-gradient-card border-cyber-border">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-foreground">{deliverable.id}: {deliverable.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{deliverable.description}</p>
                        </div>
                        <Badge className={`${getStatusColor(deliverable.status)} text-xs capitalize`}>
                          {deliverable.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        Target Milestone: {deliverable.month}
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>

          {/* Project Timeline Tracker */}
          <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 border border-cyber-border">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Project Roadmap Status</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="opacity-60 relative">
                <div className="text-2xl font-bold text-green-400 mb-2">M1-M8 ✓</div>
                <div className="text-sm font-medium text-foreground">Phase 1: Analysis & Design</div>
                <div className="text-xs text-muted-foreground mt-1">100% Complete</div>
              </div>
              <div className="border border-primary/30 rounded-xl p-3 bg-primary/5 shadow-cyber">
                <div className="text-2xl font-bold text-primary mb-2">M6-M18</div>
                <div className="text-sm font-bold text-foreground">Phase 2: Development</div>
                <div className="text-xs text-primary font-medium mt-1">Active Core Engine Phase</div>
              </div>
              <div className="border border-cyber-border rounded-xl p-3 bg-card/20">
                <div className="text-2xl font-bold text-accent mb-2">M12-M22</div>
                <div className="text-sm font-medium text-foreground">Phase 3: Integration</div>
                <div className="text-xs text-accent mt-1">Initiating System Merging</div>
              </div>
              <div className="opacity-40">
                <div className="text-2xl font-bold text-muted-foreground mb-2">M18-M24</div>
                <div className="text-sm text-muted-foreground">Phase 4: Validation</div>
                <div className="text-xs text-muted-foreground mt-1">Pending Implementation</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default WorkPackagesSection;