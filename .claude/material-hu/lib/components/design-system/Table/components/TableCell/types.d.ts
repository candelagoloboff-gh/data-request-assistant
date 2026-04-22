import { type PropsWithChildren } from 'react';
import { type TableCellProps as MuiTableCellProps } from '@mui/material';
import { type TooltipProps } from '../../../Tooltip/types';
export type TableCellProps = PropsWithChildren<MuiTableCellProps & {
    headerCell?: boolean;
    actionable?: boolean;
    selectionCell?: boolean;
    collapsableCell?: boolean;
    tooltipTitle?: string;
    tooltipProps?: Omit<TooltipProps, 'children'>;
}>;
