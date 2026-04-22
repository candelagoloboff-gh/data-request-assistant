import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { useBlocker } from 'react-router';
import Dialog from '../components/design-system/Dialog';
import { useModal } from './useModal';
const beforeUnloadHandler = (event) => {
    event.preventDefault();
    event.returnValue = true;
};
/** Shows a warning dialog when the user tries to navigate away with unsaved changes. */
export const useUnsavedWarningDialog = ({ WarningModal, isDisabled = false, title, description, primaryButtonText, secondaryButtonText, slotProps, }) => {
    const [disabled, setDisabled] = useState(isDisabled);
    useEffect(() => {
        setDisabled(isDisabled);
    }, [isDisabled]);
    const blocker = useBlocker(({ currentLocation, nextLocation }) => !disabled && currentLocation.pathname !== nextLocation.pathname);
    const blockerRef = useRef(blocker);
    blockerRef.current = blocker;
    useEffect(() => {
        if (!disabled) {
            window.addEventListener('beforeunload', beforeUnloadHandler);
        }
        return () => {
            window.removeEventListener('beforeunload', beforeUnloadHandler);
        };
    }, [disabled]);
    const disableUnsavedWarning = () => setDisabled(true);
    const resetUnsavedWarning = () => setDisabled(isDisabled);
    const DefaultModal = ({ onClose, onConfirm }) => (_jsx(Dialog, { onClose: onClose, title: title, textBody: description, primaryButtonProps: {
            id: 'cancel-unsaved-warning-button',
            children: primaryButtonText,
            variant: 'contained',
            color: 'primary',
            onClick: onClose,
            ...slotProps?.primaryButton,
        }, secondaryButtonProps: {
            id: 'confirm-unsaved-warning-button',
            children: secondaryButtonText,
            color: 'primary',
            variant: 'text',
            onClick: onConfirm,
            ...slotProps?.secondaryButton,
        }, ...slotProps?.root }));
    const { modal, showModal, closeModal } = useModal(WarningModal || DefaultModal, {
        fullWidth: true,
        maxWidth: 'sm',
        onClose: () => {
            closeModal();
            blocker.reset?.();
        },
        sx: {
            boxShadow: 'none',
        },
    }, {
        onClose: () => {
            closeModal();
            blocker.reset?.();
        },
        onConfirm: () => {
            blocker.proceed?.();
        },
    });
    useEffect(() => {
        blocker.state === 'blocked' && showModal();
    }, [blocker.state]);
    useEffect(() => {
        return () => {
            if (blockerRef.current.state === 'blocked') {
                blockerRef.current.reset();
            }
        };
    }, []);
    return {
        modal,
        blocker,
        disableUnsavedWarning,
        resetUnsavedWarning,
    };
};
export default useUnsavedWarningDialog;
