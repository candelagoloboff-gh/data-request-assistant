export type ConfettiBackgroundProps = {
    bgColor: string;
    points: string;
    showPoints: boolean;
    showConfetti: boolean;
    coverPicture?: string | File;
    cropHeight?: number;
    cropWidth?: number;
    stylesOptions?: {
        borderRadius?: number;
        height?: number;
        maxWidth?: number;
    };
};
