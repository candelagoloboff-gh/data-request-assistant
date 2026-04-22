import { type PillsProps } from '../../Pills/types';
import { type TitleProps } from '../../Title';
import { type StackProps } from '@mui/material';
import { type HeaderExtraAction, type HeaderMainAction } from '../types';
export type HeaderContainerProps = {
    children: React.ReactNode;
    slotProps?: {
        root?: StackProps<'header'>;
    };
};
export type HeaderInfoProps = {
    children: React.ReactNode;
    copyLinkButton?: React.ReactNode;
};
export type HeaderActionsProps = {
    children: React.ReactNode;
};
export type HeaderIconButtonProps = {
    Icon?: React.ComponentType;
    onClick?: () => void;
    loading?: boolean;
};
export type HeaderTitleProps = {
    title: string;
    loading?: boolean;
    slotProps?: TitleProps;
};
export type HeaderPillProps = {
    label?: string;
    loading?: boolean;
    pillProps?: Omit<PillsProps, 'label'>;
};
export type HeaderMainActionsProps = {
    actions?: HeaderMainAction[];
    loading?: boolean;
};
export type HeaderExtraActionsProps = {
    actions?: HeaderExtraAction[];
    loading?: boolean;
    closeDropdownOnClick?: boolean;
};
