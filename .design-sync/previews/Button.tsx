import { Button } from 'anira';

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap items-center gap-4 rounded-lg bg-surface p-6">{children}</div>
);

export const Variantes = () => (
  <Frame>
    <Button variant="primary">Desplegar legión</Button>
    <Button variant="secondary">Ver códice</Button>
    <Button variant="ghost">Cancelar</Button>
    <Button variant="danger">Exterminatus</Button>
  </Frame>
);

export const Tamanos = () => (
  <Frame>
    <Button size="sm">Pequeño</Button>
    <Button size="md">Mediano</Button>
    <Button size="lg">Grande</Button>
  </Frame>
);

export const Deshabilitado = () => (
  <Frame>
    <Button variant="primary" disabled>
      Desplegar legión
    </Button>
    <Button variant="secondary" disabled>
      Ver códice
    </Button>
  </Frame>
);
