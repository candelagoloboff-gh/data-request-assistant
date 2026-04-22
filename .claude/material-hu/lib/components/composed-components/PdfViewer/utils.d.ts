export declare const getScale: (zoom?: number) => number;
export declare const getThreshold: (zoom: number) => 0.2 | 0.5 | 0.3 | undefined;
export declare const isSecureFile: (fileUrl: string) => boolean;
export declare const getFile: (fileUrl: string) => string | {
    url: string;
    withCredentials: boolean;
    crossOrigin: string;
} | null;
export declare const getPageWidth: (zoom: number, containerWidth: number, baseWidth?: number) => number;
export declare const rotate: (rotation: number) => number;
export declare const getZoomPercentage: (zoom: number) => string;
export declare const getZoomValues: (variant: string) => {
    zoomStep: number;
    maxZoom: number;
    minZoom: number;
};
