/** Checks whether an element's content overflows its visible area. */
export const isOverflowed = (element) => {
    if (!element)
        return false;
    return (element.offsetHeight < element.scrollHeight ||
        element.offsetWidth < element.scrollWidth);
};
/** Checks whether an element is scrolled to the bottom (within a 2px tolerance). */
export const isScrolledToEnd = (element) => {
    if (!element)
        return false;
    const { scrollTop, scrollHeight, clientHeight } = element;
    return Math.abs(scrollHeight - (scrollTop + clientHeight)) <= 2;
};
