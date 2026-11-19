import styles from './Button.module.css';

/**
 * Button — componente reutilizável de ação primária, secundária ou contorno.
 */
export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  ...props
}) {
  const cls = `${styles.button} ${styles[variant]} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={styles.icon} size={18} aria-hidden="true" />}
      <span className={styles.text}>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={styles.icon} size={18} aria-hidden="true" />}
    </>
  );

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
        {content}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
