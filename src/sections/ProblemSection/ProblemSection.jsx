import { BarChart3, Clock, Search, AlertCircle, Quote } from 'lucide-react';
import { PROBLEM } from '../../data/content';
import styles from './ProblemSection.module.css';

/**
 * ProblemSection — O Diagnóstico Real baseado nas pesquisas da TIC Kids 2025 e OCDE PISA.
 */
export function ProblemSection() {
  const statIcons = [BarChart3, Clock, Search];

  return (
    <section id="problema" className={`${styles.section} pattern-grid`} aria-label="O diagnóstico educacional real">
      <div className="container">
        {/* Marcador de Seção */}
        <div className={styles.header}>
          <span className="badge-stamp" style={{ background: 'rgba(232, 93, 4, 0.12)', color: 'var(--color-orange-deep)' }}>
            {PROBLEM.badge}
          </span>
          <h2 className={styles.h2}>{PROBLEM.title}</h2>
          <p className={styles.lead}>{PROBLEM.lead}</p>
        </div>

        {/* Grid de Métricas Oficiais da Pesquisa (Slide 2) */}
        <div className={styles.statsGrid}>
          {PROBLEM.stats.map((item, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div key={idx} className={styles.statCard}>
                <div className={styles.statTop}>
                  <span className={styles.statVal}>{item.value}</span>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon size={20} />
                  </div>
                </div>
                <h3 className={styles.statTitle}>{item.label}</h3>
                <p className={styles.statDetail}>{item.detail}</p>
                <div className={styles.statFoot}>
                  <span>Fonte: {item.source}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card em Destaque: Citação da Pesquisa OCDE PISA 2025 (Slide 3) */}
        <div className={styles.quoteCard}>
          <div className={styles.quoteTop}>
            <Quote size={28} className={styles.quoteIcon} />
            <span className={styles.quoteBadge}>Alerta Internacional · OCDE PISA</span>
          </div>
          <p className={styles.quoteText}>{PROBLEM.ocdeQuote.quote}</p>
          <div className={styles.quoteAuthor}>
            <strong>{PROBLEM.ocdeQuote.author}</strong>
            <span>{PROBLEM.ocdeQuote.source}</span>
          </div>
        </div>

        {/* Quem Sofre com Isso? (Slide 4) */}
        <div className={styles.whoBlock}>
          <div className={styles.whoHeader}>
            <AlertCircle size={20} className={styles.whoIcon} />
            <h3 className={styles.whoTitle}>Quem sofre diariamente com esse atrito?</h3>
          </div>

          <div className={styles.whoGrid}>
            {PROBLEM.whoSuffers.map((group, idx) => (
              <div key={idx} className={styles.whoCard}>
                <span className={styles.whoTarget}>{group.target}</span>
                <h4 className={styles.whoHeading}>{group.title}</h4>
                <ul className={styles.whoList}>
                  {group.items.map((it, i) => (
                    <li key={i}>
                      <span className={styles.dot} aria-hidden="true" />
                      <span>{it}</span>
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
