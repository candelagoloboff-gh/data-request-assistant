import { type TitleProps } from '../../../design-system/Title';
import { type StackProps } from '@mui/material';
export declare enum EmptyStateVariant {
    DEFAULT = "default",
    DASHED = "dashed"
}
export type EmptyStateProps = {
    title: string;
    description: string;
    footer?: React.ReactNode;
    hideIcon?: boolean;
    variant?: EmptyStateVariant;
    slotProps?: Partial<{
        root: StackProps;
        title: TitleProps;
    }>;
};
