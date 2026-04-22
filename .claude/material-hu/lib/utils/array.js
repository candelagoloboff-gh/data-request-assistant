/** Returns a single-element array if the condition is true, or an empty array otherwise. Useful for conditional spreading. */
export const insertIf = (condition, element) => condition ? [element] : [];
/** Returns a new Set with the element toggled (added if absent, removed if present). */
export function addOrRemoveSet(set, element) {
    const newSet = new Set(set);
    if (newSet.has(element)) {
        newSet.delete(element);
    }
    else {
        newSet.add(element);
    }
    return newSet;
}
/** Sorts an array of items by their `position` property in ascending order. */
export const sortPositioned = (array) => array?.sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
