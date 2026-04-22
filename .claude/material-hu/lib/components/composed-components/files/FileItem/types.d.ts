import { type ReactNode } from 'react';
import { type FileIconProps } from '../../files/FileIcon/types';
import { type FileInfoProps } from '../../files/FileInfo/types';
import { type MenuListProps } from '../../MenuList/types';
import { type CardContainerProps } from '../../../design-system/CardContainer/types';
import { type SxProps } from '@mui/material';
export type FileItemProps = {
    /** Minimal file information */
    file?: {
        name?: string;
        size?: number | string | null;
    };
    /** Menu actions */
    actions?: MenuListProps['options'];
    /** Additional content displayed on the start */
    startContent?: ReactNode;
    /** Component styles */
    sx?: SxProps;
    /** Props for inner components */
    slotProps?: {
        root?: CardContainerProps;
        icon?: FileIconProps;
        info?: FileInfoProps;
        menu?: MenuListProps;
    };
};
