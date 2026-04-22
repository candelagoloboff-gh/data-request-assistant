import { useRef, useState, useEffect, type KeyboardEvent } from 'react';

import Stack from '@material-hu/mui/Stack';
import Typography from '@material-hu/mui/Typography';
import { useTheme } from '@material-hu/mui/styles';
import IconButton from '@material-hu/mui/IconButton';

import Button from '@material-hu/components/design-system/Buttons/Button';
import { useDrawerLayer } from '@material-hu/components/layers/Drawers';
import { IconSend2, IconRefresh } from '@material-hu/icons/tabler';

import { BlankLayout } from '../../layouts/BlankLayout';
import {
  sendChatMessage,
  createNotionCard,
  formatOptionLabel,
  formatOptionId,
  type Message,
  type CardData,
  type ChatOption,
} from '../../services/chat';
import { CardConfirmationContent } from './CardConfirmationContent';

type VisibleMessage = {
  role: 'user' | 'assistant';
  content: string;
  options?: { items: ChatOption[]; type: string };
  cardReady?: boolean;
  selectedOption?: string;
};

const WELCOME_MESSAGE: VisibleMessage = {
  role: 'assistant',
  content:
    '¡Hola! Soy el asistente de pedidos a Data. Describime el pedido del cliente o pegá directamente el mail que recibiste. Yo me encargo de armar la card completa.',
};

export function ChatPage() {
  const theme = useTheme();
  const { openDrawer, closeDrawer } = useDrawerLayer();

  const [visibleMessages, setVisibleMessages] = useState<VisibleMessage[]>([WELCOME_MESSAGE]);
  const [apiMessages, setApiMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [cardUrl, setCardUrl] = useState<string | null>(null);
  const [isCreatingCard, setIsCreatingCard] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleMessages, isLoading]);

  function buildConversationText(): string {
    return apiMessages
      .map((m) => `${m.role === 'user' ? 'SAM' : 'Asistente'}: ${m.content}`)
      .join('\n\n');
  }

  async function handleSend(textOverride?: string) {
    const text = (textOverride ?? input).trim();
    if (!text || isLoading) return;

    if (!textOverride) setInput('');

    const newApiMessages: Message[] = [...apiMessages, { role: 'user', content: text }];

    setVisibleMessages((prev) => [...prev, { role: 'user', content: text }]);
    setApiMessages(newApiMessages);
    setIsLoading(true);

    try {
      const response = await sendChatMessage(newApiMessages);

      if (response.type === 'message') {
        setVisibleMessages((prev) => [...prev, { role: 'assistant', content: response.content }]);
        setApiMessages((prev) => [...prev, { role: 'model', content: response.content }]);
      } else if (response.type === 'message_with_options') {
        setVisibleMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: response.content,
            options: { items: response.options as ChatOption[], type: response.variable_type },
          },
        ]);
        setApiMessages((prev) => [...prev, { role: 'model', content: response.content }]);
      } else if (response.type === 'card_ready') {
        setVisibleMessages((prev) => [
          ...prev,
          { role: 'assistant', content: response.content, cardReady: true },
        ]);
        setApiMessages((prev) => [...prev, { role: 'model', content: response.content }]);
        setCardData(response.card);
      }
    } catch {
      setVisibleMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Algo no funcionó. Intentá de nuevo.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleOptionSelect(option: ChatOption, msgIndex: number, variableType: string) {
    const label = formatOptionLabel(option as Record<string, unknown>, variableType);
    const id = formatOptionId(option as Record<string, unknown>, variableType);

    setVisibleMessages((prev) =>
      prev.map((m, i) => (i === msgIndex ? { ...m, selectedOption: label } : m)),
    );

    handleSend(`Seleccioné: ${label} (id: ${id})`);
  }

  async function handleCreateCard() {
    if (!cardData) return;
    setIsCreatingCard(true);

    try {
      const result = await createNotionCard(cardData, buildConversationText());
      setCardUrl(result.url);
      closeDrawer('card-confirmation');

      setVisibleMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `✅ ¡Card creada en Notion! Podés verla en el link que aparece abajo.`,
        },
      ]);
    } catch {
      setVisibleMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'No pude crear la card en Notion. Verificá que la API key esté configurada.',
        },
      ]);
      closeDrawer('card-confirmation');
    } finally {
      setIsCreatingCard(false);
    }
  }

  function handleOpenConfirmation() {
    if (!cardData) return;
    openDrawer(
      {
        content: (
          <CardConfirmationContent
            card={cardData}
            onConfirm={handleCreateCard}
            onBack={() => closeDrawer('card-confirmation')}
            isLoading={isCreatingCard}
          />
        ),
        wrapperProps: { PaperProps: { sx: { width: 480 } } },
      },
      'card-confirmation',
    );
  }

  function handleReset() {
    setVisibleMessages([WELCOME_MESSAGE]);
    setApiMessages([]);
    setInput('');
    setCardData(null);
    setCardUrl(null);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  const bg = theme.palette.new.background;
  const border = theme.palette.new.border;
  const textColor = theme.palette.new.text;

  return (
    <BlankLayout>
      <Stack
        sx={{
          height: '100vh',
          bgcolor: bg.layout.tertiary,
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            px: 3,
            py: 2,
            bgcolor: bg.layout.default,
            borderBottom: `1px solid ${border.neutral.divider}`,
            flexShrink: 0,
          }}
        >
          <Stack>
            <Typography variant="h6" sx={{ color: textColor.neutral.default, fontWeight: 700 }}>
              Data Request Assistant
            </Typography>
            <Typography variant="body2" sx={{ color: textColor.neutral.lighter }}>
              Describí el pedido del cliente y armamos la card juntos
            </Typography>
          </Stack>
          <IconButton onClick={handleReset} title="Nueva conversación" size="small">
            <IconRefresh size={20} />
          </IconButton>
        </Stack>

        {/* Messages */}
        <Stack sx={{ flex: 1, overflow: 'auto', px: 3, py: 2, gap: 2 }}>
          {visibleMessages.map((msg, i) => (
            <Stack
              key={i}
              alignItems={msg.role === 'user' ? 'flex-end' : 'flex-start'}
              sx={{ gap: 1 }}
            >
              {/* Bubble */}
              <Stack
                sx={{
                  maxWidth: '75%',
                  bgcolor: msg.role === 'user' ? bg.elements.brand : bg.layout.default,
                  color: msg.role === 'user' ? '#FFFFFF' : textColor.neutral.default,
                  borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  px: 2,
                  py: 1.5,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled content
                  dangerouslySetInnerHTML={{
                    __html: msg.content
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(
                        /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
                        '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline">$1</a>',
                      ),
                  }}
                />
              </Stack>

              {/* Variable options */}
              {msg.options && !msg.selectedOption && (
                <Stack
                  sx={{
                    maxWidth: '75%',
                    bgcolor: bg.layout.default,
                    borderRadius: '8px',
                    p: 1,
                    gap: 0.5,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    width: '100%',
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ px: 1, color: textColor.neutral.lighter, fontWeight: 600 }}
                  >
                    Seleccioná una opción:
                  </Typography>
                  {msg.options.items.slice(0, 10).map((opt, oi) => (
                    <Stack
                      key={oi}
                      onClick={() => !isLoading && handleOptionSelect(opt, i, msg.options!.type)}
                      sx={{
                        px: 1.5,
                        py: 1,
                        borderRadius: '6px',
                        cursor: isLoading ? 'default' : 'pointer',
                        '&:hover': !isLoading
                          ? { bgcolor: bg.layout.tertiary }
                          : {},
                      }}
                    >
                      <Typography variant="body2" sx={{ color: textColor.neutral.default }}>
                        {formatOptionLabel(opt as Record<string, unknown>, msg.options!.type)}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              )}

              {/* Selected option feedback */}
              {msg.selectedOption && (
                <Typography variant="caption" sx={{ color: textColor.neutral.lighter }}>
                  ✓ Seleccionaste: {msg.selectedOption}
                </Typography>
              )}

              {/* Card ready CTA */}
              {msg.cardReady && !cardUrl && (
                <Button variant="contained" onClick={handleOpenConfirmation} sx={{ mt: 0.5 }}>
                  Ver card antes de crear →
                </Button>
              )}

              {/* Card URL */}
              {msg.cardReady && cardUrl && (
                <Button
                  variant="outlined"
                  onClick={() => window.open(cardUrl, '_blank')}
                  sx={{ mt: 0.5 }}
                >
                  Ver card en Notion ↗
                </Button>
              )}
            </Stack>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <Stack alignItems="flex-start">
              <Stack
                sx={{
                  bgcolor: bg.layout.default,
                  borderRadius: '16px 16px 16px 4px',
                  px: 2,
                  py: 1.5,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                }}
              >
                <Typography variant="body2" sx={{ color: textColor.neutral.lighter }}>
                  Pensando...
                </Typography>
              </Stack>
            </Stack>
          )}

          <div ref={messagesEndRef} />
        </Stack>

        {/* Input bar */}
        <Stack
          direction="row"
          alignItems="flex-end"
          gap={1}
          sx={{
            px: 3,
            py: 2,
            bgcolor: bg.layout.default,
            borderTop: `1px solid ${border.neutral.divider}`,
            flexShrink: 0,
          }}
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describí el pedido o pegá el mail del cliente... (Enter para enviar)"
            disabled={isLoading}
            rows={2}
            style={{
              flex: 1,
              resize: 'none',
              border: `1px solid ${border.neutral.divider}`,
              borderRadius: '12px',
              padding: '10px 14px',
              fontFamily: 'inherit',
              fontSize: '14px',
              lineHeight: '1.5',
              outline: 'none',
              color: textColor.neutral.default,
              backgroundColor: bg.layout.tertiary,
            }}
          />
          <IconButton
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            sx={{
              bgcolor: bg.elements.brand,
              color: '#FFFFFF',
              width: 44,
              height: 44,
              borderRadius: '12px',
              flexShrink: 0,
              '&:hover': { bgcolor: bg.elements.brand, opacity: 0.85 },
              '&:disabled': {
                bgcolor: bg.layout.tertiary,
                color: textColor.neutral.lighter,
              },
            }}
          >
            <IconSend2 size={20} />
          </IconButton>
        </Stack>
      </Stack>
    </BlankLayout>
  );
}
