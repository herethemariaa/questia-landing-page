import { ArrowRight, CheckCircle2, HeartHandshake, BookOpen, Layers } from 'lucide-react';
import { SHIFT } from '../../data/content';
import styles from './SolutionSection.module.css';

/**
 * SolutionSection — A virada pedagógica baseada no Slide 5 e 6.
 * Paleta refinada com fundo azul marinho profundo e toques quentes dosados (sem sobrecarga de laranja).
 */
export function SolutionSection() {
  return (
    <section id="solucao" className={styles.section} aria-label="A proposta de solução do Questia">
      <div className="container">
        <div className={styles.centerBlock}>
          <span className={styles.badgeTop}>A Virada Pedagógica</span>
          <h2 className={styles.question}>{SHIFT.question}</h2>
          <p className={styles.subtext}>{SHIFT.description}</p>
        </div>

        {/* Bloco de Contraste Direto */}
        <div className={styles.shiftCard}>
          <div className={styles.shiftSideOld}>
            <span className={styles.tagOld}>A resposta punitiva convencional</span>
            <p className={styles.textOld}>{SHIFT.from.text}</p>
            <p className={styles.consequenceOld}>Gera desgaste diário com o aluno e não ensina autorregulação diante das telas.</p>
          </div>

          <div className={styles.arrowBridge} aria-hidden="true">
            <ArrowRight size={24} />
          </div>

          <div className={styles.shiftSideNew}>
            <span className={styles.tagNew}>A proposta do Questia</span>
            <p className={styles.textNew}>{SHIFT.to.text}</p>
            <p className={styles.consequenceNew}>Transforma o tempo de celular em sessões ativas com retenção comprovada.</p>
          </div>
        </div>

        {/* 3 Pilares de Apoio Real */}
        <div className={styles.pillarsRow}>
          <div className={styles.pillar}>
            <div className={styles.pillarIconBox} aria-hidden="true">
              <HeartHandshake size={22} />
            </div>
            <h4>Estudo Saudável</h4>
            <p>Abordagem colaborativa em vez de punitiva, acolhendo a energia do jovem em um ambiente motivador.</p>
          </div>

          <div className={styles.pillar}>
            <div className={styles.pillarIconBox} aria-hidden="true">
              <BookOpen size={22} />
            </div>
            <h4>Retenção Científica</h4>
            <p>Substitui a leitura passiva pela Prática de Recuperação e pela Repetição Espaçada calculada.</p>
          </div>

          <div className={styles.pillar}>
            <div className={styles.pillarIconBox} aria-hidden="true">
              <Layers size={22} />
            </div>
            <h4>Dinamismo Antidistração</h4>
            <p>Jornadas intercaladas de curta duração que combatem a fadiga mental e o abandono de tarefas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
