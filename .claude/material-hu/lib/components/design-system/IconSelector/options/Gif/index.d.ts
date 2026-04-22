import { type IGif } from '@giphy/js-types';
type GifPickerProps = {
    title?: string;
    noResultsMessage?: string;
    searchPlaceholder?: string;
    onGifSelect?: (gif: IGif) => void;
    onClose?: () => void;
};
declare const GifPicker: (props: GifPickerProps) => import("react/jsx-runtime").JSX.Element;
export default GifPicker;
