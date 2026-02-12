import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Settings, Zap, Workflow, Bot, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "GHL Setup & Management",
    desc: "Full GoHighLevel configuration, CRM pipelines, funnel building, and ongoing management to streamline your business.",
  },
  {
    icon: Zap,
    title: "Zapier / Make Integrations",
    desc: "Connect your favorite tools with powerful multi-step automations that run 24/7 without manual intervention.",
  },
  {
    icon: Workflow,
    title: "n8n Workflows",
    desc: "Self-hosted, advanced workflow automation for complex business logic and data processing at scale.",
  },
  {
    icon: Bot,
    title: "AI Automation (OpenAI / GHL AI)",
    desc: "Leverage AI-powered chatbots, content generation, and intelligent lead qualification to boost conversions.",
  },
  {
    icon: BarChart3,
    title: "Custom Dashboards & Reporting",
    desc: "Real-time analytics dashboards that give you clear visibility into KPIs and business performance.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            What I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground">End-to-end automation services tailored to your business needs</p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-display text-lg">{s.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{s.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
