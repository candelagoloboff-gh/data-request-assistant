import { type ReactNode } from 'react';
/** Return type: apiKey is undefined when not inside GifPickerProvider. */
export type UseGifPickerReturn = {
    apiKey: string | undefined;
};
type GifPickerProviderProps = {
    /** Giphy API key (e.g. from import.meta.env.VITE_GIPHY_API_KEY). */
    apiKey: string;
    children: ReactNode;
};
export declare const GifPickerProvider: ({ apiKey, children, }: GifPickerProviderProps) => import("react/jsx-runtime").JSX.Element;
/** Returns the Giphy API key. apiKey is undefined when not inside GifPickerProvider. */
export declare const useGifPicker: () => UseGifPickerReturn;
export {};
