import { jsx as _jsx } from "react/jsx-runtime";
import SelectableListItem from '../../../SelectableListItem';
import Stack from '@mui/material/Stack/Stack';
import Typography from '@mui/material/Typography';
const CollapsibleAutocompleteSelectorItem = ({ handleOptionCheck, index, items, displayItems, selectedCount, selectionLimit, getItemId, isItemSelected, style, itemRenderer, ...props }) => {
    const item = items[index];
    const displayOption = displayItems[index];
    const itemId = getItemId(item);
    const isSelected = isItemSelected(item);
    return (_jsx(Stack, { style: style, children: _jsx(SelectableListItem, { id: String(itemId), sx: { padding: 2, borderRadius: 1 }, onSelect: () => handleOptionCheck(item), disabled: !!selectionLimit && !isSelected && selectedCount >= selectionLimit, selected: isSelected, ...props, children: itemRenderer ? (itemRenderer(item, displayOption)) : (_jsx(Typography, { sx: {
                    fontWeight: 'medium',
                    color: theme => theme.palette.new.text.neutral.default,
                    ml: 0.5,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }, children: displayOption.name })) }, String(itemId)) }));
};
export default CollapsibleAutocompleteSelectorItem;
