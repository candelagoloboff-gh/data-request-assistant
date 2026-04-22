import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import Rating from '.';
const FormRating = ({ name, inputProps = {}, rules }) => {
    return (_jsx(Controller, { render: ({ field: { ref, ...field }, fieldState: { error } }) => (_jsx(Rating, { ...field, ...inputProps, error: !!error, helperText: error?.message, ref: ref })), name: name, rules: rules }));
};
export default FormRating;
