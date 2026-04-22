import { type MouseEvent } from 'react';
export type PdfToolsProps = {
    loading?: boolean;
    pageNumber: number;
    totalPages: number;
    onZoom?: (newValue: number, event: MouseEvent<HTMLButtonElement>) => void;
    zoom: number;
    toolsOptions?: {
        showResetZoom?: boolean;
        showZoomIn?: boolean;
        showZoomOut?: boolean;
        showPercentage?: boolean;
    };
    variant?: 'bar' | 'floating';
};
