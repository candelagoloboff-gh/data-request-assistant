import { type AutocompleteOption, type AutocompleteProps } from './types';
declare const Autocomplete: <TValue extends AutocompleteOption = AutocompleteOption, TMultiple extends boolean | undefined = false>(props: AutocompleteProps<TValue, TMultiple>) => import("react/jsx-runtime").JSX.Element;
export type { AutocompleteProps };
export default Autocomplete;
