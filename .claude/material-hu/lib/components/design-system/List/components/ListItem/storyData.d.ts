import { type ListItemActionProps, type ListItemAvatarProps, type ListItemProps, type ListItemTextProps, type SideContentProps, type WithIdentifier } from './types';
export declare const textOptions: WithIdentifier<ListItemTextProps>[];
export declare const avatarOptions: WithIdentifier<ListItemAvatarProps>[];
export declare const sideContentOptions: WithIdentifier<SideContentProps>[];
export declare const actionConfigs: WithIdentifier<{
    actions: {
        action: ListItemActionProps;
        action2?: ListItemActionProps;
    };
}>[];
export declare const itemStates: WithIdentifier<ListItemProps>[];
