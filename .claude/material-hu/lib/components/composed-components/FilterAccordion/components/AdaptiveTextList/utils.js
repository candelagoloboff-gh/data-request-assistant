export const getDisplayText = (getAndText, getMoreText, items, actualCount) => {
    if (items.length === 0)
        return '';
    if (items.length === 1 && actualCount === 1)
        return items[0];
    const hasMoreThanLoaded = actualCount > items.length;
    const left = hasMoreThanLoaded
        ? items.join(', ')
        : items.slice(0, -1).join(', ');
    const right = hasMoreThanLoaded
        ? getMoreText(actualCount - items.length)
        : items[items.length - 1];
    return getAndText(left, right);
};
