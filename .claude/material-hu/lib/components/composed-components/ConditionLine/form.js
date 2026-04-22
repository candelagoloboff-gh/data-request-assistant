import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { ConditionOperator, JoinOperator, } from './types';
import ConditionLine from './index';
/**
 * Wrapper for ConditionLine component for react-hook-form integration.
 * Uses individual form controllers for each field (joinOperator, field, conditionOperator, value)
 * allowing for granular validation and error handling.
 *
 * @example
 * ```tsx
 * // Individual field validation
 * <FormConditionLine
 *   name="condition"
 *   rules={{
 *     field: { required: 'Please select a field' },
 *     value: {
 *       required: 'Please select values',
 *       validate: (items) => items.length > 0 || 'At least one value required'
 *     }
 *   }}
 *   conditionLineProps={{
 *     fieldSelectorItems: fields,
 *     valueSelectorItems: values,
 *     onDelete: handleDelete
 *   }}
 * />
 *
 * // The form data structure will be:
 * // {
 * //   condition: {
 * //     joinOperator: 'AND',
 * //     field: { id: 1, name: 'Department' },
 * //     conditionOperator: 'IS_IN',
 * //     value: [{ id: 1, name: 'Frontend' }]
 * //   }
 * // }
 * ```
 */
const FormConditionLine = ({ name, rules, conditionLineProps, }) => {
    const { control } = useFormContext();
    // Individual controllers for each field
    const joinOperatorController = useController({
        control,
        name: `${name}.joinOperator`,
        defaultValue: JoinOperator.AND,
        rules: rules?.joinOperator,
    });
    const fieldController = useController({
        control,
        name: `${name}.field`,
        defaultValue: null,
        rules: rules?.field,
    });
    const conditionOperatorController = useController({
        control,
        name: `${name}.conditionOperator`,
        defaultValue: ConditionOperator.IS_IN,
        rules: rules?.conditionOperator,
    });
    const valueController = useController({
        control,
        name: `${name}.value`,
        defaultValue: [],
        rules: rules?.value,
    });
    // Compose the value object for the base component
    const composedValue = {
        joinOperator: joinOperatorController.field.value,
        field: fieldController.field.value,
        conditionOperator: conditionOperatorController.field.value,
        value: valueController.field.value,
    };
    // Handle changes from the base component and dispatch to individual controllers
    const handleChange = (newValue) => {
        if (newValue.joinOperator !== composedValue.joinOperator) {
            joinOperatorController.field.onChange(newValue.joinOperator);
        }
        if (newValue.field !== composedValue.field) {
            fieldController.field.onChange(newValue.field);
        }
        if (newValue.conditionOperator !== composedValue.conditionOperator) {
            conditionOperatorController.field.onChange(newValue.conditionOperator);
        }
        if (newValue.value !== composedValue.value) {
            valueController.field.onChange(newValue.value);
        }
    };
    // Enhanced slotProps with individual field errors and handlers
    const enhancedSlotProps = useMemo(() => {
        return {
            ...conditionLineProps.slotProps,
            joinOperatorSelector: {
                value: joinOperatorController.field.value,
                onChange: (option) => joinOperatorController.field.onChange(option.value),
                ...conditionLineProps.slotProps?.joinOperatorSelector,
            },
            fieldSelector: {
                value: fieldController.field.value ? [fieldController.field.value] : [],
                onChange: (items) => fieldController.field.onChange(items[0] || null),
                error: !!fieldController.fieldState.error,
                errorText: fieldController.fieldState.error?.message,
                ...conditionLineProps.slotProps?.fieldSelector,
            },
            valueSelector: {
                value: valueController.field.value || [],
                onChange: (items) => valueController.field.onChange(items),
                error: !!valueController.fieldState.error,
                errorText: valueController.fieldState.error?.message,
                ...conditionLineProps.slotProps?.valueSelector,
            },
        };
    }, [
        conditionLineProps.slotProps,
        joinOperatorController.field.value,
        fieldController.field.value,
        valueController.field.value,
    ]);
    return (_jsx(ConditionLine, { ...conditionLineProps, value: composedValue, onChange: handleChange, slotProps: enhancedSlotProps }));
};
export default FormConditionLine;
