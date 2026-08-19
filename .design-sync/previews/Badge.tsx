import { Badge } from 'anira';

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap items-center gap-3 rounded-lg bg-surface p-6">{children}</div>
);

export const Neutro = () => (
  <Frame>
    <Badge>Borrador</Badge>
    <Badge>Archivado</Badge>
  </Frame>
);

export const Legiones = () => (
  <Frame>
    <Badge legion="i">Dark Angels</Badge>
    <Badge legion="ix">Blood Angels</Badge>
    <Badge legion="xiii">Ultramarines</Badge>
    <Badge legion="xv">Thousand Sons</Badge>
    <Badge legion="xvi">Sons of Horus</Badge>
  </Frame>
);

export const LegionesClaras = () => (
  <Frame>
    <Badge legion="v">White Scars</Badge>
    <Badge legion="vii">Imperial Fists</Badge>
  </Frame>
);
