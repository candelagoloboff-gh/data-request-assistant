import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { RadioGroup as MUIRadioGroup, Stack } from '@mui/material';
import RadioButton from '../../design-system/RadioButton/RadioButton';
import SelectionCard from '../SelectionCard';
export const RadioGroup = forwardRef(({ options, value, onChange, error = false, slotProps = {} }, ref) => {
    return (_jsx(MUIRadioGroup, { ref: ref, sx: { display: 'contents' }, children: _jsx(Stack, { ...slotProps.root, sx: {
                gap: 2,
                ...slotProps.root?.sx,
            }, children: options.map(option => (_jsx(SelectionCard, { ...slotProps.selectionCard, checked: value === option.value, onClick: () => {
                    if (!option.disabled && onChange) {
                        onChange(option.value);
                    }
                }, fullWidth: slotProps.selectionCard?.fullWidth ?? true, sx: {
                    opacity: option.disabled ? 0.6 : 1,
                    ...slotProps.selectionCard?.sx,
                }, children: _jsx(RadioButton, { ...slotProps.radioButton, label: option.label, description: option.helperText, isActive: value === option.value, disabled: option.disabled, error: error, value: option.value }) }, option.value))) }) }));
});
RadioGroup.displayName = 'RadioGroup';
export default RadioGroup;
