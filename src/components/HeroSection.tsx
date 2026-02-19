import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/jhezreel-profile-v5.png";

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

      <div className="container relative z-10 mx-auto px-8 py-16 lg:px-24 lg:py-24 xl:px-32">

        {/* ── Main flex row: text left + photo right ── */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* ── Left: text content ── */}
          <div className="flex-1 space-y-7 text-left">

            {/* Main headline */}
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI-Powered Automation to{" "}
              <span className="text-primary">Streamline and Scale</span> for Smarter Growth
            </h1>

            {/* Supporting paragraph */}
            <p className="max-w-xl text-lg text-muted-foreground">
              Stop stressing over complicated setups. I help streamline your business operations so you can focus on what truly matters—serving your clients and growing your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="hero-cta-btn text-base font-semibold"
                asChild
              >
                <a href="#contact">Take My Business to the Next Level!</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hero-cta-btn text-base"
                asChild
              >
                <a href="#projects">Discover Real Success</a>
              </Button>
            </div>
          </div>

          {/* ── Right: Profile picture — circular, smoky pink bg ── */}
          <div className="relative flex-shrink-0 group self-center">

            {/* Pink pulsing halo ring */}
            <div className="hero-photo-halo absolute inset-0 rounded-full" />

            {/* Circular frame with smoky pink background */}
            <div
              className="relative overflow-hidden rounded-full transition-all duration-500"
              style={{
                width: "clamp(260px, 30vw, 360px)",
                height: "clamp(260px, 30vw, 360px)",
                background: "radial-gradient(circle at 50% 60%, rgba(255,182,193,0.5) 0%, rgba(255,153,187,0.3) 45%, rgba(255,105,160,0.15) 100%)",
                boxShadow: "0 0 0 3px rgba(255,182,193,0.3), 0 0 30px 6px rgba(255,182,193,0.18), 0 20px 60px -10px rgba(255,105,160,0.25)",
                transition: "box-shadow 0.5s ease",
              }}
            >
              <img
                src={profileImg}
                alt="Jhezreel Suarez – No-Code Automation Specialist"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  objectPosition: "50% 5%",
                  filter: "drop-shadow(0 4px 24px rgba(255,182,193,0.18))",
                }}
              />
            </div>

            {/* Hover glow intensifier */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: "0 0 40px 12px rgba(255,182,193,0.35)" }}
            />

            {/* Ambient glow blobs */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/25 blur-2xl transition-all duration-500 group-hover:bg-primary/40" />
            <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-primary/15 blur-xl transition-all duration-500 group-hover:bg-primary/30" />
          </div>
        </div>

        {/* ── Slogan — full-width centered below the flex row ── */}
        <div className="mt-8 flex justify-center">
          <p
            className="max-w-3xl text-center text-2xl font-bold italic leading-snug sm:text-[1.6rem] lg:text-[1.75rem]"
            style={{ fontFamily: "'Inter', sans-serif", color: "#FFFFFF" }}
          >
            "Mastering the systems behind your success, so you have the freedom to follow your passion."
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

