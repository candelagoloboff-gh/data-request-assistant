import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import InputSelect from '.';
const FormInputSelect = ({ name, inputProps, rules }) => {
    return (_jsx(Controller, { render: ({ field: { ref, ...field }, fieldState: { error } }) => (_jsx(InputSelect, { ...field, ...inputProps, inputRef: ref, error: !!error, errorText: error?.message })), name: name, rules: rules }));
};
export default FormInputSelect;
