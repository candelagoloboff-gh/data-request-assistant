import { jsx as _jsx } from "react/jsx-runtime";
import SelectableListItem from '../../../SelectableListItem';
const CollapsibleSelectionListItem = ({ handleItemSelect, index, items, selected, selectionLimit, style, itemRenderer, ...props }) => {
    const item = items[index];
    return (_jsx("div", { style: style, children: _jsx(SelectableListItem, { id: item.id.toString(), sx: { padding: 2, borderRadius: 1 }, onSelect: () => handleItemSelect(item.id), disabled: !!selectionLimit &&
                !selected?.has(item.id) &&
                selected?.size >= selectionLimit, selected: selected?.has(item.id), ...props, children: itemRenderer(item) }, item.id) }));
};
export default CollapsibleSelectionListItem;
