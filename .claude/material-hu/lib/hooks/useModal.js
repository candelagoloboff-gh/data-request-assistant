import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useState } from 'react';
import { Dialog } from '@mui/material';
/**
 * Renders a MUI Dialog with a given content component and manages its open/close state.
 * @deprecated Use `useDialogLayer` or `useDialogLayerItem` instead
 */
function useModal(ModalContentComponent, dialogProps, extraProps) {
    const [open, setOpen] = useState(false);
    const [modalContentProps, setModalContentProps] = useState();
    const closeModal = useCallback(() => setOpen(false), []);
    const showModal = useCallback((props = {}) => {
        setModalContentProps(props);
        setOpen(true);
    }, []);
    const { onClose: dialogOnClose, ...restDialogProps } = dialogProps ?? {};
    return {
        modal: (_jsx(Dialog, { open: open, onClose: (event, reason) => {
                if (restDialogProps?.disableEscapeKeyDown &&
                    reason === 'escapeKeyDown') {
                    return;
                }
                if (dialogOnClose) {
                    dialogOnClose?.(event, reason);
                }
                closeModal();
            }, PaperProps: {
                sx: {
                    border: theme => `1px solid ${theme.palette.new.border.neutral.default}`,
                    borderRadius: theme => theme.shape.borderRadiusL,
                    boxShadow: 'none',
                },
            }, ...restDialogProps, children: _jsx(ModalContentComponent, { onClose: closeModal, ...modalContentProps, ...extraProps }) })),
        closeModal,
        showModal,
    };
}
export { useModal };
