import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import FormWrapper from '../storybook/FormWrapper';
import Button from '../../design-system/Buttons/Button';
import { segmentations } from '../../../mock/data/segmentations';
import FormConditionLine from './form';
import { ConditionOperator, JoinOperator, } from './types';
import ConditionLine from './index';
const meta = {
    title: 'Composed Components/ConditionLine',
    component: ConditionLine,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
const defaultSlotProps = {
    conditionOperatorSelector: {
        children: 'está en',
    },
    fieldSelector: {
        getTriggerTitle: _value => _value[0]?.name || 'Selecciona un campo',
    },
    valueSelector: {
        maxSelection: 10,
        getTriggerTitle: _value => _value.map(item => item.name).join(', ') || 'Selecciona un valor',
    },
};
const fieldItems = segmentations.map(seg => ({
    id: seg.id,
    name: seg.name,
}));
const getValueItemsForField = (fieldId) => {
    const segmentation = segmentations.find(seg => seg.id === fieldId);
    return segmentation?.items || [];
};
const StoryWrapper = ({ children }) => {
    return _jsx("div", { style: { width: '800px', padding: '20px' }, children: children });
};
export const Default = {
    render: args => {
        const [conditionValues, setConditionValues] = useState({
            joinOperator: JoinOperator.AND,
            field: null,
            conditionOperator: ConditionOperator.IS_IN,
            value: [],
        });
        const valueItems = conditionValues.field
            ? getValueItemsForField(conditionValues.field.id)
            : [];
        return (_jsx(StoryWrapper, { children: _jsx(ConditionLine, { ...args, value: conditionValues, onChange: setConditionValues, fieldSelectorItems: fieldItems, valueSelectorItems: valueItems, slotProps: {
                    ...args.slotProps,
                    valueSelector: {
                        ...args.slotProps?.valueSelector,
                        disabled: conditionValues.field === null,
                    },
                } }) }));
    },
    args: {
        disabled: false,
        slotProps: defaultSlotProps,
        onDelete: () => alert('Línea eliminada'),
    },
};
export const Disabled = {
    render: args => {
        const conditionValues = {
            joinOperator: JoinOperator.AND,
            field: fieldItems[0],
            conditionOperator: ConditionOperator.IS_IN,
            value: [segmentations[0].items[0], segmentations[0].items[1]],
        };
        return (_jsx(StoryWrapper, { children: _jsx(ConditionLine, { ...args, value: conditionValues, fieldSelectorItems: fieldItems, valueSelectorItems: segmentations[0].items, disabled: true }) }));
    },
    args: {
        slotProps: defaultSlotProps,
    },
};
export const Loading = {
    render: args => {
        const conditionValues = {
            joinOperator: JoinOperator.AND,
            field: fieldItems[0],
            conditionOperator: ConditionOperator.IS_IN,
            value: [segmentations[0].items[0], segmentations[0].items[1]],
        };
        return (_jsx(StoryWrapper, { children: _jsx(ConditionLine, { ...args, value: conditionValues, fieldSelectorItems: fieldItems, valueSelectorItems: segmentations[0].items, disabled: true }) }));
    },
    args: {
        slotProps: {
            ...defaultSlotProps,
            valueSelector: {
                ...defaultSlotProps?.valueSelector,
                loading: true,
            },
            fieldSelector: {
                ...defaultSlotProps?.fieldSelector,
                loading: true,
            },
        },
    },
};
export const Error = {
    render: args => {
        const conditionValues = {
            joinOperator: JoinOperator.AND,
            field: fieldItems[0],
            conditionOperator: ConditionOperator.IS_IN,
            value: [segmentations[0].items[0], segmentations[0].items[1]],
        };
        return (_jsx(StoryWrapper, { children: _jsx(ConditionLine, { ...args, value: conditionValues, fieldSelectorItems: fieldItems, valueSelectorItems: segmentations[0].items, disabled: true }) }));
    },
    args: {
        slotProps: {
            ...defaultSlotProps,
            valueSelector: {
                ...defaultSlotProps?.valueSelector,
                error: true,
                errorText: 'Error text',
            },
            fieldSelector: {
                ...defaultSlotProps?.fieldSelector,
                error: true,
                errorText: 'Error text',
            },
        },
    },
};
const ConditionArrayForm = () => {
    const form = useForm({
        defaultValues: {
            conditions: [
                {
                    joinOperator: JoinOperator.AND,
                    field: null,
                    conditionOperator: ConditionOperator.IS_IN,
                    value: [],
                },
            ],
        },
    });
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'conditions',
    });
    const addCondition = () => {
        append({
            joinOperator: form.getValues('conditions')[0].joinOperator,
            field: null,
            conditionOperator: ConditionOperator.IS_IN,
            value: [],
        });
    };
    const handleConditionDelete = (index) => {
        if (fields.length > 1) {
            remove(index);
        }
        else {
            alert('Debe haber al menos una condición');
        }
    };
    return (_jsxs(FormWrapper, { form: form, children: [fields.map((field, index) => {
                const watchedField = form.watch(`conditions.${index}.field`);
                const valueItems = watchedField
                    ? getValueItemsForField(watchedField.id)
                    : [];
                return (_jsx(FormConditionLine, { name: `conditions.${index}`, rules: {
                        field: {
                            required: 'Selecciona un campo para filtrar',
                        },
                        value: {
                            validate: (items) => items && items.length > 0
                                ? true
                                : 'Selecciona al menos un valor',
                        },
                    }, conditionLineProps: {
                        fieldSelectorItems: fieldItems,
                        valueSelectorItems: valueItems,
                        onDelete: () => handleConditionDelete(index),
                        slotProps: {
                            joinOperatorSelector: {
                                readOnly: index !== 0,
                                onChange: option => {
                                    fields.forEach((_, _index) => {
                                        form.setValue(`conditions.${_index}.joinOperator`, option.value);
                                    });
                                },
                                options: [
                                    {
                                        label: 'Y',
                                        value: JoinOperator.AND,
                                    },
                                    {
                                        label: 'O',
                                        value: JoinOperator.OR,
                                    },
                                ],
                            },
                            conditionOperatorSelector: {
                                children: 'está en',
                            },
                            fieldSelector: {
                                title: 'Seleccionar campo',
                            },
                            valueSelector: {
                                title: 'Seleccionar valores',
                            },
                        },
                    } }, field.id));
            }), _jsx(Button, { variant: "secondary", onClick: addCondition, type: "button", children: "+ Agregar condici\u00F3n" })] }));
};
export const WithForm = {
    render: () => (_jsx(StoryWrapper, { children: _jsx(ConditionArrayForm, {}) })),
};
