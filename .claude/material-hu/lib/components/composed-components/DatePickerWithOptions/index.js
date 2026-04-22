import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography } from '@mui/material';
import CardContainer from '../../design-system/CardContainer';
import FormDatePicker from '../../design-system/Inputs/DatePicker/form';
import FormRadioButton from '../../design-system/RadioButton/RadioButton/form';
const DatePickerWithOptions = ({ label, options, startDatePicker, endDatePicker, cardContainerProps = { fullWidth: true }, optionsGap = 2, datePickersGap = 1, sectionGap = 1.5, sx, showDatePickers, allowDeselect = true, }) => {
    const hasOptions = !!options && options.length > 0;
    const hasDatePickers = startDatePicker || endDatePicker;
    const shouldShowDatePickers = showDatePickers ?? hasDatePickers;
    // Don't render anything if there's nothing to show
    if (!hasOptions && !shouldShowDatePickers) {
        return null;
    }
    const content = (_jsxs(Stack, { sx: sx, children: [label && (_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", sx: { mb: 2 }, children: label })), _jsxs(Stack, { sx: { gap: sectionGap }, children: [hasOptions && (_jsx(Stack, { sx: { gap: optionsGap }, children: options.map(option => (_jsx(FormRadioButton, { name: option.name, isOnlyOption: true, allowDeselect: allowDeselect, radioButtonProps: {
                                label: option.label,
                                ...option.radioButtonProps,
                            } }, option.name))) })), shouldShowDatePickers && (_jsxs(Stack, { sx: { gap: datePickersGap }, children: [startDatePicker && (_jsx(Stack, { sx: { gap: 0.5 }, children: _jsx(FormDatePicker, { name: startDatePicker.name, inputProps: {
                                        label: startDatePicker.label,
                                        disabled: startDatePicker.disabled,
                                        ...startDatePicker.inputProps,
                                    } }) })), endDatePicker && (_jsx(Stack, { sx: { gap: 0.5 }, children: _jsx(FormDatePicker, { name: endDatePicker.name, inputProps: {
                                        label: endDatePicker.label,
                                        disabled: endDatePicker.disabled,
                                        ...endDatePicker.inputProps,
                                    } }) }))] }))] })] }));
    // If cardContainerProps is explicitly set to null, render without wrapper
    if (cardContainerProps === null) {
        return content;
    }
    return _jsx(CardContainer, { ...cardContainerProps, children: content });
};
export default DatePickerWithOptions;
