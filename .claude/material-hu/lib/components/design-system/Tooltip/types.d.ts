import { type ReactNode } from 'react';
import { type TooltipProps as MUITooltipProps } from '@mui/material';
/**
 * @deprecated Use HuTooltip and HuTooltipProps instead.
 */
export type { MUITooltipProps };
export type TooltipBodyProps = {
    /** Bold heading text inside the tooltip */
    title?: ReactNode;
    /** Secondary text shown below the title inside the tooltip */
    description?: ReactNode;
};
export type TooltipProps = TooltipBodyProps & {
    /** Placement of the tooltip relative to its anchor */
    direction?: 'top' | 'left' | 'right' | 'bottom';
    /** When true, prevents the tooltip from showing */
    disableTooltip?: boolean;
    /** Delay in milliseconds before the tooltip appears */
    delay?: number;
    /** Element that triggers the tooltip */
    children: any;
    /** Custom styles applied to the tooltip */
    sx?: MUITooltipProps['sx'];
    /** Props forwarded to inner MUI slot components */
    slotProps?: MUITooltipProps['slotProps'];
    /** Controls the open state of the tooltip */
    open?: boolean;
    /** Makes the tooltip follow the cursor position */
    followCursor?: boolean;
};
