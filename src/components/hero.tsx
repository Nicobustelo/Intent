export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orb top-right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[140px] animate-pulse-glow" />
        {/* Gradient orb center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full bg-accent/8 blur-[100px] animate-pulse-glow animation-delay-400" />
        {/* Gradient orb bottom-left */}
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full bg-cyan/10 blur-[120px] animate-pulse-glow animation-delay-200" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,91,245,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(124,91,245,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Radial fade for grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--color-background)_70%)]" />
        {/* Noise texture simulation */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/40 backdrop-blur-sm px-4 py-1.5 mb-8 animate-fade-in-up">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan animate-[pulse_2s_ease-in-out_infinite]" />
          <span className="text-xs font-medium tracking-wide text-muted uppercase">
            Wallet infrastructure for seamless experiences
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6 animate-fade-in-up animation-delay-200">
          <span className="text-foreground">Make payments{" "}</span>
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-accent via-accent-light to-cyan bg-clip-text text-transparent">
            feel invisible
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted leading-relaxed mb-10 animate-fade-in-up animation-delay-400">
          Intent helps teams abstract fees, simplify onboarding, and ship
          smoother wallet and payment experiences — so users never hit a wall.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          <a
            href="#cta"
            className="group inline-flex items-center justify-center rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_30px_rgba(124,91,245,0.4)] hover:-translate-y-0.5"
          >
            Get early access
            <svg
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border border-border px-7 py-3.5 text-sm font-medium text-muted transition-all duration-300 hover:text-foreground hover:border-muted hover:bg-surface/50"
          >
            See how it works
          </a>
        </div>

        {/* Decorative line */}
        <div className="mt-24 mx-auto w-px h-24 bg-gradient-to-b from-accent/40 to-transparent" />
      </div>
    </section>
  );
}
