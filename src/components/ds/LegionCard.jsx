/**
 * Card de legión: imagen sobre fondo con el color de la legión.
 * Port React del LegionCard.astro original.
 * image: ruta de la imagen (null para legiones perdidas → placeholder).
 * legion: numeral romano en minúsculas.
 */
export default function LegionCard({ image, legion, ...props }) {
  const defaultImage = 'images/bg-chaos.jpg';
  const displayImage = image ?? defaultImage;
  const displayClass = image ? `bg-${legion}-900` : 'bg-gray-900';

  return (
    <div
      className={`${displayClass} rounded-lg p-2 text-white transition-transform duration-900 hover:scale-[1.1] flex items-center justify-center h-[250px] max-h-full max-w-full brightness-80 hover:brightness-110 hover:saturate-120`}
      {...props}
    >
      <img
        src={displayImage}
        alt={legion ? `Legión ${legion}` : 'Legión desconocida'}
        className={`h-full w-full object-cover rounded-md ${image ? '' : 'opacity-20 hover:opacity-70'}`}
      />
    </div>
  );
}
