import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, Users, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stories = [
  {
    client: "We Buy St Pete Houses",
    hook: "Automated lead qualification saved the team 35 hours every single week.",
    wins: [
      { icon: Clock, label: "35 hrs saved", color: "text-primary" },
      { icon: TrendingUp, label: "3x faster follow-ups", color: "text-secondary" },
    ],
    quote: "Freed me to focus on closings!",
    howWeDidIt: "n8n + GHL pipeline to auto-score leads, trigger SMS follow-ups, and route hot prospects to the sales team.",
    tags: ["n8n", "GHL", "AI"],
  },
  {
    client: "Squd Marketing",
    hook: "Multi-channel funnel increased conversions by 42% in the first month.",
    wins: [
      { icon: BarChart3, label: "42% conversion boost", color: "text-primary" },
      { icon: Users, label: "$3K/mo saved", color: "text-secondary" },
    ],
    quote: "Automations we didn't even know were possible.",
    howWeDidIt: "GHL + Zapier for email, SMS, and voicemail drops with conditional paths based on lead behavior.",
    tags: ["GHL", "Zapier", "Funnels"],
  },
  {
    client: "Centner Academy",
    hook: "Customer response time dropped from 24 hours to under 5 minutes.",
    wins: [
      { icon: Clock, label: "< 5 min response", color: "text-primary" },
      { icon: Users, label: "80% auto-resolved", color: "text-secondary" },
    ],
    quote: "Best investment we made this year.",
    howWeDidIt: "OpenAI-powered chatbot in GHL handling 80% of tier-1 support tickets automatically.",
    tags: ["OpenAI", "GHL AI", "Webhooks"],
  },
];

const trustedBy = ["Squd", "Best Home Buyer", "Cash.com", "Centner", "We Buy St Pete Houses"];

const SuccessStoriesSection = () => {
  const ref = useScrollAnimation();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="stories" className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="animate-on-scroll">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl text-foreground sm:text-4xl" style={{ fontFamily: "'Pacifico', cursive" }}>
              Success Stories
            </h2>
            <p className="text-muted-foreground">Real results, real impact, real humans winning.</p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {stories.map((s, i) => (
              <Card
                key={s.client}
                className="group cursor-pointer border-border/50 bg-background transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <CardHeader>
                  <CardTitle className="font-sans text-lg font-bold text-foreground">{s.client}</CardTitle>
                  <p className="text-sm text-muted-foreground">{s.hook}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Wins */}
                  <div className="flex flex-wrap gap-3">
                    {s.wins.map((w) => (
                      <div key={w.label} className="flex items-center gap-1.5">
                        <w.icon className={`h-4 w-4 ${w.color}`} />
                        <span className="text-sm font-semibold text-foreground">{w.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm italic text-primary">"{s.quote}"</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/10 text-secondary text-xs">{tag}</Badge>
                    ))}
                  </div>

                  {/* Expandable how we did it */}
                  {expanded === i && (
                    <div className="mt-3 rounded-lg border border-secondary/20 bg-secondary/5 p-3">
                      <p className="text-xs font-semibold text-secondary mb-1">How We Did It:</p>
                      <p className="text-xs text-muted-foreground">{s.howWeDidIt}</p>
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground/60">
                    {expanded === i ? "Click to close" : "Click to see how →"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trusted by */}
          <div className="mt-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Trusted by</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {trustedBy.map((c) => (
                <span key={c} className="text-sm font-medium text-muted-foreground/70">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
