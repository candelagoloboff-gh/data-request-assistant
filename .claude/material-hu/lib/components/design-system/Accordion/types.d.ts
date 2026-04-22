import { type ReactNode } from 'react';
import { type TitleProps } from '../Title';
import { type IconButtonProps, type AccordionProps as MuiAccordionProps } from '@mui/material';
import { type MenuListProps } from '../../composed-components/MenuList/types';
import { type AvatarProps } from '../Avatar/types';
import { type PillsProps } from '../Pills/types';
export type AccordionProps = Omit<MuiAccordionProps, 'children'> & {
    /** Main heading text displayed in the accordion header */
    title: string;
    /** Avatar displayed alongside the title */
    avatar?: AvatarProps;
    /** Secondary text shown below the title */
    caption?: string;
    /** Content rendered inside the expanded accordion body */
    description?: React.ReactNode;
    /** Pill/tag displayed in the accordion header */
    pill?: PillsProps;
    /** Custom content rendered in the detail area */
    customDetail?: ReactNode;
    /** Text-based detail with a description, link, and label */
    textDetail?: {
        description: string;
        link: string;
        label: string;
    };
    /** MUI sx prop for custom styling */
    sx?: MuiAccordionProps['sx'];
    /** Context menu list rendered inside the accordion header */
    menuList?: MenuListProps;
    /** Adds padding to the accordion body */
    hasPadding?: boolean;
    /** Icon button action displayed in the header */
    action?: IconButtonProps;
    /** Truncates the title with an ellipsis when it overflows */
    withTitleEllipsis?: boolean;
    /** Props forwarded to inner slots */
    slotProps?: {
        title?: Partial<TitleProps>;
    };
};
