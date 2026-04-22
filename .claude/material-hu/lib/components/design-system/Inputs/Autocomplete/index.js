import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { alpha, autocompleteClasses, CircularProgress, createFilterOptions, FormControl, formHelperTextClasses, InputAdornment, inputBaseClasses, Autocomplete as MUIAutocomplete, TextField, useTheme, } from '@mui/material';
import { IconChevronDown, IconCirclePlus, IconExclamationCircle, IconX, } from '@tabler/icons-react';
import { debounce } from 'lodash';
import Chip from '../../Chip';
import Title from '../../Title';
import CustomHelperText from '../Base/CustomHelperText';
import CustomLabel from '../Base/CustomLabel';
import { getBorderColor } from '../utils';
import AutocompleteItem from './components/AutocompleteItem';
import VirtualizedListbox from './components/VirtualizedListbox';
import { getCreatableInputText, getCreatableValue, isCreatableOption, isEqualText, } from './constants';
const Autocomplete = (props) => {
    const [focused, setFocused] = useState(false);
    const theme = useTheme();
    const { t } = useTranslation('material_hu_only');
    const hasCreateRef = useRef(false);
    const { hasError, helperText, placeholder, label, fieldRef, onCreate, onChange, onLoadMore, hasMoreOptions, onInputChange = () => { }, isServerFiltered = true, renderTags, noOptionsMessage, renderOption, loadMoreIndexOffset = 0, virtualized = false, filterLimit, type, ...fieldProps } = props;
    const [loadMoreRef] = useInView({
        onChange: inView => {
            if (inView) {
                onLoadMore?.();
            }
        },
    });
    const getStatusTextColor = () => {
        if (fieldProps.disabled) {
            return theme.palette.new.text.neutral.disabled;
        }
        return hasError
            ? theme.palette.new.text.feedback.error
            : theme.palette.new.text.neutral.lighter;
    };
    const statusTextColor = getStatusTextColor();
    const debouncedOnInputChange = useMemo(() => debounce(onInputChange, 500), []);
    useEffect(() => () => {
        debouncedOnInputChange.cancel();
    }, []);
    const defaultFilterOptions = createFilterOptions(filterLimit ? { limit: filterLimit } : undefined);
    const renderTagsFn = renderTags ??
        (fieldProps.multiple
            ? (value, getTagProps) => value.map((option, index) => {
                const { key, ...tagProps } = getTagProps({ index });
                return (_jsx(Chip, { label: option.label, sx: { m: 0.25 }, ...tagProps }, key));
            })
            : undefined);
    return (_jsxs(FormControl, { error: hasError, fullWidth: fieldProps.fullWidth ?? true, disabled: fieldProps.disabled, onFocus: () => setFocused(true), onBlur: () => setFocused(false), children: [label && _jsx(CustomLabel, { label: label }), _jsx(MUIAutocomplete, { fullWidth: true, selectOnFocus: true, handleHomeEndKeys: true, clearOnBlur: true, ...(virtualized
                    ? {
                        ListboxComponent: VirtualizedListbox,
                    }
                    : { ListboxProps: { sx: { maxHeight: 240 } } }), sx: {
                    '& .MuiAutocomplete-endAdornment': {
                        color: 'inherit',
                    },
                    '& .MuiAutocomplete-clearIndicator': {
                        color: 'inherit',
                    },
                    '& .MuiAutocomplete-popupIndicator': {
                        color: 'inherit',
                    },
                }, popupIcon: _jsx(IconChevronDown, { style: { color: 'inherit' }, size: 20 }), clearIcon: _jsx(IconX, { style: { color: 'inherit' }, size: 20 }), getOptionKey: option => option.value, onInputChange: isServerFiltered ? debouncedOnInputChange : onInputChange, isOptionEqualToValue: (option, selected) => option.value === selected.value, filterOptions: (options, state) => {
                    const nextOptions = isServerFiltered
                        ? Array.from(options)
                        : defaultFilterOptions(options, state);
                    if (onCreate) {
                        const { inputValue, getOptionLabel } = state;
                        const trimmedInput = inputValue.trim();
                        const isExisting = nextOptions.some(option => isEqualText(inputValue, getOptionLabel(option)));
                        if (!isExisting && trimmedInput) {
                            hasCreateRef.current = true;
                            nextOptions.unshift({
                                label: t('hu_inputs.create_option', { label: inputValue }),
                                value: getCreatableValue(trimmedInput),
                            });
                        }
                        else {
                            hasCreateRef.current = false;
                        }
                    }
                    return nextOptions;
                }, renderOption: (...renderArgs) => {
                    const [{ key, ...optionProps }, option, state] = renderArgs;
                    const { index } = state;
                    const isCreatable = isCreatableOption(option.value);
                    const content = [
                        renderOption?.(...renderArgs) ?? (_jsxs(AutocompleteItem, { ...optionProps, children: [isCreatable && (_jsx(IconCirclePlus, { size: 20, color: theme.palette.primary.main })), _jsx(Title, { title: option.label, description: option.description, variant: "S", fontWeight: "fontWeightRegular", slotProps: {
                                        title: {
                                            sx: isCreatable
                                                ? {
                                                    color: theme.palette.primary.main,
                                                    marginLeft: theme.spacing(1),
                                                }
                                                : undefined,
                                        },
                                    } })] }, key)),
                    ];
                    const optionsLen = hasCreateRef.current
                        ? fieldProps.options.length
                        : fieldProps.options.length - 1;
                    const isLoadMoreVisible = index === optionsLen + loadMoreIndexOffset && hasMoreOptions;
                    const { className } = optionProps;
                    if (isLoadMoreVisible) {
                        content.push(_jsx(AutocompleteItem, { ref: loadMoreRef, className: className, sx: {
                                alignItems: 'center',
                                justifyContent: 'center !important',
                                [`&.${autocompleteClasses.option}:hover`]: {
                                    backgroundColor: 'transparent',
                                },
                            }, children: _jsx(CircularProgress, { size: 24 }) }, "load-more"));
                    }
                    return content;
                }, disableCloseOnSelect: fieldProps.multiple, onChange: (_event, selectedOption, reason) => {
                    const nextValue = fieldProps.multiple
                        ? selectedOption?.[selectedOption?.length - 1]?.value
                        : selectedOption?.value;
                    if (reason === 'selectOption' && isCreatableOption(nextValue)) {
                        onCreate?.(getCreatableInputText(nextValue));
                    }
                    else {
                        onChange?.(selectedOption, reason);
                    }
                }, getOptionLabel: option => isCreatableOption(option.value)
                    ? getCreatableInputText(option.value)
                    : option.label, ...fieldProps, ref: fieldRef, renderInput: params => (_jsx(TextField, { variant: "outlined", type: type, ...params, error: hasError, FormHelperTextProps: {
                        component: 'div',
                        sx: { display: 'contents' },
                    }, helperText: _jsx(CustomHelperText, { component: "span", helperText: helperText, value: "" }), placeholder: placeholder, sx: {
                        [`& .${formHelperTextClasses.root}`]: {
                            mt: 1,
                            mx: 0,
                            color: theme.palette.new.text.neutral.lighter,
                        },
                        [`.${inputBaseClasses.root}`]: {
                            backgroundColor: fieldProps.disabled
                                ? theme.palette.new.background.elements.disabled
                                : theme.palette.new.background.elements.default,
                        },
                        [`.${inputBaseClasses.root} fieldset`]: {
                            transition: 'border 125ms ease',
                            borderWidth: '1px !important',
                            borderColor: `${getBorderColor(theme, focused, hasError, false, !!(fieldProps.value && (Array.isArray(fieldProps.value) ? fieldProps.value.length > 0 : true)))} !important`,
                        },
                    }, InputProps: {
                        ...params.InputProps,
                        endAdornment: (_jsxs(InputAdornment, { position: "end", sx: { color: 'inherit' }, children: [params.InputProps.endAdornment, fieldProps.loading && (_jsx(CircularProgress, { sx: { color: 'inherit' }, size: 20 })), hasError && (_jsx(IconExclamationCircle, { size: 20, style: {
                                        color: statusTextColor,
                                    } }))] })),
                        sx: {
                            ...(fieldProps.disabled && {
                                bgcolor: alpha(theme.palette.new.border.neutral.default, 0.5),
                                border: `1px solid ${theme.palette.new.border.neutral.default}`,
                            }),
                            color: theme.palette.new.text.neutral.default,
                            fontSize: 'globalS',
                            transition: 'border 0.3s ease',
                        },
                    }, InputLabelProps: {
                        shrink: params.inputProps.ref
                            .current === document.activeElement ||
                            !!params.inputProps.value ||
                            fieldProps.loading,
                    } })), noOptionsText: _jsx(Title, { variant: "S", title: noOptionsMessage?.title || t('hu_inputs.no_results_found'), description: noOptionsMessage
                        ? noOptionsMessage.description
                        : t('hu_inputs.select_option_in_list') }), loadingText: _jsx(Title, { variant: "S", title: t('hu_inputs.loading') }), renderTags: renderTagsFn, getLimitTagsText: more => (_jsx(Chip, { disabled: fieldProps.disabled, label: `+${more}`, sx: { m: 0.25 } })) })] }));
};
export default Autocomplete;
