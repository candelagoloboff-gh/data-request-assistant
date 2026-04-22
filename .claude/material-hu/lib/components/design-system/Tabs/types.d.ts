import { type TabsProps as MuiTabsProps } from '@mui/material';
import { type BadgeProps } from '../Badge/types';
export type TabsProps = {
    /** Custom styles applied to the tabs root */
    sx?: MuiTabsProps['sx'];
    /** Initial selected tab value (uncontrolled mode) */
    defaultValue?: MuiTabsProps['defaultValue'];
    /** Currently selected tab value (controlled mode) */
    value?: MuiTabsProps['value'];
    /** Layout variant: standard, scrollable, or fullWidth */
    variant?: MuiTabsProps['variant'];
    /** Controls scroll button visibility when tabs overflow */
    scrollButtons?: MuiTabsProps['scrollButtons'];
    /** Array of tab definitions to render */
    tabs: {
        /** Display text for the tab */
        label: string;
        /** Identifier used to match the active tab */
        value: string;
        /** Shows a dot notification badge on the tab */
        hasBadge?: boolean;
        /** Props forwarded to inner slots */
        slotProps?: {
            /** Props forwarded to the Badge component. When provided, takes precedence over hasBadge */
            badge?: Omit<BadgeProps, 'children'>;
        };
    }[];
    /** Callback fired when the selected tab changes */
    onTabChange?: (value: string, index: number) => void;
};
