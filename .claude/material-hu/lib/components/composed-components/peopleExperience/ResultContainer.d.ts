import { type ReactNode } from 'react';
import { type StackProps } from '@mui/material';
type ResultContainerProps = {
    title: string;
    subtitle?: string;
    children: ReactNode;
    actions?: ReactNode;
    sx?: StackProps['sx'];
    animateOnEnter?: boolean;
};
declare const ResultContainer: ({ title, children, subtitle, actions, sx, animateOnEnter, }: ResultContainerProps) => import("react/jsx-runtime").JSX.Element;
export default ResultContainer;
