import { type FieldValues } from 'react-hook-form';
/**
 * Returns debounced form values from the nearest `FormProvider`.
 *
 * Unlike `useDebounce`, this hook uses react-hook-form's subscription-based
 * `watch()` to detect changes, so it works correctly with non-serialisable
 * field values such as `Set` or `Map` (which `JSON.stringify` ignores).
 *
 * On mount it returns the current snapshot via `getValues()`.
 * Afterwards, every form change restarts a debounce timer; the returned
 * values only update once the user stops editing for `delay` ms.
 */
declare const useDebouncedFormValues: <TValues extends FieldValues>(delay?: number) => TValues;
export { useDebouncedFormValues };
