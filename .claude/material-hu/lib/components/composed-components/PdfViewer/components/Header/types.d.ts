import { type MouseEvent } from 'react';
export type HeaderProps = {
    name?: string;
    onClose?: () => void;
    onDownload?: (event: MouseEvent) => void;
    hideName?: boolean;
    hideClose?: boolean;
    hideDownload?: boolean;
};
