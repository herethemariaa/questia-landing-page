import { HOW_IT_WORKS } from '../../data/content';
import styles from './HowItWorksSection.module.css';

/**
 * HowItWorksSection — apresenta as 5 etapas da experiência de aprendizagem do Questia.
 * Layout horizontal com linha conectora entre as etapas.
 */
export function HowItWorksSection() {
  return (
    <section id="como-funciona" className={styles.section} aria-label="Como funciona o Questia">
      <div className="container">

        <div className={styles.sectionHeader}>
          <span className={styles.label}>Como Funciona</span>
          <h2 className={styles.title}>{HOW_IT_WORKS.title}</h2>
        </div>

        <div className={styles.stepsWrapper}>
          {/* Linha conectora (decorativa) */}
          <div className={styles.connectLine} aria-hidden="true" />

          <ol className={styles.stepsList}>
            {HOW_IT_WORKS.steps.map((step) => (
              <li key={step.number} className={styles.step}>
                <div className={styles.stepCircle} aria-hidden="true">
                  {step.number}
                </div>
                <div className={styles.stepCard}>
                  <h3 className={styles.stepName}>{step.name}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}
