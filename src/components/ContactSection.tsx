import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Calendar, FileText, Linkedin, Twitter, Facebook, Clock, Plug, TrendingUp, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Clock, title: "Save Time & Money", desc: "Eliminate repetitive tasks and reduce costs by up to 70%." },
  { icon: Plug, title: "Seamless Integration", desc: "Connect all your tools into one unified, automated workflow." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Automations that grow with your business without extra headcount." },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you within 24 hours." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Let's Build Something <span className="text-primary">Amazing</span> Together
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ready to automate your business processes? Send me a message or book a free consultation to discuss your specific needs.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground">Why Choose AI Automation?</h3>
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{b.title}</div>
                    <div className="text-sm text-muted-foreground">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-4">
              <Button variant="outline" className="w-full justify-start gap-2" asChild>
                <a href="mailto:jhezreel@example.com">
                  <Mail className="h-4 w-4 text-primary" /> Email Me Directly
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2" asChild>
                <a href="#contact">
                  <Calendar className="h-4 w-4 text-primary" /> Schedule a Call
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2" asChild>
                <a href="#" download>
                  <FileText className="h-4 w-4 text-primary" /> View CV
                </a>
              </Button>
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right column - Form */}
          <Card className="border-border/50 bg-background">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
                <Input
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Your message..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
