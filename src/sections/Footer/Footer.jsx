import { PLATFORM_URL, FOOTER } from '../../data/content';
import iconQuestia from '../../assets/icon-questia.png';
import { Star12 } from '../../components/Star12/Star12';
import styles from './Footer.module.css';

/**
 * Footer — Rodapé limpo e institucional com a identidade do Questia e Conexão Lamarr.
 */
export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.foot}`}>
        <div className={styles.left}>
          <img src={iconQuestia} alt="" width={24} height={24} className={styles.icon} />
          <span className={styles.brandTitle}>QUESTIA</span>
          <span className={styles.sep}>·</span>
          <span>{FOOTER.credits}</span>
        </div>
        <div className={styles.right}>
          <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <span>Acessar questia-mvp.netlify.app</span>
            <Star12 size={12} color="var(--color-amber-gold)" />
          </a>
        </div>
      </div>
    </footer>
  );
}
