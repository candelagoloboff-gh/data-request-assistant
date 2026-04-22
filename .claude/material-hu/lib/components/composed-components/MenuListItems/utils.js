export const getTooltipTitle = (selectedItems) => {
    const items = selectedItems.slice(0, 5);
    const remaining = selectedItems.length - items.length;
    if (remaining > 0) {
        return items.map(item => item.name).join(', ') + ` + ${remaining}`;
    }
    return items.map(item => item.name).join(', ');
};
export const getTriggerTitle = (selectedItems) => {
    if (selectedItems.length === 0) {
        return '';
    }
    return selectedItems.map(item => item.name).join(', ');
};
