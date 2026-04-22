import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import { useState } from 'storybook/internal/preview-api';
import Wizard from '.';
// ============================================
// META CONFIGURATION
// ============================================
const meta = {
    component: Wizard,
    title: 'Design System/Wizard',
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    parameters: {
        layout: 'padded',
    },
};
const stagesMock = [
    {
        label: 'Stage 1',
        subStages: [
            { label: 'Sub Step 1', component: _jsx("div", { children: "Sub Step 1" }) },
            { label: 'Sub Step 2', component: _jsx("div", { children: "Sub Step 2" }) },
            { label: 'Sub Step 3', component: _jsx("div", { children: "Sub Step 3" }) },
        ],
    },
    {
        label: 'Stage 2',
        subStages: [
            { label: 'Sub Step 2', component: _jsx("div", { children: "Sub Step 2" }) },
            { label: 'Sub Step 4', component: _jsx("div", { children: "Sub Step 4" }) },
            { label: 'Sub Step 5', component: _jsx("div", { children: "Sub Step 5" }) },
            { label: 'Sub Step 6', component: _jsx("div", { children: "Sub Step 6" }) },
        ],
    },
    {
        label: 'Stage 3',
        subStages: [
            { label: 'Sub Step 7', component: _jsx("div", { children: "Sub Step 7" }) },
            { label: 'Sub Step 8', component: _jsx("div", { children: "Sub Step 8" }) },
            { label: 'Sub Step 9', component: _jsx("div", { children: "Sub Step 9" }) },
        ],
    },
];
export default meta;
export const Default = {
    args: {
        stages: [
            {
                label: 'Stage 1',
                subStages: [
                    {
                        label: 'Sub Step 1',
                    },
                    {
                        label: 'Sub Step 2',
                    },
                    {
                        label: 'Subbbbbbbbbbbbbb Stepppppppppp 3',
                    },
                ],
            },
            {
                label: 'Stage 2',
                subStages: [
                    {
                        label: 'Sub Step 3',
                    },
                ],
            },
        ],
    },
};
export const WithActiveStage = {
    args: {
        activeStage: 1,
        stages: [
            {
                label: 'Stage 1',
                subStages: [
                    {
                        label: 'Sub Step 1',
                    },
                ],
            },
            {
                label: 'Stage 2',
                subStages: [
                    {
                        label: 'Sub Step 2',
                    },
                ],
            },
        ],
    },
};
export const WithActiveSubStage = {
    render: () => {
        const [activeSubStage, setActiveSubStage] = useState(3);
        const [activeStage, setActiveStage] = useState(1);
        const handleStageClick = (stageIndex) => {
            setActiveSubStage(stagesMock[stageIndex].subStages.length - 1);
            setActiveStage(stageIndex);
        };
        const handleSubStageClick = (_, subStageIndex) => {
            setActiveSubStage(subStageIndex);
        };
        return (_jsxs(Stack, { sx: { flexDirection: 'row', gap: 5, alignItems: 'center' }, children: [_jsx(Wizard, { activeSubStage: activeSubStage, activeStage: activeStage, stages: stagesMock, onStageClick: handleStageClick, onSubStageClick: handleSubStageClick }), stagesMock[activeStage].subStages[activeSubStage].component] }));
    },
};
export const WithErrorStage = {
    args: {
        errorStages: [1],
        errorSubStages: [
            {
                stageIndex: 0,
                subStageIndexes: [0],
            },
        ],
        stages: [
            {
                label: 'Stage 1',
                subStages: [
                    {
                        label: 'Sub Step 1',
                    },
                ],
            },
            {
                label: 'Stage 2',
                subStages: [
                    {
                        label: 'Sub Step 2',
                    },
                ],
            },
        ],
    },
};
export const WithMaxLimits = {
    args: {
        stages: Array.from({ length: 7 }, (_, i) => ({
            label: `Stage ${i + 1}`,
            subStages: Array.from({ length: 10 }, (_, j) => ({
                label: `Sub Step ${j + 1}`,
            })),
        })),
    },
    parameters: {
        docs: {
            description: {
                story: 'Wizard with 7 stages and 10 sub-stages each. Only 5 stages and 8 sub-stages per stage are rendered (max limits).',
            },
        },
    },
};
export const WithCompletedStages = {
    render: () => {
        const [activeStage, setActiveStage] = useState(0);
        const [activeSubStage, setActiveSubStage] = useState(0);
        const handleStageClick = (stageIndex) => {
            setActiveStage(stageIndex);
            setActiveSubStage(stagesMock[stageIndex].subStages.length - 1);
        };
        const handleSubStageClick = (_, subStageIndex) => {
            setActiveSubStage(subStageIndex);
        };
        return (_jsxs(Stack, { sx: { flexDirection: 'row', gap: 5, alignItems: 'center' }, children: [_jsx(Wizard, { stages: stagesMock, completedStages: [0, 1], activeStage: activeStage, activeSubStage: activeSubStage, onStageClick: handleStageClick, onSubStageClick: handleSubStageClick }), stagesMock[activeStage].subStages[activeSubStage].component] }));
    },
};
