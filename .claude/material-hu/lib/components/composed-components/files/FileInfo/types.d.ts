import { type TitleProps } from '../../../design-system/Title/types';
import { type SxProps } from '@mui/material';
export type FileInfoProps = {
    /** Minimal file information */
    file?: {
        name?: string;
        size?: number | string | null;
    };
    /** Component styles */
    sx?: SxProps;
    /** Props for inner components */
    slotProps?: {
        root?: TitleProps;
    };
};
