"use client"

import { ArrowRight, Copy, Sparkles } from "lucide-react"
import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="w-full flex justify-center items-center pt-16 md:pt-16 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8">
      <div
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[36px] lg:rounded-[48px] border border-border bg-surface shadow-sm min-h-[480px] sm:min-h-[540px] md:min-h-[600px] flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 duration-500">
          <Suspense fallback={<div className="absolute inset-0 bg-surface/20" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply dark:mix-blend-screen dark:opacity-40">
              <Dithering
                colorBack="#00000000"
                colorFront="#7c5bf5"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-5 sm:px-8 md:px-12 max-w-4xl mx-auto text-center flex flex-col items-center">

            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-muted backdrop-blur-sm">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent-light shrink-0" />
              Wallet-as-a-service infrastructure
            </div>

            <h1 className="font-serif text-[clamp(1.75rem,7vw,6rem)] font-bold tracking-tight leading-[1.1] mb-5 sm:mb-8">
              <span className="block text-foreground">Create</span>
              <span className="block bg-linear-to-r from-cyan via-accent-light to-accent bg-clip-text text-transparent">Gasless Apps</span>
              <span className="block text-foreground">We handle fees</span>
            </h1>

            <p className="text-muted text-sm sm:text-base md:text-lg max-w-2xl mb-8 sm:mb-10 md:mb-12 leading-relaxed">
              Gas fees are the #1 drop-off point in your user funnel. Intent removes
              them completely, users never see a gas prompt again.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button className="group relative inline-flex h-12 sm:h-14 w-full sm:w-auto items-center justify-center gap-2.5 sm:gap-3 overflow-hidden rounded-full bg-cyan px-8 sm:px-10 text-sm sm:text-base font-semibold text-background transition-all duration-300 hover:bg-cyan/90 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(6,214,160,0.3)]">
                <span className="relative z-10">Dev friendly SDK</span>
                <Copy className="h-4 w-4 relative z-10" />
              </button>

              <button className="group relative inline-flex h-12 sm:h-14 w-full sm:w-auto items-center justify-center gap-2.5 sm:gap-3 overflow-hidden rounded-full border border-border bg-surface/60 px-8 sm:px-10 text-sm sm:text-base font-medium text-muted transition-all duration-300 hover:text-foreground hover:border-muted hover:bg-surface hover:scale-105 active:scale-95">
                <span className="relative z-10">Comprehensive Docs</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
