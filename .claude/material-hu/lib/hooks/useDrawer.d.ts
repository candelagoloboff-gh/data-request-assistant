import { type FC } from 'react';
import { type DrawerProps } from '../components/design-system/Drawer/types';
/**
 *
 * @deprecated Use `useDrawerLayer` or `useDrawerLayerItem` instead
 */
declare function useDrawer<T>(DrawerContentComponent: FC<T>, drawerProps?: Partial<DrawerProps>, extraProps?: Partial<T>): {
    drawer: import("react/jsx-runtime").JSX.Element;
    closeDrawer: () => void;
    showDrawer: (props?: Partial<T>) => void;
};
export { useDrawer };
