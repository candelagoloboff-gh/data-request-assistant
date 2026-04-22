import { type ComponentType, type ReactNode } from 'react';
import { type Key } from 'react-hook-form/dist/types/path/common';
import { type StackProps } from '@mui/material';
export type Tab = {
    id: Key;
    title: string;
    element: ReactNode;
};
type TabSidebarProps = {
    title: string;
    selectedIndex: number;
    onChangeIndex: (nextIndex: number) => void;
    tabs: Tab[];
    layout?: ComponentType<{
        children: ReactNode;
    }>;
    slotProps?: Partial<{
        tabs: StackProps;
        layout: {
            skipFilters?: boolean;
            skipComparisonFilter?: boolean;
        };
    }>;
};
declare const SideTabNavigation: ({ selectedIndex, onChangeIndex, tabs, title, layout: Layout, slotProps, }: TabSidebarProps) => import("react/jsx-runtime").JSX.Element;
export default SideTabNavigation;
