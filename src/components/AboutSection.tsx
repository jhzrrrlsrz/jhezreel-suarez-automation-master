const AboutSection = () => {
  return (
    <section id="about" className="bg-card py-20 fade-in-section">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">

          {/* Pill badge — heart + "About Me" beat together */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="heartbeat-emoji about-heart-emoji">❤️</span>
            <span className="heartbeat-emoji about-heart-text">About Me</span>
          </div>

          <h2 className="mb-6 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Hi, I'm <span className="text-primary">Jhez!</span> Your Automation Sidekick Virtual Assistant!
          </h2>

          {/* Body paragraphs — ~half the heading size */}
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            Based in the Philippines, I partner with business owners to simplify their operations through AI-powered automations and smart workflows. By saving you 20–50+ hours a week, I handle the systems behind your success so you can focus on your clients, your growth, and the passion that started it all.
          </p>

          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            I've helped entrepreneurs reclaim hours each week so they can focus on what truly lights them up—whether that's scaling their vision, nurturing their passions, or simply enjoying the freedom automation brings.
          </p>

          {/* Centered closing line */}
          <p className="text-lg leading-relaxed text-muted-foreground">
            Let me also help you create a business that runs smoother, responds faster, and grows smarter — without adding more to your daily workload.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
