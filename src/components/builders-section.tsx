import { type ReactNode } from "react";

interface Token {
  text: string;
  className?: string;
}

function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  let remaining = line;

  while (remaining.length > 0) {
    // Comments
    const commentMatch = remaining.match(/^(\/\/.*)/);
    if (commentMatch) {
      tokens.push({ text: commentMatch[1], className: "text-muted-dark italic" });
      remaining = remaining.slice(commentMatch[1].length);
      continue;
    }

    // Strings (single or double quoted)
    const stringMatch = remaining.match(/^('[^']*'|"[^"]*")/);
    if (stringMatch) {
      tokens.push({ text: stringMatch[1], className: "text-cyan" });
      remaining = remaining.slice(stringMatch[1].length);
      continue;
    }

    // Keywords
    const keywordMatch = remaining.match(/^(import|from|const|await|new|true|false)\b/);
    if (keywordMatch) {
      tokens.push({ text: keywordMatch[1], className: "text-accent-light" });
      remaining = remaining.slice(keywordMatch[1].length);
      continue;
    }

    // Type names
    const typeMatch = remaining.match(/^(Intent)\b/);
    if (typeMatch) {
      tokens.push({ text: typeMatch[1], className: "text-[#f0abfc]" });
      remaining = remaining.slice(typeMatch[1].length);
      continue;
    }

    // Regular character
    tokens.push({ text: remaining[0] });
    remaining = remaining.slice(1);
  }

  // Merge adjacent tokens with same className
  const merged: Token[] = [];
  for (const t of tokens) {
    const last = merged[merged.length - 1];
    if (last && last.className === t.className) {
      last.text += t.text;
    } else {
      merged.push({ ...t });
    }
  }

  return merged;
}

function CodeLine({ line, num }: { line: string; num: number }) {
  const tokens = tokenizeLine(line);
  return (
    <div className="flex">
      <span className="select-none w-8 text-right mr-4 text-muted-dark/40 text-xs leading-6">
        {num}
      </span>
      <span>
        {tokens.map((t, i) =>
          t.className ? (
            <span key={i} className={t.className}>
              {t.text}
            </span>
          ) : (
            <span key={i}>{t.text}</span>
          )
        )}
      </span>
    </div>
  );
}

export default function BuildersSection() {
  const codeLines = [
    `import { Intent } from '@intent/sdk'`,
    ``,
    `const client = new Intent({`,
    `  projectId: 'your-project-id',`,
    `  environment: 'production',`,
    `})`,
    ``,
    `// Create a seamless payment flow`,
    `const flow = await client.flows.create({`,
    `  type: 'payment',`,
    `  sponsorFees: true,`,
    `  onboarding: {`,
    `    mode: 'embedded',`,
    `    skipSeedPhrase: true,`,
    `  },`,
    `  steps: [`,
    `    {`,
    `      action: 'transfer',`,
    `      amount: '50.00',`,
    `      currency: 'USDC',`,
    `    }`,
    `  ],`,
    `})`,
    ``,
    `// User sees one clean action`,
    `await flow.execute({ userId: 'user_abc123' })`,
  ];

  return (
    <section id="builders" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#08080e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,91,245,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,214,160,0.05),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan mb-4">
            For builders
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Built for teams that{" "}
            <span className="bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent">
              ship real products
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg">
            Integrate in minutes, not weeks. Intent gives you composable
            primitives that fit your architecture.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Code panel */}
          <div className="rounded-2xl border border-white/10 bg-[#0c0c14] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0e0e18]">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="ml-3 text-xs text-gray-500 font-mono">
                setup.ts
              </span>
            </div>
            <div className="p-5 overflow-x-auto">
              <pre className="text-[13px] leading-6 font-mono">
                <code>
                  {codeLines.map((line, i) => (
                    <CodeLine key={i} line={line} num={i + 1} />
                  ))}
                </code>
              </pre>
            </div>
          </div>

          {/* DX features */}
          <div className="flex flex-col gap-6 lg:py-4">
            {(
              [
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  ),
                  title: "Fast integration",
                  description:
                    "Go from zero to working flow in under 20 lines. Our SDK handles the complexity so you can focus on your product.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                  ),
                  title: "Composable primitives",
                  description:
                    "Mix and match wallet, payment, and onboarding modules. Build exactly the flow your users need, nothing more.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                  title: "Type-safe by default",
                  description:
                    "Full TypeScript support with auto-complete, runtime validation, and clear error messages that actually help.",
                },
              ] as { icon: ReactNode; title: string; description: string }[]
            ).map((item) => (
              <div
                key={item.title}
                className="group flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-accent/20 hover:bg-white/10"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent shrink-0 group-hover:bg-accent/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
