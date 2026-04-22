import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import SortableList from '../SortableList';
import QuestionListItem from '.';
const snakeCaseToSentence = (snakeCaseString) => {
    let sentence = snakeCaseString.replace(/_/g, ' ');
    if (sentence.length > 0) {
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }
    return sentence;
};
const meta = {
    title: 'Composed Components/QuestionListItem',
    component: QuestionListItem,
    tags: ['autodocs'],
    args: {
        getTypeDescription: (question) => {
            return `Type: ${snakeCaseToSentence(question.type)}`;
        },
    },
};
export default meta;
const baseQuestions = [
    {
        id: 1,
        type: 'multiple_choice',
        required: true,
        statement: '¿Cuál es la capital de Francia?',
        allowComments: true,
        category: 'Geografía',
    },
    {
        id: 2,
        type: 'short_answer',
        required: false,
        statement: 'Describe tu experiencia con TypeScript.',
        allowComments: false,
        category: 'Programación',
    },
    {
        id: 3,
        type: 'boolean',
        required: true,
        statement: '¿Te gusta el café?',
        allowComments: true,
        category: 'Estilo de vida',
    },
];
// Helper to generate actions for each question
const getActions = (question) => [
    {
        name: 'Editar',
        onClick: () => alert(`Editar pregunta: ${question.statement}`),
        icon: _jsx(IconEdit, { size: 18 }),
    },
    {
        name: 'Eliminar',
        onClick: () => alert(`Eliminar pregunta: ${question.statement}`),
        icon: _jsx(IconTrash, { size: 18 }),
    },
];
// Story: Single QuestionListItem
export const Default = {
    args: {
        item: baseQuestions[0],
        actions: getActions(baseQuestions[0]),
    },
};
// Story: QuestionListItem with pill label and custom pill props
export const WithPillLabel = {
    args: {
        item: baseQuestions[1],
        actions: getActions(baseQuestions[1]),
        pillLabel: 'Obligatoria',
        slotProps: {
            pill: {
                type: 'info',
                variant: 'outlined',
            },
        },
    },
};
// Story: QuestionListItem with no actions and a custom pill
export const NoActionsWithCustomPill = {
    args: {
        item: baseQuestions[2],
        pillLabel: 'Mandatory',
        slotProps: {
            pill: {
                type: 'success',
                variant: 'filled',
                size: 'small',
            },
        },
    },
};
export const WithIndex = {
    args: {
        item: baseQuestions[0],
        actions: getActions(baseQuestions[0]),
        showIndex: true,
        index: 0,
    },
};
// Story: QuestionListItem inside a SortableList
export const SortableQuestionList = {
    render: () => {
        const [questions, setQuestions] = useState(baseQuestions);
        return (_jsxs(Box, { sx: { p: 2, maxWidth: 500 }, children: [_jsx(Typography, { sx: { mb: 2 }, children: "Questions List (Draggable)" }), _jsx(SortableList, { items: questions, onSort: setQuestions, ItemComponent: props => (_jsx(QuestionListItem, { ...props, actions: getActions(props.item), pillLabel: "eNPS", slotProps: {
                            pill: {
                                type: 'success',
                            },
                        }, showIndex: true })), direction: "vertical", dragByHandler: true, sx: { gap: 2 } })] }));
    },
};
