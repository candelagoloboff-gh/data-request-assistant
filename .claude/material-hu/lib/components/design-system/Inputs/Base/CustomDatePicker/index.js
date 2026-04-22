import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { Stack, useTheme } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { IconCalendarDue, IconChevronDown, IconChevronLeft, IconChevronRight, IconExclamationCircle, IconX, } from '@tabler/icons-react';
import { getToday } from '../../../../../utils/time';
import { getBorderColor } from '../../utils';
import DatePickerDay from './DatePickerDay';
const withIconSlot = (Icon) => function IconSlot({ ownerState, ...props }) {
    return _jsx(Icon, { ...props });
};
const CustomDatePicker = ({ value, disabled, error, enableClear = false, size, timezone, disablePast, disableFuture, minDate, maxDate, slotProps, ...props }) => {
    const [focused, setFocused] = useState(false);
    const theme = useTheme();
    const today = useMemo(() => {
        return getToday(timezone);
    }, [timezone]);
    const effectiveMinDate = useMemo(() => {
        if (minDate)
            return minDate;
        if (disablePast)
            return today ?? undefined;
        return undefined;
    }, [minDate, disablePast, today]);
    const effectiveMaxDate = useMemo(() => {
        if (maxDate)
            return maxDate;
        if (disableFuture)
            return today ?? undefined;
        return undefined;
    }, [maxDate, disableFuture, today]);
    return (_jsx(DatePicker, { value: value, minDate: effectiveMinDate, maxDate: effectiveMaxDate, slots: {
            openPickerIcon: withIconSlot(IconCalendarDue),
            leftArrowIcon: withIconSlot(IconChevronLeft),
            rightArrowIcon: withIconSlot(IconChevronRight),
            switchViewIcon: withIconSlot(IconChevronDown),
            clearIcon: withIconSlot(IconX),
            day: dayProps => {
                return (_jsx(DatePickerDay, { timezone: timezone, ...slotProps?.day, ...dayProps }));
            },
        }, slotProps: {
            ...slotProps,
            field: { clearable: enableClear },
            openPickerIcon: {
                size: size === 'small' ? 20 : 24,
            },
            openPickerButton: {
                sx: {
                    padding: size === 'small' ? 0.5 : 1,
                },
            },
            textField: params => ({
                error,
                disabled,
                onFocus: () => setFocused(true),
                onBlur: () => setFocused(false),
                InputProps: {
                    endAdornment: (_jsxs(Stack, { sx: {
                            flexDirection: 'row',
                            gap: 2,
                            alignItems: 'center',
                            mr: size === 'small' ? 0 : 0.75,
                        }, children: [params.InputProps?.endAdornment, error && (_jsx(IconExclamationCircle, { size: 20, color: theme.palette.new.text.feedback.error }))] })),
                    sx: {
                        height: size === 'small' ? '36px' : 'inherit',
                        backgroundColor: disabled
                            ? theme.palette.new.background.elements.disabled
                            : theme.palette.new.background.elements.default,
                        '& fieldset': {
                            transition: 'border 125ms ease',
                            borderColor: `${getBorderColor(theme, focused, error, false, !!value)}!important`,
                            borderWidth: '1px !important',
                        },
                        input: {
                            '&::placeholder': {
                                color: theme.palette.new.text.neutral.lighter,
                                opacity: 1,
                                fontSize: size,
                            },
                            fontSize: size,
                            color: theme.palette.new.text.neutral.default,
                            zIndex: 1,
                        },
                    },
                },
            }),
            yearButton: buttonProps => ({
                sx: {
                    color: theme.palette.new.text.neutral.brand,
                    borderRadius: theme.shape.borderRadiusM,
                    '&.Mui-selected': {
                        bgcolor: `${theme.palette.new.action.button.background.primary.default} !important`,
                    },
                    '&.MuiPickersYear-yearButton': {
                        border: buttonProps['aria-current'] && !buttonProps.selected
                            ? `1px solid ${theme.palette.new.border.neutral.brand} !important`
                            : 'none',
                    },
                },
            }),
        }, disabled: disabled, sx: {
            '.tabler-icon': {
                color: theme.palette.new.text.neutral.lighter,
            },
            ...props.sx,
        }, ...props }));
};
export default CustomDatePicker;
