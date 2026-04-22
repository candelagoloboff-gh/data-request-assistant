import Stack from '@material-hu/mui/Stack';
import Typography from '@material-hu/mui/Typography';
import { useTheme } from '@material-hu/mui/styles';

import Button from '@material-hu/components/design-system/Buttons/Button';

import type { CardData } from '../../services/chat';

const IMPACT_LABELS: Record<number, string> = {
  1: '1- 🚨 Critical',
  2: '2- 🟥 High',
  3: '3- 🟧 Important',
  4: '4- 🟩 Necessary',
  5: '5- 🟢 Improvement',
};

type Props = {
  card: CardData;
  onConfirm: () => void;
  onBack: () => void;
  isLoading: boolean;
};

function Field({ label, value }: { label: string; value?: string | null }) {
  const theme = useTheme();
  if (!value) return null;
  return (
    <Stack sx={{ gap: 0.5 }}>
      <Typography variant="body2" sx={{ color: theme.palette.new.text.neutral.default, fontWeight: 600 }}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{ color: theme.palette.new.text.neutral.lighter }}>
        {value}
      </Typography>
    </Stack>
  );
}

export function CardConfirmationContent({ card, onConfirm, onBack, isLoading }: Props) {
  const theme = useTheme();

  return (
    <Stack sx={{ height: '100%', overflow: 'hidden' }}>
      <Stack sx={{ flex: 1, overflow: 'auto', gap: 2.5, p: 3 }}>
        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="h6" sx={{ color: theme.palette.new.text.neutral.default }}>
            {card.name}
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.new.text.neutral.lighter }}>
            Revisá los datos antes de crear la card
          </Typography>
        </Stack>

        <Stack sx={{ borderTop: `1px solid ${theme.palette.new.border.neutral.divider}` }} />

        <Field label="Descripción del pedido" value={card.request_description} />
        <Field label="instanceID" value={card.instance_id} />
        <Field label="Comunidad" value={card.nombre_comunidad} />
        <Field label="Módulo" value={card.miniapps?.join(', ')} />
        <Field label="Tipo de solución" value={card.type_of_solution} />
        <Field label="Featuring" value={card.featuring_team} />
        <Field label="Impacto" value={IMPACT_LABELS[card.impact]} />
        <Field label="ETA deseada" value={card.desired_eta} />

        {card.churn_flag && (
          <Stack
            sx={{
              bgcolor: theme.palette.new.background.feedback.warning,
              borderRadius: '8px',
              p: 1.5,
            }}
          >
            <Typography variant="body2" sx={{ color: theme.palette.new.text.neutral.default }}>
              ⚠️ Churn flag activado
            </Typography>
          </Stack>
        )}

        <Field label="Solución propuesta (para Data)" value={card.proposed_solution} />
      </Stack>

      <Stack
        sx={{
          p: 2,
          gap: 1,
          borderTop: `1px solid ${theme.palette.new.border.neutral.divider}`,
        }}
      >
        <Button variant="contained" fullWidth onClick={onConfirm} disabled={isLoading} loading={isLoading}>
          {isLoading ? 'Creando card...' : 'Crear card en Notion'}
        </Button>
        <Button variant="outlined" fullWidth onClick={onBack} disabled={isLoading}>
          Volver a editar
        </Button>
      </Stack>
    </Stack>
  );
}
