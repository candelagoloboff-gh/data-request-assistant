import { useRef, useState, useEffect, type KeyboardEvent } from 'react';

import Stack from '@material-hu/mui/Stack';
import Typography from '@material-hu/mui/Typography';
import { useTheme } from '@material-hu/mui/styles';
import IconButton from '@material-hu/mui/IconButton';

import Button from '@material-hu/components/design-system/Buttons/Button';
import { useDrawerLayer } from '@material-hu/components/layers/Drawers';
import { IconSend2, IconRefresh, IconCheck, IconPencil } from '@material-hu/icons/tabler';

import { BlankLayout } from '../../layouts/BlankLayout';
import { useAuth } from '../../providers/AuthContext';
import {
  sendChatMessage,
  createNotionCard,
  fetchSimilarCards,
  formatOptionLabel,
  formatOptionId,
  VARIABLE_TYPE_TITLES,
  type Message,
  type MessageImage,
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
  cardUrl?: string;
  imageDataUrls?: string[];
};

const WELCOME_MESSAGE: VisibleMessage = {
  role: 'assistant',
  content:
    '¡Hola! Soy el asistente de pedidos a Data. Describime el pedido del cliente o pegá directamente el mail que recibiste. Yo me encargo de armar la card completa.',
};

export function ChatPage() {
  const theme = useTheme();
  const { openDrawer, closeDrawer } = useDrawerLayer();
  const { userName, userEmail } = useAuth();

  const [visibleMessages, setVisibleMessages] = useState<VisibleMessage[]>([WELCOME_MESSAGE]);
  const [apiMessages, setApiMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [cardUrl, setCardUrl] = useState<string | null>(null);
  const [isCreatingCard, setIsCreatingCard] = useState(false);
  const [pendingSelections, setPendingSelections] = useState<Record<number, ChatOption[]>>({});
  const [pastedImages, setPastedImages] = useState<{ dataUrl: string; base64: string; mimeType: string }[]>([]);
  const [chatFileUrls, setChatFileUrls] = useState<string[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleMessages, isLoading]);

  function buildConversationText(): string {
    return apiMessages
      .map((m) => `${m.role === 'user' ? 'Solicitante' : 'Asistente'}: ${m.content}`)
      .join('\n\n');
  }

  async function handleSend(textOverride?: string) {
    const text = (textOverride ?? input).trim();
    const hasImages = pastedImages.length > 0;
    if (!text && !hasImages) return;
    if (isLoading) return;

    if (!textOverride) setInput('');

    const images: MessageImage[] = pastedImages.map(({ base64, mimeType }) => ({ base64, mimeType }));
    const imageDataUrls = pastedImages.map((img) => img.dataUrl);
    setPastedImages([]);

    const urlRegex = /https?:\/\/[^\s]+/g;
    const foundUrls = text.match(urlRegex) ?? [];
    if (foundUrls.length) {
      setChatFileUrls((prev) => [...prev, ...foundUrls.filter((u) => !prev.includes(u))]);
    }

    const newUserMessage: Message = { role: 'user', content: text, ...(images.length ? { images } : {}) };
    const newApiMessages: Message[] = [...apiMessages, newUserMessage];

    setVisibleMessages((prev) => [...prev, { role: 'user', content: text, imageDataUrls: imageDataUrls.length ? imageDataUrls : undefined }]);
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
        const imagesCount = newApiMessages.reduce((acc, m) => acc + (m.images?.length ?? 0), 0);
        setCardData({
          ...response.card,
          ...(imagesCount ? { images_count: imagesCount } : {}),
          ...(userName ? { requester: userName } : {}),
          ...(userEmail ? { requester_email: userEmail } : {}),
          ...(chatFileUrls.length ? { file_urls: chatFileUrls } : {}),
        });
        // Fetch similar cards in background — attach to card for Notion only
        if (response.card.miniapps?.length) {
          fetchSimilarCards(response.card.miniapps).then((similar) => {
            if (similar.length) {
              setCardData((prev) =>
                prev ? { ...prev, similar_cards: similar.map((sc) => ({ name: sc.name, url: sc.url })) } : prev,
              );
            }
          }).catch(() => {});
        }
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

  function toggleOptionSelection(option: ChatOption, msgIndex: number, variableType: string) {
    setPendingSelections((prev) => {
      const current = prev[msgIndex] ?? [];
      const optId = formatOptionId(option as Record<string, unknown>, variableType);
      const exists = current.some(
        (o) => formatOptionId(o as Record<string, unknown>, variableType) === optId,
      );
      return {
        ...prev,
        [msgIndex]: exists
          ? current.filter(
              (o) => formatOptionId(o as Record<string, unknown>, variableType) !== optId,
            )
          : [...current, option],
      };
    });
  }

  function handleConfirmSelections(msgIndex: number, variableType: string) {
    const selected = pendingSelections[msgIndex] ?? [];
    if (!selected.length) return;

    const labels = selected
      .map((o) => formatOptionLabel(o as Record<string, unknown>, variableType))
      .join(', ');
    const ids = selected
      .map((o) => formatOptionId(o as Record<string, unknown>, variableType))
      .join(', ');

    setVisibleMessages((prev) =>
      prev.map((m, i) => (i === msgIndex ? { ...m, selectedOption: labels } : m)),
    );
    setPendingSelections((prev) => {
      const next = { ...prev };
      delete next[msgIndex];
      return next;
    });

    handleSend(`Seleccioné: ${labels} (ids: ${ids})`);
  }

  async function handleCreateCard(editedCard?: CardData) {
    const card = editedCard ?? cardData;
    if (!card) return;
    setIsCreatingCard(true);

    try {
      const result = await createNotionCard(card, buildConversationText());
      setCardUrl(result.url);
      closeDrawer('card-confirmation');

      setVisibleMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `✅ ¡Card creada en Notion! Podés verla en el link que aparece abajo.`,
          cardUrl: result.url,
        },
      ]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Error desconocido';
      setVisibleMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `No pude crear la card en Notion: ${msg}`,
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

  function handleRequestManual() {
    handleSend(
      'No importa si no tenés toda la info, armá la card con lo que tenés hasta ahora y la completo yo.',
    );
  }

  function handleReset() {
    setVisibleMessages([WELCOME_MESSAGE]);
    setApiMessages([]);
    setInput('');
    setCardData(null);
    setCardUrl(null);
    setPendingSelections({});
    setPastedImages([]);
    setChatFileUrls([]);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLTextAreaElement>) {
    const items = Array.from(e.clipboardData.items);
    const imageItems = items.filter((item) => item.type.startsWith('image/'));
    if (!imageItems.length) return;

    e.preventDefault();
    imageItems.forEach((item) => {
      const file = item.getAsFile();
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const dataUrl = ev.target?.result as string;
        const base64 = dataUrl.split(',')[1];
        setPastedImages((prev) => [...prev, { dataUrl, base64, mimeType: file.type }]);
      };
      reader.readAsDataURL(file);
    });
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
          <Stack direction="row" alignItems="center" gap={1.5}>
            <img
              src="/hugo.png"
              alt="Hugo"
              style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <Stack>
              <Stack direction="row" alignItems="center" gap={0.5}>
                <Typography variant="h6" sx={{ color: textColor.neutral.default, fontWeight: 700 }}>
                  Data Request Assistant
                </Typography>
                <Typography sx={{ fontSize: '20px', lineHeight: 1 }}>📊</Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: textColor.neutral.lighter }}>
                Describí el pedido del cliente y armamos la card juntos
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap={1} alignItems="center">
            {!cardData && (
              <Button
                variant="outlined"
                onClick={handleRequestManual}
                disabled={isLoading}
                sx={{ gap: 0.5, py: 0.5, px: 1.5, minWidth: 0 }}
              >
                <IconPencil size={16} />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>Carga manual</Typography>
              </Button>
            )}
            <Button
              variant="outlined"
              onClick={handleReset}
              sx={{ gap: 0.5, py: 0.5, px: 1.5, minWidth: 0 }}
            >
              <IconRefresh size={16} />
              <Typography variant="caption" sx={{ fontWeight: 600 }}>Reiniciar</Typography>
            </Button>
          </Stack>
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
                  gap: 1,
                }}
              >
                {msg.imageDataUrls?.map((url, ii) => (
                  <img key={ii} src={url} alt="adjunto" style={{ maxWidth: '100%', borderRadius: '8px', display: 'block' }} />
                ))}
                {msg.content && (
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
                )}
              </Stack>

              {/* Variable options — multi-select */}
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
                    sx={{ px: 1, color: textColor.neutral.default, fontWeight: 700, fontSize: '13px' }}
                  >
                    {VARIABLE_TYPE_TITLES[msg.options!.type] ?? 'Seleccioná una o más opciones:'}
                  </Typography>
                  {msg.options.items.slice(0, 20).map((opt, oi) => {
                    const optId = formatOptionId(opt as Record<string, unknown>, msg.options!.type);
                    const isSelected = (pendingSelections[i] ?? []).some(
                      (o) =>
                        formatOptionId(o as Record<string, unknown>, msg.options!.type) === optId,
                    );
                    return (
                      <Stack
                        key={oi}
                        direction="row"
                        alignItems="center"
                        gap={1}
                        onClick={() =>
                          !isLoading && toggleOptionSelection(opt, i, msg.options!.type)
                        }
                        sx={{
                          px: 1.5,
                          py: 1,
                          borderRadius: '6px',
                          cursor: isLoading ? 'default' : 'pointer',
                          bgcolor: isSelected ? bg.layout.tertiary : 'transparent',
                          '&:hover': !isLoading
                            ? { bgcolor: bg.layout.tertiary }
                            : {},
                        }}
                      >
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          sx={{
                            width: 18,
                            height: 18,
                            borderRadius: '4px',
                            border: `2px solid ${isSelected ? bg.elements.brand : border.neutral.divider}`,
                            bgcolor: isSelected ? bg.elements.brand : 'transparent',
                            flexShrink: 0,
                            color: '#FFFFFF',
                          }}
                        >
                          {isSelected && <IconCheck size={12} strokeWidth={3} />}
                        </Stack>
                        <Typography
                          variant="body2"
                          sx={{ color: textColor.neutral.default, fontWeight: isSelected ? 700 : 400 }}
                        >
                          {formatOptionLabel(opt as Record<string, unknown>, msg.options!.type)}
                        </Typography>
                      </Stack>
                    );
                  })}
                  {(pendingSelections[i]?.length ?? 0) > 0 && (
                    <Button
                      variant="contained"
                      onClick={() => handleConfirmSelections(i, msg.options!.type)}
                      disabled={isLoading}
                      sx={{ mt: 0.5, alignSelf: 'flex-start' }}
                    >
                      Confirmar ({pendingSelections[i]?.length ?? 0} seleccionados)
                    </Button>
                  )}
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

              {/* Card URL — only on the success message */}
              {msg.cardUrl && (
                <Button
                  variant="outlined"
                  onClick={() => window.open(msg.cardUrl, '_blank')}
                  sx={{ mt: 0.5 }}
                >
                  Ver card en Notion ↗
                </Button>
              )}
            </Stack>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <Stack alignItems="flex-start" sx={{ gap: 0.5 }}>
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
              <Typography variant="caption" sx={{ color: textColor.neutral.lighter, px: 0.5 }}>
                Si tarda más de lo esperado, usá el botón <strong>Carga manual</strong> ↗
              </Typography>
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
          {pastedImages.length > 0 && (
            <Stack direction="row" gap={1} sx={{ flexWrap: 'wrap', mb: 0.5 }}>
              {pastedImages.map((img, ii) => (
                <Stack key={ii} sx={{ position: 'relative' }}>
                  <img src={img.dataUrl} alt="preview" style={{ height: 60, borderRadius: '8px', display: 'block' }} />
                  <Typography
                    variant="caption"
                    onClick={() => setPastedImages((prev) => prev.filter((_, idx) => idx !== ii))}
                    sx={{
                      position: 'absolute', top: -6, right: -6,
                      width: 18, height: 18, borderRadius: '50%',
                      bgcolor: 'rgba(0,0,0,0.5)', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', fontSize: '10px', lineHeight: 1,
                    }}
                  >✕</Typography>
                </Stack>
              ))}
            </Stack>
          )}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            placeholder="Describí el pedido o pegá el mail del cliente... (Enter para enviar, Ctrl+V para pegar imagen)"
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
            disabled={isLoading || (!input.trim() && !pastedImages.length)}
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
