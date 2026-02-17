import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import profileImg from "@/assets/jhezreel-profile-nobg.png";

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

    type Orb = { x: number; y: number; r: number; vx: number; vy: number; color: string; opacity: number };
    const orbs: Orb[] = [];
    const orbColors = [
      "rgba(255,182,193,",
      "rgba(0,80,160,",
      "rgba(253,209,220,",
      "rgba(255,255,255,",
    ];
    for (let i = 0; i < 18; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 80 + 40,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
        color: orbColors[Math.floor(Math.random() * orbColors.length)],
        opacity: Math.random() * 0.12 + 0.04,
      });
    }

    type Particle = { x: number; y: number; r: number; vx: number; vy: number; color: string; opacity: number };
    const particles: Particle[] = [];
    const pColors = ["rgba(255,182,193,0.7)", "rgba(255,255,255,0.5)", "rgba(253,209,220,0.5)"];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.25,
        color: pColors[Math.floor(Math.random() * pColors.length)],
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      orbs.forEach((orb) => {
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        grad.addColorStop(0, orb.color + orb.opacity + ")");
        grad.addColorStop(1, orb.color + "0)");
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -orb.r) orb.x = canvas.width + orb.r;
        if (orb.x > canvas.width + orb.r) orb.x = -orb.r;
        if (orb.y < -orb.r) orb.y = canvas.height + orb.r;
        if (orb.y > canvas.height + orb.r) orb.y = -orb.r;
      });
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
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
    <section className="relative min-h-screen overflow-hidden bg-background pt-20 fade-in-section visible">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="container relative z-10 mx-auto flex flex-col items-center gap-12 px-4 py-16 lg:flex-row lg:py-24">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Enlarged badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 backdrop-blur-sm">
            <ShieldCheck className="h-7 w-7 text-primary flex-shrink-0" />
            <span className="font-display text-lg font-semibold text-primary sm:text-xl">
              GoHighLevel &amp; No-Code Automation Specialist
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI-Powered Automation to{" "}
            <span className="text-primary">Streamline and Scale</span> for Smarter Growth
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Stop stressing over complicated setups. I help streamline your business operations so you can focus on what truly matters—serving your clients and growing your business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <Button size="lg" className="text-base font-semibold transition-all duration-200 hover:scale-105 active:scale-95" asChild>
              <a href="#contact">Take My Business to the Next Level!</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base transition-all duration-200 hover:scale-105 active:scale-95" asChild>
              <a href="#projects">Discover Real Success</a>
            </Button>
          </div>
        </div>

        {/* Profile picture — transparent bg, brand frame + hover glow */}
        <div className="relative flex-shrink-0 group">
          {/* Ambient glow behind photo */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 via-primary/20 to-transparent blur-2xl transition-all duration-500 group-hover:blur-3xl group-hover:from-primary/60" />

          {/* Frame */}
          <div
            className="relative h-72 w-72 overflow-visible rounded-2xl border-2 border-primary/40 transition-all duration-500 group-hover:border-primary/70 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)/0.08) 0%, transparent 100%)",
              boxShadow: "0 0 0 4px hsl(var(--primary)/0.12), 0 20px 60px -10px hsl(var(--primary)/0.25)",
              transition: "box-shadow 0.5s ease, border-color 0.5s ease",
            }}
          >
            <img
              src={profileImg}
              alt="Jhezreel Suarez – No-Code Automation Specialist"
              className="h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
              style={{ filter: "drop-shadow(0 8px 24px hsl(var(--primary)/0.3))" }}
            />
          </div>

          {/* Decorative orbs */}
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/25 blur-2xl transition-all duration-500 group-hover:bg-primary/40" />
          <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-primary/15 blur-xl transition-all duration-500 group-hover:bg-primary/30" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
