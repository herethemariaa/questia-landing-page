import { Quote } from 'lucide-react';
import { IMPACT } from '../../data/content';
import styles from './ImpactSection.module.css';

/**
 * ImpactSection — Manifesto pedagógico e compromisso com o futuro da educação.
 */
export function ImpactSection() {
  return (
    <section className={styles.section} aria-label="Manifesto pedagógico">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.quoteIconWrapper} aria-hidden="true">
            <Quote size={32} />
          </div>

          <span className={styles.badge}>{IMPACT.badge}</span>
          <h2 className={styles.title}>{IMPACT.title}</h2>
          <blockquote className={styles.quote}>
            "{IMPACT.quote}"
          </blockquote>
          <cite className={styles.author}>— {IMPACT.author}</cite>
        </div>
      </div>
    </section>
  );
}
