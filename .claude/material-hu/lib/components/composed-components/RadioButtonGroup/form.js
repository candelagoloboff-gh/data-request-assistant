import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import { RadioGroup } from '@mui/material';
import CardContainer from '../../design-system/CardContainer';
import RadioButton from '../../design-system/RadioButton/RadioButton';
const FormRadioButtonGroup = props => {
    const { name, options, radioProps, rules, disabled, ...other } = props;
    const { control, setValue, watch } = useFormContext();
    const groupName = watch(name);
    return (_jsx(Controller, { name: name, control: control, rules: rules, render: ({ field: { onChange, ...field } }) => (_jsx(RadioGroup, { ...field, ...other, children: options.map(option => (_jsx(CardContainer, { sx: { width: '100%', cursor: 'pointer' }, onClick: () => {
                    // Prevent triggering selection when user is selecting text
                    if (window.getSelection()?.type !== 'Range' &&
                        !option.disabled) {
                        setValue(name, option.value, { shouldDirty: true });
                    }
                }, children: _jsx(RadioButton, { ...radioProps, label: option.label, onClick: () => {
                        setValue(name, option.value, { shouldDirty: true });
                    }, description: option.helperText, value: option.value, isActive: groupName === option.value, disabled: option.disabled }) }, option.value))) })) }));
};
export default FormRadioButtonGroup;
