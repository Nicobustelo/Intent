export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="max-w-xs">
            <span className="text-lg font-bold tracking-tight text-foreground">
              Intent
            </span>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Wallet infrastructure for seamless payment and onboarding
              experiences. Built for teams that ship real products.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">
                Product
              </p>
              <ul className="space-y-2.5">
                {["Features", "Integrations", "For Builders"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">
                Company
              </p>
              <ul className="space-y-2.5">
                {["About", "Blog", "Careers"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-dark">
            &copy; {new Date().getFullYear()} Intent. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-muted-dark hover:text-muted transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
