import { type Ref } from 'react';
import { type ListContainerProps, type ListItemProps } from './types';
export declare const ListItem: ({ id, sx, loading, onClick, text, avatar, action, action2, divider, sideContent, actionMenuList, sidePill, sideText, sideAvatars, component, selected, disabled, slotProps, }: ListItemProps, ref: Ref<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
export type { ListItemProps };
declare const _default: import("react").ForwardRefExoticComponent<Omit<ListContainerProps, "children" | "sx"> & Pick<import("@mui/material").StackProps, "sx" | "id"> & import("./types").SideContentProps & {
    loading?: boolean;
    onClick?: import("./types").ListItemClickHandler;
    text?: import("./types").ListItemTextProps;
    avatar?: import("./types").ListItemAvatarProps;
    action?: import("./types").ListItemActionProps;
    action2?: import("./types").ListItemActionProps;
    actionMenuList?: import("react").ReactNode;
    sideContent?: import("react").ReactNode;
    slotProps?: {
        container?: {
            sx?: import("@mui/material").SxProps;
        };
        avatar?: import("../../../Avatar").AvatarProps;
        title?: Pick<import("../../../Title").TitleProps, "slotProps">;
    };
    divider?: boolean;
} & import("react").RefAttributes<HTMLDivElement>>;
export default _default;
