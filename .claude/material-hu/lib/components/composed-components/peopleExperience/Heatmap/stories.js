import { jsx as _jsx } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import { mockDataWithNulls, mockHighScoresData, mockLowScoresData, mockScoresData, mockScoresDataWithNulls, mockTotalsData, } from '../../../../mock/data/people-experience/heatmap';
import DropdownList from '../DropdownList';
import { DataSource, ScoreType, SegmentType } from '../types';
import Heatmap from './index';
// Componente mock de SegmentSelect
const MockSegmentSelect = ({ onChange, value, }) => {
    const segmentOptions = [
        {
            id: SegmentType.SEGMENTATION_GROUPS,
            name: 'Grupos de Segmentación',
        },
        {
            id: SegmentType.BOSSES,
            name: 'Jefaturas',
        },
        {
            id: SegmentType.DIRECT_BOSS,
            name: 'Jefe Directo',
        },
    ];
    return (_jsx(DropdownList, { options: segmentOptions, value: value, onChange: onChange }));
};
const meta = {
    component: Heatmap,
    title: 'Composed Components/People Experience/Heatmap',
    tags: ['autodocs'],
    decorators: [
        Story => (_jsx(Stack, { sx: { height: '800px' }, children: _jsx(Story, {}) })),
    ],
    args: {
        totalsData: mockTotalsData,
        scoresData: mockScoresData,
        loading: false,
        SegmentSelect: MockSegmentSelect,
        scoreSelectDisabled: false,
        defaultFilters: {
            dataSource: DataSource.TOPICS,
            scoreType: {
                id: ScoreType.SCORE,
                name: 'Puntaje',
            },
            segment: {
                id: SegmentType.SEGMENTATION_GROUPS,
                name: 'Grupos de Segmentación',
            },
            parentId: null,
        },
        onFiltersChange: () => { },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const ShowingDifferences = {
    args: {
        defaultFilters: {
            dataSource: DataSource.TOPICS,
            scoreType: {
                id: ScoreType.DIFFERENCE,
                name: 'Diferencia',
            },
            segment: {
                id: SegmentType.SEGMENTATION_GROUPS,
                name: 'Grupos de Segmentación',
            },
            parentId: null,
        },
    },
};
export const QuestionsView = {
    args: {
        defaultFilters: {
            dataSource: DataSource.QUESTIONS,
            scoreType: {
                id: ScoreType.SCORE,
                name: 'Puntaje',
            },
            segment: {
                id: SegmentType.SEGMENTATION_GROUPS,
                name: 'Grupos de Segmentación',
            },
            parentId: null,
        },
    },
};
export const BossesSegment = {
    args: {
        defaultFilters: {
            dataSource: DataSource.TOPICS,
            scoreType: {
                id: ScoreType.SCORE,
                name: 'Puntaje',
            },
            segment: {
                id: SegmentType.BOSSES,
                name: 'Jefaturas',
            },
            parentId: null,
        },
    },
};
export const Loading = {
    args: {
        loading: true,
        totalsData: undefined,
        scoresData: undefined,
    },
};
export const WithScoreSelectDisabled = {
    args: {
        scoreSelectDisabled: true,
    },
};
export const WithNullData = {
    args: {
        totalsData: mockDataWithNulls,
        scoresData: mockScoresDataWithNulls,
    },
};
export const RestrictedToParent = {
    args: {
        restrictToParentId: 2,
        defaultFilters: {
            dataSource: DataSource.TOPICS,
            scoreType: {
                id: ScoreType.SCORE,
                name: 'Puntaje',
            },
            segment: {
                id: SegmentType.BOSSES,
                name: 'Jefaturas',
            },
            parentId: 2,
        },
    },
};
export const LowScores = {
    args: {
        scoresData: mockLowScoresData,
    },
    parameters: {
        docs: {
            description: {
                story: 'Visualización de puntajes bajos (0.25-0.35) para identificar áreas críticas que necesitan mejora urgente.',
            },
        },
    },
};
export const HighScores = {
    args: {
        scoresData: mockHighScoresData,
    },
    parameters: {
        docs: {
            description: {
                story: 'Visualización de puntajes altos (0.85-0.95) que representan áreas de excelencia en la organización.',
            },
        },
    },
};
export const LowScoresDifferences = {
    args: {
        scoresData: mockLowScoresData,
        defaultFilters: {
            dataSource: DataSource.TOPICS,
            scoreType: {
                id: ScoreType.DIFFERENCE,
                name: 'Diferencia',
            },
            segment: {
                id: SegmentType.SEGMENTATION_GROUPS,
                name: 'Grupos de Segmentación',
            },
            parentId: null,
        },
    },
    parameters: {
        docs: {
            description: {
                story: 'Vista de diferencias en puntajes bajos para analizar tendencias de mejora o deterioro.',
            },
        },
    },
};
export const HighScoresDifferences = {
    args: {
        scoresData: mockHighScoresData,
        defaultFilters: {
            dataSource: DataSource.TOPICS,
            scoreType: {
                id: ScoreType.DIFFERENCE,
                name: 'Diferencia',
            },
            segment: {
                id: SegmentType.SEGMENTATION_GROUPS,
                name: 'Grupos de Segmentación',
            },
            parentId: null,
        },
    },
    parameters: {
        docs: {
            description: {
                story: 'Vista de diferencias en puntajes altos para monitorear el mantenimiento de la excelencia.',
            },
        },
    },
};
