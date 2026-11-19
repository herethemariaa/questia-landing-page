import { Navbar } from '../components/Navbar/Navbar';

/**
 * MainLayout — estrutura compartilhada da landing page.
 * Inclui o skip link de acessibilidade, a Navbar e a área de conteúdo principal.
 */
export function MainLayout({ children }) {
  return (
    <>
      {/* Skip link: acessibilidade para navegação por teclado */}
      <a href="#main-content" className="skip-link">
        Ir para o conteúdo principal
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </>
  );
}
