import { type AutocompleteOption, type FormAutocompleteProps } from './types';
declare const FormAutocomplete: <TValue extends AutocompleteOption = AutocompleteOption, TMultiple extends boolean | undefined = false>({ name, rules, options, autocompleteProps, }: FormAutocompleteProps<TValue, TMultiple>) => import("react/jsx-runtime").JSX.Element;
export type { FormAutocompleteProps };
export default FormAutocomplete;
