import { type StackProps } from '@mui/material';
export type PdfVisualizerSidebarSlotProps = {
    /**
     * Show the sidebar with thumbnails
     * @default true
     */
    show?: boolean;
    /**
     * If true, the sidebar starts expanded
     * @default false
     */
    defaultExpanded?: boolean;
};
export type PdfVisualizerPdfDimensionsSlotProps = {
    /**
     * Base width of the PDF pages in pixels.
     * If container is smaller than baseWidth + 300px, pages will auto-fit.
     * @default 800
     */
    baseWidth?: number;
};
export type PdfVisualizerSlotProps = {
    /**
     * Sidebar configuration
     */
    sidebar?: PdfVisualizerSidebarSlotProps;
    /**
     * PDF dimensions configuration
     */
    pdfDimensions?: PdfVisualizerPdfDimensionsSlotProps;
};
export type PdfVisualizerProps = Pick<StackProps, 'sx'> & {
    /**
     * PDF file URL or File object
     */
    file: string | File;
    /**
     * Default page to display on load
     * If greater than total pages, will go to the last page
     * @default 1
     */
    defaultPage?: number;
    /**
     * Callback fired when user scrolls to the end of the document
     */
    onFinishRead?: () => void;
    /**
     * Slot props for configuring sub-components
     */
    slotProps?: PdfVisualizerSlotProps;
};
export type PdfVisualizerContextValue = {
    currentPage: number;
    totalPages: number;
    zoom: number;
    file: string | File;
    baseWidth: number;
    pageWidth: number;
    setPageWidth: (width: number) => void;
    changePage: (page: number) => void;
    setTotalPages: (total: number) => void;
    zoomIn: () => void;
    zoomOut: () => void;
    scrollToPage: (page: number) => void;
    registerPageRef: (page: number, ref: HTMLDivElement | null) => void;
    registerScrollContainer: (ref: HTMLDivElement | null) => void;
    onFinishRead?: () => void;
};
