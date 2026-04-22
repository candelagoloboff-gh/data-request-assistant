import { defaultDropAnimationSideEffects, } from '@dnd-kit/core';
export const CUSTOM_DROP_ANIMATION_CONFIG = {
    sideEffects: defaultDropAnimationSideEffects({
        styles: {
            active: {
                opacity: '0.4',
            },
        },
    }),
};
export const ROOT_CONTAINER_ID = '__root__';
export const DEFAULT_DRAG_ACTIVATION_DISTANCE = 8;
export const DEFAULT_AUTO_SCROLL_CONFIG = {
    enabled: true,
    threshold: {
        x: 0.2,
        y: 0.2,
    },
    acceleration: 10,
};
