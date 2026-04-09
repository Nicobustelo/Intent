import Navbar from "../components/navbar";
import { CTASection as Hero } from "../components/ui/hero-dithering-card";
import ProblemSection from "../components/problem-section";
import GaslessSection from "../components/gasless-section";
import ActivationSection from "../components/activation-section";
import FeaturesGrid from "../components/features-grid";
import BuildersSection from "../components/builders-section";
import IntegrationsSection from "../components/integrations-section";
import BenefitsSection from "../components/benefits-section";
import CtaSection from "../components/cta-section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <GaslessSection />
        <ActivationSection />
        <FeaturesGrid />
        <BuildersSection />
        <IntegrationsSection />
        <BenefitsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
