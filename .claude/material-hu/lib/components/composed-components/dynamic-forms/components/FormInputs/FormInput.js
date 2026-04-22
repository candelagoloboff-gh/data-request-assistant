import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense, useMemo } from 'react';
import { transformIntegerInput } from '../../../dynamic-forms/utils/extraUtils';
import Spinner from '../../../../design-system/ProgressIndicators/Spinner';
import Typography from '@mui/material/Typography';
import InputFile from './InputFile';
const FormAutocomplete = lazy(() => import('../../../../design-system/Inputs/Autocomplete/form'));
const FormDatePicker = lazy(() => import('../../../../design-system/Inputs/DatePicker/form'));
const FormInputClassic = lazy(() => import('../../../../design-system/Inputs/Classic/form'));
const FormInputPhone = lazy(() => import('../../../../design-system/Inputs/Phone/form'));
const FormRating = lazy(() => import('../../../../design-system/Rating/form'));
const FormTimePicker = lazy(() => import('../../../TimePicker/form'));
const InputSelectableList = lazy(() => import('./InputSelectableList'));
const InputSign = lazy(() => import('./InputSign'));
const ComponentLoader = ({ children }) => {
    return _jsx(Suspense, { fallback: _jsx(Spinner, {}), children: children });
};
const FormInput = ({ name, component, isFrozen, slotProps, }) => {
    const disabled = component.content.disabled;
    const disabledOrFrozen = disabled || isFrozen || false;
    const options = useMemo(() => {
        const inputsWithOptions = [
            'DROPDOWN',
            'MULTIPLE_CHOICE',
            'CHECKBOX',
            'RATING',
        ];
        if ('choices' in component.content &&
            inputsWithOptions.includes(component.type)) {
            return component.content.choices?.map((choice, index) => ({
                id: index,
                label: choice,
                value: choice,
            }));
        }
        return [];
    }, [component.content, component.type]);
    const isMultipleSelect = component.type === 'RATING' || component.type === 'CHECKBOX';
    const RenderInput = useMemo(() => {
        switch (component.type) {
            case 'AUTOCOMPLETE':
                return (_jsx(ComponentLoader, { children: _jsx(FormInputClassic, { name: name, inputProps: {
                            disabled: disabledOrFrozen,
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            ...slotProps?.fields?.AUTOCOMPLETE,
                        } }) }));
            case 'TEXT':
                return (_jsx(ComponentLoader, { children: _jsx(FormInputClassic, { name: name, inputProps: {
                            disabled: disabledOrFrozen,
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            ...slotProps?.fields?.TEXT,
                        } }) }));
            case 'DATE': {
                const hasDay = component.validations?.pattern?.includes('dd');
                const views = hasDay
                    ? ['year', 'month', 'day']
                    : ['month', 'year'];
                return (_jsx(ComponentLoader, { children: _jsx(FormDatePicker, { name: name, inputProps: {
                            disabled: disabledOrFrozen,
                            views,
                            format: hasDay ? 'dd/MM/yyyy' : 'MM/yyyy',
                            fullWidth: true,
                            ...slotProps?.fields?.DATE,
                        } }) }));
            }
            case 'TIME':
                return (_jsx(ComponentLoader, { children: _jsx(FormTimePicker, { name: name, inputProps: {
                            disabled: disabledOrFrozen,
                            fullWidth: true,
                            ...slotProps?.fields?.TIME,
                        } }) }));
            case 'PHONE':
                return (_jsx(ComponentLoader, { children: _jsx(FormInputPhone, { name: name, disabled: disabledOrFrozen, inputProps: {
                            ...slotProps?.fields?.PHONE,
                        } }) }));
            case 'SIGNATURE':
                return (_jsx(ComponentLoader, { children: _jsx(InputSign, { name: name, disabled: disabledOrFrozen, ...slotProps?.fields?.SIGNATURE }) }));
            case 'INTEGER':
                return (_jsx(ComponentLoader, { children: _jsx(FormInputClassic, { name: name, inputProps: {
                            step: 1,
                            disabled: disabledOrFrozen,
                            inputMode: 'numeric',
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            hasCounter: false,
                            transform: {
                                input: value => value?.replace(/[^0-9]/g, '') || '',
                            },
                            ...slotProps?.fields?.INTEGER,
                        } }) }));
            case 'FLOAT':
                return (_jsx(ComponentLoader, { children: _jsx(FormInputClassic, { name: name, inputProps: {
                            disabled: disabledOrFrozen,
                            step: 0.01,
                            inputMode: 'decimal',
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            hasCounter: false,
                            transform: {
                                input: transformIntegerInput,
                            },
                            ...slotProps?.fields?.FLOAT,
                        } }) }));
            case 'DROPDOWN':
                return (_jsx(ComponentLoader, { children: _jsx(FormAutocomplete, { name: name, options: options, disabled: disabledOrFrozen, 
                        // @ts-expect-error - This had to be added due to TypeScript limitations on complex types
                        autocompleteProps: {
                            disabled: disabledOrFrozen,
                            multiple: isMultipleSelect,
                            isServerFiltered: false,
                            ...slotProps?.fields?.DROPDOWN,
                        } }) }));
            case 'CHECKBOX':
                return (_jsx(ComponentLoader, { children: _jsx(InputSelectableList, { name: name, options: options, disabled: disabledOrFrozen, isMultipleSelect: isMultipleSelect, fieldProps: slotProps?.fields?.CHECKBOX }) }));
            case 'MULTIPLE_CHOICE':
                return (_jsx(ComponentLoader, { children: _jsx(InputSelectableList, { name: name, options: options, disabled: disabledOrFrozen, isMultipleSelect: isMultipleSelect, fieldProps: slotProps?.fields?.MULTIPLE_CHOICE }) }));
            case 'RATING':
                return (_jsx(ComponentLoader, { children: _jsx(InputSelectableList, { name: name, options: options, disabled: disabledOrFrozen, isMultipleSelect: isMultipleSelect }) }));
            case 'STAR_RATING':
                return (_jsx(ComponentLoader, { children: _jsx(FormRating, { name: name, inputProps: {
                            disabled: disabledOrFrozen,
                            ...slotProps?.fields?.STAR_RATING,
                        } }) }));
            case 'FILE':
                return (_jsx(ComponentLoader, { children: _jsx(InputFile, { initialFiles: component.answer || [], readOnly: isFrozen, name: name, disabled: disabled, uploadFn: slotProps?.fields?.FILE?.uploadFn, slotProps: {
                            uploader: {
                                disabled,
                                sx: {
                                    width: '100%',
                                },
                            },
                        } }) }));
            case 'INFO':
                return _jsx(Typography, { children: component.content.title });
            default:
                return null;
        }
    }, [component.type, name, disabled, options, isMultipleSelect, component]);
    return RenderInput;
};
export default FormInput;
