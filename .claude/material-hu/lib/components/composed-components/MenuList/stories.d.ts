import { type Meta, type StoryObj } from '@storybook/react-vite';
import MenuList from '.';
export declare const defaultOptions: ({
    onClick: () => void;
    title: string;
    options: ({
        title: string;
        onClick: () => void;
        options?: undefined;
    } | {
        title: string;
        onClick: () => void;
        options: {
            title: string;
            onClick: () => void;
        }[];
    })[];
    Icon?: undefined;
    description?: undefined;
    disabled?: undefined;
} | {
    onClick: () => void;
    Icon: import("react").ForwardRefExoticComponent<import("@tabler/icons-react").IconProps & import("react").RefAttributes<import("@tabler/icons-react").Icon>>;
    title: string;
    options?: undefined;
    description?: undefined;
    disabled?: undefined;
} | {
    onClick: () => void;
    Icon: import("react").ForwardRefExoticComponent<import("@tabler/icons-react").IconProps & import("react").RefAttributes<import("@tabler/icons-react").Icon>>;
    title: string;
    description: string;
    options?: undefined;
    disabled?: undefined;
} | {
    onClick: () => void;
    title: string;
    options?: undefined;
    Icon?: undefined;
    description?: undefined;
    disabled?: undefined;
} | {
    onClick: () => void;
    title: string;
    description: string;
    options?: undefined;
    Icon?: undefined;
    disabled?: undefined;
} | {
    onClick: () => void;
    Icon: import("react").ForwardRefExoticComponent<import("@tabler/icons-react").IconProps & import("react").RefAttributes<import("@tabler/icons-react").Icon>>;
    title: string;
    description: string;
    disabled: boolean;
    options?: undefined;
})[];
declare const meta: Meta<typeof MenuList>;
export default meta;
type Story = StoryObj<typeof MenuList>;
export declare const Default: Story;
export declare const WithCustomButton: Story;
export declare const LittleOption: Story;
export declare const WithDisabledCustomButton: Story;
export declare const WithSubmenu: Story;
export declare const WithMultipleSubmenus: Story;
export declare const WithNestedSubmenus: Story;
export declare const WithOnClose: Story;
export declare const WithDisabled: Story;
export declare const WithOutFixedDimensions: Story;
