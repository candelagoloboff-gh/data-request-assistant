import { type ButtonProps } from '@mui/material';
export type BadgeCountButtonProps = {
    buttonProps: Omit<ButtonProps, 'children'>;
    count: number;
    children: React.ReactNode;
};
