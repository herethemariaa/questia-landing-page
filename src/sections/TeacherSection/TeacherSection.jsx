import { useState } from 'react';
import { LayoutDashboard, Users, CheckCircle2 } from 'lucide-react';
import imgProfDashboard from '../../assets/prototipo-prof.png';
import imgProfTurma from '../../assets/prototipo-prof1.png';
import styles from './TeacherSection.module.css';

/**
 * TeacherSection — Demonstração das telas reais do protótipo docente do Questia.
 * Inclui o Dashboard Geral da Sala e a Gestão da Turma com habilidades da BNCC.
 */
export function TeacherSection() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <section id="professor" className={styles.section} aria-label="A perspectiva do professor e o painel pedagógico">
      <div className="container">
        {/* Cabeçalho */}
        <div className={styles.header}>
          <span className="badge-stamp" style={{ background: 'rgba(29, 78, 216, 0.1)', color: 'var(--color-blue-royal)' }}>
            Apoio Docente no Protótipo
          </span>
          <h2 className={styles.h2}>Sua sala de aula em movimento</h2>
          <p className={styles.lead}>
            O Questia não foi pensado apenas para o aluno. O professor conta com um painel de diagnóstico para acompanhar o andamento das turmas, identificar lacunas de aprendizagem e direcionar intervenções pontuais sem sobrecarga burocrática.
          </p>
        </div>

        {/* Abas de Navegação entre as Telas Reais */}
        <div className={styles.tabsRow} role="tablist" aria-label="Telas do painel do professor">
          <button
            role="tab"
            aria-selected={activeTab === 'dashboard'}
            className={`${styles.tabBtn} ${activeTab === 'dashboard' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={18} />
            <span>Visão Geral & Métricas</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'turma'}
            className={`${styles.tabBtn} ${activeTab === 'turma' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('turma')}
          >
            <Users size={18} />
            <span>Gestão da Turma & Habilidades BNCC</span>
          </button>
        </div>

        {/* Moldura da Interface Real do Protótipo */}
        <div className={styles.screenFrame}>
          <div className={styles.screenTopBar}>
            <div className={styles.browserDots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <span className={styles.browserUrl}>questia.app/professor/painel</span>
          </div>

          <div className={styles.screenContent}>
            {activeTab === 'dashboard' ? (
              <figure className={styles.figure}>
                <img
                  src={imgProfDashboard}
                  alt="Tela do protótipo: Dashboard da professora Fátima Menezes mostrando alunos ativos (80), atividades entregues, livros lidos (25) e progresso de Frações e Revolução Francesa"
                  className={styles.screenshot}
                />
                <figcaption className={styles.caption}>
                  <strong>Visão Geral do Docente:</strong> acompanhamento em tempo real de alunos ativos, tarefas entregues e histórico recente da turma.
                </figcaption>
              </figure>
            ) : (
              <figure className={styles.figure}>
                <img
                  src={imgProfTurma}
                  alt="Tela do protótipo: Gestão da Turma 7º Ano C com lista de alunos, botão SOS Leitura, card de intervenção e missões com códigos BNCC EF07MA02, EF08GE16 e EF07MA37"
                  className={styles.screenshot}
                />
                <figcaption className={styles.caption}>
                  <strong>Gestão por Turma e BNCC:</strong> acompanhamento das habilidades da Base Nacional Comum Curricular e alerta para intervenções pedagógicas.
                </figcaption>
              </figure>
            )}
          </div>
        </div>

        {/* Destaques do Painel */}
        <div className={styles.featuresRow}>
          <div className={styles.featItem}>
            <CheckCircle2 size={18} className={styles.featCheck} />
            <div>
              <strong>Diagnóstico Rápido:</strong> veja quais alunos precisam de reforço antes da prova bimestral.
            </div>
          </div>
          <div className={styles.featItem}>
            <CheckCircle2 size={18} className={styles.featCheck} />
            <div>
              <strong>Alinhado à BNCC:</strong> missões categorizadas por códigos de habilidades fundamentais.
            </div>
          </div>
          <div className={styles.featItem}>
            <CheckCircle2 size={18} className={styles.featCheck} />
            <div>
              <strong>Módulos SOS Integrados:</strong> acione trilhas de Matemática e Leitura com um clique.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
