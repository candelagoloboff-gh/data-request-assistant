import { type ReactNode } from 'react';
import { type SvgIconComponent } from '@mui/icons-material';
import { type LoadingButtonProps as ButtonProps } from '@mui/lab/LoadingButton';
type Props = {
    title: ReactNode;
    body?: ReactNode;
    textBody?: string;
    primaryButtonProps?: ButtonProps;
    secondaryButtonProps?: ButtonProps;
    onClose?: (e?: any) => void;
    TitleIcon?: SvgIconComponent;
};
/**
 * @deprecated Use HuDrawer instead
 */
declare const NewModal: ({ title, body, textBody, TitleIcon, primaryButtonProps, secondaryButtonProps, onClose, }: Props) => import("react/jsx-runtime").JSX.Element;
export default NewModal;
