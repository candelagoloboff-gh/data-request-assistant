import { jsx as _jsx } from "react/jsx-runtime";
import SelectableListItem from '../../../SelectableListItem';
import VirtualizedList from '../../../VirtualizedList';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const DefaultList = ({ items, selected, maxSelection, onItemClick, disabled, }) => {
    return (_jsx(VirtualizedList, { style: { maxHeight: '224px', overflow: 'auto' }, rowComponent: (DefaultRowComponent), rowCount: items.length, rowHeight: 56, overscanCount: 10, rowProps: {
            items,
            selected,
            maxSelection,
            onItemClick,
            disabled: disabled ||
                Boolean(maxSelection && maxSelection > 1 && selected.size >= maxSelection),
        } }));
};
const DefaultRowComponent = ({ items, style, index, selected, maxSelection, onItemClick, disabled, }) => {
    const item = items[index];
    const isSelected = selected?.has(item.id);
    return (_jsx(Stack, { style: style, children: _jsx(SelectableListItem, { id: item.id.toString(), selected: isSelected || false, onSelect: () => onItemClick(item.id), showCheckbox: maxSelection ? maxSelection > 1 : false, disabled: !isSelected && disabled, children: _jsx(Typography, { variant: "globalS", sx: {
                    fontWeight: maxSelection === 1 ? 'fontWeightSemiBold' : 'fontWeightRegular',
                }, color: theme => theme.palette.new.text.neutral.default, children: item.name }) }) }, item.id));
};
export default DefaultList;
