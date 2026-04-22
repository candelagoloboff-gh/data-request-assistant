import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormWrapper from '../storybook/FormWrapper';
import { emptyCondition } from './constants';
import FormConditionGroup from './form';
import { conditionLineSlotProps, fieldItems } from './mocks';
import ConditionGroup from './index';
const meta = {
    title: 'Composed Components/ConditionGroup',
    component: ConditionGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: {
            description: 'Current array of condition line values. Each item represents a single condition with joinOperator, field, conditionOperator, and value.',
            control: 'object',
            table: {
                type: { summary: 'ConditionGroupValues<FieldItemType, ValueItemType>' },
            },
        },
        onChange: {
            description: 'Callback fired when any condition changes (add, delete, or edit). Receives the full updated conditions array.',
            table: {
                type: { summary: '(values: ConditionGroupValues) => void' },
            },
        },
        onAdd: {
            description: 'Callback fired when the "add condition" button is clicked, before the new condition is appended.',
            table: {
                type: { summary: '() => void' },
            },
        },
        onDelete: {
            description: 'Callback fired when a condition line is deleted. Receives the removed condition and its index.',
            table: {
                type: {
                    summary: '(field: ConditionLineValues, index: number) => void',
                },
            },
        },
        disabled: {
            description: 'If true, disables every condition line and the add button.',
            control: 'boolean',
            table: {
                defaultValue: { summary: 'false' },
                type: { summary: 'boolean' },
            },
        },
        slotProps: {
            description: 'Override props for internal sub-components: root (CardContainer), conditionLine (shared ConditionLine props), and addButton (Button).',
            control: 'object',
            table: {
                type: { summary: 'ConditionGroupSlotProps' },
            },
        },
    },
};
export default meta;
const StoryWrapper = ({ children }) => (_jsx("div", { style: { width: '900px', padding: '20px' }, children: children }));
export const Default = {
    render: () => {
        const [conditions, setConditions] = useState([emptyCondition]);
        return (_jsx(StoryWrapper, { children: _jsx(ConditionGroup, { value: conditions, onChange: setConditions, onAdd: () => console.log('Condition added'), onDelete: (condition, index) => console.log('Condition deleted:', index, condition), slotProps: {
                    conditionLine: {
                        fieldSelectorItems: fieldItems,
                        valueSelectorItems: [],
                        slotProps: conditionLineSlotProps,
                    },
                } }) }));
    },
};
const ConditionGroupForm = () => {
    const form = useForm({
        defaultValues: {
            conditions: [emptyCondition],
        },
    });
    return (_jsx(FormWrapper, { form: form, children: _jsx(FormConditionGroup, { name: "conditions", inputProps: {
                onAdd: () => console.log('Condition added'),
                onDelete: (condition, index) => console.log('Condition deleted:', index, condition),
                slotProps: {
                    conditionLine: {
                        fieldSelectorItems: fieldItems,
                        valueSelectorItems: [],
                        slotProps: conditionLineSlotProps,
                    },
                },
            } }) }));
};
export const WithForm = {
    render: () => (_jsx(StoryWrapper, { children: _jsx(ConditionGroupForm, {}) })),
};
