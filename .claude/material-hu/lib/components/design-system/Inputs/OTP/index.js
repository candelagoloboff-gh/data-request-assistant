import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { FormControl, inputBaseClasses, outlinedInputClasses, Stack, TextField, useTheme, } from '@mui/material';
import CustomHelperText from '../Base/CustomHelperText';
import CustomLabel from '../Base/CustomLabel';
import { getBorderColor } from '../utils';
import { getValueArray } from './utils';
const InputOtp = ({ length = 6, onChange, onComplete, rounded = false, helperText, label, disabled = false, success = false, password = false, error, value, }) => {
    const theme = useTheme();
    const inputRefs = useRef([]);
    const containerRef = useRef(null);
    const lastClickInsideContainer = useRef(false);
    const valueArray = getValueArray(value, length);
    const otp = valueArray.concat(Array(length - valueArray.length).fill(''));
    const firstEmptyIndex = otp.findIndex(digit => digit === '');
    const activeIndex = firstEmptyIndex === -1 ? length - 1 : firstEmptyIndex;
    const handleChange = (index, digit) => {
        if (index !== activeIndex)
            return; // Only allow changes on the active input
        if (!/^[0-9]?$/.test(digit))
            return; // Only allow numbers
        const nextValue = [...otp];
        nextValue[index] = digit;
        onChange(nextValue.join(''));
    };
    const handleKeyDown = (index, event) => {
        // Only allow interaction on the active input
        if (index !== activeIndex)
            return;
        if (event.key === 'Backspace' && !otp[index] && index > 0) {
            // Remove the previous digit
            const nextValue = [...otp];
            nextValue[index - 1] = '';
            onChange(nextValue.join(''));
            // Focus will automatically move to the previous input via activeIndex update
            setTimeout(() => {
                inputRefs.current[index - 1]?.focus({ preventScroll: true });
            }, 0);
        }
    };
    const handlePaste = (event) => {
        event.preventDefault();
        const pasteDataArray = getValueArray(event.clipboardData.getData('text'), length);
        const nextOtp = pasteDataArray.concat(Array(length - pasteDataArray.length).fill(''));
        onChange(nextOtp.join(''));
    };
    const isCompleted = otp.filter(Boolean).length === length;
    useEffect(() => {
        if (isCompleted) {
            onComplete?.();
        }
    }, [isCompleted, onComplete]);
    // Auto-focus the active input on mount and when activeIndex changes
    useEffect(() => {
        const activeInput = inputRefs.current[activeIndex];
        // Only focus if not already focused to avoid conflicts
        if (!disabled && activeInput && document.activeElement !== activeInput) {
            activeInput.focus({ preventScroll: true });
        }
    }, [activeIndex, disabled]);
    // Track clicks outside the container to reset the flag
    useEffect(() => {
        const handleGlobalMouseDown = (event) => {
            if (containerRef.current &&
                !containerRef.current.contains(event.target)) {
                lastClickInsideContainer.current = false;
            }
        };
        document.addEventListener('mousedown', handleGlobalMouseDown);
        return () => {
            document.removeEventListener('mousedown', handleGlobalMouseDown);
        };
    }, []);
    const handleContainerMouseDown = (event) => {
        // Track if the click is inside the container
        lastClickInsideContainer.current =
            containerRef.current?.contains(event.target) ?? false;
    };
    const handleBlur = (event) => {
        const relatedTarget = event.relatedTarget;
        // Check if blur is to another input in this component
        const isBlurringToOtherInput = inputRefs.current.some(ref => ref && ref === relatedTarget);
        // Don't re-focus if moving to another input in this component
        if (isBlurringToOtherInput)
            return;
        // Check if the focus is moving to an element inside the OTP container
        const isTargetInsideContainer = relatedTarget && containerRef.current?.contains(relatedTarget);
        // Only re-focus if:
        // 1. The target is inside the container, OR
        // 2. relatedTarget is null AND the last click was inside the container
        const shouldRefocus = isTargetInsideContainer ||
            (!relatedTarget && lastClickInsideContainer.current);
        if (!disabled && shouldRefocus) {
            setTimeout(() => {
                inputRefs.current[activeIndex]?.focus({ preventScroll: true });
            }, 0);
        }
    };
    return (_jsxs(FormControl, { ref: containerRef, onMouseDown: handleContainerMouseDown, error: error, disabled: disabled, children: [label && (_jsx(CustomLabel, { label: label, success: success })), _jsx(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 0.5 }, children: otp.map((digit, index) => {
                    const isActive = index === activeIndex;
                    return (_jsx(TextField, { type: password ? 'password' : 'text', value: digit, onChange: event => handleChange(index, event.target.value), onBlur: isActive ? handleBlur : undefined, inputRef: element => (inputRefs.current[index] = element), autoComplete: "off", sx: {
                            [`.${inputBaseClasses.root}`]: {
                                borderRadius: rounded ? '100%' : undefined,
                                backgroundColor: disabled
                                    ? theme.palette.new.background.elements.disabled
                                    : theme.palette.new.background.elements.default,
                                ...(!isActive && {
                                    pointerEvents: 'none',
                                    cursor: 'default',
                                }),
                            },
                            ...(!isActive && {
                                [`.${inputBaseClasses.root}.${outlinedInputClasses.root}:hover .${outlinedInputClasses.notchedOutline}`]: {
                                    borderColor: getBorderColor(theme, false, error, success),
                                },
                            }),
                            [`.${outlinedInputClasses.notchedOutline}`]: {
                                transition: 'border-color 150ms ease-in-out',
                                borderColor: getBorderColor(theme, false, error, success),
                            },
                            [`.${inputBaseClasses.root}.${outlinedInputClasses.root}.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                                borderColor: getBorderColor(theme, true, error, success),
                            },
                            [`.${inputBaseClasses.root}.${outlinedInputClasses.root}.Mui-disabled .${outlinedInputClasses.notchedOutline}`]: {
                                borderColor: theme.palette.new.border.neutral.default,
                            },
                        }, inputProps: {
                            onKeyDown: event => handleKeyDown(index, event),
                            onPaste: handlePaste,
                            sx: {
                                textAlign: 'center',
                                p: 2,
                                fontSize: theme.typography.h4.fontSize,
                                fontWeight: theme.typography.h4.fontWeight,
                                height: rounded ? '1.5ch' : 'auto',
                            },
                        }, error: error, disabled: disabled }, index));
                }) }), helperText && (_jsx(CustomHelperText, { helperText: helperText, success: success, value: "" }))] }));
};
export default InputOtp;
