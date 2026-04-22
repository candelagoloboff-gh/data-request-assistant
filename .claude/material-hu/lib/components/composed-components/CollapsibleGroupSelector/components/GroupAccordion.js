import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from '../../../design-system/Accordion';
import CardContainer from '../../../design-system/CardContainer';
import Checkbox from '../../../design-system/Checkbox/Checkbox';
import FormCheckbox from '../../../design-system/Checkbox/Checkbox/form';
import InputSearch from '../../../design-system/Inputs/Search';
import StateCard from '../../../design-system/StateCard';
import Title from '../../../design-system/Title';
import useVirtualizer from '../../../../hooks/useVirtualizer';
import Stack from '@mui/material/Stack/Stack';
import { ROW_SIZE_ESTIMATE } from '../constants';
import useGroupSelection from '../hooks/useGroupSelection';
import { getVirtualRowStyle } from '../utils';
const GroupAccordion = ({ group, groupFieldName, isParentExpanded, isExpanded, withSearch, selectAllLabel, setParentExpanded, setExpandedGroup, }) => {
    const { t } = useTranslation('material_hu_only');
    const [searchTerm, setSearchTerm] = useState('');
    const { selectedCount, totalItems, allSelected, someSelected, toggleSelectAll, listData, listMaxHeight, hasResults, } = useGroupSelection({
        group,
        groupFieldName,
        isExpanded,
        searchTerm,
    });
    const scrollElementRef = useRef(null);
    const { virtualRows, rowVirtualizer } = useVirtualizer({
        scrollElementRef,
        registers: listData,
        virtualizerOptions: {
            count: listData.length,
            estimateSize: () => ROW_SIZE_ESTIMATE,
            getScrollElement: () => scrollElementRef.current,
            enabled: listData.length > 0,
        },
        withWindowScroll: false,
        hasNextPage: false,
        isFetchingNextPage: false,
        fetchNextPage: undefined,
    });
    return (_jsx(Accordion, { title: `${group.name} (${selectedCount}/${totalItems})`, expanded: isParentExpanded && isExpanded, onChange: (_, expanded) => {
            setParentExpanded(expanded);
            setExpandedGroup(expanded ? group.name : null);
            if (!expanded)
                setSearchTerm('');
        }, elevation: 0, sx: {
            borderRadius: 1,
            backgroundColor: ({ palette }) => palette.new.background.layout.default,
            '&:before': { backgroundColor: 'transparent' },
        }, customDetail: _jsxs(Stack, { sx: { gap: 1 }, children: [withSearch && (_jsx(InputSearch, { value: searchTerm, onChange: setSearchTerm })), _jsxs(CardContainer, { fullWidth: true, sx: { border: 'none' }, children: [!hasResults && searchTerm && (_jsx(StateCard, { title: t('hu_inputs.no_results_found'), description: t('general:try_again_with_other_words'), slotProps: { card: { sx: { border: 'none' } } } })), hasResults && listData.length > 0 && (_jsx(Stack, { ref: scrollElementRef, sx: {
                                gap: 0,
                                maxHeight: listMaxHeight,
                                overflow: 'auto',
                            }, children: _jsx(Stack, { style: {
                                    height: `${rowVirtualizer.getTotalSize()}px`,
                                    width: '100%',
                                    position: 'relative',
                                }, children: virtualRows.map(virtualRow => {
                                    const row = listData[virtualRow.index];
                                    if (!row)
                                        return null;
                                    const isLast = virtualRow.index === listData.length - 1;
                                    const isSelectAll = 'type' in row && row.type === 'selectAll';
                                    if (isSelectAll) {
                                        return (_jsx(Stack, { "data-index": virtualRow.index, style: getVirtualRowStyle(virtualRow, isLast), children: _jsx(Checkbox, { label: selectAllLabel || t('general:select_all'), onChange: toggleSelectAll, checked: allSelected, indeterminate: someSelected }) }, "select-all"));
                                    }
                                    const item = row;
                                    return (_jsx(Stack, { "data-index": virtualRow.index, style: getVirtualRowStyle(virtualRow, isLast), children: _jsx(FormCheckbox, { name: `${groupFieldName}.${item.value}`, checkBoxProps: {
                                                label: (_jsx(Title, { title: item.label, variant: "S", withEllipsis: true, overflow: "tooltip", fontWeight: "fontWeightRegular" })),
                                            } }) }, item.value));
                                }) }) }))] })] }), disableGutters: true }));
};
export default GroupAccordion;
