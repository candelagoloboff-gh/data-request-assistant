import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DesignSystemDialog from '../../design-system/Dialog';
import { Dialog as MuiDialog } from '@mui/material';
import { composeSx } from '../../../utils/components';
import { useLayerStack } from '../common/useLayerStack';
import { DialogLayerContext } from './hooks';
export { useDialogLayer, useDialogLayerItem } from './hooks';
/**
 * Type guard to check if config uses composition components
 */
function isCompositionDialog(config) {
    return 'content' in config;
}
/**
 * Context provider for managing dialogs globally.
 *
 * Manages a stack of dialogs that can be opened from anywhere in the app.
 * Supports Simple API (props-based) and Composition Components API (custom layouts).
 *
 * @see README.md for full documentation and examples
 */
export function DialogLayerProvider({ children }) {
    const { stack, open: openDialog, close: closeDialog, handleTransitionEnd, getStack: getDialogs, updateConfig: updateDialogConfig, } = useLayerStack({
        prepareConfig: (_config, _id, closeById) => ({
            onClose: closeById,
            ..._config,
        }),
    });
    return (_jsxs(DialogLayerContext.Provider, { value: {
            openDialog,
            closeDialog,
            getDialogs,
            updateDialogConfig,
        }, children: [children, stack.map((level, index) => {
                const isLast = index === stack.length - 1;
                const config = level.config;
                // Calculate z-index based on position in stack
                const zIndex = 1400 + index;
                const handleClose = (reason) => {
                    if (config.disableCloseOnBackdropClick &&
                        reason === 'backdropClick') {
                        return;
                    }
                    if (config.disableCloseOnEscapeKeyDown &&
                        reason === 'escapeKeyDown') {
                        return;
                    }
                    level.config.onClose?.(reason);
                };
                return (_jsx(MuiDialog, { open: level.isOpen, onClose: isLast
                        ? (_event, reason) => {
                            handleClose(reason);
                        }
                        : undefined, ...config.dialogProps, TransitionProps: {
                        ...config.dialogProps?.TransitionProps,
                        onExited: () => handleTransitionEnd(level.id),
                    }, PaperProps: {
                        sx: composeSx({
                            border: theme => `1px solid ${theme.palette.new.border.neutral.default}`,
                            borderRadius: theme => theme.shape.borderRadiusL,
                            boxShadow: 'none',
                        }, config.dialogProps?.PaperProps?.sx),
                        ...config.dialogProps?.PaperProps,
                    }, sx: {
                        zIndex,
                        ...config.dialogProps?.sx,
                    }, children: isCompositionDialog(config) ? (
                    // Render custom content
                    config.content) : (
                    // Render design-system Dialog
                    _jsx(DesignSystemDialog, { ...config, onClose: handleClose })) }, level.id));
            })] }));
}
/**
 * Re-export Dialog composition components from design-system
 */
export const Dialog = {
    Header: DesignSystemDialog.Header,
    Body: DesignSystemDialog.Body,
    Footer: DesignSystemDialog.Footer,
};
