import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FormControl } from '@mui/material';
import { getNow } from '../../../../utils/time';
import CustomHelperText from '../Base/CustomHelperText';
import CustomLabel from '../Base/CustomLabel';
import CustomTimePicker from '../Base/CustomTimePicker';
import { DEFAULT_MINUTES_STEP } from './constants';
import { getNormalizedValue, getPartialTimeDate, getSelectionRange, shiftTimeToReferenceDate, } from './utils';
const InputTime = ({ value, disabled = false, error = false, size = 'medium', label, helperText, errorText, fullWidth = false, sx, slotProps, onChange, minutesStep = DEFAULT_MINUTES_STEP, placeholder, timezone, referenceDate = new Date(), disablePast = false, disableFuture = false, minTime, maxTime, noIcon = false, hideErrorText = false, ...props }) => {
    const [open, setOpen] = useState(false);
    const now = shiftTimeToReferenceDate(getNow(timezone), referenceDate);
    const effectiveMinTime = (() => {
        if (minTime)
            return minTime;
        if (disablePast)
            return now ?? undefined;
        return undefined;
    })();
    const effectiveMaxTime = (() => {
        if (maxTime)
            return maxTime;
        if (disableFuture)
            return now ?? undefined;
        return undefined;
    })();
    const handleChange = (newValue, context) => {
        const normalizedValue = getNormalizedValue(newValue, minutesStep, now || undefined);
        onChange?.(shiftTimeToReferenceDate(open ? normalizedValue : newValue, referenceDate), context);
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleClear = () => onChange?.(null, { validationError: null });
    const handleTextFieldClick = (event) => {
        const input = event.target;
        if (!input)
            return;
        setTimeout(() => {
            const [start, end] = getSelectionRange(input.value, input.selectionStart || 0, placeholder);
            input.setSelectionRange(start, end);
        }, 0);
    };
    const handleTextFieldBlur = (event) => {
        if (open)
            return;
        const newDate = getPartialTimeDate(event.target.value);
        if (!newDate)
            return;
        setTimeout(() => handleChange(newDate, { validationError: null }), 100);
    };
    return (_jsxs(FormControl, { sx: sx, error: error, fullWidth: fullWidth, disabled: disabled, children: [_jsx(CustomLabel, { label: label }), _jsx(CustomTimePicker, { value: shiftTimeToReferenceDate(value, referenceDate), open: open, onOpen: handleOpen, onClose: handleClose, onChange: handleChange, onClear: handleClear, disabled: disabled, error: error, size: size, placeholder: placeholder, noIcon: noIcon, timeSteps: { minutes: minutesStep }, minTime: effectiveMinTime, maxTime: effectiveMaxTime, onTextFieldClick: handleTextFieldClick, onTextFieldBlur: handleTextFieldBlur, slotProps: slotProps, ...props }), size !== 'small' && (_jsx(CustomHelperText, { helperText: error && !hideErrorText ? errorText : helperText, value: value?.toString() || '' }))] }));
};
export default InputTime;
