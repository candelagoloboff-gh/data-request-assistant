import { jsx as _jsx } from "react/jsx-runtime";
import { useController, useFormContext } from 'react-hook-form';
import MenuListItems from './index';
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
const FormMenuListItems = ({ name, rules, menuListItemsProps, }) => {
    const { control } = useFormContext();
    const { field, fieldState } = useController({
        control,
        name,
        defaultValue: [],
        rules,
    });
    return (_jsx(MenuListItems, { ...menuListItemsProps, value: field.value || [], onChange: field.onChange, error: !!fieldState.error, errorText: fieldState.error?.message }));
};
export default FormMenuListItems;
