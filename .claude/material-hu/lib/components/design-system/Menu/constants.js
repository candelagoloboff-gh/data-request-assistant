export const MAX_HEIGHT = 360;
export const MAX_WIDTH = 312;
export const positionMap = {
    left: {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'start',
        },
    },
    right: {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'end',
        },
    },
    center: {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: null,
        },
    },
    'top-right': {
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
        },
    },
};
export const transformOriginMap = {
    'bottom-start': 'top left',
    'top-start': 'bottom left',
    'bottom-end': 'top right',
    'top-end': 'bottom right',
    bottom: 'top center',
    top: 'bottom center',
    auto: 'auto',
    'auto-start': 'auto',
    'auto-end': 'auto',
    right: 'auto',
    left: 'auto',
    'right-start': 'top left',
    'right-end': 'bottom left',
    'left-start': 'auto',
    'left-end': 'auto',
};
