import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import CustomHelperText from '../../design-system/Inputs/Base/CustomHelperText';
import CustomLabel from '../../design-system/Inputs/Base/CustomLabel';
import { getBorderColor } from '../../design-system/Inputs/utils';
import { FormControl, Stack, useTheme } from '@mui/material';
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers';
import { IconChevronLeft, IconChevronRight, IconClock, } from '@tabler/icons-react';
import { getNow } from '../../../utils/time';
import { set } from 'date-fns';
import { DEFAULT_MINUTES_STEP, DROPDOWN_POSITIONING_STYLES, TIME_PATTERN, } from './constant';
import { getNormalizedValue, shiftTimeToReferenceDate } from './utils';
/**
 * @deprecated Use InputTime instead. This component will be removed in the next major version.
 */
const TimePicker = ({ value, disabled = false, error = false, size = 'medium', label, helperText, errorText, fullWidth = false, sx = {}, onChange, minutesStep = DEFAULT_MINUTES_STEP, placeholder, timezone, referenceDate = new Date(), disablePast = false, disableFuture = false, minTime, maxTime, noIcon = false, ...props }) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const handleChange = (newValue, context) => {
        const normalizedValue = getNormalizedValue(newValue, minutesStep, now || undefined);
        // When selecting from dropdown, check if minutes match current system time
        // If so, user likely only selected hour, so round up to next valid minutesStep
        onChange?.(shiftTimeToReferenceDate(open ? normalizedValue : newValue, referenceDate), context);
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const now = useMemo(() => {
        return shiftTimeToReferenceDate(getNow(timezone), referenceDate);
    }, [timezone, referenceDate]);
    const effectiveMinTime = useMemo(() => {
        if (minTime)
            return minTime;
        if (disablePast)
            return now ?? undefined;
        return undefined;
    }, [minTime, disablePast, now]);
    const effectiveMaxTime = useMemo(() => {
        if (maxTime)
            return maxTime;
        if (disableFuture)
            return now ?? undefined;
        return undefined;
    }, [maxTime, disableFuture, now]);
    return (_jsxs(FormControl, { sx: sx, error: error, fullWidth: fullWidth, disabled: disabled, children: [_jsx(CustomLabel, { label: label }), _jsx(MuiTimePicker, { open: open, value: shiftTimeToReferenceDate(value, referenceDate), referenceDate: referenceDate, minTime: effectiveMinTime, maxTime: effectiveMaxTime, onChange: handleChange, onOpen: handleOpen, onClose: handleClose, disabled: disabled, ampm: false, disableOpenPicker: noIcon, timeSteps: { minutes: minutesStep }, slots: {
                    openPickerIcon: IconClock,
                    leftArrowIcon: IconChevronLeft,
                    rightArrowIcon: IconChevronRight,
                    actionBar: () => null,
                }, slotProps: {
                    field: { clearable: false },
                    openPickerIcon: {
                        size: size === 'small' ? 20 : 24,
                    },
                    openPickerButton: {
                        sx: {
                            padding: size === 'small' ? 0.5 : 1,
                        },
                    },
                    popper: {
                        placement: 'bottom-end',
                        sx: {
                            '& .MuiPaper-root': DROPDOWN_POSITIONING_STYLES,
                            '& .MuiMultiSectionDigitalClockSection-item': {
                                color: theme.palette.new.text.neutral.brand,
                                fontWeight: theme.typography.fontWeightMedium,
                                '&.Mui-selected': {
                                    backgroundColor: theme.palette.ilustrations?.primaryIlus,
                                    color: theme.palette.new.text.neutral.inverted,
                                },
                            },
                        },
                    },
                    textField: params => ({
                        error,
                        disabled,
                        onClick: event => {
                            const input = event.target;
                            if (input) {
                                // Use setTimeout to ensure the input is fully focused before setting selection
                                // This prevents conflicts with MUI's internal focus management
                                setTimeout(() => {
                                    const inputValue = input.value;
                                    const cursorPosition = input.selectionStart || 0;
                                    // If the input is empty or has placeholder, position at the beginning
                                    if (!inputValue ||
                                        inputValue === placeholder ||
                                        inputValue === '') {
                                        input.setSelectionRange(0, 2);
                                    }
                                    else {
                                        if (cursorPosition <= 2) {
                                            input.setSelectionRange(0, 2);
                                        }
                                        else if (cursorPosition <= 5) {
                                            input.setSelectionRange(3, 5);
                                        }
                                        else {
                                            input.setSelectionRange(0, 2);
                                        }
                                    }
                                }, 0);
                            }
                        },
                        onBlur: event => {
                            if (!open) {
                                const inputValue = event.target.value;
                                const match = inputValue.match(TIME_PATTERN);
                                if (match) {
                                    const hours = parseInt(match[1] || match[2], 10);
                                    if (hours >= 0 && hours <= 23) {
                                        const newDate = new Date();
                                        const normalizedValue = set(newDate, {
                                            hours: hours,
                                            minutes: 0,
                                            seconds: 0,
                                            milliseconds: 0,
                                        });
                                        // Use setTimeout to avoid conflicts with the onBlur of the TimePicker
                                        setTimeout(() => {
                                            handleChange(normalizedValue, { validationError: null });
                                        }, 100);
                                    }
                                }
                            }
                        },
                        // Added in order to prevent drag and drop invalid values on the time textfield by accident
                        onDrop: (event) => {
                            event.preventDefault();
                        },
                        InputProps: {
                            endAdornment: (_jsx(Stack, { sx: {
                                    flexDirection: 'row',
                                    gap: 2,
                                    alignItems: 'center',
                                    mr: size === 'small' ? 0 : 0.75,
                                }, children: params.InputProps?.endAdornment })),
                            sx: {
                                paddingRight: noIcon ? 0 : '14px',
                                height: size === 'small' ? '36px' : 'inherit',
                                backgroundColor: disabled
                                    ? theme.palette.new.action.background.brand.disabled
                                    : theme.palette.new.background.elements.default,
                                '& fieldset': {
                                    transition: 'border 125ms ease',
                                    borderColor: `${getBorderColor(theme, false, error)}!important`,
                                    borderWidth: '1px !important',
                                },
                                '&:hover fieldset': {
                                    borderColor: `${getBorderColor(theme, false, error)}!important`,
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: `${getBorderColor(theme, true, error)}!important`,
                                },
                                '&.Mui-focused:hover fieldset': {
                                    borderColor: `${getBorderColor(theme, true, error)}!important`,
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
                        placeholder: placeholder,
                    }),
                }, sx: {
                    '& .MuiPickersPopper-root': {
                        '& .MuiPaper-root': {
                            backgroundColor: theme.palette.new.background.elements.default,
                            border: `1px solid ${theme.palette.border?.neutralBorder}`,
                            borderRadius: theme.shape.borderRadiusM,
                            ...DROPDOWN_POSITIONING_STYLES,
                        },
                    },
                    '& .MuiPopper-root': {
                        '& .MuiPaper-root': DROPDOWN_POSITIONING_STYLES,
                    },
                    '& .MuiPickersTimeClock-root': {
                        '& .MuiPickersTimeClock-meridiemText': {
                            color: theme.palette.new.text.neutral.default,
                        },
                    },
                }, ...props }), size !== 'small' && (_jsx(CustomHelperText, { helperText: error ? errorText : helperText, value: value?.toString() || '' }))] }));
};
export default TimePicker;
