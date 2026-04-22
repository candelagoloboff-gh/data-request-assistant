import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';

const REDASH_QUERY_IDS = {
  pr_cycles: 37586,
  goals_cycles: 37587,
  search_instance: 37588,
  segmentation: 37101,
};

const SYSTEM_PROMPT = `Sos un asistente que ayuda a SAMs y OLs de Humand a cargar pedidos al equipo de Data.

Cuando el SAM te describe un pedido o pega un mail de cliente, tu trabajo es:
1. Identificar el módulo involucrado (miniapp)
2. Clasificar el tipo de solución
3. Hacer solo las preguntas necesarias
4. Traer variables de Redash para que el SAM elija sin salir de la herramienta
5. Cuando tenés toda la info, proponer la card completa con la herramienta propose_card

MÓDULOS (Miniapps related):
Performance Review, Goals, Service Management, Forms, Feed, News, Automations, Chat, Courses, Documents, Files, Groups, Insights/Activation, Libraries, Onboarding, People Experience, Quick Links, Roles & Permissions, Security, Shift Management, Surveys, Tickets, Time Off, Time-tracking, Users, NOM035

TIPO DE SOLUCIÓN (elige uno exacto):
- Query Assist: fix, optimización o mantenimiento de queries existentes (Data Model Update, Query Bug Fix, Performance Optimization, Data Quality & Validation)
- New Query: query nueva desde cero
- New Dashboard: dashboard completamente nuevo (diseño + construcción)
- Update Dashboard: modificar dashboard existente (agregar charts, filtros, KPIs, cambiar layout)
- Feasibility Analysis: análisis de viabilidad, scope review + enfoque recomendado, sin implementación
- Standard Script: workflow estandarizado en Apps Script (ej: reportes individuales de PR) → featuring Operaciones
- Complex Script: workflow nuevo complejo en Apps Script o integración de APIs → featuring Integraciones
- Simple Script: script puntual, carga masiva, replicar modelo → featuring Operaciones
- Script Assist: investigar error, números incorrectos, fix en Sheets/Apps Script/Colab

DIFICULTAD (estimación interna para Data, no mencionar al SAM):
- Muy bajo: duplicar query/proceso existente (< 2 hs)
- Bajo: medio día o menos
- Medio: más de medio día / casi un día
- Alto: más de un día con retrabajo
- Muy alto: toma días, repreguntas y retrabajo

IMPACTO (proponer según la criticidad descrita):
1 = Critical: 100% bloqueante para implementación / riesgo de churn
2 = High: bloqueo parcial / afecta severamente un módulo clave
3 = Important: no bloquea pero tiene alto impacto en la experiencia del cliente
4 = Necessary: impacto medio / tiene workaround
5 = Improvement: nice-to-have / optimización

REGLAS IMPORTANTES:
- Si el SAM no menciona el instanceID pero sí el nombre del cliente/comunidad, usá get_variables con type="search_instance" y searchTerm=nombre_cliente para buscar el instanceID.
- Cuando tenés el instanceID y sabés el módulo, usá get_variables para traer variables del módulo:
  * type="pr_cycles" para Performance Review
  * type="goals_cycles" para Goals
  * type="segmentation" para segmentaciones
- NO preguntes por Urgencia (el SAM la carga si quiere)
- NO menciones el campo Difficulty al SAM (es interno para Data)
- Hacé UNA pregunta a la vez, de forma amigable y concisa
- Cuando tenés TODA la información necesaria, llamá a propose_card
- Siempre respondé en español`;

const TOOLS = [
  {
    functionDeclarations: [
      {
        name: 'get_variables',
        description:
          'Trae variables de Redash para un instanceId dado. Tipos disponibles: pr_cycles (ciclos de PR), goals_cycles (ciclos de Objetivos), segmentation (grupos de segmentación), search_instance (buscar instanceId por nombre de cliente).',
        parameters: {
          type: SchemaType.OBJECT,
          properties: {
            instanceId: {
              type: SchemaType.NUMBER,
              description: 'ID de la instancia. Usar 0 si type=search_instance.',
            },
            type: {
              type: SchemaType.STRING,
              description: 'Tipo de variable: pr_cycles | goals_cycles | segmentation | search_instance',
            },
            searchTerm: {
              type: SchemaType.STRING,
              description: 'Término de búsqueda (solo para type=search_instance)',
            },
          },
          required: ['instanceId', 'type'],
        },
      },
      {
        name: 'propose_card',
        description: 'Llama a esta herramienta cuando tenés toda la información necesaria para crear la card en Notion.',
        parameters: {
          type: SchemaType.OBJECT,
          properties: {
            name: {
              type: SchemaType.STRING,
              description: 'Título claro del pedido (máximo 8 palabras)',
            },
            request_description: {
              type: SchemaType.STRING,
              description: 'Descripción completa y estructurada del pedido para que Data pueda entenderlo sin contexto adicional',
            },
            instance_id: {
              type: SchemaType.STRING,
              description: 'instanceID del cliente',
            },
            nombre_comunidad: {
              type: SchemaType.STRING,
              description: 'Nombre de la comunidad/cliente',
            },
            miniapps: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING },
              description:
                'Módulos involucrados. Usar los nombres exactos: Performance Review, Goals, Service Management, Forms, etc.',
            },
            type_of_solution: {
              type: SchemaType.STRING,
              description:
                'Uno exacto de: Query Assist, New Query, New Dashboard, Update Dashboard, Feasibility Analysis, Standard Script, Complex Script, Simple Script, Script Assist',
            },
            difficulty: {
              type: SchemaType.STRING,
              description: 'Uno de: Muy bajo, Bajo, Medio, Alto, Muy alto',
            },
            impact: {
              type: SchemaType.NUMBER,
              description: 'Nivel de impacto del 1 al 5 (1=Critical, 2=High, 3=Important, 4=Necessary, 5=Improvement)',
            },
            churn_flag: {
              type: SchemaType.BOOLEAN,
              description: 'true si hay riesgo de churn mencionado en el pedido',
            },
            desired_eta: {
              type: SchemaType.STRING,
              description: 'Fecha deseada en formato YYYY-MM-DD si se mencionó alguna fecha',
            },
            proposed_solution: {
              type: SchemaType.STRING,
              description:
                'Descripción técnica breve de la solución propuesta, en lenguaje que entienda el equipo de Data',
            },
            featuring_team: {
              type: SchemaType.STRING,
              description:
                'Si el pedido involucra otro equipo además de Data: "Operaciones" para scripts/cargas, "Integraciones" para APIs complejas. Dejar vacío si no aplica.',
            },
            selected_variables: {
              type: SchemaType.OBJECT,
              description:
                'Variables seleccionadas por el SAM (ej: {"pr_cycle_id": 123, "pr_cycle_label": "H1 2025"})',
            },
          },
          required: [
            'name',
            'request_description',
            'instance_id',
            'miniapps',
            'type_of_solution',
            'difficulty',
            'impact',
            'proposed_solution',
          ],
        },
      },
    ],
  },
];

async function runRedashQuery(
  queryId: number,
  params: Record<string, unknown>,
): Promise<Record<string, unknown>[]> {
  const apiKey = process.env.REDASH_API_KEY!;
  const baseUrl = process.env.REDASH_BASE_URL!;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);

  try {
    const res = await fetch(`${baseUrl}/api/queries/${queryId}/results`, {
      method: 'POST',
      headers: {
        Authorization: `Key ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ parameters: params, max_age: 300 }),
      signal: controller.signal,
    });

    const data = (await res.json()) as {
      query_result?: { data: { rows: Record<string, unknown>[] } };
      job?: { id: string };
    };

    if (data.query_result) {
      return data.query_result.data.rows;
    }

    if (data.job) {
      for (let i = 0; i < 30; i++) {
        await new Promise((r) => setTimeout(r, 800));
        const jobRes = await fetch(`${baseUrl}/api/jobs/${data.job.id}`, {
          headers: { Authorization: `Key ${apiKey}` },
          signal: controller.signal,
        });
        const jobData = (await jobRes.json()) as {
          job: { status: number; query_result_id?: number };
        };
        if (jobData.job.status === 3 && jobData.job.query_result_id) {
          const resultRes = await fetch(
            `${baseUrl}/api/query_results/${jobData.job.query_result_id}`,
            { headers: { Authorization: `Key ${apiKey}` }, signal: controller.signal },
          );
          const result = (await resultRes.json()) as {
            query_result: { data: { rows: Record<string, unknown>[] } };
          };
          return result.query_result.data.rows;
        }
        if (jobData.job.status === 4) throw new Error('Query failed in Redash');
      }
    }
  } finally {
    clearTimeout(timeout);
  }
  return [];
}

async function fetchVariables(
  instanceId: number,
  type: string,
  searchTerm?: string,
): Promise<Record<string, unknown>[]> {
  try {
    if (type === 'search_instance') {
      return await runRedashQuery(REDASH_QUERY_IDS.search_instance, { search: searchTerm ?? '' });
    }
    if (type === 'pr_cycles') {
      return await runRedashQuery(REDASH_QUERY_IDS.pr_cycles, { instance_id: instanceId });
    }
    if (type === 'goals_cycles') {
      return await runRedashQuery(REDASH_QUERY_IDS.goals_cycles, { instance_id: instanceId });
    }
    if (type === 'segmentation') {
      return await runRedashQuery(REDASH_QUERY_IDS.segmentation, { instance_id: instanceId });
    }
  } catch {
    // Return empty on error — AI will handle gracefully
  }
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const segments = (req.query.path ?? req.query['...path']) as string | string[] | undefined;
  const path = Array.isArray(segments) ? segments.join('/') : (segments ?? '');

  if (path !== 'chat') {
    return res.status(404).json({ error: 'Not found' });
  }

  try {
    const { messages } = req.body as { messages: { role: string; content: string }[] };

    if (!messages?.length) {
      return res.status(400).json({ error: 'messages is required' });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      tools: TOOLS,
      systemInstruction: SYSTEM_PROMPT,
    });

    // Convert messages to Gemini format (all but last go to history)
    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }));
    const lastMessage = messages[messages.length - 1].content;

    const chat = model.startChat({ history });

    let lastVariables: { options: Record<string, unknown>[]; type: string } | null = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let currentMessage: any = lastMessage;

    for (let iterations = 0; iterations < 5; iterations++) {
      const result = await chat.sendMessage(currentMessage);
      const response = result.response;

      // Safely get text
      let text = '';
      try {
        text = response.text();
      } catch {
        text = '';
      }

      // Check for function calls
      const funcCalls = response.functionCalls?.() ?? [];

      if (!funcCalls.length) {
        // Final text response
        if (lastVariables?.options.length) {
          return res.json({
            type: 'message_with_options',
            content: text,
            options: lastVariables.options,
            variable_type: lastVariables.type,
          });
        }
        return res.json({ type: 'message', content: text });
      }

      // Handle function calls
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const funcResponses: any[] = [];

      for (const call of funcCalls) {
        if (call.name === 'propose_card') {
          return res.json({
            type: 'card_ready',
            content: text || '¡Tengo todo listo! Revisá la card antes de crearla.',
            card: call.args,
          });
        }

        if (call.name === 'get_variables') {
          const { instanceId, type, searchTerm } = call.args as {
            instanceId: number;
            type: string;
            searchTerm?: string;
          };
          const variables = await fetchVariables(instanceId, type, searchTerm);
          lastVariables = { options: variables, type };
          funcResponses.push({
            functionResponse: { name: call.name, response: { variables } },
          });
        }
      }

      if (funcResponses.length > 0) {
        currentMessage = funcResponses;
      } else {
        break;
      }
    }

    return res.json({ type: 'message', content: 'No pude completar la respuesta. Intentá de nuevo.' });
  } catch (err) {
    console.error('[gemini/chat]', err);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
