import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import Autocomplete from '.';
const FormAutocomplete = ({ name, rules, options, autocompleteProps, }) => {
    return (_jsx(Controller, { render: ({ field: { ref, ...fieldMethods }, fieldState: { error, invalid }, }) => (_jsx(Autocomplete, { ...fieldMethods, ...autocompleteProps, fieldRef: ref, options: options, hasError: invalid, helperText: error?.message ?? autocompleteProps?.helperText })), name: name, rules: rules }));
};
export default FormAutocomplete;
