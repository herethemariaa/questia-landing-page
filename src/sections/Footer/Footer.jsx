import iconQuestia from '../../assets/icon-questia.png';
import { FOOTER } from '../../data/content';
import styles from './Footer.module.css';

/**
 * Footer — Rodapé institucional da landing page.
 */
export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.topRow}>
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <img
                src={iconQuestia}
                alt=""
                width={36}
                height={36}
                aria-hidden="true"
                className={styles.brandIcon}
              />
              <span className={styles.brandName}>Questia</span>
            </div>
            <p className={styles.tagline}>{FOOTER.tagline}</p>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.navTitle}>Navegação</h3>
            <ul className={styles.linksList} role="list">
              {FOOTER.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contactCol}>
            <h3 className={styles.navTitle}>Contato</h3>
            <p className={styles.contactEmail}>
              <a href={`mailto:${FOOTER.contact}`} className={styles.link}>
                {FOOTER.contact}
              </a>
            </p>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.credits}>{FOOTER.credits}</p>
          <p className={styles.copyright}>
            &copy; {FOOTER.year} Questia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
