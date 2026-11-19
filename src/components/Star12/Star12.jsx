/**
 * Star12 — Estrela Solar de 12 pontas característica da identidade do Questia (slide 1)
 */
export function Star12({ size = 24, color = 'var(--color-amber-gold)', className = '', ...props }) {
  // Coordenadas calculadas para estrela simétrica de 12 pontas (raio externo e interno)
  // R = 50, r = 32, centro = (50, 50)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <polygon points="
        50,2 62,26 88,14 81,40 100,50 81,60 88,86 62,74 50,98 38,74 12,86 19,60 0,50 19,40 12,14 38,26
      " />
    </svg>
  );
}
