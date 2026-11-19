import styles from './ScenariosSection.module.css';

/**
 * ScenariosSection — 3 Cenários práticos de aprendizagem inspirados na seção .scen-grid da referência.
 */
export function ScenariosSection() {
  return (
    <section id="cenarios" className={styles.section} aria-label="Cenários práticos de aprendizagem">
      <div className="container">
        <span className="eyebrow">Aplicações Práticas</span>
        <h2 className={styles.h2}>Três caminhos de estudo no dia a dia escolar</h2>
        <p className={styles.lead}>
          Exemplo no 7º ano com defasagem em Frações e Geometria: o Questia permite calibrar o nível de desafio de acordo com a resposta e o tempo de atenção do estudante.
        </p>

        <div className={styles.scenGrid}>
          {/* Cenário A */}
          <article className={styles.scen}>
            <div className={styles.letter}>A</div>
            <h3 className={styles.scenTitle}>Estudo Passivo Tradicional</h3>
            <p className={styles.what}>Releitura de apostilas e resumos prontos sem exercícios ativos.</p>
            <div className={styles.metricBlock}>
              <div className={styles.coverLabel}>
                <span>Retenção em 30 dias</span>
                <span>2 de 10 partes</span>
              </div>
              <div className={styles.segmentBar}>
                <i className={styles.on} /><i className={styles.on} />
                <i /><i /><i /><i /><i /><i /><i /><i />
              </div>
            </div>
            <p className={styles.risk}>Sensação ilusória de domínio; esquecimento rápido dos conceitos.</p>
          </article>

          {/* Cenário B (Destaque - .pick) */}
          <article className={`${styles.scen} ${styles.pick}`}>
            <div className={styles.pickBadge}>Recomendado pelo Questia</div>
            <div className={styles.letter}>B</div>
            <h3 className={styles.scenTitle}>Trilha Ativa de 20 Minutos</h3>
            <p className={styles.what}>Ciclo: Explorar → Praticar cálculo → Aplicar no dia a dia.</p>
            <div className={styles.metricBlock}>
              <div className={styles.coverLabel}>
                <span>Retenção em 30 dias</span>
                <span>8 de 10 partes</span>
              </div>
              <div className={styles.segmentBar}>
                <i className={styles.on} /><i className={styles.on} /><i className={styles.on} /><i className={styles.on} />
                <i className={styles.on} /><i className={styles.on} /><i className={styles.on} /><i className={styles.on} />
                <i /><i />
              </div>
            </div>
            <p className={styles.riskSuccess}>Alta consolidação de memória de longo prazo com esforço equilibrado.</p>
          </article>

          {/* Cenário C */}
          <article className={styles.scen}>
            <div className={styles.letter}>C</div>
            <h3 className={styles.scenTitle}>SOS Reforço Dirigido</h3>
            <p className={styles.what}>Intervenção pontual recomendada pelo professor para sanar pré-requisitos.</p>
            <div className={styles.metricBlock}>
              <div className={styles.coverLabel}>
                <span>Recuperação de defasagem</span>
                <span>9 de 10 partes</span>
              </div>
              <div className={styles.segmentBar}>
                <i className={styles.on} /><i className={styles.on} /><i className={styles.on} /><i className={styles.on} />
                <i className={styles.on} /><i className={styles.on} /><i className={styles.on} /><i className={styles.on} />
                <i className={styles.on} /><i />
              </div>
            </div>
            <p className={styles.risk}>Exige regularidade de pelo menos 3 sessões semanais.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
