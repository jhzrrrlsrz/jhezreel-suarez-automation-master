const AboutSection = () => {
  return (
    <section id="about" className="py-20 fade-in-section bg-sidebar-primary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">

          {/* Pill badge — heart + "About Me" beat together */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground bg-[sidebar-accent-foreground] bg-slate-200">
            <span className="heartbeat-emoji about-heart-emoji">❤️</span>
            <span className="heartbeat-emoji about-heart-text text-primary-foreground">About Me</span>
          </div>

          <h2 className="mb-6 font-display text-3xl font-bold sm:text-4xl text-neutral-50">
            Hi, I'm <span className="text-primary-foreground">Jhez!</span> Your Automation Sidekick Virtual Assistant!
          </h2>

          {/* Body paragraphs — standard body size */}
          <p className="mb-4 text-base leading-relaxed text-primary-foreground">
            Based in the Philippines, I partner with business owners to simplify their operations through AI-powered automations and smart workflows. By saving you 20–50+ hours a week, I handle the systems behind your success so you can focus on your clients, your growth, and the passion that started it all.
          </p>

          <p className="mb-6 text-base leading-relaxed text-primary-foreground">
            I've helped entrepreneurs reclaim hours each week so they can focus on what truly lights them up—whether that's scaling their vision, nurturing their passions, or simply enjoying the freedom automation brings.
          </p>

          {/* Centered closing line */}
          <p className="text-base leading-relaxed text-primary-foreground">
            Let me also help you create a business that runs smoother, responds faster, and grows smarter — without adding more to your daily workload.
          </p>
        </div>
      </div>
    </section>);

};

export default AboutSection;