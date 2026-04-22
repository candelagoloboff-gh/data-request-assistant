import { type TabsProps } from '@mui/material';
export type Tab = {
    label: any;
};
export type RoundedTabsProps = TabsProps & {
    tabs: Tab[];
    tabIndex: number;
    disabled?: boolean;
};
/**
 * @deprecated Use HuTabs instead
 */
declare const RoundedTabs: ({ tabs, tabIndex, disabled, ...tabsProps }: RoundedTabsProps) => import("react/jsx-runtime").JSX.Element;
export default RoundedTabs;
