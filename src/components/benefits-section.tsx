const benefits = [
  {
    number: "01",
    title: "Users do less",
    description:
      "Strip away every unnecessary step, prompt, and confirmation. Your users get from A to B with zero detours.",
    gradient: "from-accent to-accent-light",
  },
  {
    number: "02",
    title: "Teams ship faster",
    description:
      "Stop rebuilding wallet and payment plumbing. Intent handles the infrastructure so your team ships what matters.",
    gradient: "from-accent-light to-cyan",
  },
  {
    number: "03",
    title: "Products convert better",
    description:
      "Lower friction means higher completion rates, better retention, and users who actually come back.",
    gradient: "from-cyan to-[#06d6a0]",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan mb-4">
            Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            What actually changes
          </h2>
          <p className="max-w-xl mx-auto text-muted text-lg">
            Intent is measured by what it removes — friction, complexity, and
            wasted time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.number}
              className="group relative rounded-2xl border border-border bg-surface/40 p-8 transition-all duration-300 hover:border-accent/20 hover:bg-surface/60"
            >
              {/* Number */}
              <span
                className={`inline-block text-5xl font-black bg-gradient-to-br ${b.gradient} bg-clip-text text-transparent mb-6 opacity-60 group-hover:opacity-100 transition-opacity`}
              >
                {b.number}
              </span>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {b.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
