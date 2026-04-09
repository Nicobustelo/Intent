const categories = [
  {
    label: "Embedded Wallets",
    items: [
      { name: "WaaS", color: "from-violet-500 to-purple-600" },
      { name: "Auth", color: "from-blue-500 to-cyan-500" },
      { name: "Social", color: "from-pink-500 to-rose-500" },
    ],
  },
  {
    label: "External Wallets",
    items: [
      { name: "Browser", color: "from-amber-500 to-orange-500" },
      { name: "Mobile", color: "from-indigo-500 to-violet-500" },
      { name: "Hardware", color: "from-slate-500 to-zinc-600" },
    ],
  },
  {
    label: "Payment Flows",
    items: [
      { name: "On-ramp", color: "from-emerald-500 to-green-600" },
      { name: "Off-ramp", color: "from-teal-500 to-cyan-600" },
      { name: "P2P", color: "from-sky-500 to-blue-600" },
    ],
  },
  {
    label: "Applications",
    items: [
      { name: "Consumer", color: "from-rose-500 to-pink-600" },
      { name: "Enterprise", color: "from-gray-500 to-slate-600" },
      { name: "Agentic", color: "from-cyan-400 to-emerald-500" },
    ],
  },
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-surface-light" />
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#08080e] to-transparent z-[1]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Works with your{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              existing stack
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-muted">
            No migration needed. Intent plugs into the wallet providers, payment
            rails, and app architectures you already use.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:shadow-lg hover:border-accent/20"
            >
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-dark mb-5">
                {cat.label}
              </p>
              <div className="flex gap-3">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-2">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                    >
                      {item.name[0]}
                    </div>
                    <span className="text-[10px] text-muted font-medium">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-dark mt-8">
          And many more — Intent is designed to be stack-agnostic.
        </p>
      </div>
    </section>
  );
}
