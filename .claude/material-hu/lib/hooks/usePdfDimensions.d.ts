export type PdfDimensions = {
    height: number | null;
    width: number | null;
};
export type PdfDimensionsOptions = Partial<{
    fitWidth: boolean;
    fitHeight: boolean;
}>;
/** Computes PDF page dimensions that fit within a wrapper element, supporting fitWidth/fitHeight modes. */
export declare const usePdfDimensions: (element: HTMLElement | null, options?: PdfDimensionsOptions) => {
    dimensions: {
        width: number | null;
        height: number | null;
    };
    handleLoadPage: (page: any) => void;
};
export default usePdfDimensions;
