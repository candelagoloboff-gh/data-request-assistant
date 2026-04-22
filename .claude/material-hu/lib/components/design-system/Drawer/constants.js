import { DrawerSize } from './types';
export const sizeStyleMap = {
    [DrawerSize.SMALL]: {
        width: 'min(600px, 100%)',
        maxWidth: '600px',
    },
    [DrawerSize.MEDIUM]: {
        width: 'min(750px, 100%)',
        maxWidth: '750px',
    },
    [DrawerSize.LARGE]: {
        width: '80vw',
        maxWidth: '1400px',
    },
    [DrawerSize.TASK_FOCUS]: {
        width: '100vw',
        maxWidth: '100%',
        borderRadius: 0,
    },
};
