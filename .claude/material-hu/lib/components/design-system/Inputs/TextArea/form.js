import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import TextArea from '.';
const FormTextArea = ({ name, textAreaProps = {}, rules, }) => {
    return (_jsx(Controller, { name: name, rules: rules, render: ({ field: { onChange, value, ref, onBlur: fieldOnBlur, ...field }, fieldState: { error }, }) => {
            const showError = !!error;
            return (_jsx(TextArea, { ...textAreaProps, ...field, content: value, onChange: onChange, onBlur: (...args) => {
                    fieldOnBlur(); // marks touched
                    textAreaProps.onBlur?.(...args);
                }, error: showError, errorText: showError ? textAreaProps?.errorText || error?.message : undefined }));
        } }));
};
export default FormTextArea;
