import styles from './FeatureCard.module.css';

/**
 * FeatureCard — Estilo de ficha pedagógica de estudo do Questia com abas e selos de status.
 */
export function FeatureCard({ icon: Icon, tag, title, description, status, highlight }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTab}>
        <span className={styles.tag}>{tag}</span>
        {status && <span className={styles.statusBadge}>{status}</span>}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.iconBox} aria-hidden="true">
          {Icon && <Icon size={22} />}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        {highlight && (
          <div className={styles.highlightRow}>
            <span>{highlight}</span>
          </div>
        )}
      </div>
    </article>
  );
}
