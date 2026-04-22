import { type FC } from 'react';
import { type ButtonProps } from '../components/design-system/Buttons/Button';
import { type DialogProps } from '../components/design-system/Dialog';
export type WarningModalProps = {
    onClose: () => void;
    onConfirm: () => void;
};
export type WarningModalType = FC<WarningModalProps>;
export type UseUnsavedWarningDialogProps = {
    WarningModal?: WarningModalType;
    isDisabled?: boolean;
    title?: string;
    description?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    slotProps?: {
        primaryButton?: ButtonProps;
        secondaryButton?: ButtonProps;
        root?: DialogProps;
    };
};
/** Shows a warning dialog when the user tries to navigate away with unsaved changes. */
export declare const useUnsavedWarningDialog: ({ WarningModal, isDisabled, title, description, primaryButtonText, secondaryButtonText, slotProps, }: UseUnsavedWarningDialogProps) => {
    modal: import("react").ReactNode;
    blocker: import("react-router").Blocker;
    disableUnsavedWarning: () => void;
    resetUnsavedWarning: () => void;
};
export default useUnsavedWarningDialog;
