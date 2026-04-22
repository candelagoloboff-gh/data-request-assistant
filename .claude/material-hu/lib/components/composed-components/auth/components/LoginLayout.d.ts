import { type SxProps } from '@mui/material';
type LoginLayoutProps = {
    children: React.ReactNode;
    banner: {
        src: string;
        styles?: React.CSSProperties;
    };
    showBackdrop?: boolean;
    sx?: SxProps;
};
declare const LoginLayout: ({ children, banner, showBackdrop, sx, }: LoginLayoutProps) => import("react/jsx-runtime").JSX.Element;
export default LoginLayout;
