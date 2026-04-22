// Helper function to generate realistic random scores
const generateScore = (base, variance = 0.15) => {
    const min = Math.max(0, base - variance);
    const max = Math.min(1, base + variance);
    return Number((Math.random() * (max - min) + min).toFixed(2));
};
// Organization areas
const areas = [
    {
        id: 1,
        title: 'Área Comercial',
        subtitle: 'Ventas y Marketing',
        participants: 45,
    },
    {
        id: 2,
        title: 'Área de Tecnología',
        subtitle: 'IT y Desarrollo',
        participants: 62,
    },
    {
        id: 3,
        title: 'Recursos Humanos',
        subtitle: 'Gestión de Personas',
        participants: 18,
    },
    {
        id: 4,
        title: 'Área de Operaciones',
        subtitle: 'Logística y Procesos',
        participants: 38,
    },
    {
        id: 5,
        title: 'Área Financiera',
        subtitle: 'Finanzas y Contabilidad',
        participants: 22,
    },
    {
        id: 6,
        title: 'Área Legal',
        subtitle: 'Legal y Compliance',
        participants: 12,
    },
];
// Evaluation dimensions
const dimensions = [
    {
        id: 1,
        title: 'Liderazgo',
        subtitle: 'Gestión y dirección del equipo',
        baseScore: 0.72,
    },
    {
        id: 2,
        title: 'Ambiente Laboral',
        subtitle: 'Clima organizacional',
        baseScore: 0.68,
    },
    {
        id: 3,
        title: 'Desarrollo Profesional',
        subtitle: 'Crecimiento y aprendizaje',
        baseScore: 0.75,
    },
    {
        id: 4,
        title: 'Comunicación',
        subtitle: 'Flujo de información',
        baseScore: 0.65,
    },
    {
        id: 5,
        title: 'Reconocimiento',
        subtitle: 'Valoración del desempeño',
        baseScore: 0.6,
    },
    {
        id: 6,
        title: 'Balance Vida-Trabajo',
        subtitle: 'Equilibrio personal',
        baseScore: 0.78,
    },
    {
        id: 7,
        title: 'Recursos y Herramientas',
        subtitle: 'Medios de trabajo',
        baseScore: 0.7,
    },
    {
        id: 8,
        title: 'Compensación',
        subtitle: 'Beneficios y salarios',
        baseScore: 0.63,
    },
];
// Function to generate area statistics
const generateAreaStats = (areaId, areaTitle, dimensionBaseScore, hasChildren = false) => {
    const area = areas.find(a => a.id === areaId);
    const result = generateScore(dimensionBaseScore);
    const baseResult = generateScore(dimensionBaseScore - 0.05, 0.1);
    const baseResultDifference = Number((result - baseResult).toFixed(2));
    return {
        id: Number(`${areaId}${Math.floor(Math.random() * 100)}`),
        hasChildren,
        result,
        title: `${areaTitle} - ${area?.title}`,
        subtitle: area?.subtitle || '',
        baseResult,
        baseResultDifference,
        participantsAmount: area?.participants || 0,
    };
};
// Mock data for totalsData (column headers)
export const mockTotalsData = {
    hierarchy: areas.map(area => {
        const result = generateScore(0.7);
        const baseResult = generateScore(0.68, 0.1);
        const baseResultDifference = Number((result - baseResult).toFixed(2));
        return {
            id: area.id,
            hasChildren: true,
            result,
            title: area.title,
            subtitle: area.subtitle,
            baseResult,
            baseResultDifference,
            participantsAmount: area.participants,
        };
    }),
    stats: [
        {
            id: 999,
            hasChildren: false,
            result: 0.71,
            title: 'Total',
            subtitle: '',
            baseResult: 0.68,
            baseResultDifference: 0.03,
            participantsAmount: areas.reduce((sum, area) => sum + area.participants, 0),
        },
    ],
};
// Mock data for scoresData (dimension/question rows)
export const mockScoresData = {
    hierarchy: dimensions.map(dimension => {
        const dimensionResult = generateScore(dimension.baseScore);
        return {
            id: dimension.id,
            result: dimensionResult,
            title: dimension.title,
            subtitle: dimension.subtitle,
            stats: areas.map(area => generateAreaStats(area.id, dimension.title, dimension.baseScore, false)),
        };
    }),
    stats: dimensions.map(dimension => {
        const totalResult = generateScore(dimension.baseScore);
        const totalBaseResult = generateScore(dimension.baseScore - 0.05, 0.1);
        const totalDifference = Number((totalResult - totalBaseResult).toFixed(2));
        return {
            id: `total-${dimension.id}`,
            result: totalResult,
            title: `Total ${dimension.title}`,
            subtitle: '',
            stats: [
                {
                    id: Number(`${dimension.id}999`),
                    hasChildren: false,
                    result: totalResult,
                    title: 'Total',
                    subtitle: '',
                    baseResult: totalBaseResult,
                    baseResultDifference: totalDifference,
                    participantsAmount: areas.reduce((sum, area) => sum + area.participants, 0),
                },
            ],
        };
    }),
};
// Mock data with insufficient data (null values)
export const mockDataWithNulls = {
    hierarchy: [
        {
            id: 1,
            hasChildren: true,
            result: null,
            title: 'Área Nueva',
            subtitle: 'Área sin suficientes datos',
            baseResult: null,
            baseResultDifference: null,
            participantsAmount: 3,
        },
        {
            id: 2,
            hasChildren: true,
            result: 0.75,
            title: 'Área Establecida',
            subtitle: 'Con datos completos',
            baseResult: 0.72,
            baseResultDifference: 0.03,
            participantsAmount: 45,
        },
        {
            id: 3,
            hasChildren: false,
            result: null,
            title: 'Área Piloto',
            subtitle: 'En fase de prueba',
            baseResult: null,
            baseResultDifference: null,
            participantsAmount: 5,
        },
    ],
    stats: [
        {
            id: 999,
            hasChildren: false,
            result: 0.72,
            title: 'Total',
            subtitle: '',
            baseResult: 0.7,
            baseResultDifference: 0.02,
            participantsAmount: 53,
        },
    ],
};
export const mockScoresDataWithNulls = {
    hierarchy: [
        {
            id: 1,
            result: null,
            title: 'Liderazgo',
            subtitle: 'Sin datos suficientes',
            stats: [
                {
                    id: 101,
                    hasChildren: false,
                    result: null,
                    title: 'Liderazgo - Área Nueva',
                    subtitle: '',
                    baseResult: null,
                    baseResultDifference: null,
                    participantsAmount: 3,
                },
                {
                    id: 102,
                    hasChildren: false,
                    result: 0.78,
                    title: 'Liderazgo - Área Establecida',
                    subtitle: '',
                    baseResult: 0.75,
                    baseResultDifference: 0.03,
                    participantsAmount: 45,
                },
                {
                    id: 103,
                    hasChildren: false,
                    result: null,
                    title: 'Liderazgo - Área Piloto',
                    subtitle: '',
                    baseResult: null,
                    baseResultDifference: null,
                    participantsAmount: 5,
                },
            ],
        },
        {
            id: 2,
            result: 0.68,
            title: 'Ambiente Laboral',
            subtitle: 'Con datos parciales',
            stats: [
                {
                    id: 201,
                    hasChildren: false,
                    result: null,
                    title: 'Ambiente - Área Nueva',
                    subtitle: '',
                    baseResult: null,
                    baseResultDifference: null,
                    participantsAmount: 3,
                },
                {
                    id: 202,
                    hasChildren: false,
                    result: 0.72,
                    title: 'Ambiente - Área Establecida',
                    subtitle: '',
                    baseResult: 0.68,
                    baseResultDifference: 0.04,
                    participantsAmount: 45,
                },
                {
                    id: 203,
                    hasChildren: false,
                    result: null,
                    title: 'Ambiente - Área Piloto',
                    subtitle: '',
                    baseResult: null,
                    baseResultDifference: null,
                    participantsAmount: 5,
                },
            ],
        },
    ],
    stats: [
        {
            id: 'total-1',
            result: 0.75,
            title: 'Total Liderazgo',
            subtitle: '',
            stats: [
                {
                    id: 1001,
                    hasChildren: false,
                    result: 0.75,
                    title: 'Total',
                    subtitle: '',
                    baseResult: 0.72,
                    baseResultDifference: 0.03,
                    participantsAmount: 53,
                },
            ],
        },
        {
            id: 'total-2',
            result: 0.68,
            title: 'Total Ambiente',
            subtitle: '',
            stats: [
                {
                    id: 2001,
                    hasChildren: false,
                    result: 0.68,
                    title: 'Total',
                    subtitle: '',
                    baseResult: 0.66,
                    baseResultDifference: 0.02,
                    participantsAmount: 53,
                },
            ],
        },
    ],
};
// Mock data with low scores (to visualize the full color range)
export const mockLowScoresData = {
    hierarchy: [
        {
            id: 1,
            result: 0.25,
            title: 'Comunicación Interna',
            subtitle: 'Necesita mejora urgente',
            stats: areas.map((area, index) => ({
                id: 100 + index,
                hasChildren: false,
                result: generateScore(0.25, 0.1),
                title: `Comunicación - ${area.title}`,
                subtitle: area.subtitle,
                baseResult: generateScore(0.28, 0.08),
                baseResultDifference: -0.03,
                participantsAmount: area.participants,
            })),
        },
        {
            id: 2,
            result: 0.35,
            title: 'Herramientas de Trabajo',
            subtitle: 'Requiere atención',
            stats: areas.map((area, index) => ({
                id: 200 + index,
                hasChildren: false,
                result: generateScore(0.35, 0.1),
                title: `Herramientas - ${area.title}`,
                subtitle: area.subtitle,
                baseResult: generateScore(0.38, 0.08),
                baseResultDifference: -0.03,
                participantsAmount: area.participants,
            })),
        },
    ],
    stats: [
        {
            id: 'total-1',
            result: 0.25,
            title: 'Total Comunicación',
            subtitle: '',
            stats: [
                {
                    id: 1001,
                    hasChildren: false,
                    result: 0.25,
                    title: 'Total',
                    subtitle: '',
                    baseResult: 0.28,
                    baseResultDifference: -0.03,
                    participantsAmount: areas.reduce((sum, area) => sum + area.participants, 0),
                },
            ],
        },
        {
            id: 'total-2',
            result: 0.35,
            title: 'Total Herramientas',
            subtitle: '',
            stats: [
                {
                    id: 2001,
                    hasChildren: false,
                    result: 0.35,
                    title: 'Total',
                    subtitle: '',
                    baseResult: 0.38,
                    baseResultDifference: -0.03,
                    participantsAmount: areas.reduce((sum, area) => sum + area.participants, 0),
                },
            ],
        },
    ],
};
// Mock data with high scores (to visualize excellence)
export const mockHighScoresData = {
    hierarchy: [
        {
            id: 1,
            result: 0.92,
            title: 'Innovación',
            subtitle: 'Excelente desempeño',
            stats: areas.map((area, index) => ({
                id: 100 + index,
                hasChildren: false,
                result: generateScore(0.9, 0.05),
                title: `Innovación - ${area.title}`,
                subtitle: area.subtitle,
                baseResult: generateScore(0.88, 0.05),
                baseResultDifference: 0.04,
                participantsAmount: area.participants,
            })),
        },
        {
            id: 2,
            result: 0.88,
            title: 'Trabajo en Equipo',
            subtitle: 'Muy buen nivel',
            stats: areas.map((area, index) => ({
                id: 200 + index,
                hasChildren: false,
                result: generateScore(0.86, 0.05),
                title: `Equipo - ${area.title}`,
                subtitle: area.subtitle,
                baseResult: generateScore(0.83, 0.05),
                baseResultDifference: 0.05,
                participantsAmount: area.participants,
            })),
        },
    ],
    stats: [
        {
            id: 'total-1',
            result: 0.92,
            title: 'Total Innovación',
            subtitle: '',
            stats: [
                {
                    id: 1001,
                    hasChildren: false,
                    result: 0.92,
                    title: 'Total',
                    subtitle: '',
                    baseResult: 0.88,
                    baseResultDifference: 0.04,
                    participantsAmount: areas.reduce((sum, area) => sum + area.participants, 0),
                },
            ],
        },
        {
            id: 'total-2',
            result: 0.88,
            title: 'Total Trabajo en Equipo',
            subtitle: '',
            stats: [
                {
                    id: 2001,
                    hasChildren: false,
                    result: 0.88,
                    title: 'Total',
                    subtitle: '',
                    baseResult: 0.83,
                    baseResultDifference: 0.05,
                    participantsAmount: areas.reduce((sum, area) => sum + area.participants, 0),
                },
            ],
        },
    ],
};
