import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, FolderKanban, ShieldCheck } from "lucide-react";
import profileImg from "@/assets/jhezreel-profile.png";

const stats = [
  { icon: Clock, value: "6+", label: "Hours Saved Per Week" },
  { icon: Zap, value: "95%", label: "Task Automation" },
  { icon: FolderKanban, value: "25+", label: "Projects Automated" },
];

const clients = ["We Buy St Pete Houses", "Squd", "Best Home Buyer Cash.com", "Centner"];

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; r: number; vx: number; vy: number; color: string; opacity: number }[] = [];
    const colors = ["rgba(255,182,193,0.6)", "rgba(255,255,255,0.4)", "rgba(200,210,220,0.3)", "rgba(255,182,193,0.3)"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * (canvas.width + 200),
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        vx: -(Math.random() * 0.5 + 0.2),
        vy: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="container relative z-10 mx-auto flex flex-col items-center gap-12 px-4 py-16 lg:flex-row lg:py-24">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <Badge variant="secondary" className="inline-flex items-center gap-2 border-primary/30 bg-primary/10 text-primary">
            <ShieldCheck className="h-4 w-4" />
            GoHighLevel Certified Admin
          </Badge>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Automate. Scale.{" "}
            <span className="text-primary">Dominate</span> with Go High Level.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Stop wrestling with complex setups. Let a certified expert transform your business operations while you focus on growing revenue and serving clients.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <Button size="lg" className="text-base font-semibold" asChild>
              <a href="#contact">Transform My Business Now</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <a href="#projects">See Success Stories</a>
            </Button>
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl shadow-primary/10 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <img
              src={profileImg}
              alt="Jhezreel Suarez – GHL & Automation Specialist"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-full bg-primary/20 blur-2xl" />
          <div className="absolute -top-3 -left-3 h-16 w-16 rounded-full bg-primary/10 blur-xl" />
        </div>
      </div>

      <div className="relative z-10 border-t border-border/40 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 border-t border-border/30 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-8 px-4 py-6">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Trusted by</span>
          {clients.map((c) => (
            <span key={c} className="text-sm font-medium text-muted-foreground/70">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
