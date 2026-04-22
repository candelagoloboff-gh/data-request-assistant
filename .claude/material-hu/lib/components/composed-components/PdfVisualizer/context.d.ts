import { type ReactNode } from 'react';
import { type PdfVisualizerContextValue } from './types';
declare const PdfVisualizerContext: import("react").Context<PdfVisualizerContextValue | null>;
type PdfVisualizerProviderProps = {
    children: ReactNode;
    file: string | File;
    defaultPage?: number;
    baseWidth?: number;
    onFinishRead?: () => void;
};
export declare const PdfVisualizerProvider: ({ children, file, defaultPage, baseWidth, onFinishRead, }: PdfVisualizerProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const usePdfVisualizer: () => PdfVisualizerContextValue;
export default PdfVisualizerContext;
