import { jsx as _jsx } from "react/jsx-runtime";
import Accordion from '../../design-system/Accordion';
import AdaptiveTextList from './components/AdaptiveTextList';
const FilterAccordion = ({ name, onChange, expanded, allItemsCount, previewItems, children, getAndText, getMoreText, }) => {
    return (_jsx(Accordion, { title: name, description: previewItems.length > 0 ? (_jsx(AdaptiveTextList, { items: previewItems, actualCount: allItemsCount, getAndText: getAndText, getMoreText: getMoreText })) : null, sx: {
            boxShadow: 'none',
            backgroundColor: theme => theme.palette.new.background.layout.default,
        }, expanded: expanded, onChange: (_, isExpanded) => onChange(isExpanded), customDetail: children }));
};
export default FilterAccordion;
export { default as FilterAccordionSkeleton } from './components/FilterAccordionSkeleton';
