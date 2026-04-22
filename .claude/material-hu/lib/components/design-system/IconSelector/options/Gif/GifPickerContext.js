import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from 'react';
const GifPickerContext = createContext(null);
export const GifPickerProvider = ({ apiKey, children, }) => {
    const value = useMemo(() => ({ apiKey }), [apiKey]);
    return (_jsx(GifPickerContext.Provider, { value: value, children: children }));
};
/** Returns the Giphy API key. apiKey is undefined when not inside GifPickerProvider. */
export const useGifPicker = () => {
    const ctx = useContext(GifPickerContext);
    return ctx ? { apiKey: ctx.apiKey } : { apiKey: undefined };
};
