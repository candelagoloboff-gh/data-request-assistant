import { type MouseEvent } from 'react';
export type CroppingModalProps = {
    file: File;
    onClose: () => void;
    onSave: (file: File, event: MouseEvent<HTMLButtonElement>) => void;
    onChangeSlider?: (event: Event, newValue: number | number[]) => void;
    recommendedWidth: number;
    recommendedHeight: number;
    title?: string;
    cancelLabel?: string;
    saveLabel?: string;
    sliderLabel?: string;
    round?: boolean;
};
