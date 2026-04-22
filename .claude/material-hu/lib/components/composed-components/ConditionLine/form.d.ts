import { type DefaultItemType, type FormConditionLineProps } from './types';
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
declare const FormConditionLine: <FieldItemType extends DefaultItemType, ValueItemType extends DefaultItemType>({ name, rules, conditionLineProps, }: FormConditionLineProps<FieldItemType, ValueItemType>) => import("react/jsx-runtime").JSX.Element;
export type { FormConditionLineProps };
export default FormConditionLine;
