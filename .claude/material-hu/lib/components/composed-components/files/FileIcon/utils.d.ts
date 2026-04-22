import { type Theme } from '@mui/material';
import { type FileIconProps } from './types';
export declare const fileToIconV2: (file: FileIconProps["file"], theme: Theme) => {
    Icon: import("react").ForwardRefExoticComponent<import("@tabler/icons-react").IconProps & import("react").RefAttributes<import("@tabler/icons-react").Icon>>;
    color: "primary" | "default" | "error" | "success" | "warning" | "highlight";
    colorsSX: {};
};
/**
 * @deprecated Use fileToIconV2 instead
 */
export declare const fileToIcon: (file: {
    type?: string | null;
    extension?: string | null;
}) => import("react").ForwardRefExoticComponent<import("@tabler/icons-react").IconProps & import("react").RefAttributes<import("@tabler/icons-react").Icon>>;
