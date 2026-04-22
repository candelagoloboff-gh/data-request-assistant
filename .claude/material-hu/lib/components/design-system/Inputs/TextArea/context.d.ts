import { type TextAreaContextType, type TextAreaProviderProps } from './types';
export declare const TextAreaHandlers: ({ disabled, placeholder, }: {
    disabled?: boolean;
    placeholder?: string;
}) => null;
export declare const TextAreaProvider: ({ children, content, disabled, handlePaste, handleDrop, onChange, onBlur, onFocus, placeholder, slotProps, immediatelyRender, }: TextAreaProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useTextArea: () => TextAreaContextType;
