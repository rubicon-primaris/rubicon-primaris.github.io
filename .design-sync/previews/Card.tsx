import { Badge, Button, Card } from 'anira';

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 gap-6 rounded-lg bg-surface p-6 md:grid-cols-2">{children}</div>
);

export const Basica = () => (
  <Frame>
    <Card title="Crónica de la Herejía">
      Registro de las campañas del sistema Isstvan durante la Gran Cruzada, recopilado por los
      archivistas del Imperio.
    </Card>
  </Frame>
);

export const ConAcentoDeLegion = () => (
  <Frame>
    <Card title="Ultramarines" legion="xiii">
      La XIII Legión, señores de Ultramar bajo el mando de Roboute Guilliman.
    </Card>
    <Card title="Blood Angels" legion="ix">
      La IX Legión, hijos de Sanguinius, ángeles de Baal.
    </Card>
  </Frame>
);

export const Compuesta = () => (
  <Frame>
    <Card title="Sons of Horus" legion="xvi">
      <div className="flex flex-col gap-4">
        <p>La XVI Legión, primera en traicionar al Emperador durante la Herejía de Horus.</p>
        <div className="flex items-center gap-3">
          <Badge legion="xvi">Traidores</Badge>
          <Button size="sm" variant="secondary">
            Ver historial
          </Button>
        </div>
      </div>
    </Card>
  </Frame>
);
