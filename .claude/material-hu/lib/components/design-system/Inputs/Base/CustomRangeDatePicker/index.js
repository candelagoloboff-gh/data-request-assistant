import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { IconButton, Stack, Typography, useTheme } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers-v6/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers-v6/LocalizationProvider';
import { IconCalendarDue, IconX } from '@tabler/icons-react';
import { getCurrentLocale } from '../../../../../utils/languages';
import es from 'date-fns/locale/es';
import { getBorderColor } from '../../utils';
import CustomRangeSelector from './components/CustomRangeSelector';
const CustomRangeDatePicker = (props) => {
    const { value, onChange, sx, dateFormatter, enableClear, minDate, maxDate, minMaxDatesDifference, datePlaceholder, disabled, error, slotProps: { clearButtonAriaLabel = 'Clear date range', openPickerButtonAriaLabel = 'Open date range picker', ...restSlotProps }, } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const inputContainerRef = useRef(null);
    const theme = useTheme();
    const { fromDate, toDate } = value;
    const handleOpen = () => {
        if (disabled)
            return;
        setAnchorEl(inputContainerRef.current);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClear = () => {
        onChange({ fromDate: null, toDate: null });
    };
    const formattedFromDate = fromDate
        ? dateFormatter(fromDate)
        : datePlaceholder;
    const formattedToDate = toDate ? dateFormatter(toDate) : datePlaceholder;
    const showClearButton = enableClear && fromDate && toDate;
    return (
    // Added another LocalizationProvider using a v6 adapter to avoid incompatibility errors with the parent LocalizationProvider
    _jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, adapterLocale: getCurrentLocale() || es, children: _jsxs(Stack, { ref: inputContainerRef, sx: {
                alignItems: 'center',
                backgroundColor: disabled
                    ? theme.palette.new.background.elements.disabled
                    : theme.palette.new.background.elements.default,
                border: `1px solid ${getBorderColor(theme, false, error, false, !!(fromDate || toDate))}`,
                borderRadius: 1,
                flexDirection: 'row',
                gap: 1,
                justifyContent: 'space-between',
                p: 1,
                transition: 'border 125ms ease',
                ...sx,
            }, children: [_jsxs(Typography, { variant: "globalS", sx: {
                        cursor: 'pointer',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                        ...(disabled && {
                            cursor: 'not-allowed',
                            color: ({ palette }) => palette.text?.disabled,
                            '&:hover': {
                                textDecoration: 'none',
                            },
                        }),
                    }, onClick: handleOpen, children: [formattedFromDate, " - ", formattedToDate] }), _jsxs(Stack, { sx: { flexDirection: 'row', gap: 1 }, children: [showClearButton && (_jsx(IconButton, { onClick: handleClear, "aria-label": clearButtonAriaLabel, children: _jsx(IconX, {}) })), _jsx(IconButton, { onClick: handleOpen, "aria-label": openPickerButtonAriaLabel, "aria-haspopup": "dialog", "aria-expanded": !!anchorEl, children: _jsx(IconCalendarDue, {}) })] }), _jsx(CustomRangeSelector, { anchorElement: anchorEl, handleClose: handleClose, value: value, onChange: onChange, minDate: minDate, maxDate: maxDate, minMaxDatesDifference: minMaxDatesDifference, disabled: disabled, slotProps: restSlotProps })] }) }));
};
export default CustomRangeDatePicker;
