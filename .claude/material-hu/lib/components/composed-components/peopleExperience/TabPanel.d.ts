import { type ReactNode } from 'react';
import { type StackProps } from '@mui/material';
type TabIndex = number;
type TabPanelProps = {
    children: ReactNode;
    value: TabIndex;
};
export declare const TabPanel: ({ children, value }: TabPanelProps) => import("react/jsx-runtime").JSX.Element;
export type TabPanelItemProps = StackProps & {
    children: ReactNode;
    index: TabIndex;
};
export declare const TabPanelItem: ({ children, index, ...other }: TabPanelItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
