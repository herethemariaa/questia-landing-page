import { IMPACT } from '../../data/content';
import styles from './ImpactSection.module.css';

/**
 * ImpactSection — Visão institucional e impacto educacional.
 */
export function ImpactSection() {
  return (
    <section className={styles.section} aria-label="Nossa visão e impacto">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.starIcon} aria-hidden="true">✦</div>
          <span className={styles.badge}>Propósito & Visão</span>
          <h2 className={styles.title}>{IMPACT.title}</h2>
          <p className={styles.description}>{IMPACT.description}</p>
        </div>
      </div>
    </section>
  );
}
