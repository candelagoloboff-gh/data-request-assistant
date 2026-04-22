import { type AutoSaveStatus, type UseAutoSaveOptions } from './types';
/**
 * Generic auto-save hook.
 *
 * Debounces `value` changes and persists them via `onSave`.
 * Tracks save status and `lastSavedAt` timestamp.
 * Guards against data loss with `beforeunload` and flush-on-unmount.
 */
export declare const useAutoSave: <T>({ value, savedValue, onSave, debounceMs, enabled, }: UseAutoSaveOptions<T>) => {
    status: AutoSaveStatus;
    lastSavedAt: Date | null;
    saveNow: () => void;
    retrySave: () => Promise<void>;
};
export type { AutoSaveStatus, UseAutoSaveOptions };
