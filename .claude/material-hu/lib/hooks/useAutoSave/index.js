import { useCallback, useEffect, useRef, useState } from 'react';
import { useDebounce } from '../useDebounce';
import { isEqual } from 'lodash';
/**
 * Generic auto-save hook.
 *
 * Debounces `value` changes and persists them via `onSave`.
 * Tracks save status and `lastSavedAt` timestamp.
 * Guards against data loss with `beforeunload` and flush-on-unmount.
 */
export const useAutoSave = ({ value, savedValue, onSave, debounceMs = 2000, enabled = true, }) => {
    const [status, setStatus] = useState('idle');
    const [lastSavedAt, setLastSavedAt] = useState(null);
    const refs = useRef({ value, savedValue, onSave, isSaving: false });
    refs.current.value = value;
    refs.current.savedValue = savedValue;
    refs.current.onSave = onSave;
    const debouncedValue = useDebounce(value, debounceMs);
    const save = useCallback(async (valueToSave) => {
        if (refs.current.isSaving)
            return;
        refs.current.isSaving = true;
        setStatus('saving');
        try {
            await refs.current.onSave(valueToSave);
            setLastSavedAt(new Date());
            setStatus('saved');
        }
        catch {
            setStatus('error');
        }
        finally {
            refs.current.isSaving = false;
        }
    }, []);
    const hasPendingChanges = useCallback(() => !isEqual(refs.current.value, refs.current.savedValue), []);
    useEffect(() => {
        if (!enabled)
            return;
        if (!isEqual(debouncedValue, refs.current.savedValue)) {
            save(debouncedValue);
        }
    }, [debouncedValue, enabled, save]);
    const saveNow = () => {
        if (hasPendingChanges() && !refs.current.isSaving) {
            save(refs.current.value);
        }
    };
    const retrySave = () => save(refs.current.value);
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (hasPendingChanges())
                event.preventDefault();
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            if (hasPendingChanges() && !refs.current.isSaving) {
                refs.current.onSave(refs.current.value).catch(() => undefined);
            }
        };
    }, [hasPendingChanges]);
    return {
        status,
        lastSavedAt,
        saveNow,
        retrySave,
    };
};
