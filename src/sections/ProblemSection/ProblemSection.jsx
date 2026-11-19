import { PROBLEM } from '../../data/content';
import styles from './ProblemSection.module.css';

/**
 * ProblemSection — apresenta o contexto educacional que motivou o Questia.
 * Fundo branco para contraste com o Hero azul escuro.
 */
export function ProblemSection() {
  return (
    <section id="problema" className={styles.section} aria-label="O problema educacional">
      <div className="container">

        {/* Cabeçalho */}
        <div className={styles.sectionHeader}>
          <span className={styles.label}>O Problema</span>
          <h2 className={styles.title}>{PROBLEM.title}</h2>
          <p className={styles.description}>{PROBLEM.description}</p>
        </div>

        {/* Estatísticas */}
        <div className={styles.statsGrid}>
          {PROBLEM.stats.map(stat => (
            <div key={stat.value} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <p className={styles.statLabel}>{stat.label}</p>
              <span className={styles.statSource}>{stat.source}</span>
            </div>
          ))}
        </div>

        {/* Quem sofre */}
        <div className={styles.sufferBlock}>
          <h3 className={styles.sufferTitle}>Quem sofre com isso?</h3>
          <div className={styles.sufferGrid}>
            {PROBLEM.whoSuffers.map(({ group, items }) => (
              <div key={group} className={styles.sufferCard}>
                <h4 className={styles.sufferGroup}>{group}</h4>
                <ul>
                  {items.map(item => (
                    <li key={item} className={styles.sufferItem}>
                      <span className={styles.bullet} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
