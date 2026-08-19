const VARIANTS = {
  primary: 'bg-secondary text-black hover:brightness-110',
  secondary: 'bg-primary text-white border border-white/20 hover:border-white/40',
  ghost: 'bg-transparent text-white border border-white/30 hover:bg-white/10',
  danger: 'bg-ix-500 text-white hover:brightness-110',
};

const SIZES = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

/**
 * Botón del design system Rubicón Primaris.
 * variant: 'primary' | 'secondary' | 'ghost' | 'danger'
 * size: 'sm' | 'md' | 'lg'
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-md font-semibold',
        'uppercase tracking-wide transition duration-200',
        VARIANTS[variant] ?? VARIANTS.primary,
        SIZES[size] ?? SIZES.md,
        disabled ? 'opacity-40 pointer-events-none' : 'cursor-pointer',
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
