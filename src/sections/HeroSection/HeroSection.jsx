import { Button } from '../../components/Button/Button';
import iconQuestia from '../../assets/icon-questia.png';
import { HERO } from '../../data/content';
import styles from './HeroSection.module.css';

/**
 * HeroSection — primeira seção da landing page.
 * Apresenta o Questia, seu posicionamento e as chamadas para ação.
 */
export function HeroSection() {
  return (
    <section
      id="inicio"
      className={styles.hero}
      aria-label="Apresentação do Questia"
    >
      {/* Elementos decorativos (apenas visuais, ocultos para leitores de tela) */}
      <div className={styles.blobTopRight}   aria-hidden="true" />
      <div className={styles.blobBottomLeft} aria-hidden="true" />
      <div className={styles.circleOuter}    aria-hidden="true" />
      <div className={styles.circleInner}    aria-hidden="true" />

      <div className={`${styles.inner} container`}>

        {/* Conteúdo textual */}
        <div className={styles.content}>
          <p className={styles.tagline} aria-hidden="true">
            {HERO.tagline}
          </p>

          <h1 className={styles.title}>{HERO.title}</h1>

          <p className={styles.description}>{HERO.description}</p>

          <div className={styles.ctas}>
            <Button href={HERO.ctaPrimary.href} variant="primary">
              {HERO.ctaPrimary.label}
            </Button>
            <Button href={HERO.ctaSecondary.href} variant="outline">
              {HERO.ctaSecondary.label}
            </Button>
          </div>
        </div>

        {/* Visual — ícone do app com animação */}
        <div className={styles.visual}>
          <div className={styles.iconRing} aria-hidden="true">
            <div className={styles.iconRingOuter} />
            <div className={styles.iconRingInner} />
            <img
              src={iconQuestia}
              alt="Ícone da plataforma Questia — livro aberto com Wi-Fi e lâmpada"
              className={styles.icon}
              width={220}
              height={220}
            />
          </div>
        </div>

      </div>

      {/* Indicador de scroll suave */}
      <a
        href="#problema"
        className={styles.scrollIndicator}
        aria-label="Ir para a próxima seção"
      >
        <span className={styles.scrollDot} aria-hidden="true" />
      </a>
    </section>
  );
}
