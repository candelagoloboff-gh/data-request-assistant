import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import InputSearch from '.';
export const FormInputSearch = ({ name, inputProps: { onChange: onChangeProp = () => null, ...inputProps } = {}, rules, }) => {
    const handleChange = (callback) => (value) => {
        callback(value);
        onChangeProp(value);
    };
    return (_jsx(Controller, { render: ({ field: { ref, onBlur, onChange, ...field }, fieldState: { error }, }) => (_jsx(InputSearch, { ...field, ...inputProps, onChange: handleChange(onChange), inputRef: ref, error: !!error, errorText: error?.message })), name: name, rules: rules }));
};
export default FormInputSearch;
