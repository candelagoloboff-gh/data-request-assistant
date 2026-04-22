import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, Stack, useTheme } from '@mui/material';
import { EditorContent } from '@tiptap/react';
import CustomHelperText from '../Base/CustomHelperText';
import CustomLabel from '../Base/CustomLabel';
import { getBorderColor } from '../utils';
import ActionsBar from './components/ActionsBar';
import { getEditorStyles } from './constants';
import { TextAreaProvider, useTextArea } from './context';
const TextAreaWrapper = ({ label, success, error, errorText, helperText, sx, simplifyEditor, actions, visibleActions, }) => {
    const { editor } = useTextArea();
    const theme = useTheme();
    const disabled = !editor?.isEditable;
    return (_jsxs(FormControl, { sx: {
            width: '100%',
            ...sx,
        }, error: error, disabled: disabled, children: [_jsx(CustomLabel, { label: label, success: success }), _jsxs(Stack, { sx: {
                    containerType: 'inline-size',
                    ...getEditorStyles(theme),
                    border: '1px solid',
                    borderRadius: 1,
                    borderColor: getBorderColor(theme, editor?.isFocused, error, success, !editor?.isEmpty),
                    backgroundColor: theme.palette.new.background.elements.default,
                    transition: 'border 125ms ease-in-out',
                }, children: [!disabled && (_jsx(ActionsBar, { simplifyEditor: simplifyEditor, actions: actions, visibleActions: visibleActions })), editor && _jsx(EditorContent, { editor: editor })] }), _jsx(CustomHelperText, { value: editor?.getText() || '', helperText: error ? errorText : helperText, success: success })] }));
};
const TextArea = ({ actions, simplifyEditor, visibleActions, content, disabled, error, errorText, handlePaste, helperText, handleDrop, label, onChange, onBlur, onFocus, placeholder, slotProps, success, sx, immediatelyRender = true, }) => {
    return (_jsx(TextAreaProvider, { onChange: onChange, onBlur: onBlur, onFocus: onFocus, content: content, slotProps: slotProps, handlePaste: handlePaste, handleDrop: handleDrop, placeholder: placeholder, disabled: disabled, immediatelyRender: immediatelyRender, children: _jsx(TextAreaWrapper, { error: error, errorText: errorText, helperText: helperText, label: label, success: success, sx: sx, simplifyEditor: simplifyEditor, actions: actions, visibleActions: visibleActions }) }));
};
export default TextArea;
