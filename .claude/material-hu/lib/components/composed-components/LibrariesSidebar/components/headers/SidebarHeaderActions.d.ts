import { type LibrariesSidebarProps } from '../../../LibrariesSidebar';
type SidebarHeaderActionsProps = Pick<LibrariesSidebarProps, 'loading' | 'slotProps' | 'parentId' | 'onAdd'> & {
    title?: string;
    isEmpty?: boolean;
};
export declare const SidebarHeaderActions: ({ title, parentId, isEmpty, onAdd, loading, slotProps, }: SidebarHeaderActionsProps) => import("react/jsx-runtime").JSX.Element;
export {};
