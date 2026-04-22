import { type DrawerRestoreSize, type DrawerSizeValue } from './types';
/** Drawer size context: current size and setter. Clients can read size and toggle to 'taskFocus' or back to restoreSize. */
export type DrawerSizeContextValue = {
    /** Current drawer size. */
    size: DrawerSizeValue;
    /** Set the drawer size. When enableTaskFocus is true, can toggle to 'taskFocus' or back to restoreSize. */
    setSize: (size: DrawerSizeValue) => void;
    /** Base size to restore to when leaving taskFocus (from drawer props). */
    restoreSize: DrawerRestoreSize;
};
export declare const DrawerSizeContext: import("react").Context<DrawerSizeContextValue>;
export declare const useDrawerSizeContext: () => DrawerSizeContextValue;
