import { type FC } from 'react';
import { type DrawerProps } from '../components/design-system/Drawer/types';
/** Manages a persistent side-sheet drawer that pushes content to the left when open. */
declare function useSidesheet<T>(DrawerContentComponent: FC<T>, drawerProps?: Partial<DrawerProps> & {
    whenClose?: () => void;
}, extraProps?: Partial<T>): {
    containerStyles: {
        display: string;
        height: string;
        marginRight: string;
    };
    drawer: import("react/jsx-runtime").JSX.Element;
    closeDrawer: () => void;
    showDrawer: (props?: Partial<T>) => void;
};
export { useSidesheet };
