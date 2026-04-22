import { type Meta } from '@storybook/react-vite';
import RadioBase from '.';
declare const _default: Meta<typeof RadioBase>;
export default _default;
export declare const ErrorState: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react-vite").ReactRenderer, {
    error?: boolean;
    disabled?: boolean;
    checked?: boolean;
} & Omit<import("@mui/material").RadioProps, "color" | "label" | "onClick">>;
export declare const DisabledState: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react-vite").ReactRenderer, {
    error?: boolean;
    disabled?: boolean;
    checked?: boolean;
} & Omit<import("@mui/material").RadioProps, "color" | "label" | "onClick">>;
export declare const ActiveDisabled: import("storybook/internal/csf").AnnotatedStoryFn<import("@storybook/react-vite").ReactRenderer, {
    error?: boolean;
    disabled?: boolean;
    checked?: boolean;
} & Omit<import("@mui/material").RadioProps, "color" | "label" | "onClick">>;
