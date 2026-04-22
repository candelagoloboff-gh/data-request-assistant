import { type ReactNode, type RefObject } from 'react';
export type HeatmapChartProps = {
    rows?: number;
    cols?: number;
    colors: string[][];
    xLabels?: string[];
    yLabels?: string[];
    xAxisTitle?: string;
    yAxisTitle?: string;
    height?: number | string;
    /** Render prop that receives pixel position calculator */
    children?: (helpers: HeatmapChartHelpers) => ReactNode;
};
export type HeatmapChartHelpers = {
    /** Convert grid coordinates (0 to rows/cols) to pixel position */
    getPixelPosition: (x: number, y: number) => {
        left: number;
        top: number;
    };
    /** Container reference for positioning */
    containerRef: RefObject<HTMLDivElement | null>;
    /** Whether the grid is ready */
    isReady: boolean;
    /** Key that changes on resize - use to trigger re-renders */
    resizeKey: number;
};
