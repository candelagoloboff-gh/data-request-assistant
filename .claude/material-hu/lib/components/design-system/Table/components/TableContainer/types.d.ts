import { type PropsWithChildren } from 'react';
import { type TableContainerProps as MuiTableContainerProps } from '@mui/material';
export type TableContainerProps = PropsWithChildren<Omit<MuiTableContainerProps, 'ref'>> & {
    containerRef?: MuiTableContainerProps['ref'];
};
