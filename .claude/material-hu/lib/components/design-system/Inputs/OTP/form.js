import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import InputOtp from '.';
const FormInputOtp = ({ name, rules, inputOtpProps }) => {
    return (_jsx(Controller, { render: ({ fieldState: { error, invalid }, field: { ref: _ref, ...fieldMethods }, }) => (_jsx(InputOtp, { ...fieldMethods, ...inputOtpProps, error: invalid, helperText: error?.message })), name: name, rules: rules }));
};
export default FormInputOtp;
