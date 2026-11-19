import { ArrowUpRight } from 'lucide-react';
import { Star12 } from '../../components/Star12/Star12';
import { Button } from '../../components/Button/Button';
import { CTA_FINAL } from '../../data/content';
import styles from './CtaSection.module.css';

/**
 * CtaSection — Chamada final de alto impacto convidando a conhecer o protótipo funcional.
 */
export function CtaSection() {
  return (
    <section className={styles.section} aria-label="Chamada para experimentar o Questia">
      <div className={`container ${styles.inner}`}>
        <div className={styles.badgeLine}>
          <Star12 size={16} color="var(--color-amber-gold)" />
          <span>{CTA_FINAL.badge}</span>
        </div>
        <h2 className={styles.title}>{CTA_FINAL.title}</h2>
        <p className={styles.description}>{CTA_FINAL.description}</p>
        <div className={styles.action}>
          <Button href={CTA_FINAL.button.href} variant="primary" icon={ArrowUpRight}>
            {CTA_FINAL.button.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
