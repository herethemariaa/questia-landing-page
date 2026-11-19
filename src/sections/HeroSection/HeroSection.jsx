import { ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { Star12 } from '../../components/Star12/Star12';
import imgMobileAlice from '../../assets/prototipo-mobile-alice.png';
import { HERO } from '../../data/content';
import styles from './HeroSection.module.css';

/**
 * HeroSection — Apresentação visual com a imagem real do protótipo mobile do estudante.
 */
export function HeroSection() {
  return (
    <section id="inicio" className={styles.hero} aria-label="Apresentação do Questia">
      {/* Grafismos de luz suaves nos cantos */}
      <div className={styles.blobTopRight} aria-hidden="true" />
      <div className={styles.blobBottomLeft} aria-hidden="true" />
      <div className={styles.starDecor} aria-hidden="true">
        <Star12 size={96} color="rgba(245, 158, 11, 0.15)" />
      </div>

      <div className={`${styles.inner} container`}>
        {/* Coluna Editorial de Impacto */}
        <div className={styles.content}>
          <div className={styles.topBadges}>
            <div className={styles.hackBadge}>
              <Star12 size={16} color="var(--color-amber-gold)" />
              <span>{HERO.badge}</span>
            </div>
            <span className={styles.tagline}>{HERO.tagline}</span>
          </div>

          <h1 className={styles.title}>
            {HERO.titlePrimary}{' '}
            <span className={styles.titleHighlight}>{HERO.titleHighlight}</span>
          </h1>

          <p className={styles.description}>{HERO.description}</p>

          <div className={styles.ctas}>
            <Button href={HERO.ctaPrimary.href} variant="primary" icon={ArrowUpRight}>
              {HERO.ctaPrimary.label}
            </Button>
            <Button href={HERO.ctaSecondary.href} variant="outline" icon={Compass} iconPosition="left">
              {HERO.ctaSecondary.label}
            </Button>
          </div>

          {/* Selos de Rigor com tamanho de texto aprimorado */}
          <div className={styles.badgesRow}>
            {HERO.badges.map((b, idx) => (
              <div key={idx} className={styles.badgeItem}>
                <ShieldCheck size={16} className={styles.badgeIcon} />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna Visual: Imagem Real do Protótipo Mobile (App da Alice) */}
        <div className={styles.visualCol} aria-label="Tela real do aplicativo do estudante Questia">
          <div className={styles.phoneWrapper}>
            <img
              src={imgMobileAlice}
              alt="Tela do protótipo do estudante Questia: Bom dia, Alice, com check-in de energia, 25 minutos estudados, ferramentas de estudo e disciplinas de Matemática e Português"
              className={styles.phoneImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
