import { type LibrariesSidebarProps } from '../../../LibrariesSidebar';
export type SidebarHeaderProps = Pick<LibrariesSidebarProps, 'onBack' | 'loading'> & {
    title: string;
    hide?: boolean;
};
export declare const SidebarHeader: ({ title, onBack, hide, loading, }: SidebarHeaderProps) => import("react/jsx-runtime").JSX.Element | null;
