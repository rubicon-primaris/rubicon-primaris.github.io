/**
 * Panel oscuro del design system.
 * legion: numeral romano para el borde de acento superior (opcional).
 */
export default function Card({ title, legion, children, ...props }) {
  return (
    <div
      className={[
        'rounded-lg bg-surface-raised border border-white/10 overflow-hidden',
        legion ? `border-t-4 border-t-${legion}-500` : '',
      ].join(' ')}
      {...props}
    >
      {title && (
        <h3 className="px-5 pt-4 text-lg font-bold uppercase tracking-wide text-white">
          {title}
        </h3>
      )}
      <div className="px-5 py-4 text-ink-muted">{children}</div>
    </div>
  );
}
