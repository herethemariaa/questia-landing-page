import { Button } from '../../components/Button/Button';
import { CTA_FINAL } from '../../data/content';
import styles from './CtaSection.module.css';

/**
 * CtaSection — Chamada de conversão final antes do rodapé.
 */
export function CtaSection() {
  return (
    <section className={styles.section} aria-label="Chamada para experimentar o Questia">
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>{CTA_FINAL.title}</h2>
          <p className={styles.description}>{CTA_FINAL.description}</p>
          <div className={styles.actions}>
            <Button href={CTA_FINAL.button.href} variant="primary">
              {CTA_FINAL.button.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
