import { type MouseEvent, type PropsWithChildren, type ReactNode } from 'react';
import { type IconButtonProps, type TableRowProps as MuiTableRowProps } from '@mui/material';
export type RenderDetailProps = MuiTableRowProps;
export type TableRowProps = PropsWithChildren<MuiTableRowProps & {
    headerRow?: boolean;
    open?: boolean;
    collapsable?: boolean;
    renderDetail?: (rowProps: RenderDetailProps, isOpen: boolean) => ReactNode;
    onCollapse?: (event: MouseEvent<HTMLElement>) => void;
    slotProps?: {
        root?: MuiTableRowProps;
        detail?: MuiTableRowProps;
        collapseButton?: IconButtonProps;
    };
}>;
