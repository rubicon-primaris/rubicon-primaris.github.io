import { LegionCard } from 'anira';

const BASE = 'https://rubicon-primaris.github.io/images/legions';

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-2 gap-6 rounded-lg bg-surface p-6 md:grid-cols-3">{children}</div>
);

export const ConImagen = () => (
  <Frame>
    <LegionCard image={`${BASE}/13-ultra.webp`} legion="xiii" />
    <LegionCard image={`${BASE}/9-blood-angles.webp`} legion="ix" />
    <LegionCard image={`${BASE}/6-wolf.webp`} legion="vi" />
  </Frame>
);

export const OtrasLegiones = () => (
  <Frame>
    <LegionCard image={`${BASE}/1-dark-angles.webp`} legion="i" />
    <LegionCard image={`${BASE}/15-thousand-sons.webp`} legion="xv" />
    <LegionCard image={`${BASE}/16-sons-of-horus.webp`} legion="xvi" />
  </Frame>
);
