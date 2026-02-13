import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Automated Lead Qualification",
    desc: "Saved client 35 hours/week using n8n + GHL to automatically score, segment, and route inbound leads.",
    tags: ["n8n", "GHL", "AI"],
  },
  {
    title: "Multi-Channel Sales Funnel",
    desc: "Built an end-to-end sales funnel with email, SMS, and voicemail drops that increased conversion by 42%.",
    tags: ["GHL", "Zapier", "Funnels"],
  },
  {
    title: "AI Customer Support Bot",
    desc: "Deployed an OpenAI-powered chatbot handling 80% of tier-1 support tickets automatically.",
    tags: ["OpenAI", "GHL AI", "Webhooks"],
  },
  {
    title: "Real Estate CRM Automation",
    desc: "Integrated MLS data feeds with GHL pipelines, automating follow-ups and contract management.",
    tags: ["Make.com", "GHL", "APIs"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-muted-foreground">Real results from real automation projects</p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <Card
              key={p.title}
              className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="font-display text-lg">{p.title}</CardTitle>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
