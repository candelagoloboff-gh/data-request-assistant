import { BASE_PDF_PAGE_WIDTH, FLOATING_ZOOM_STEP, FULLSCREEN_ZOOM_STEP, MAX_FLOATING_ZOOM, MAX_FULLSCREEN_ZOOM, MIN_FLOATING_ZOOM, MIN_FULLSCREEN_ZOOM, ROTATION_STEP, ROTATION_TOTAL, ZOOM_SCALES, } from './constants';
export const getScale = (zoom) => {
    if (!zoom)
        return 1;
    return ZOOM_SCALES[zoom] || 1;
};
export const getThreshold = (zoom) => {
    if (zoom >= 2.5) {
        return 0.2;
    }
    if (zoom >= 1.5) {
        return 0.3;
    }
    if (zoom >= 1) {
        return 0.5;
    }
};
export const isSecureFile = (fileUrl) => {
    if (!fileUrl)
        return false;
    return fileUrl.startsWith('https://secure-files');
};
export const getFile = (fileUrl) => {
    if (!fileUrl)
        return null;
    if (isSecureFile(fileUrl)) {
        return {
            url: fileUrl,
            withCredentials: true,
            crossOrigin: 'use-credentials',
        };
    }
    return fileUrl;
};
export const getPageWidth = (zoom, containerWidth, baseWidth = BASE_PDF_PAGE_WIDTH) => {
    const zoomedWidth = baseWidth * zoom;
    return containerWidth ? Math.min(containerWidth, zoomedWidth) : zoomedWidth;
};
export const rotate = (rotation) => {
    return (rotation + ROTATION_STEP) % ROTATION_TOTAL;
};
export const getZoomPercentage = (zoom) => {
    return `${Math.round(zoom * 100)}%`;
};
export const getZoomValues = (variant) => {
    if (variant === 'floating') {
        return {
            zoomStep: FLOATING_ZOOM_STEP,
            maxZoom: MAX_FLOATING_ZOOM,
            minZoom: MIN_FLOATING_ZOOM,
        };
    }
    return {
        zoomStep: FULLSCREEN_ZOOM_STEP,
        maxZoom: MAX_FULLSCREEN_ZOOM,
        minZoom: MIN_FULLSCREEN_ZOOM,
    };
};
