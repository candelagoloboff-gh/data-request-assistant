import { type PdfDimensions } from '../../../../../hooks/usePdfDimensions';
export type PdfPageProps = {
    page: number;
    variant?: 'bar' | 'floating';
    zoom?: number;
    onUpdatePageNumber?: (newPage: number) => void;
    onLoadSuccess?: (page: any) => void;
    dimensions: PdfDimensions;
};
