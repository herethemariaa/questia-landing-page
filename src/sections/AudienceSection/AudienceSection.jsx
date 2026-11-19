import { AUDIENCE } from '../../data/content';
import styles from './AudienceSection.module.css';

/**
 * AudienceSection — para quem é o Questia (Estudantes, Professores, Escolas).
 */
export function AudienceSection() {
  return (
    <section className={styles.section} aria-label="Público-alvo do Questia">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.label}>Público</span>
          <h2 className={styles.title}>{AUDIENCE.title}</h2>
        </div>

        <div className={styles.cardsGrid}>
          {AUDIENCE.groups.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.iconCircle} aria-hidden="true">
                <span>{item.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
