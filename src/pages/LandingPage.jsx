import { HeroSection } from '../sections/HeroSection/HeroSection';
import { ProblemSection } from '../sections/ProblemSection/ProblemSection';
import { SolutionSection } from '../sections/SolutionSection/SolutionSection';
import { HowItWorksSection } from '../sections/HowItWorksSection/HowItWorksSection';
import { TeacherSection } from '../sections/TeacherSection/TeacherSection';
import { FeaturesSection } from '../sections/FeaturesSection/FeaturesSection';
import { AudienceSection } from '../sections/AudienceSection/AudienceSection';
import { TeamSection } from '../sections/TeamSection/TeamSection';
import { CtaSection } from '../sections/CtaSection/CtaSection';
import { Footer } from '../sections/Footer/Footer';

/**
 * LandingPage — Composição da narrativa institucional do Questia
 * incluindo a perspectiva do aluno e as telas reais do protótipo do professor.
 */
export function LandingPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <TeacherSection />
      <FeaturesSection />
      <AudienceSection />
      <TeamSection />
      <CtaSection />
      <Footer />
    </>
  );
}
