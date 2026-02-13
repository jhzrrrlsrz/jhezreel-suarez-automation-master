import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Laptop, TreePalm, Bot } from "lucide-react";
import profileImg from "@/assets/jhezreel-profile.png";

const milestones = [
  { year: "2020", label: "Started freelancing" },
  { year: "2022", label: "First GHL automation" },
  { year: "2023", label: "AI-powered workflows" },
  { year: "2024", label: "50+ hrs/week saved for clients" },
];

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="animate-on-scroll mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Heart className="h-4 w-4" />
              About Me
            </div>
            <h2 className="mb-6 text-3xl text-foreground sm:text-4xl" style={{ fontFamily: "'Pacifico', cursive" }}>
              Hi, I'm <span className="text-primary">Jhez!</span>
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Growing up in Antipolo, I saw small businesses bogged down by endless manual tasks under the warm Philippine sun… That's when I fell in love with no-code tools—they empower anyone to build smart, scalable systems without the code grind.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                What fires me up? Watching owners get hours back for family, travel, or their true passions. As your AI-Powered No-Code Automation Expert, I blend Zapier, Make/n8n, GHL, and AI bots to create funnels and workflows that feel effortless.
              </p>
              <p className="text-lg leading-relaxed text-foreground font-medium">
                Let's connect—tell me what's stealing your time today.
              </p>

              {/* Passion icons */}
              <div className="flex gap-4 pt-2">
                {[
                  { icon: Laptop, label: "Tech" },
                  { icon: TreePalm, label: "Antipolo" },
                  { icon: Bot, label: "Automation" },
                ].map((p) => (
                  <div key={p.label} className="flex flex-col items-center gap-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                      <p.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: photo + timeline */}
            <div className="flex flex-col items-center gap-6">
              <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-primary/20">
                <img src={profileImg} alt="Jhez smiling" className="h-full w-full object-cover object-top" />
              </div>

              {/* Timeline */}
              <div className="w-full space-y-3">
                {milestones.map((m) => (
                  <div key={m.year} className="flex items-center gap-3">
                    <div className="flex h-8 w-14 flex-shrink-0 items-center justify-center rounded-md bg-primary/15 text-xs font-bold text-primary">
                      {m.year}
                    </div>
                    <span className="text-sm text-muted-foreground">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <blockquote className="mt-10 rounded-xl border border-primary/20 bg-primary/5 px-6 py-4 text-center text-xl italic text-foreground" style={{ fontFamily: "'Pacifico', cursive" }}>
            "Mastering the systems behind your success, so you have the freedom to follow your passion."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
