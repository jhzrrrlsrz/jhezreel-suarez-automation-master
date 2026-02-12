import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$299",
    period: "/month",
    desc: "Perfect for solopreneurs getting started with automation.",
    features: [
      "GHL account setup & configuration",
      "Up to 3 Zapier/Make automations",
      "Basic CRM pipeline setup",
      "Email support",
      "Monthly strategy call",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "$599",
    period: "/month",
    desc: "Ideal for growing businesses that need full-stack automation.",
    features: [
      "Everything in Basic",
      "Up to 10 advanced automations",
      "n8n workflow development",
      "AI chatbot integration",
      "Custom dashboard & reporting",
      "Priority support",
      "Bi-weekly strategy calls",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$999",
    period: "/month",
    desc: "For enterprises requiring complex integrations & AI solutions.",
    features: [
      "Everything in Standard",
      "Unlimited automations",
      "Advanced AI integrations (OpenAI)",
      "Full API & webhook development",
      "Dedicated account manager",
      "24/7 priority support",
      "Weekly strategy sessions",
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
          <p className="text-muted-foreground">Choose a plan that fits your business goals</p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
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
