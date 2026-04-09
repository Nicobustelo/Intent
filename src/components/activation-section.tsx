export default function ActivationSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — feature cards */}
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center mb-4">
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
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Account funding
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Stellar requires a minimum XLM balance to activate an account.
                The agent provisions exactly the right amount before the
                transaction executes.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center mb-4">
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
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Activation before delivery
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                When the destination wallet is inactive, Intent detects it,
                creates the account on-chain, sets up the necessary trustlines,
                and then delivers the asset — all in a single transaction
                envelope.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center mb-4">
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
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Zero setup for recipients
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                The person receiving funds doesn&apos;t need to have ever
                interacted with Stellar. They get a wallet address, you send
                money, and it just arrives.
              </p>
            </div>
          </div>

          {/* Right — text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.15] mb-6">
              Send to Any Wallet,
              <br />
              <span className="bg-linear-to-r from-cyan to-cyan-dark bg-clip-text text-transparent">
                Even New Ones
              </span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-4">
              On Stellar, a wallet that has never received XLM literally
              doesn&apos;t exist yet. Try to send tokens to it and the
              transaction fails. This is the second wall your users hit.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Intent&apos;s agent detects inactive destinations and
              programmatically handles the full sequence — account creation,
              minimum balance funding, trustline setup, and asset delivery —
              before the user even finishes blinking.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#builders"
                className="inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-cyan/90"
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
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
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
        </div>
      </div>
    </section>
  );
}
