import aboutPhoto from "@/assets/jhezreel-about.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 fade-in-section shadow-inner border-4 border-dotted rounded-3xl bg-accent border-muted-foreground px-[100px] mx-0 my-0">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl my-0 px-[10px] py-[50px] rounded-3xl bg-accent mx-[50px]">

          {/* Pill badge */}
          <div className="text-center mb-6 px-[100px] my-[20px]">
            <div className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-primary-foreground bg-slate-200 my-[5px] px-[20px] py-[10px] mx-[10px]">
              <span className="heartbeat-emoji about-heart-emoji">❤️</span>
              <span className="heartbeat-emoji about-heart-text text-primary-foreground">About Me</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
            {/* Left: Darker pink text box */}
            <div className="flex-1 shadow-2xl rounded-3xl bg-primary px-8 py-10 text-center md:text-left">
              <h2 className="mb-6 font-display text-3xl font-bold text-neutral-50 text-center sm:text-3xl">Hi, I'm <span className="text-primary-foreground">Jhez!</span> Your Automation Sidekick Virtual Assistant!</h2>

              <p className="mb-4 text-base leading-relaxed text-primary-foreground">
                Based in the Philippines, I partner with business owners to simplify their operations through AI-powered automations and smart workflows. By saving you 20–50+ hours a week, I handle the systems behind your success so you can focus on your clients, your growth, and the passion that started it all.
              </p>

              <p className="mb-6 text-base leading-relaxed text-primary-foreground">
                I've helped entrepreneurs reclaim hours each week so they can focus on what truly lights them up—whether that's scaling their vision, nurturing their passions, or simply enjoying the freedom automation brings.
              </p>

              <p className="text-base leading-relaxed text-primary-foreground">
                Let me also help you create a business that runs smoother, responds faster, and grows smarter — without adding more to your daily workload.
              </p>
            </div>

            {/* Right: Large photo on lighter pink background */}
            <div className="flex-shrink-0 w-full md:w-[340px] lg:w-[400px] flex items-center justify-center">
              <img
                src={aboutPhoto}
                alt="Jhezreel holding a laptop"
                className="w-full h-auto max-h-[500px] object-cover" />

            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;