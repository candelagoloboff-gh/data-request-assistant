import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import RadioGroupBase from '.';
export const FormRadioGroup = props => {
    const { name, rules, ...other } = props;
    const { control, setValue, watch } = useFormContext();
    const selectedValue = watch(name);
    return (_jsx(Controller, { name: name, control: control, rules: rules, render: ({ field, fieldState: { error } }) => {
            const { ref: fieldRef, ...restField } = field;
            return (_jsx(RadioGroupBase, { ...restField, 
                // @ts-expect-error Controller field.ref is Ref<unknown>; we forward to HTMLDivElement at runtime
                ref: fieldRef, ...other, value: selectedValue, onChange: value => setValue(name, value, { shouldDirty: true }), error: !!error }));
        } }));
};
export default FormRadioGroup;
