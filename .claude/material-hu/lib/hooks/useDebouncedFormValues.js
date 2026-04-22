import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
const DEFAULT_DELAY = 500;
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
const useDebouncedFormValues = (delay = DEFAULT_DELAY) => {
    const { watch, getValues } = useFormContext();
    const [formValues, setFormValues] = useState(getValues());
    const timerRef = useRef();
    useEffect(() => {
        const subscription = watch(values => {
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                setFormValues({ ...values });
            }, delay);
        });
        return () => {
            clearTimeout(timerRef.current);
            subscription.unsubscribe();
        };
    }, [watch, delay]);
    return formValues;
};
export { useDebouncedFormValues };
