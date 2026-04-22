import { type IconButtonProps } from '@mui/material/IconButton';
export type ActionButtonProps = {
    title: string;
    icon: React.ReactNode;
    onClick: () => void;
    isActive: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    sx?: IconButtonProps['sx'];
};
declare const _default: import("react").ForwardRefExoticComponent<ActionButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export default _default;
