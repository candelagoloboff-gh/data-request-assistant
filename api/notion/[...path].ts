const NOTION_API = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

const IMPACT_MAP: Record<number, string> = {
  1: '1- 🚨Critical: 100% blocking for implementation / Churn risk',
  2: '2- 🟥 High: parcial blocker / severely affects a key module',
  3: '3- 🟧 Important: not blocking but it has high impact on the customer experience',
  4: '4- 🟩 Necessary: middle impact / has workaround',
  5: '5- 🟢 Improvement: nice-to-have / optimization',
};

const DIFFICULTY_MAP: Record<string, string> = {
  'Muy bajo': 'Muy bajo (duplicar una query o proceso existente)',
  Bajo: 'Bajo (tomo medio día o menos)',
  Medio: 'Medio (más de medio día/casi un día)',
  Alto: 'Alto (toma más de un día y retrabajo)',
  'Muy alto': 'Muy alto (toma días repreguntas y retrabajo)',
};

const TYPE_OF_SOLUTION_MAP: Record<string, string> = {
  'Query Assist': 'Queries / Dashboard',
  'New Query': 'Queries / Dashboard',
  'New Dashboard': 'Queries / Dashboard',
  'Update Dashboard': 'Queries / Dashboard',
  'Feasibility Analysis': 'Análisis',
  'Standard Script': 'Automatización (Google Colab/ apps scripts)',
  'Complex Script': 'Automatización (Google Colab/ apps scripts)',
  'Simple Script': 'Automatización (Google Colab/ apps scripts)',
  'Script Assist': 'Automatización (Google Colab/ apps scripts)',
};

type CardData = {
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
  conversation?: string;
};

function notionText(content: string) {
  return [{ type: 'text', text: { content: content.slice(0, 2000) } }];
}

function buildProposedSolution(card: CardData): string {
  const parts: string[] = [];
  parts.push(`**Tipo de solución detallado:** ${card.type_of_solution}`);
  if (card.featuring_team) parts.push(`**Featuring:** ${card.featuring_team}`);
  if (card.selected_variables && Object.keys(card.selected_variables).length > 0) {
    parts.push(`**Variables seleccionadas:** ${JSON.stringify(card.selected_variables)}`);
  }
  parts.push('');
  parts.push(card.proposed_solution);
  return parts.join('\n');
}

function buildRequestDescription(card: CardData): string {
  const parts: string[] = [card.request_description];
  if (card.conversation) {
    parts.push('\n\n---\n**Conversación completa:**\n');
    parts.push(card.conversation);
  }
  return parts.join('');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const segments = (req.query.path ?? req.query['...path']) as string | string[] | undefined;
  const path = Array.isArray(segments) ? segments.join('/') : (segments ?? '');

  if (path !== 'cards') {
    return res.status(404).json({ error: 'Not found' });
  }

  try {
    const card = req.body as CardData;

    const impactLabel = IMPACT_MAP[card.impact] ?? IMPACT_MAP[4];
    const difficultyLabel = DIFFICULTY_MAP[card.difficulty] ?? card.difficulty;
    const typeOfSolutionLabel = TYPE_OF_SOLUTION_MAP[card.type_of_solution] ?? 'Queries / Dashboard';

    const properties: Record<string, unknown> = {
      Name: { title: notionText(card.name) },
      'Request description': { rich_text: notionText(buildRequestDescription(card)) },
      instanceID: { rich_text: notionText(card.instance_id) },
      Impact: { select: { name: impactLabel } },
      'Type of solution': { select: { name: typeOfSolutionLabel } },
      Difficulty: { select: { name: difficultyLabel } },
      'Proposed solution': { rich_text: notionText(buildProposedSolution(card)) },
      'Churn Flag': { checkbox: !!card.churn_flag },
    };

    if (card.nombre_comunidad) {
      properties['Nombre Comunidad'] = { rich_text: notionText(card.nombre_comunidad) };
    }

    if (card.miniapps?.length) {
      properties['Miniapps related'] = {
        multi_select: card.miniapps.map((name) => ({ name })),
      };
    }

    if (card.desired_eta) {
      properties['Desired ETA'] = { date: { start: card.desired_eta } };
    }

    const body = {
      parent: { database_id: process.env.NOTION_BOARD_DB_ID! },
      properties,
    };

    const notionRes = await fetch(`${NOTION_API}/pages`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY!}`,
        'Notion-Version': NOTION_VERSION,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!notionRes.ok) {
      const error = await notionRes.text();
      console.error('[notion/cards] Notion API error:', error);
      return res.status(500).json({ error: 'Error al crear la card en Notion' });
    }

    const page = (await notionRes.json()) as { id: string; url: string };
    return res.json({ id: page.id, url: page.url });
  } catch (err) {
    console.error('[notion/cards]', err);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
