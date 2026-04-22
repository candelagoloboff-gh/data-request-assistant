import { type DrawerProps } from '../components/design-system/Drawer/types';
export type GetDrawerConfiguration<T = {}> = (props: {
    closeDrawer: () => void;
    open: boolean;
} & T) => Partial<DrawerProps>;
/**
 * Manages a Drawer's open/close state and renders it with a dynamic configuration callback.
 * @deprecated Use `useDrawerLayer` or `useDrawerLayerItem` instead
 */
export declare function useDrawerV2<T>(getDrawerConfiguration: GetDrawerConfiguration<T>): {
    open: boolean;
    drawer: import("react/jsx-runtime").JSX.Element;
    closeDrawer: () => void;
    showDrawer: (props: Partial<T>) => void;
};
