import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { FormControl, Stack, Typography } from '@mui/material';
import CustomHelperText from '../Base/CustomHelperText';
import CustomLabel from '../Base/CustomLabel';
import InputTime from '../Time';
const InputTimeRange = ({ value, onChange, label, helperText, errorText, error = false, disabled = false, fullWidth = false, sx = {}, startProps = {}, endProps = {}, }) => {
    const { t } = useTranslation('material_hu_only');
    const handleStartChange = (newStart) => {
        onChange([newStart, value[1]]);
    };
    const handleEndChange = (newEnd) => {
        onChange([value[0], newEnd]);
    };
    return (_jsxs(FormControl, { error: error, fullWidth: fullWidth, disabled: disabled, sx: sx, children: [_jsx(CustomLabel, { label: label }), _jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1 }, children: [_jsx(InputTime, { value: value[0], onChange: handleStartChange, disabled: disabled, error: error, hideErrorText: true, ...startProps }), _jsx(Typography, { sx: { fontWeight: 'bold', flexShrink: 0, pb: 0.25 }, children: t('time_picker.range_separator', 'to') }), _jsx(InputTime, { value: value[1], onChange: handleEndChange, disabled: disabled, error: error, hideErrorText: true, ...endProps })] }), _jsx(CustomHelperText, { helperText: error ? errorText : helperText, value: "" })] }));
};
export default InputTimeRange;
