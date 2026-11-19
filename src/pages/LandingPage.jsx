import { HeroSection } from '../sections/HeroSection/HeroSection';
import { ProblemSection } from '../sections/ProblemSection/ProblemSection';
import { SolutionSection } from '../sections/SolutionSection/SolutionSection';
import { HowItWorksSection } from '../sections/HowItWorksSection/HowItWorksSection';
import { FeaturesSection } from '../sections/FeaturesSection/FeaturesSection';
import { AudienceSection } from '../sections/AudienceSection/AudienceSection';
import { ImpactSection } from '../sections/ImpactSection/ImpactSection';
import { CtaSection } from '../sections/CtaSection/CtaSection';
import { Footer } from '../sections/Footer/Footer';

/**
 * LandingPage — composição completa da landing page Questia.
 * Ordem definida em docs/conteudo.md:
 * Hero → Problema → Solução → Como funciona → Funcionalidades → Para quem é → Impacto → CTA final → Footer
 */
export function LandingPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <AudienceSection />
      <ImpactSection />
      <CtaSection />
      <Footer />
    </>
  );
}
