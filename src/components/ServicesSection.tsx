import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Zap, Bot, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Settings,
    title: "GHL Setups & AI Bots",
    stat: "95% efficiency",
    desc: "Full GoHighLevel setup from CRM pipelines and funnels to AI chatbots and intelligent lead qualification.",
  },
  {
    icon: Zap,
    title: "Zapier/Make Integrations",
    stat: "20-50+ hrs saved",
    desc: "Multi-step automations connecting your favorite tools, running quietly in the background.",
  },
  {
    icon: Bot,
    title: "Sales Funnels & Workflows",
    stat: "42% conversion uplift",
    desc: "Conversion-focused funnels with behavioral triggers, multi-channel sequences, and continuous optimization.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$497",
    desc: "Basic Audit + 1 Workflow",
    features: ["Business process audit", "1 custom automation workflow", "Up to 3 app integrations", "1 revision round"],
  },
  {
    name: "Growth",
    price: "$997",
    desc: "Full GHL Setup + AI Integration",
    features: ["Full GHL account setup", "AI chatbot integration", "3-5 automation workflows", "Onboarding sequences", "2 revision rounds"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Ongoing Optimization",
    features: ["10+ advanced automations", "5+ app integrations", "Full lead nurturing system", "SOPs & documentation", "Priority support"],
  },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="animate-on-scroll">
          <div className="mb-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary">
              AI-Powered No-Code Automation Expert
            </Badge>
            <h2 className="mb-3 text-3xl text-foreground sm:text-4xl" style={{ fontFamily: "'Pacifico', cursive" }}>
              What I Can Do for You
            </h2>
            <p className="text-muted-foreground">Thoughtfully built automation that supports the systems behind your success.</p>
          </div>

          {/* Service cards */}
          <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {services.map((s) => (
              <Card
                key={s.title}
                className="group border-2 border-secondary/20 bg-card transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-secondary/10"
              >
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 transition-colors group-hover:bg-primary/25">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-sans text-lg font-bold">{s.title}</CardTitle>
                  <Badge variant="outline" className="w-fit border-secondary/30 text-secondary text-xs">{s.stat}</Badge>
                  <CardDescription className="text-muted-foreground">{s.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Pricing tiers */}
          <div className="mb-4 text-center">
            <h3 className="mb-2 text-2xl text-foreground" style={{ fontFamily: "'Pacifico', cursive" }}>
              Transparent Pricing
            </h3>
            <p className="text-sm text-muted-foreground">Simple rates. No surprises. Just results.</p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {pricing.map((p) => (
              <Card
                key={p.name}
                className={`relative flex flex-col border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  p.popular ? "border-secondary shadow-xl shadow-secondary/10" : "border-border/50"
                }`}
              >
                {p.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="font-sans text-lg font-bold">{p.name}</CardTitle>
                  <div className="mt-1">
                    <span className="font-sans text-3xl font-bold text-foreground">{p.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full btn-glow bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                    <a href="#contact">Get Started</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
