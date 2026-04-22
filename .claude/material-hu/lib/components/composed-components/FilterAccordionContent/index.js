import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CardContainer from '../../design-system/CardContainer';
import Checkbox from '../../design-system/Checkbox/Checkbox';
import InputSearch from '../../design-system/Inputs/Search';
import Spinner from '../../design-system/ProgressIndicators/Spinner';
import StateCard from '../../design-system/StateCard';
import Stack from '@mui/material/Stack';
const FilterAccordionContent = ({ searchLabel = 'Search', noResultsTitle = 'No results', noResultsDescription = 'Try different search terms', loading = false, allCheckboxProps, slotProps, onChangeSearch, searchValue, items, getItemCheckboxProps, hasMoreItems, loadMoreTriggerRef, }) => {
    const hasResults = items.length > 0;
    if (loading) {
        return _jsx(Spinner, {});
    }
    return (_jsxs(Stack, { ...slotProps?.root, sx: { gap: 1, ...slotProps?.root?.sx }, children: [_jsx(InputSearch, { placeholder: searchLabel, onChange: onChangeSearch, value: searchValue }), _jsx(CardContainer, { fullWidth: true, children: _jsxs(Stack, { sx: {
                        gap: 2,
                        maxHeight: 272,
                        overflowY: 'auto',
                        overscrollBehavior: 'contain',
                    }, children: [hasResults && _jsx(Checkbox, { ...allCheckboxProps }), items.map(item => (_jsx(Checkbox, { ...getItemCheckboxProps(item) }, item.id))), !hasResults && (_jsx(StateCard, { title: noResultsTitle, description: noResultsDescription })), hasMoreItems && (_jsx(Stack, { ref: loadMoreTriggerRef, children: _jsx(Spinner, {}) }))] }) })] }));
};
export default FilterAccordionContent;
