import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ScoreDifferenceIndicator from '../../../../peopleExperience/surveyResults/ScoreDifferenceIndicator';
import { Stack, Typography } from '@mui/material';
import EnpsTotal from '.';
const meta = {
    title: 'Composed Components/peopleExperience/EnpsTotal',
    component: EnpsTotal,
    argTypes: {
        value: {
            control: { type: 'range', min: -100, max: 100, step: 1 },
        },
    },
};
export default meta;
export const Default = {
    args: {
        title: 'eNPS Score',
        description: 'Employee Net Promoter Score',
        value: 75,
    },
};
export const Negative = {
    args: {
        title: 'eNPS Score',
        description: 'Employee Net Promoter Score',
        value: -25,
    },
};
export const Zero = {
    args: {
        title: 'eNPS Score',
        description: 'Employee Net Promoter Score',
        value: 0,
    },
};
export const MinValue = {
    args: {
        title: 'eNPS Score',
        description: 'Employee Net Promoter Score',
        value: -100,
    },
};
export const MaxValue = {
    args: {
        title: 'eNPS Score',
        description: 'Employee Net Promoter Score',
        value: 100,
    },
};
export const Null = {
    args: {
        title: 'eNPS Score',
        description: 'Employee Net Promoter Score',
        nullValueTooltip: 'No data available',
        value: null,
    },
};
export const WithFooter = {
    args: {
        title: 'eNPS Score',
        description: 'Employee Net Promoter Score',
        value: 75,
        footer: (_jsxs(Stack, { sx: {
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
            }, children: [_jsx(ScoreDifferenceIndicator, { difference: 15, popoverMeta: {
                        score: 75,
                        baseScore: 60,
                        scoreLabel: 'Current Score',
                        baseScoreLabel: 'Previous Score',
                        footerLabel: 'vs. last period',
                        scoreDifferenceDescription: 'Increased by',
                    } }), _jsx(Typography, { variant: "globalXS", children: "vs. last period" })] })),
    },
};
