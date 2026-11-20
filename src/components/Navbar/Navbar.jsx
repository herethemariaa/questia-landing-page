import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import iconQuestia from '../../assets/icon-questia.png';
import { Star12 } from '../Star12/Star12';
import { Button } from '../Button/Button';
import { NAV_LINKS, PLATFORM_URL } from '../../data/content';
import styles from './Navbar.module.css';

/**
 * Navbar — Barra de navegação espaçosa, nítida e bem alinhada.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 960) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <nav
        className={`${styles.nav} container`}
        aria-label="Navegação principal"
      >
        {/* Logo oficial do Questia com estrela */}
        <a
          href="#inicio"
          className={styles.brand}
          aria-label="Questia — Voltar ao início"
          onClick={closeMenu}
        >
          <img
            src={iconQuestia}
            alt="Questia"
            width={38}
            height={38}
            className={styles.brandIcon}
          />
          <div className={styles.brandInfo}>
            <div className={styles.brandTitleRow}>
              <span className={styles.brandName}>QUESTIA</span>
              <Star12 size={13} color="var(--color-amber-gold)" />
            </div>
            <span className={styles.brandSub}>Conexão Lamarr</span>
          </div>
        </a>

        {/* Links de navegação desktop espaçados */}
        <ul className={styles.desktopLinks} role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.navLink}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão de ação à direita */}
        <div className={styles.desktopActions}>
          <Button href={PLATFORM_URL} variant="primary" icon={ArrowUpRight}>
            Acessar protótipo
          </Button>
        </div>

        {/* Botão mobile */}
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={26} color="#FFFFFF" /> : <Menu size={26} color="#FFFFFF" />}
        </button>
      </nav>

      {/* Menu mobile expansível */}
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
          <Button href={PLATFORM_URL} variant="primary" icon={ArrowUpRight} onClick={closeMenu}>
            Acessar protótipo
          </Button>
        </div>
      </div>

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
