import { Calculator, BookOpen, Users, HeartHandshake } from 'lucide-react';
import { FeatureCard } from '../../components/FeatureCard/FeatureCard';
import { MODULES } from '../../data/content';
import styles from './FeaturesSection.module.css';

/**
 * FeaturesSection — Módulos reais do Questia focados nas principais dores do currículo escolar.
 */
export function FeaturesSection() {
  const iconMap = {
    math: Calculator,
    reading: BookOpen,
    teacher: Users,
    a11y: HeartHandshake,
  };

  return (
    <section id="modulos" className={styles.section} aria-label="Módulos de aprendizagem e recursos">
      <div className="container">
        <div className={styles.header}>
          <span className="badge-stamp" style={{ background: 'rgba(255, 183, 3, 0.15)', color: 'var(--color-orange-deep)' }}>
            {MODULES.badge}
          </span>
          <h2 className={styles.h2}>{MODULES.title}</h2>
        </div>

        <div className={styles.grid}>
          {MODULES.items.map((m) => {
            const Icon = iconMap[m.id] || Calculator;
            return (
              <FeatureCard
                key={m.id}
                icon={Icon}
                tag={m.tag}
                title={m.title}
                description={m.description}
                status={m.status}
                highlight={m.highlight}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
