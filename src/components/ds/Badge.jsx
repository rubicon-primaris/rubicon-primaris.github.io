// Legiones con color principal claro que necesitan texto oscuro
const LIGHT_LEGIONS = new Set(['v', 'vii']);

/**
 * Badge/etiqueta, opcionalmente coloreada con la paleta de una legión.
 * legion: numeral romano en minúsculas ('i', 'iii', ... 'xx') o undefined para neutro.
 */
export default function Badge({ legion, children, ...props }) {
  const color = legion
    ? `bg-${legion}-500 ${LIGHT_LEGIONS.has(legion) ? 'text-black' : 'text-white'}`
    : 'bg-surface-overlay text-ink-muted border border-white/15';

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider ${color}`}
      {...props}
    >
      {children}
    </span>
  );
}
