export default function ProblemSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-surface-light" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-background to-transparent z-1" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            What is Intent
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            An agent-driven payment layer{" "}
            <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-accent to-accent-light bg-clip-text text-transparent">
              for Stellar
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            Requiring users to hold XLM for fees and account activation is the
            biggest UX break preventing real adoption — especially for people
            who have never touched crypto. Intent removes both barriers so your
            users only ever see stablecoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-lg">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Stablecoin-native transactions
            </h3>
            <p className="text-muted leading-relaxed">
              Users pay and receive in USDC or any stablecoin. When the network
              needs XLM for fees, an agent swaps and sponsors it behind the
              scenes — the user never knows.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-lg">
            <div className="w-11 h-11 rounded-xl bg-cyan/10 flex items-center justify-center mb-5">
              <svg
                className="w-5 h-5 text-cyan"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Automatic wallet activation
            </h3>
            <p className="text-muted leading-relaxed">
              Sending to a wallet that doesn&apos;t exist yet? Intent detects
              it, funds the minimum balance, activates the account, and delivers
              the payment — all in one step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
