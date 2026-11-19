import styles from './FeatureCard.module.css';

/**
 * FeatureCard — apresenta uma funcionalidade ou recurso da plataforma.
 *
 * @param {string} icon        - Emoji ou símbolo representativo
 * @param {string} title       - Título do recurso
 * @param {string} description - Descrição breve
 * @param {string} [badge]     - Rótulo opcional (ex.: "Em breve")
 * @param {'dark'|'light'} [variant] - Estilo de fundo
 */
export function FeatureCard({ icon, title, description, badge, variant = 'dark' }) {
  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <div className={styles.iconWrapper} aria-hidden="true">
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
