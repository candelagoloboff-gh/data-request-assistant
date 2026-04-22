import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { useTheme } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { DROPDOWN_POSITIONING_STYLES, SAME_WIDTH_MODIFIER, } from '../../Time/constants';
import { getBorderColor } from '../../utils';
import AmPmToolbar from './AmPmToolbar';
import TimePickerEndAdornment from './TimePickerEndAdornment';
const CustomTimePicker = ({ value, disabled, error, size = 'medium', placeholder, noIcon = false, ampm = false, onClear, onOpen, onTextFieldClick, onTextFieldBlur, sx: sxProp, slotProps: externalSlotProps, ...rest }) => {
    const [focused, setFocused] = useState(false);
    const [hasText, setHasText] = useState(!!value);
    const inputRef = useRef(null);
    const { palette, typography, zIndex } = useTheme();
    const iconSize = size === 'small' ? 20 : 24;
    const iconPadding = size === 'small' ? 0.5 : 1;
    const showClear = focused && (hasText || !!value) && !disabled;
    const handleClear = () => {
        setHasText(false);
        if (inputRef.current) {
            const nativeSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
            nativeSetter?.call(inputRef.current, '');
            inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
        }
        onClear?.();
    };
    const handleFocus = (e) => {
        setFocused(true);
        setHasText(!!e.target.value);
    };
    const handleBlur = (event) => {
        setFocused(false);
        onTextFieldBlur?.(event);
    };
    const handleInput = (e) => {
        setHasText(!!e.target.value);
    };
    const handleDrop = (event) => {
        event.preventDefault();
    };
    const handleOpenClick = () => onOpen?.();
    const borderColor = getBorderColor({ palette }, focused, error, false, !!value);
    return (_jsx(TimePicker, { value: value, disabled: disabled, ampm: ampm, closeOnSelect: false, disableOpenPicker: true, onOpen: onOpen, slots: {
            leftArrowIcon: IconChevronLeft,
            rightArrowIcon: IconChevronRight,
            actionBar: () => null,
            ...(ampm && { toolbar: AmPmToolbar }),
        }, slotProps: {
            ...externalSlotProps,
            field: { clearable: false, ...externalSlotProps?.field },
            ...(ampm && { toolbar: { hidden: false } }),
            popper: {
                placement: 'bottom-end',
                disablePortal: true,
                modifiers: [SAME_WIDTH_MODIFIER],
                sx: {
                    zIndex: zIndex.modal,
                    '& .MuiPaper-root': {
                        ...DROPDOWN_POSITIONING_STYLES,
                        px: 0,
                        py: 2,
                    },
                    '& .MuiPickersLayout-root': {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 2,
                    },
                    '& .MuiButtonGroup-root': {
                        px: 2,
                        boxSizing: 'border-box',
                    },
                    '& .MuiMultiSectionDigitalClock-root': {
                        width: '100%',
                        borderBottom: 'none',
                    },
                    '& .MuiMultiSectionDigitalClockSection-root': {
                        flex: 1,
                        overscrollBehavior: 'contain',
                        px: 2,
                        boxSizing: 'border-box',
                    },
                    '& .MuiMultiSectionDigitalClockSection-item': {
                        width: '100%',
                        textAlign: 'center',
                        mx: 0,
                        color: palette.new.text.neutral.brand,
                        fontWeight: typography.fontWeightMedium,
                        '&.Mui-selected': {
                            backgroundColor: palette.ilustrations?.primaryIlus,
                            color: palette.new.text.neutral.inverted,
                        },
                    },
                    ...(ampm && {
                        '& .MuiMultiSectionDigitalClock-root > .MuiMultiSectionDigitalClockSection-root:last-of-type': {
                            display: 'none',
                        },
                    }),
                },
            },
            textField: () => ({
                error,
                disabled,
                placeholder,
                inputRef,
                onClick: onTextFieldClick,
                onFocus: handleFocus,
                onBlur: handleBlur,
                onInput: handleInput,
                onDrop: handleDrop,
                InputProps: {
                    endAdornment: (_jsx(TimePickerEndAdornment, { noIcon: noIcon, disabled: !!disabled, error: !!error, showClear: showClear, iconSize: iconSize, iconPadding: iconPadding, onOpen: handleOpenClick, onClear: handleClear })),
                    sx: {
                        paddingRight: '14px',
                        height: size === 'small' ? '36px' : 'inherit',
                        backgroundColor: disabled
                            ? palette.new.action.background.brand.disabled
                            : palette.new.background.elements.default,
                        '& fieldset': {
                            transition: 'border 125ms ease',
                            borderColor: `${borderColor}!important`,
                            borderWidth: '1px !important',
                        },
                        input: {
                            '&::placeholder': {
                                color: palette.new.text.neutral.lighter,
                                opacity: 1,
                                fontSize: size,
                            },
                            fontSize: size,
                            color: palette.new.text.neutral.default,
                            zIndex: 1,
                        },
                    },
                },
            }),
        }, sx: {
            '.tabler-icon': {
                color: palette.new.text.neutral.lighter,
            },
            ...sxProp,
        }, ...rest }));
};
export default CustomTimePicker;
