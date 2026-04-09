export default function GaslessSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.15] mb-6">
              Transact in Stablecoins,
              <br />
              Skip the XLM
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-4">
              Most Stellar apps force users to acquire XLM before they can do
              anything — pay fees, set up trustlines, or simply send money.
              That&apos;s a dealbreaker for non-crypto users.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Intent intercepts the transaction when a wallet has no XLM,
              converts just enough stablecoin to cover the network cost, and
              delivers the payment. One action from the user, zero XLM required.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#builders"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:opacity-90"
              >
                Explore SDK
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground hover:bg-surface"
              >
                Read Docs
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Automatic token swap
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                The agent converts a fraction of the user&apos;s stablecoin
                balance to XLM to cover network fees — no manual exchange
                needed.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Fee sponsorship
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Gas costs are fully abstracted. Users only see the stablecoin
                amount they intended to send — no surprise XLM line items.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Usage-based pricing
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                A slightly higher fee than a standard transaction covers
                slippage, XLM provisioning, and execution. Friction becomes an
                embedded, pay-per-use cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
