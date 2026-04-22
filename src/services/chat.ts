export type MessageImage = {
  base64: string;
  mimeType: string;
};

export type Message = {
  role: 'user' | 'model';
  content: string;
  images?: MessageImage[];
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
  file_urls?: string[];
  images_count?: number;
  similar_cards?: { name: string; url: string }[];
  requester?: string;
};

export type SimilarCard = {
  id: string;
  url: string;
  name: string;
  type_of_solution: string;
  miniapps: string[];
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

export async function fetchSimilarCards(miniapps: string[]): Promise<SimilarCard[]> {
  const res = await fetch('/api/notion/similar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ miniapps }),
  });
  if (!res.ok) return [];
  return res.json() as Promise<SimilarCard[]>;
}

export function formatOptionLabel(row: Record<string, unknown>, type: string): string {
  if (type === 'search_instance') {
    return `${row.name} (ID: ${row.instanceId})`;
  }
  if (type === 'pr_cycles' || type === 'goals_cycles') {
    const start = row.startDate ?? row.start_date ?? row['Fecha inicio'];
    const suffix = start ? ` · ${String(start).slice(0, 10)}` : '';
    return `${row.name ?? row['Nombre'] ?? row.id}${suffix}`;
  }
  if (type === 'segmentation') {
    return String(row.grupo ?? row['Grupo'] ?? '');
  }
  if (type === 'profile_fields') {
    return String(row.field_name ?? '');
  }
  if (type === 'sm_categories') {
    return `${row.categoria} › ${row.servicio}`;
  }
  if (type === 'forms') {
    return String(row.nombre ?? '');
  }
  if (type === 'courses') {
    const cat = row.categoria ?? row.category;
    const name = row.nombre ?? row.name ?? row.curso ?? row.id ?? '';
    return cat ? `${cat} › ${name}` : String(name);
  }
  return String(row.name ?? row.nombre ?? row.id ?? JSON.stringify(row));
}

export function formatOptionId(row: Record<string, unknown>, type: string): string {
  if (type === 'search_instance') return String(row.instanceId);
  if (type === 'pr_cycles' || type === 'goals_cycles') return String(row.id ?? row['ID']);
  if (type === 'segmentation') return String(row.group_id ?? row.grupo ?? row['Grupo']);
  if (type === 'profile_fields') return String(row.field_id ?? '');
  if (type === 'sm_categories') return String(row.service_id ?? row.category_id ?? '');
  if (type === 'forms') return String(row.form_id ?? '');
  if (type === 'courses') return String(row.id ?? row.course_id ?? '');
  return String(row.id ?? JSON.stringify(row));
}
