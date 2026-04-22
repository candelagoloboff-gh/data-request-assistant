import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import ConditionLine from '../../ConditionLine';
import InfiniteListLoader from '../../InfiniteListLoader';
import DefaultList from '../../MenuListItems/components/DefaultList';
import { Stack } from '@mui/material';
const InfiniteScrollList = ({ result, ...listProps }) => {
    const containerRef = useRef(null);
    return (_jsxs(Stack, { ref: containerRef, sx: { maxHeight: '224px', overflow: 'auto' }, children: [_jsx(DefaultList, { ...listProps }), result.hasNextPage && result.fetchNextPage && (_jsx(Stack, { sx: { alignItems: 'center', py: 1 }, children: _jsx(InfiniteListLoader, { onLoadMore: result.fetchNextPage, containerRef: containerRef, loading: result.isFetchingNextPage }) }))] }));
};
/**
 * Wraps a {@link ConditionLine} with per-line lazy loading of field and value items.
 * Each instance manages its own search state and calls the dynamic item hooks independently.
 */
const DynamicConditionLine = ({ condition, allConditions, index, dynamicItems, conditionLineProps, onChange, onDelete, disabled, }) => {
    const [fieldSearch, setFieldSearch] = useState('');
    const [valueSearch, setValueSearch] = useState('');
    const handleFieldSearchChange = (value) => setFieldSearch(value ?? '');
    const handleValueSearchChange = (value) => setValueSearch(value ?? '');
    const excludeFieldIds = allConditions
        .filter((_, i) => i !== index)
        .map(c => c.field?.id)
        .filter((id) => id != null);
    const fieldResult = dynamicItems.useFieldItems({
        excludeFieldIds,
        q: fieldSearch || undefined,
    });
    const fieldId = condition.field?.id ?? null;
    const hasFieldId = fieldId != null;
    const valueResult = dynamicItems.useValueItems({
        fieldId,
        q: valueSearch || undefined,
    });
    const handleChange = (newCondition) => {
        if (newCondition.field?.id !== condition.field?.id) {
            onChange({ ...newCondition, value: [] });
            setValueSearch('');
            return;
        }
        onChange(newCondition);
    };
    return (_jsx(ConditionLine, { ...conditionLineProps, value: condition, disabled: disabled || conditionLineProps?.disabled, onDelete: onDelete, onChange: handleChange, fieldSelectorItems: fieldResult.items, valueSelectorItems: valueResult.items, slotProps: {
            ...conditionLineProps?.slotProps,
            fieldSelector: {
                ...conditionLineProps?.slotProps?.fieldSelector,
                loading: fieldResult.loading,
                onSearchChange: handleFieldSearchChange,
                renderList: fieldResult.hasNextPage
                    ? props => (_jsx(InfiniteScrollList, { ...props, result: fieldResult }))
                    : conditionLineProps?.slotProps?.fieldSelector?.renderList,
            },
            valueSelector: {
                ...conditionLineProps?.slotProps?.valueSelector,
                loading: !hasFieldId ? false : valueResult.loading,
                disabled: !hasFieldId,
                onSearchChange: handleValueSearchChange,
                renderList: valueResult.hasNextPage
                    ? props => (_jsx(InfiniteScrollList, { ...props, result: valueResult }))
                    : conditionLineProps?.slotProps?.valueSelector?.renderList,
            },
        } }));
};
export default DynamicConditionLine;
