import styles from './Button.module.css';

/**
 * Button — componente reutilizável de chamada para ação.
 *
 * @param {React.ReactNode} children  - Conteúdo do botão
 * @param {'primary'|'outline'|'ghost'} variant - Estilo visual
 * @param {string}  [href]            - Se fornecido, renderiza um <a>
 * @param {Function} [onClick]        - Handler de clique (apenas para <button>)
 * @param {string}  [className]       - Classes adicionais
 */
export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}) {
  const cls = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        className={cls}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
