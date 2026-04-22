import { type StoryObj } from '@storybook/react-vite';
declare const meta: {
    component: import("react").ForwardRefExoticComponent<Omit<import("./types").ListContainerProps, "children" | "sx"> & Pick<import("@mui/material").StackProps, "sx" | "id"> & import("./types").SideContentProps & {
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
    title: string;
    tags: string[];
    argTypes: {
        divider: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
        selected: {
            control: "boolean";
        };
        loading: {
            control: "boolean";
        };
        text: {
            control: false;
        };
        avatar: {
            control: false;
        };
        action: {
            control: false;
        };
        action2: {
            control: false;
        };
        sidePill: {
            control: false;
        };
        sideText: {
            control: false;
        };
        sideAvatars: {
            control: false;
        };
        onClick: {
            control: false;
        };
        sx: {
            control: false;
        };
        slotProps: {
            control: false;
        };
    };
    parameters: {
        layout: string;
        docs: {
            controls: {
                expanded: boolean;
            };
            source: string;
        };
    };
    decorators: ((Story: import("storybook/internal/csf").PartialStoryFn<import("@storybook/react-vite").ReactRenderer, {
        disabled?: boolean | undefined;
        selected?: boolean | undefined;
        divider?: boolean | undefined;
        component?: import("react").ElementType<any> | undefined;
        sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
        id?: string | undefined | undefined;
        sidePill?: Pick<import("../../../Pills").PillsProps, "label" | "type" | "size" | "hasIcon"> | undefined;
        sideText?: Pick<import("../../../Title").TitleProps, "copetin" | "title"> | undefined;
        sideAvatars?: Pick<import("../../../AvatarGroup").AvatarGroupProps, "avatars"> | undefined;
        loading?: boolean | undefined;
        onClick?: import("./types").ListItemClickHandler | undefined;
        text?: import("./types").ListItemTextProps | undefined;
        avatar?: import("./types").ListItemAvatarProps | undefined;
        action?: import("./types").ListItemActionProps | undefined;
        action2?: import("./types").ListItemActionProps | undefined;
        actionMenuList?: import("react").ReactNode;
        sideContent?: import("react").ReactNode;
        slotProps?: {
            container?: {
                sx?: import("@mui/material").SxProps;
            };
            avatar?: import("../../../Avatar").AvatarProps;
            title?: Pick<import("../../../Title").TitleProps, "slotProps">;
        } | undefined;
        ref?: import("react").Ref<HTMLDivElement> | undefined;
        key?: import("react").Key | null | undefined;
    }>) => import("react/jsx-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Minimal: Story;
export declare const textVariations: Story;
export declare const avatarVariations: Story;
export declare const sideContentVariations: Story;
export declare const actionVariations: Story;
export declare const listItemStates: Story;
