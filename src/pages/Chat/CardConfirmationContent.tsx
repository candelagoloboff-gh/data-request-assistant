import { useState } from 'react';

import Stack from '@material-hu/mui/Stack';
import Typography from '@material-hu/mui/Typography';
import { useTheme } from '@material-hu/mui/styles';

import Button from '@material-hu/components/design-system/Buttons/Button';

import type { CardData } from '../../services/chat';

const IMPACT_OPTIONS = [
  { value: 1, label: '1 - 🚨 Critical' },
  { value: 2, label: '2 - 🟥 High' },
  { value: 3, label: '3 - 🟧 Important' },
  { value: 4, label: '4 - 🟩 Necessary' },
  { value: 5, label: '5 - 🟢 Improvement' },
];

type Props = {
  card: CardData;
  onConfirm: (card: CardData) => void;
  onBack: () => void;
  isLoading: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function EditField({ label, value, onChange, multiline, theme }: { label: string; value: string; onChange: (v: string) => void; multiline?: boolean; theme: any }) {
  const inputStyle = {
    border: `1px solid ${theme.palette.new.border.neutral.divider}`,
    borderRadius: '8px',
    padding: '8px 12px',
    fontFamily: 'inherit',
    fontSize: '14px',
    color: theme.palette.new.text.neutral.default,
    backgroundColor: theme.palette.new.background.layout.tertiary,
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
  };
  return (
    <Stack sx={{ gap: 0.5 }}>
      <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.new.text.neutral.default }}>
        {label}
      </Typography>
      {multiline ? (
        <textarea rows={3} value={value} onChange={(e) => onChange(e.target.value)} style={{ ...inputStyle, resize: 'vertical' }} />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} style={inputStyle} />
      )}
    </Stack>
  );
}

export function CardConfirmationContent({ card: initialCard, onConfirm, onBack, isLoading }: Props) {
  const theme = useTheme();
  const [card, setCard] = useState<CardData>(initialCard);
  const [fileUrl, setFileUrl] = useState('');

  const update = (field: keyof CardData, value: unknown) =>
    setCard((prev) => ({ ...prev, [field]: value }));

  function addFileUrl() {
    if (!fileUrl.trim()) return;
    setCard((prev) => ({ ...prev, file_urls: [...(prev.file_urls ?? []), fileUrl.trim()] }));
    setFileUrl('');
  }

  const bg = theme.palette.new.background;
  const border = theme.palette.new.border;
  const textColor = theme.palette.new.text;

  return (
    <Stack sx={{ height: '100%', overflow: 'hidden' }}>
      <Stack sx={{ flex: 1, overflow: 'auto', gap: 2.5, p: 3 }}>
        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="h6" sx={{ color: textColor.neutral.default }}>
            {card.name}
          </Typography>
          <Typography variant="body2" sx={{ color: textColor.neutral.lighter }}>
            Revisá y editá los datos antes de crear la card
          </Typography>
        </Stack>

        <Stack sx={{ borderTop: `1px solid ${border.neutral.divider}` }} />

        <EditField
          label="Tu nombre (Solicitante)"
          value={card.requester ?? ''}
          onChange={(v) => update('requester', v)}
          theme={theme}
        />

        <EditField
          label="Descripción del pedido"
          value={card.request_description}
          onChange={(v) => update('request_description', v)}
          multiline
          theme={theme}
        />

        <EditField
          label="instanceID"
          value={card.instance_id}
          onChange={(v) => update('instance_id', v)}
          theme={theme}
        />

        {card.nombre_comunidad && (
          <EditField
            label="Comunidad"
            value={card.nombre_comunidad}
            onChange={(v) => update('nombre_comunidad', v)}
            theme={theme}
          />
        )}

        <EditField
          label="Módulo"
          value={card.miniapps?.join(', ') ?? ''}
          onChange={(v) => update('miniapps', v.split(',').map((s) => s.trim()).filter(Boolean))}
          theme={theme}
        />

        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: textColor.neutral.default }}>
            Impacto
          </Typography>
          <select
            value={card.impact}
            onChange={(e) => update('impact', Number(e.target.value))}
            style={{
              border: `1px solid ${border.neutral.divider}`,
              borderRadius: '8px',
              padding: '8px 12px',
              fontFamily: 'inherit',
              fontSize: '14px',
              color: textColor.neutral.default,
              backgroundColor: bg.layout.tertiary,
              outline: 'none',
              width: '100%',
            }}
          >
            {IMPACT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Stack>

        {card.desired_eta && (
          <EditField
            label="ETA deseada"
            value={card.desired_eta}
            onChange={(v) => update('desired_eta', v)}
            theme={theme}
          />
        )}

        {card.churn_flag && (
          <Stack sx={{ bgcolor: bg.feedback.warning, borderRadius: '8px', p: 1.5 }}>
            <Typography variant="body2" sx={{ color: textColor.neutral.default }}>
              ⚠️ Churn flag activado
            </Typography>
          </Stack>
        )}

        <Stack sx={{ gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: textColor.neutral.default }}>
            Archivos / Links
          </Typography>
          {(card.file_urls ?? []).map((url, i) => (
            <Stack key={i} direction="row" alignItems="center" gap={1}>
              <Typography variant="caption" sx={{ flex: 1, wordBreak: 'break-all', color: textColor.neutral.lighter }}>
                {url}
              </Typography>
              <Typography
                variant="caption"
                sx={{ cursor: 'pointer', color: textColor.neutral.lighter, flexShrink: 0 }}
                onClick={() =>
                  setCard((prev) => ({ ...prev, file_urls: prev.file_urls?.filter((_, idx) => idx !== i) }))
                }
              >
                ✕
              </Typography>
            </Stack>
          ))}
          <Stack direction="row" gap={1}>
            <input
              value={fileUrl}
              onChange={(e) => setFileUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addFileUrl()}
              placeholder="Pegá un link o URL y presioná Enter..."
              style={{
                flex: 1,
                border: `1px solid ${border.neutral.divider}`,
                borderRadius: '8px',
                padding: '8px 12px',
                fontFamily: 'inherit',
                fontSize: '13px',
                color: textColor.neutral.default,
                backgroundColor: bg.layout.tertiary,
                outline: 'none',
              }}
            />
            <button
              type="button"
              onClick={addFileUrl}
              disabled={!fileUrl.trim()}
              style={{
                border: `1px solid ${border.neutral.divider}`,
                borderRadius: '8px',
                padding: '8px 16px',
                fontFamily: 'inherit',
                fontSize: '18px',
                cursor: fileUrl.trim() ? 'pointer' : 'default',
                backgroundColor: fileUrl.trim() ? bg.elements.brand : bg.layout.tertiary,
                color: fileUrl.trim() ? '#FFFFFF' : textColor.neutral.lighter,
                flexShrink: 0,
              }}
            >+</button>
          </Stack>
          <Typography variant="caption" sx={{ color: textColor.neutral.lighter }}>
            Para archivos de Drive o Excel, compartí el link y pegalo acá.
          </Typography>
        </Stack>
      </Stack>

      <Stack sx={{ p: 2, gap: 1, borderTop: `1px solid ${border.neutral.divider}` }}>
        <Button variant="contained" fullWidth onClick={() => onConfirm(card)} disabled={isLoading} loading={isLoading}>
          {isLoading ? 'Creando card...' : 'Crear card en Notion'}
        </Button>
        <Button variant="outlined" fullWidth onClick={onBack} disabled={isLoading}>
          Volver al chat
        </Button>
      </Stack>
    </Stack>
  );
}
