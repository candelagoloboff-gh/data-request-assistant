import { type SxProps } from '@mui/material';
import { type PdfFullScreenProps } from './components/FullScreen/types';
export type PdfViewerProps = {
    file: string;
    name?: string;
    onFinishRead?: () => void;
    variant?: 'bar' | 'floating';
    sx?: SxProps;
    slotProps?: {
        fullscreen?: Partial<PdfFullScreenProps>;
        pdfDimensions?: {
            baseWidth?: number;
        };
        navbar?: {
            showRotation?: boolean;
            showFullScreen?: boolean;
        };
    };
};
