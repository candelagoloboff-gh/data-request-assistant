import { type HeaderProps } from '../Header/types';
export type PdfFullScreenProps = {
    file: string;
    name?: string;
    onClose: () => void;
    showHeader?: boolean;
    slotProps?: {
        header?: HeaderProps;
    };
    fileProps?: {
        isLoading?: boolean;
    };
};
