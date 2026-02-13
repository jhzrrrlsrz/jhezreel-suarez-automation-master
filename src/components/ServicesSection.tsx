import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Settings, Zap, Bot, Rocket, Workflow } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "GHL Setup & Management",
    desc: "I handle your full GoHighLevel setup, from CRM pipelines and funnels to ongoing optimization, so your systems run smoothly and you can focus on growing your business with confidence.",
  },
  {
    icon: Zap,
    title: "Zapier & Make Integrations",
    desc: "I connect your favorite tools through powerful multi-step automations that run quietly in the background, keeping your workflows moving smoothly without manual work.",
  },
  {
    icon: Bot,
    title: "AI Automation (OpenAI / GHL AI)",
    desc: "I build AI-powered automations—from chatbots to intelligent lead qualification—that help you respond faster, nurture leads better, and turn more conversations into conversions.",
  },
  {
    icon: Rocket,
    title: "High-Converting Sales Funnels",
    desc: "I build funnels that don't just look good—they're designed to convert. Using proven frameworks and strategic automation, your funnels guide visitors smoothly from first click to conversion while maximizing ROI through conversion-focused design, mobile-first layouts, and integrated analytics for smarter decisions.",
  },
  {
    icon: Workflow,
    title: "Advanced Automation Workflows",
    desc: "I build intelligent automation systems that nurture your leads, follow up at the right moments, and help close sales—even while you sleep. From smart behavioral triggers to multi-channel sequences and continuous optimization, your workflows are designed to support consistent growth without manual effort.",
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
          <p className="text-muted-foreground">Thoughtfully built automation that supports the systems behind your success.</p>
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
