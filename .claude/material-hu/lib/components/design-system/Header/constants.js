export const MAX_MAIN_ACTIONS = 2;
export const copyLinkContainerStyle = {
    cursor: 'pointer',
    '& #copy-link-button': {
        opacity: 0,
        transition: 'opacity 0.3s ease',
    },
    '&:hover #copy-link-button': {
        opacity: 1,
        transition: 'opacity 0.3s ease',
    },
};
