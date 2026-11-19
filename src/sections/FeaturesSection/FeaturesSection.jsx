import { FeatureCard } from '../../components/FeatureCard/FeatureCard';
import { FEATURES } from '../../data/content';
import styles from './FeaturesSection.module.css';

/**
 * FeaturesSection — recursos e funcionalidades da plataforma.
 */
export function FeaturesSection() {
  return (
    <section id="funcionalidades" className={styles.section} aria-label="Funcionalidades da plataforma">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.label}>Funcionalidades</span>
          <h2 className={styles.title}>{FEATURES.title}</h2>
          <p className={styles.subtitle}>
            Ferramentas pensadas para enriquecer o aprendizado e oferecer suporte sob medida a cada momento escolar.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.items.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              badge={item.available ? undefined : 'Planejado'}
              variant="dark"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
