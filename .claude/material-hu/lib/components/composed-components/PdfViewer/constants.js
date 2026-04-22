export const BASE_PDF_PAGE_WIDTH = 500;
export const MIN_ZOOM_LEVEL = 0.5;
export const ZOOM_STEP = 0.1;
export const ROTATION_STEP = 90;
export const ROTATION_TOTAL = 360;
export const ZOOM_SCALES = [1, 1.1, 1.3, 1.5, 1.7];
export const MIN_FULLSCREEN_ZOOM = 1;
export const FULLSCREEN_ZOOM_STEP = 1;
export const MAX_FULLSCREEN_ZOOM = ZOOM_SCALES.length - 1;
export const MIN_FLOATING_ZOOM = 1;
export const MAX_FLOATING_ZOOM = 2;
export const FLOATING_ZOOM_STEP = 0.2;
export const ANNOTATION_LAYER_STYLES = {
    '& .annotationLayer a:hover': {
        background: 'transparent !important',
        boxShadow: 'none !important',
    },
};
