import { useState, FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Calendar, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi Jhez! I'm ${form.name} (${form.email}). ${form.message}`);
    window.open(`https://m.me/jhzrrrl?ref=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="animate-on-scroll mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Left: Form */}
            <div>
              <h2 className="mb-6 text-3xl text-foreground sm:text-4xl" style={{ fontFamily: "'Pacifico', cursive" }}>
                Let's Connect
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  aria-label="Full name"
                  className="border-border bg-card"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  aria-label="Email address"
                  className="border-border bg-card"
                />
                <Textarea
                  placeholder="Your message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  aria-label="Message"
                  className="border-border bg-card"
                />
                <Button type="submit" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <MessageCircle className="h-4 w-4" /> Send via Messenger
                </Button>
              </form>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href="mailto:jhezreel.suarez.ops@gmail.com">
                    <Mail className="h-4 w-4 text-primary" /> Email Me
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href="https://www.linkedin.com/in/jhezreel-suarez" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: CTA + Calendly */}
            <Card className="border-secondary/20 bg-card">
              <CardContent className="flex flex-col justify-center space-y-6 p-8">
                <h3 className="text-2xl text-foreground" style={{ fontFamily: "'Pacifico', cursive" }}>
                  Ready to Streamline Your Workflows?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Schedule a complimentary 30-minute strategy session today. We'll explore tailored automation ideas to reclaim your time and fuel your growth—no obligations, just actionable insights.
                </p>
                <Button size="lg" className="btn-glow w-full gap-2 bg-secondary text-secondary-foreground text-lg font-semibold hover:bg-secondary/90" asChild>
                  <a href="https://calendly.com/jhezreel-suarez-ops/discoverycallwithjhez" target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-5 w-5" /> Book Your Session
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
