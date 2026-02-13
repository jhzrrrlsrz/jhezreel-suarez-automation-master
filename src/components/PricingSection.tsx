import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Package",
    price: "$299",
    period: "/month",
    desc: "GoHighLevel account setup & full configuration, including a basic CRM pipeline.",
    features: [
      "GHL account setup & full configuration",
      "Basic CRM pipeline setup",
      "1–3 basic automations (GHL, Zapier, or Make.com)",
      "Connect up to 3 apps (e.g., HubSpot, Gmail)",
      "Simple triggers and actions for smooth workflows",
    ],
    popular: false,
  },
  {
    name: "Plus Package",
    price: "$799",
    period: "/month",
    desc: "Everything in Starter, plus smarter multi-step automation.",
    features: [
      "Everything in Starter Package",
      "4–6 automations (GHL, Zapier, or Make.com)",
      "Multi-step workflows with conditional paths & delays",
      "Automated onboarding & follow-up sequences",
      "Error handling and notifications",
    ],
    popular: true,
  },
  {
    name: "Enterprise Package",
    price: "$1,199",
    period: "/month",
    desc: "Advanced integrations and full-scale automation.",
    features: [
      "10–12 advanced automations",
      "Integration of 5+ apps (CRMs, accounting, marketing)",
      "Advanced conditional logic, loops & delays",
      "Full onboarding, lead nurturing & follow-up sequences",
      "Error monitoring & automated recovery",
      "Documentation, SOPs & Loom videos",
    ],
    popular: false,
  },
  {
    name: "Hourly Rate",
    price: "$10–$15",
    period: "/hour",
    desc: "Flexible hands-on support for automations, workflows, and AI integrations.",
    features: [
      "Part-time or full-time availability",
      "Pay only for the hours used",
      "Perfect for long-term projects",
      "Tailored to your specific needs",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Simple rates. No surprises. Just results. Straightforward pricing based on workflow complexity, number of apps, and required support. Packages are flexible and can be customized to match your specific project needs.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col border transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/10 scale-[1.02]"
                  : "border-border/50 hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="font-display text-xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                  <a href="#contact">Get Started</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
