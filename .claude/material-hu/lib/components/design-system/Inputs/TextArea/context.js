import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect } from 'react';
import { useEditor } from '@tiptap/react';
import useExtensions from './hooks/useExtensions';
const TextAreaContext = createContext(undefined);
export const TextAreaHandlers = ({ disabled = false, placeholder, }) => {
    const { editor } = useTextArea();
    useEffect(() => {
        if (editor) {
            editor.setEditable(!disabled);
        }
    }, [disabled, editor]);
    useEffect(() => {
        if (editor && placeholder !== '') {
            editor.extensionManager.extensions.filter(extension => extension.name === 'placeholder')[0].options.placeholder = placeholder;
            editor.view.dispatch(editor.state.tr);
        }
    }, [editor, placeholder]);
    return null;
};
export const TextAreaProvider = ({ children, content, disabled = false, handlePaste, handleDrop, onChange, onBlur, onFocus, placeholder, slotProps, immediatelyRender = true, }) => {
    const extensions = useExtensions({
        placeholder,
        handlePaste,
        handleDrop,
        slotProps,
    });
    const editor = useEditor({
        extensions,
        content,
        editable: !disabled,
        onUpdate: ({ editor: currentEditor }) => {
            onChange?.(currentEditor.isEmpty ? '' : currentEditor.getHTML());
        },
        onBlur,
        onFocus,
        shouldRerenderOnTransaction: true,
        immediatelyRender,
    });
    return (_jsxs(TextAreaContext.Provider, { value: { editor, slotProps }, children: [children, _jsx(TextAreaHandlers, { disabled: disabled, placeholder: placeholder })] }));
};
export const useTextArea = () => {
    const context = useContext(TextAreaContext);
    if (context === undefined) {
        throw new Error('useTextArea must be used within a TextAreaProvider');
    }
    return context;
};
