import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, FileText, Clock, Plug, TrendingUp, MessageCircle } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Save Time, Work Smarter", desc: "Automate repetitive tasks and free up hours every week." },
  { icon: Plug, title: "Connect All Your Tools", desc: "GoHighLevel, Zapier, Make.com, and more—working together seamlessly." },
  { icon: TrendingUp, title: "Grow Without Limits", desc: "Automations that scale with your business, no extra headcount required." },
];

const ContactSection = () => {
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
          {/* Left column - Why Choose AI Automation */}
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
          </div>

          {/* Right column - Contact options */}
          <Card className="border-border/50 bg-background">
            <CardContent className="space-y-4 pt-6">
              <Button variant="outline" className="w-full justify-start gap-2" asChild>
                <a href="mailto:jhezreel.suarez.ops@gmail.com">
                  <Mail className="h-4 w-4 text-primary" /> Email Me Directly
                  <span className="ml-auto text-xs text-muted-foreground">jhezreel.suarez.ops@gmail.com</span>
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2" asChild>
                <a href="https://calendly.com/jhezreel-suarez-ops/discoverycallwithjhez" target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-4 w-4 text-primary" /> Schedule a Call
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2" asChild>
                <a href="#" download>
                  <FileText className="h-4 w-4 text-primary" /> View CV
                </a>
              </Button>
              <Button className="w-full gap-2" asChild>
                <a href="https://m.me/jhzrrrl" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> Send Message
                </a>
              </Button>

              {/* Online Platform Links */}
              <div className="pt-2">
                <p className="mb-3 text-sm font-medium text-muted-foreground">Find me on</p>
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className="gap-2 text-foreground" asChild>
                    <a href="https://www.onlinejobs.ph/jobseekers/info/4325506" target="_blank" rel="noopener noreferrer">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">OJ</text></svg>
                      OnlineJobs.ph
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 text-foreground" asChild>
                    <a href="https://www.upwork.com/freelancers/~01ea0186bed5f5a3e1" target="_blank" rel="noopener noreferrer">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.491-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.214-1.832-2.148-4.032-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>
                      Upwork
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
