import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { isPossiblePhoneNumber } from 'libphonenumber-js';
import InputPhone from '.';
const FormInputPhone = props => {
    const { name, disabled, inputProps: { showErrors = false, showSuccessOnSubmitted = true, ...inputPhoneProps }, rules = {}, validatePhoneNumber = true, } = props;
    const { control, formState } = useFormContext();
    const { t } = useTranslation('material_hu_only');
    const { isSubmitted } = formState;
    const validate = {
        ...rules.validate,
        ...(validatePhoneNumber && {
            isPossiblePhoneNumber: (input) => !input ||
                isPossiblePhoneNumber(input) ||
                t('hu_inputs.invalid_phone_number'),
        }),
    };
    return (_jsx(Controller, { render: ({ field: { ref, value, onChange, ...field }, fieldState: { error }, }) => (_jsx(InputPhone, { success: showSuccessOnSubmitted && isSubmitted ? !error : undefined, ...field, ...inputPhoneProps, value: value, onChange: newValue => onChange(newValue), error: !!error, disabled: disabled, helperText: inputPhoneProps.helperText || showErrors
                ? error?.message
                : undefined })), name: name, control: control, rules: {
            ...rules,
            validate,
        } }));
};
export default FormInputPhone;
