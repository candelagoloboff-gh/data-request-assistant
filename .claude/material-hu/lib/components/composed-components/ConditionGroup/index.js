import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import ConditionLine from '../ConditionLine';
import { ConditionOperator, JoinOperator, } from '../ConditionLine/types';
import CardContainer from '../../design-system/CardContainer';
import { Button, Stack, useTheme } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { insertIf } from '../../../utils/array';
import { mergeWith } from 'lodash';
import DynamicConditionLine from './components/DynamicConditionLine';
const ConditionGroup = ({ onAdd, onDelete, onChange, disabled = false, value, slotProps = {}, dynamicItems, }) => {
    const { t } = useTranslation('material_hu_only');
    const { palette } = useTheme();
    const { root, conditionLine, addButton } = slotProps;
    const handleDelete = (condition, index) => () => {
        onDelete?.(condition, index);
        let newConditions = value.filter((_, i) => i !== index);
        if (newConditions.length === 0) {
            newConditions = [
                {
                    joinOperator: value[0].joinOperator,
                    field: null,
                    conditionOperator: ConditionOperator.IS_IN,
                    value: [],
                },
            ];
        }
        onChange?.(newConditions);
    };
    const handleAdd = () => {
        onAdd?.();
        const newCondition = {
            joinOperator: value[0].joinOperator,
            field: null,
            conditionOperator: ConditionOperator.IS_IN,
            value: [],
        };
        const newConditions = [...value, newCondition];
        onChange?.(newConditions);
    };
    const handleChange = (index) => (newCondition) => {
        const newConditions = [...value];
        newConditions[index] = newCondition;
        onChange?.(newConditions);
    };
    const getOptions = (index) => {
        return [
            ...insertIf(index === 0, {
                label: t('condition_group.when'),
                value: JoinOperator.AND,
            }),
            {
                label: t('condition_group.and'),
                value: JoinOperator.AND,
            },
            {
                label: t('condition_group.or'),
                value: JoinOperator.OR,
            },
        ];
    };
    const getDefaultSlotProps = (index) => mergeWith({
        joinOperatorSelector: {
            title: index === 0 ? t('condition_group.when') : undefined,
            readOnly: index === 0,
            options: getOptions(index),
            slotProps: {
                button: {
                    sx: {
                        minWidth: '88px',
                        padding: '0',
                    },
                },
            },
        },
        conditionOperatorSelector: {
            children: t('condition_group.is_in'),
        },
        fieldSelector: {
            getTriggerTitle: (_value) => {
                return _value[0]?.name || t('condition_group.choose');
            },
        },
        valueSelector: {
            getTriggerTitle: (_value) => {
                return (_value.map(item => item.name).join(', ') ||
                    t('condition_group.value'));
            },
        },
    }, conditionLine?.slotProps, (_objValue, srcValue) => {
        if (Array.isArray(srcValue))
            return srcValue;
    });
    return (_jsx(CardContainer, { fullWidth: true, ...root, sx: {
            backgroundColor: palette.new.background.layout.default,
            border: 'none',
            ...root?.sx,
        }, children: _jsxs(Stack, { sx: { gap: 2 }, children: [value.map((condition, index) => dynamicItems ? (_jsx(DynamicConditionLine, { condition: condition, allConditions: value, index: index, dynamicItems: dynamicItems, conditionLineProps: {
                        ...conditionLine,
                        slotProps: getDefaultSlotProps(index),
                    }, onChange: handleChange(index), onDelete: handleDelete(condition, index), disabled: disabled }, index)) : (_createElement(ConditionLine, { ...conditionLine, key: index, value: condition, disabled: disabled || conditionLine?.disabled, onDelete: handleDelete(condition, index), onChange: handleChange(index), fieldSelectorItems: conditionLine?.fieldSelectorItems ?? [], valueSelectorItems: conditionLine?.valueSelectorItems ?? [], slotProps: getDefaultSlotProps(index) }))), _jsx(Button, { variant: "tertiary", size: "large", startIcon: _jsx(IconPlus, { size: 16 }), ...addButton, disabled: disabled || addButton?.disabled, onClick: handleAdd, children: addButton?.children || t('condition_group.add_condition') })] }) }));
};
export default ConditionGroup;
