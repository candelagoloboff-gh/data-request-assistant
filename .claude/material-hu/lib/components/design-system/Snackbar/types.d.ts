export type SnackbarProps = {
    /** Visual style conveying the intent of the message */
    variant: 'success' | 'error' | 'warning' | 'info';
    /** Bold title text displayed in the snackbar */
    title?: string;
    /** Secondary descriptive text below the title */
    description?: string;
    /** Shows a close button to dismiss the snackbar */
    hasClose?: boolean;
    /** Optional cancel action button with label and click handler */
    cancelAction?: {
        text: string;
        onClick: () => void;
    };
    /** Callback fired when the snackbar is closed */
    onClose?: () => void;
    /** Duration in milliseconds before the snackbar auto-hides */
    autoHideDuration?: number;
    /** Pixel offsets from each edge of the screen */
    spacing?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
};
