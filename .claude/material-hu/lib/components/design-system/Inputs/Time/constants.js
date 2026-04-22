export const DEFAULT_MINUTES_STEP = 5;
/** Matches partial time input: "14:mm", "9:", "14:m", "9" — captures hours from group 1 or 2 */
export const TIME_PATTERN = /^(\d{1,2}):?mm?$|^(\d{1,2}):?$/;
export const DROPDOWN_POSITIONING_STYLES = {
    right: 0,
    left: 'auto !important',
    transformOrigin: 'right top !important',
};
export const SAME_WIDTH_MODIFIER = {
    name: 'sameWidth',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['computeStyles'],
    // biome-ignore lint/suspicious/noExplicitAny: Popper modifier state types are not exposed
    fn: ({ state }) => {
        state.styles.popper.minWidth = `${state.rects.reference.width}px`;
    },
    // biome-ignore lint/suspicious/noExplicitAny: Popper modifier state types are not exposed
    effect: ({ state }) => {
        state.elements.popper.style.minWidth = `${state.elements.reference.offsetWidth}px`;
    },
};
