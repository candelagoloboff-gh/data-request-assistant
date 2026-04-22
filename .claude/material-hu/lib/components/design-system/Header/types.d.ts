import { type DropdownProps } from '../Dropdown/types';
import { type ListItemAvatarProps } from '../List/components/ListItem/types';
import { type PillsProps } from '../Pills/types';
import { type TitleProps } from '../Title';
import { type ButtonProps, type StackProps } from '@mui/material';
export type HeaderMainAction = (ButtonProps | DropdownProps) & {
    /** Unique identifier for the action, used as React key */
    key: React.Key;
    /** When true, renders the action as a Dropdown instead of a Button */
    dropdown?: boolean;
};
export type HeaderExtraAction = {
    /** Unique identifier for the action, used as React key */
    key: React.Key;
    /** Primary label displayed for the action */
    title: string;
    /** Optional secondary text displayed below the title */
    description?: string;
    /** Callback fired when the action is selected */
    onClick: () => void;
    /** Optional avatar shown alongside the action */
    avatar?: ListItemAvatarProps;
};
export type HeaderSlotProps = {
    /** Props forwarded to the Title component */
    title?: TitleProps;
    /** Props forwarded to the Pills component (label is controlled separately via pillLabel) */
    pill?: Omit<PillsProps, 'label'>;
    /** Props forwarded to the root Stack element rendered as `<header>` */
    root?: StackProps<'header'>;
    /** Configuration for the extra actions dropdown */
    extraActions?: {
        /** When true, closes the dropdown after an action is clicked */
        closeDropdownOnClick?: boolean;
    };
};
export type HeaderBaseProps = {
    /** Main heading text displayed in the header */
    title: string;
    /** Text label rendered inside the status pill */
    pillLabel?: string;
    /** Primary action buttons or dropdowns shown in the header toolbar */
    mainActions?: HeaderMainAction[];
    /** Secondary actions shown in the overflow dropdown menu */
    extraActions?: HeaderExtraAction[];
    /** Callback fired when the close button is clicked */
    onClose?: () => void;
    /** Callback fired when the back button is clicked */
    onBack?: () => void;
    /** Node rendered as a "copy link" affordance (e.g. an IconButton) */
    copyLinkButton?: React.ReactNode;
    /** When true, renders skeleton placeholders instead of content */
    loading?: boolean;
    /** Slot props for customising individual sub-components */
    slotProps?: HeaderSlotProps;
};
