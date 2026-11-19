import { Compass, PenTool, Puzzle, MessageSquareText, RotateCcw, BrainCircuit } from 'lucide-react';
import { METHODOLOGY } from '../../data/content';
import styles from './HowItWorksSection.module.css';

/**
 * HowItWorksSection — A Jornada das 5 Estações Pedagógicas do Questia (Slide 7 dos slides oficiais).
 */
export function HowItWorksSection() {
  const stationIcons = [Compass, PenTool, Puzzle, MessageSquareText, RotateCcw];

  return (
    <section id="metodologia" className={styles.section} aria-label="Metodologia pedagógica do Questia">
      <div className="container">
        <div className={styles.header}>
          <span className="badge-stamp" style={{ background: 'rgba(37, 99, 168, 0.1)', color: 'var(--color-blue-royal)' }}>
            {METHODOLOGY.badge}
          </span>
          <h2 className={styles.h2}>{METHODOLOGY.title}</h2>
          <p className={styles.lead}>{METHODOLOGY.subtitle}</p>
        </div>

        {/* Trilha das 5 Estações */}
        <div className={styles.stationsTrack}>
          {METHODOLOGY.stations.map((st, idx) => {
            const Icon = stationIcons[idx % stationIcons.length];
            return (
              <div key={idx} className={styles.stationCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.stationNum}>{st.num}</span>
                  <div className={styles.stationIconBox} aria-hidden="true">
                    <Icon size={18} />
                  </div>
                </div>
                <span className={styles.stationTag}>{st.focus}</span>
                <h3 className={styles.stationName}>{st.name}</h3>
                <p className={styles.stationDesc}>{st.description}</p>
              </div>
            );
          })}
        </div>

        {/* Card de Rigor Científico (Slide 8) */}
        <div className={styles.scienceCard}>
          <div className={styles.scienceIconWrapper} aria-hidden="true">
            <BrainCircuit size={28} />
          </div>
          <div>
            <h4 className={styles.scienceHeading}>{METHODOLOGY.scientificPillar.title}</h4>
            <p className={styles.scienceText}>{METHODOLOGY.scientificPillar.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
