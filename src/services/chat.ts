export type Message = {
  role: 'user' | 'model';
  content: string;
};

export type ChatOption = {
  id: string | number;
  label: string;
  [key: string]: unknown;
};

export type CardData = {
  name: string;
  request_description: string;
  instance_id: string;
  nombre_comunidad?: string;
  miniapps?: string[];
  type_of_solution: string;
  difficulty: string;
  impact: number;
  churn_flag?: boolean;
  desired_eta?: string;
  proposed_solution: string;
  featuring_team?: string;
  selected_variables?: Record<string, unknown>;
};

export type ChatResponse =
  | { type: 'message'; content: string }
  | { type: 'message_with_options'; content: string; options: ChatOption[]; variable_type: string }
  | { type: 'card_ready'; content: string; card: CardData };

export async function sendChatMessage(messages: Message[]): Promise<ChatResponse> {
  const res = await fetch('/api/gemini/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });

  if (!res.ok) {
    throw new Error('Error al comunicarse con el asistente');
  }

  return res.json() as Promise<ChatResponse>;
}

export async function createNotionCard(
  card: CardData,
  conversation: string,
): Promise<{ id: string; url: string }> {
  const res = await fetch('/api/notion/cards', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...card, conversation }),
  });

  if (!res.ok) {
    throw new Error('Error al crear la card en Notion');
  }

  return res.json() as Promise<{ id: string; url: string }>;
}

export function formatOptionLabel(row: Record<string, unknown>, type: string): string {
  if (type === 'search_instance') {
    return `${row.name} (ID: ${row.instanceId})`;
  }
  if (type === 'pr_cycles' || type === 'goals_cycles') {
    const start = row.startDate ? ` · ${String(row.startDate).slice(0, 10)}` : '';
    return `${row.name}${start}`;
  }
  if (type === 'segmentation') {
    return `${row.grupo} › ${row.segmento}`;
  }
  return String(row.name ?? row.id ?? JSON.stringify(row));
}

export function formatOptionId(row: Record<string, unknown>, type: string): string {
  if (type === 'search_instance') return String(row.instanceId);
  if (type === 'pr_cycles' || type === 'goals_cycles') return String(row.id);
  if (type === 'segmentation') return String(row.item_id ?? row.group_id);
  return String(row.id ?? JSON.stringify(row));
}
