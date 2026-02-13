import { Button } from "@/components/ui/button";
import { Clock, Zap, TrendingUp } from "lucide-react";
import profileImg from "@/assets/jhezreel-profile.png";

const stats = [
  { icon: Clock, value: "6+", label: "hrs saved weekly", delay: "animate-fade-up-delay-1" },
  { icon: Zap, value: "95%", label: "automation rate", delay: "animate-fade-up-delay-2" },
  { icon: TrendingUp, value: "42%", label: "conversion boosts", delay: "animate-fade-up-delay-3" },
];

const HeroSection = () => {
  return (
    <section className="hero-gradient relative min-h-screen overflow-hidden pt-20">
      <div className="container relative z-10 mx-auto flex flex-col items-center gap-12 px-4 py-16 lg:flex-row lg:py-24">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Pacifico', cursive" }}>
            Hey, I'm Jhez –{" "}
            <span className="text-primary">Your AI Automation Sidekick</span>{" "}
            from Antipolo
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Turning chaotic workflows into smooth, AI-powered magic so you reclaim your time & passion.
          </p>
          <p className="max-w-xl text-sm italic text-muted-foreground/80">
            "Because your business deserves to run like a dream."
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <Button size="lg" className="btn-glow bg-secondary text-secondary-foreground text-base font-semibold hover:bg-secondary/90" asChild>
              <a href="#services">Explore How I Can Help</a>
            </Button>
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-primary/30 shadow-2xl shadow-primary/20 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <img
              src={profileImg}
              alt="Jhezreel Suarez – AI-Powered No-Code Automation Expert smiling warmly"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-secondary/15 blur-2xl" />
        </div>
      </div>

      {/* Stats cards */}
      <div className="relative z-10 border-t border-border/40 bg-card/60 backdrop-blur-sm">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className={`flex items-center justify-center gap-3 opacity-0 ${stat.delay}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-sans text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
