import iconQuestia from '../../assets/icon-questia.png';
import { SOLUTION } from '../../data/content';
import styles from './SolutionSection.module.css';

/**
 * SolutionSection — apresenta o Questia como a resposta ao problema.
 * Layout de duas colunas: texto à esquerda, mockup visual à direita.
 */
export function SolutionSection() {
  return (
    <section id="solucao" className={styles.section} aria-label="A solução do Questia">
      <div className={`${styles.inner} container`}>

        {/* Coluna de texto */}
        <div className={styles.textCol}>
          <span className={styles.label}>A Solução</span>
          <h2 className={styles.title}>{SOLUTION.title}</h2>
          <p className={styles.description}>{SOLUTION.description}</p>
          <div className={styles.pills}>
            <span className={styles.pill}>📱 Mobile-first</span>
            <span className={styles.pill}>🎯 Adaptativo</span>
            <span className={styles.pill}>♿ Acessível</span>
            <span className={styles.pill}>🤝 Colaborativo</span>
          </div>
        </div>

        {/* Coluna visual — mockup do app */}
        <div className={styles.visualCol} aria-hidden="true">
          <div className={styles.appMockup}>
            {/* Header do app */}
            <div className={styles.appTop}>
              <img src={iconQuestia} alt="" width={28} height={28} className={styles.appLogo} />
              <div>
                <p className={styles.appUser}>Bom dia, Alice!</p>
                <p className={styles.appRole}>Estudante · 7º Ano</p>
              </div>
            </div>

            {/* Progresso */}
            <div className={styles.appSection}>
              <p className={styles.appSectionTitle}>Seu progresso</p>
              <div className={styles.progressRow}>
                <span className={styles.progressSubj}>📐 Matemática</span>
                <div className={styles.bar}>
                  <div className={styles.barFill} style={{ width: '65%', background: 'linear-gradient(90deg,#F59E0B,#F97316)' }} />
                </div>
                <span className={styles.progressPct}>65%</span>
              </div>
              <div className={styles.progressRow}>
                <span className={styles.progressSubj}>📚 Português</span>
                <div className={styles.bar}>
                  <div className={styles.barFill} style={{ width: '82%', background: 'linear-gradient(90deg,#3B82C4,#1B3A6E)' }} />
                </div>
                <span className={styles.progressPct}>82%</span>
              </div>
            </div>

            {/* Jornada recomendada */}
            <div className={styles.missionCard}>
              <p className={styles.missionTag}>Recomendado para você</p>
              <p className={styles.missionTitle}>Frações no dia a dia</p>
              <p className={styles.missionMeta}>⏱ 25 min · Nível Médio</p>
            </div>

            <div className={styles.appBtn} role="presentation">Iniciar jornada →</div>
          </div>

          {/* Badges flutuantes */}
          <div className={`${styles.floatBadge} ${styles.badgeTopLeft}`}>
            <span className={styles.badgeNum}>5</span>
            <span className={styles.badgeText}>etapas de aprendizagem</span>
          </div>
          <div className={`${styles.floatBadge} ${styles.badgeBotRight}`}>
            <span className={styles.badgeNum}>2</span>
            <span className={styles.badgeText}>módulos SOS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
