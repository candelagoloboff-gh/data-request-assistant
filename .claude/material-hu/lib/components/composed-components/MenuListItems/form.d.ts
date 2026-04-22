import { type FormMenuListItemsProps } from './types';
/**
 * Wrapper for MenuListItems for integration with react-hook-form.
 * Automatically handles form state, validations, and errors.
 *
 * @example
 * ```tsx
 * // Inside a FormProvider
 * <FormMenuListItems
 *   name="selectedCountries"
 *   rules={{ required: 'Please select at least one country' }}
 *   menuListItemsProps={{
 *     items: countries,
 *     title: 'Select countries',
 *     maxSelection: 5
 *   }}
 * />
 * ```
 */
declare const FormMenuListItems: <ItemType extends {
    id: number;
    name: string;
}>({ name, rules, menuListItemsProps, }: FormMenuListItemsProps<ItemType>) => import("react/jsx-runtime").JSX.Element;
export type { FormMenuListItemsProps };
export default FormMenuListItems;
