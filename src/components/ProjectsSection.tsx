import { useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Automated Lead Qualification",
    desc: "Saved client 35 hours/week using n8n + GHL to automatically score, segment, and route inbound leads.",
    tags: ["n8n", "GHL", "AI"],
    before: "6+ hours/day on manual lead sorting",
    after: "Fully automated — 35 hrs/week reclaimed",
    beforePct: 15,
    afterPct: 90,
  },
  {
    title: "Multi-Channel Sales Funnel",
    desc: "Built an end-to-end sales funnel with email, SMS, and voicemail drops that increased conversion by 42%.",
    tags: ["GHL", "Zapier", "Funnels"],
    before: "4% conversion rate, manual follow-up",
    after: "42% lift in conversions, fully automated",
    beforePct: 10,
    afterPct: 80,
  },
  {
    title: "AI Customer Support Bot",
    desc: "Deployed an OpenAI-powered chatbot handling 80% of tier-1 support tickets automatically.",
    tags: ["OpenAI", "GHL AI", "Webhooks"],
    before: "24-hour average response time",
    after: "Under 5 minutes — 80% tickets automated",
    beforePct: 20,
    afterPct: 88,
  },
  {
    title: "Real Estate CRM Automation",
    desc: "Integrated MLS data feeds with GHL pipelines, automating follow-ups and contract management.",
    tags: ["Make.com", "GHL", "APIs"],
    before: "Manual data entry across 3 platforms",
    after: "Seamless sync, 0 manual data entry",
    beforePct: 12,
    afterPct: 95,
  },
];

const AnimatedBar = ({ pct, color }: { pct: number; color: string }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const filled = useRef(false);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !filled.current) {
          filled.current = true;
          bar.style.width = pct + "%";
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(bar);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-border/40">
      <div
        ref={barRef}
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: "0%", backgroundColor: color }}
      />
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-background py-20 fade-in-section">
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
              className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="font-display text-lg">{p.title}</CardTitle>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {/* Before / After */}
                <div className="space-y-2 rounded-lg border border-border/30 bg-background/60 p-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Before</span>
                      <span className="italic">{p.before}</span>
                    </div>
                    <AnimatedBar pct={p.beforePct} color="hsl(0 0% 55%)" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-primary font-medium">After</span>
                      <span className="italic text-primary/80">{p.after}</span>
                    </div>
                    <AnimatedBar pct={p.afterPct} color="hsl(var(--primary))" />
                  </div>
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
