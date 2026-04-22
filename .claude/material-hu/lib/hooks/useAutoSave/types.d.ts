/** Current state of the auto-save cycle. */
export type AutoSaveStatus = 'idle' | 'saving' | 'saved' | 'error';
export type UseAutoSaveOptions<T> = {
    /** Live value to watch for changes. */
    value: T;
    /** Last value successfully persisted (used to detect dirty state). */
    savedValue: T;
    /** Async function called to persist `value`. */
    onSave: (value: T) => Promise<unknown>;
    /** Debounce delay in ms before triggering a save (default: 2000). */
    debounceMs?: number;
    /** Toggle auto-save on/off without unmounting (default: true). */
    enabled?: boolean;
};
