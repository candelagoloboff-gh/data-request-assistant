import { type AlertProps as AlertMuiProps } from '@mui/material';
import { type SkeletonProps } from '../Skeleton/types';
export type AlertProps = {
    /** Body content displayed below the title */
    description?: string | React.ReactNode;
    /** Shows a close button to dismiss the alert */
    hasClose?: boolean;
    /** Renders a skeleton loading state */
    loading?: boolean;
    /** Optional call-to-action button rendered inside the alert */
    action?: {
        text: string;
        onClick: () => void;
    };
    /** Controls the color and icon variant of the alert */
    severity: 'success' | 'error' | 'warning' | 'info' | 'highlight';
    /** Heading text of the alert */
    title: string;
    /** Callback fired when the alert is closed */
    onClose?: () => void;
    /** MUI sx prop for custom styling */
    sx?: AlertMuiProps['sx'];
    /** Props forwarded to the skeleton when in loading state */
    skeletonProps?: SkeletonProps;
};
