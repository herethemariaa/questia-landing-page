import { useState, useEffect } from 'react';
import iconQuestia from '../../assets/icon-questia.png';
import { Button } from '../Button/Button';
import { NAV_LINKS, PLATFORM_URL } from '../../data/content';
import styles from './Navbar.module.css';

/**
 * Navbar — navegação principal da landing page.
 * Sticky com backdrop blur após scroll, menu hambúrguer no mobile.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  /* Detecta scroll para adicionar backdrop */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Fecha o menu ao redimensionar para desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* Impede scroll do body quando menu mobile está aberto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <nav
        className={`${styles.nav} container`}
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          className={styles.brand}
          aria-label="Questia — Voltar ao início"
          onClick={closeMenu}
        >
          <img
            src={iconQuestia}
            alt=""
            width={36}
            height={36}
            aria-hidden="true"
            className={styles.brandIcon}
          />
          <span className={styles.brandName}>Questia</span>
        </a>

        {/* Links desktop */}
        <ul className={styles.desktopLinks} role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.navLink}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className={styles.desktopActions}>
          <Button href={PLATFORM_URL} variant="primary">
            Acessar plataforma
          </Button>
        </div>

        {/* Hambúrguer (mobile) */}
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTopOpen   : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMidOpen   : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBotOpen   : ''}`} />
        </button>
      </nav>

      {/* Painel mobile */}
      <div
        className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list" className={styles.mobileLinks}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.mobileLinkItem} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.mobileCta}>
          <Button href={PLATFORM_URL} variant="primary" onClick={closeMenu}>
            Acessar plataforma
          </Button>
        </div>
      </div>

      {/* Overlay escuro por baixo do painel */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
