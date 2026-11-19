import { ArrowUpRight, Sparkles } from 'lucide-react';
import iconQuestia from '../../assets/icon-questia.png';
import { Star12 } from '../../components/Star12/Star12';
import { Button } from '../../components/Button/Button';
import { TEAM, PLATFORM_URL } from '../../data/content';
import styles from './TeamSection.module.css';

/**
 * TeamSection — A origem do Questia: Equipe Conexão Lamarr no Hacktudo 2026 e compromisso com os ODS da ONU.
 */
export function TeamSection() {
  return (
    <section id="equipe" className={styles.section} aria-label="A equipe Conexão Lamarr">
      <div className={`container ${styles.grid}`}>
        {/* Lado Esquerdo: Selo Institucional do Hacktudo */}
        <div className={styles.visualCol}>
          <div className={styles.teamBadgeCard}>
            <div className={styles.logoFrame}>
              <img src={iconQuestia} alt="Questia" width={68} height={68} className={styles.teamLogo} />
            </div>
            <div className={styles.badgeLine}>
              <Star12 size={16} color="var(--color-amber-gold)" />
              <span className={styles.badgeEvent}>Hacktudo 2026</span>
            </div>
            <h3 className={styles.teamName}>Conexão Lamarr</h3>
            <p className={styles.teamTag}>Tecnologia educacional sem barreiras</p>

            {/* Selos dos ODS da ONU (Slides 6 e 7) */}
            <div className={styles.odsContainer}>
              <span className={styles.odsTitle}>Compromisso com os ODS da ONU</span>
              <div className={styles.odsBadges}>
                {TEAM.ods.map((o) => (
                  <div key={o.num} className={styles.odsPill} style={{ borderColor: o.color }}>
                    <span className={styles.odsNum} style={{ color: o.color }}>{o.num}</span>
                    <span className={styles.odsLbl}>{o.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito: A História e o Tributo a Hedy Lamarr */}
        <div className={styles.contentCol}>
          <span className="badge-stamp" style={{ background: 'rgba(255, 183, 3, 0.15)', color: 'var(--color-amber-light)' }}>
            {TEAM.badge}
          </span>
          <h2 className={styles.h2}>{TEAM.title}</h2>
          <p className={styles.subtitle}>{TEAM.subtitle}</p>
          <p className={styles.story}>{TEAM.story}</p>

          <div className={styles.lamarrTribute}>
            <div className={styles.tributeTop}>
              <Sparkles size={18} className={styles.tributeIcon} />
              <h4>{TEAM.hedyLamarr.title}</h4>
            </div>
            <p>{TEAM.hedyLamarr.description}</p>
          </div>

          <div className={styles.actionRow}>
            <Button href={PLATFORM_URL} variant="primary" icon={ArrowUpRight}>
              Acessar Plataforma do Projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
