import { type LibrariesSidebarProps } from '../../../../LibrariesSidebar';
type SidebarChildrenListProps = Pick<LibrariesSidebarProps, 'loading' | 'onAdd'> & {
    depth?: number;
    parentId: number;
};
export declare const SidebarChildrenList: ({ loading, parentId, onAdd, depth, }: SidebarChildrenListProps) => import("react/jsx-runtime").JSX.Element;
export {};
