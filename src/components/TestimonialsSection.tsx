import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Jhezreel completely transformed our lead management process. We went from spending 6 hours a day on manual follow-ups to having everything automated. Game changer!",
    name: "Mark Thompson",
    role: "CEO, We Buy St Pete Houses",
  },
  {
    quote: "Her GHL expertise is unmatched. She built automations we didn't even know were possible and saved us over $3,000/month in operational costs.",
    name: "Sarah Chen",
    role: "Founder, Squd Marketing",
  },
  {
    quote: "Working with Jhezreel was the best investment we made this year. Our customer response time dropped from 24 hours to under 5 minutes.",
    name: "David Rodriguez",
    role: "Operations Manager, Centner",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground">Don't take my word for it — hear from the people I've worked with</p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/50 bg-background">
              <CardContent className="pt-6">
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                <div>
                  <div className="font-display font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
