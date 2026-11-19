import { GraduationCap, Users2, School, Check } from 'lucide-react';
import { AUDIENCE } from '../../data/content';
import styles from './AudienceSection.module.css';

/**
 * AudienceSection — O valor tangível para Alunos, Professores e Escolas.
 */
export function AudienceSection() {
  const iconMap = [GraduationCap, Users2, School];

  return (
    <section className={styles.section} aria-label="Impacto para estudantes, professores e escolas">
      <div className="container">
        <div className={styles.header}>
          <span className="badge-stamp" style={{ background: 'rgba(37, 99, 168, 0.1)', color: 'var(--color-blue-royal)' }}>
            {AUDIENCE.badge}
          </span>
          <h2 className={styles.h2}>{AUDIENCE.title}</h2>
        </div>

        <div className={styles.cardsGrid}>
          {AUDIENCE.cards.map((c, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.iconCircle} aria-hidden="true">
                    <Icon size={24} />
                  </div>
                  <div>
                    <span className={styles.target}>{c.target}</span>
                    <h3 className={styles.role}>{c.role}</h3>
                  </div>
                </div>

                <p className={styles.desc}>{c.description}</p>

                <div className={styles.bulletsList}>
                  {c.bullets.map((b, i) => (
                    <div key={i} className={styles.bulletItem}>
                      <div className={styles.checkCircle} aria-hidden="true">
                        <Check size={12} />
                      </div>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
