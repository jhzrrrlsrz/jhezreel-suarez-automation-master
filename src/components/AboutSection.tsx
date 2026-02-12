import { Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Heart className="h-4 w-4" />
            About Me
          </div>
          <h2 className="mb-6 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Hi, I'm <span className="text-primary">Jhezreel Suarez</span>
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            I'm from Antipolo, Philippines, specializing in GHL virtual assistance and AI-powered automations using Zapier, Make.com, and n8n. I help businesses save 20–50+ hours per week by building seamless integrations and intelligent workflows that eliminate repetitive tasks and scale operations effortlessly.
          </p>
          <blockquote className="rounded-xl border border-primary/20 bg-primary/5 px-6 py-4 font-display text-xl italic text-foreground">
            "Mastering the systems behind your success, so you have the freedom to follow your passion."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
