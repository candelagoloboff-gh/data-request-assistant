import { type MouseEvent, type ReactNode } from 'react';
import { type IconButtonProps as MuiIconButtonProps, type ListItemButtonProps as MuiListItemButtonProps, type ListItemProps as MuiListItemProps, type StackProps, type SxProps } from '@mui/material';
import { type TablerIcon } from '@tabler/icons-react';
import { type AvatarProps } from '../../../Avatar';
import { type AvatarGroupProps } from '../../../AvatarGroup/types';
import { type PillsProps } from '../../../Pills/types';
import { type TitleProps } from '../../../Title';
/**
 * Click event handler type for list items
 */
export type ListItemClickHandler = (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
/**
 * Common props that can be applied to any list item
 */
export type CommonListItemProps = {
    /** Unique identifier for the list item */
    id?: string;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** Whether the item is selected */
    selected?: boolean;
    /** Whether the item is in a loading state */
    loading?: boolean;
    /** Custom styles */
    sx?: StackProps['sx'];
};
/**
 * Base properties for list container components
 * Combines MUI ListItem and ListItemButton props
 */
export type ListContainerProps = {
    /** Content rendered inside the list item */
    children?: MuiListItemProps['children'];
    /** Shows a divider line after the list item */
    divider?: MuiListItemProps['divider'];
    /** Custom styles applied to the list item */
    sx?: MuiListItemProps['sx'];
    /** Root element type used for the list item */
    component?: MuiListItemProps['component'];
    /** Prevents interaction with the list item */
    disabled?: MuiListItemButtonProps['disabled'];
    /** Whether the list item is in a selected state */
    selected?: MuiListItemButtonProps['selected'];
};
/**
 * Text content configuration for list items
 */
export type ListItemTextProps = Pick<TitleProps, 'copetin' | 'title' | 'description' | 'withEllipsis' | 'overflow' | 'date'>;
/**
 * Avatar configuration for list items
 */
export type ListItemAvatarProps = Pick<AvatarProps, 'src' | 'alt' | 'text' | 'Icon' | 'color' | 'withBadge' | 'badgeProps' | 'variant'>;
/**
 * Action button configuration for list items
 */
export type ListItemActionProps = {
    /** HTML id attribute for the action button */
    id?: MuiIconButtonProps['id'];
    /** Color of the action button */
    color?: MuiIconButtonProps['color'];
    /** Disables the action button */
    disabled?: MuiIconButtonProps['disabled'];
    /** Callback fired when the action button is clicked */
    onClick?: MuiIconButtonProps['onClick'];
    /** Accessible label for the action button */
    'aria-label'?: MuiIconButtonProps['aria-label'];
    /** Visual variant of the action button */
    variant?: MuiIconButtonProps['variant'];
    /** Tabler icon rendered inside the action button */
    Icon: TablerIcon;
};
/**
 * Main props interface for the ListItem component
 * Extends base container props with additional functionality
 */
export type ListItemProps = Omit<ListContainerProps, 'children' | 'sx'> & Pick<StackProps, 'id' | 'sx'> & SideContentProps & {
    /** Whether the item is in a loading state */
    loading?: boolean;
    /** Click handler for the entire list item */
    onClick?: ListItemClickHandler;
    /** Text content */
    text?: ListItemTextProps;
    /** Avatar configuration */
    avatar?: ListItemAvatarProps;
    /** Action button configuration */
    action?: ListItemActionProps;
    /** Action button configuration */
    action2?: ListItemActionProps;
    /** @deprecated Menu list for additional actions. Use `action` or `action2` instead. */
    actionMenuList?: ReactNode;
    /** @deprecated Additional content displayed on the side. Use `sidePill`, `sideText`, or `sideAvatars` instead. */
    sideContent?: ReactNode;
    /** Slot props for the component */
    slotProps?: {
        container?: {
            sx?: SxProps;
        };
        avatar?: AvatarProps;
        title?: Pick<TitleProps, 'slotProps'>;
    };
    /** Whether to show a divider after this item */
    divider?: boolean;
};
export type SideContentProps = {
    /** Pill content displayed on the side */
    sidePill?: Pick<PillsProps, 'label' | 'type' | 'size' | 'hasIcon'>;
    /** Text content displayed on the side */
    sideText?: Pick<TitleProps, 'copetin' | 'title'>;
    /** Avatars group content displayed on the side */
    sideAvatars?: Pick<AvatarGroupProps, 'avatars'>;
};
export type WithIdentifier<T> = T & {
    id: string;
};
