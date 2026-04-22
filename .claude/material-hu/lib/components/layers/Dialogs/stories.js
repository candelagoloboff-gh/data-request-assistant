import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Button from '../../design-system/Buttons/Button';
import { Stack } from '@mui/material';
import { Dialog, DialogLayerProvider, useDialogLayer, useDialogLayerItem, } from '.';
const meta = {
    title: 'Layers/Dialogs',
    decorators: [
        Story => (_jsx(DialogLayerProvider, { children: _jsx(Story, {}) })),
    ],
    tags: ['autodocs'],
};
export default meta;
/**
 * The simplest way to use the Dialog layer.
 * Uses `useDialogLayer` hook with the Simple API (props-based).
 */
export const Simple = {
    render: () => {
        function Component() {
            const { openDialog, closeDialog } = useDialogLayer();
            return (_jsx(Stack, { spacing: 2, children: _jsx(Button, { variant: "primary", onClick: () => {
                        openDialog({
                            title: 'Confirm action',
                            textBody: 'If you leave now, your changes will be lost. Are you sure you want to continue?',
                            primaryButtonProps: {
                                children: 'Continue',
                                onClick: () => {
                                    console.log('Confirmed');
                                    closeDialog();
                                },
                            },
                            secondaryButtonProps: {
                                children: 'Cancel',
                                onClick: () => closeDialog(),
                            },
                        });
                    }, children: "Open Simple Dialog" }) }));
        }
        return _jsx(Component, {});
    },
};
/**
 * Dialog with reactive state using `useDialogLayerItem`.
 * The dialog configuration automatically stays in sync with component state.
 */
export const ReactiveState = {
    render: () => {
        function Component() {
            const [isLoading, setIsLoading] = useState(false);
            const { openDialog, closeDialog } = useDialogLayerItem('reactive-dialog', {
                title: 'Confirm action',
                textBody: 'This dialog uses useDialogLayerItem. When you click Continue, the button shows a loading state for a few seconds, then the dialog closes.',
                primaryButtonProps: {
                    children: isLoading ? 'Loading...' : 'Continue',
                    loading: isLoading,
                    onClick: async () => {
                        setIsLoading(true);
                        await new Promise(resolve => setTimeout(resolve, 2500));
                        closeDialog();
                        setIsLoading(false);
                    },
                },
                secondaryButtonProps: {
                    children: 'Cancel',
                    onClick: () => closeDialog(),
                },
            });
            return (_jsx(Stack, { spacing: 2, children: _jsx(Button, { variant: "primary", onClick: () => openDialog(), children: "Open Reactive Dialog" }) }));
        }
        return _jsx(Component, {});
    },
};
/**
 * Demonstrates nested dialogs combining all patterns:
 * - First dialog: Simple API with `useDialogLayer`
 * - Second dialog: Reactive state with `useDialogLayerItem`
 * - Third dialog: Composition API with custom layout
 */
export const NestedMixed = {
    render: () => {
        function Component() {
            const { openDialog: openSimpleDialog, closeDialog } = useDialogLayer();
            const handleOpenFirst = () => {
                openSimpleDialog({
                    title: 'First Dialog (Simple API)',
                    textBody: 'This is the first dialog using the simplest pattern. Click the button below to open the second dialog.',
                    body: _jsx(SecondDialogButton, {}),
                    primaryButtonProps: {
                        children: 'Close',
                        onClick: () => closeDialog(),
                    },
                    secondaryButtonProps: {
                        children: 'Cancel',
                        onClick: () => closeDialog(),
                    },
                });
            };
            return (_jsx(Stack, { spacing: 2, children: _jsx(Button, { variant: "primary", onClick: handleOpenFirst, children: "Open Nested Dialogs Demo" }) }));
            function SecondDialogButton() {
                const [saveCount, setSaveCount] = useState(0);
                const [isSaving, setIsSaving] = useState(false);
                const { openDialog: openCompositionDialog, closeDialog: closeDialogLayer, } = useDialogLayer();
                const handleSave = async () => {
                    setIsSaving(true);
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    setSaveCount(prev => prev + 1);
                    setIsSaving(false);
                };
                const openThirdDialog = () => {
                    openCompositionDialog({
                        content: (_jsxs(_Fragment, { children: [_jsx(Dialog.Header, { title: "Third Dialog (Composition)", onClose: closeDialogLayer }), _jsx(Dialog.Body, { children: _jsxs(Stack, { spacing: 2, children: [_jsxs(Stack, { sx: {
                                                    p: 2,
                                                    bgcolor: 'warning.light',
                                                    borderRadius: 1,
                                                }, children: [_jsx("strong", { children: "Pattern:" }), " Composition API (custom layout)"] }), _jsx("p", { children: "This dialog uses the Composition API for full control over the layout." })] }) }), _jsxs(Dialog.Footer, { children: [_jsx(Button, { variant: "tertiary", onClick: () => closeDialogLayer(), children: "Cancel" }), _jsx(Button, { variant: "primary", onClick: () => closeDialogLayer(), children: "Done" })] })] })),
                    });
                };
                const { openDialog: openReactiveDialog, closeDialog: closeReactive } = useDialogLayerItem('second-reactive', {
                    title: 'Second Dialog (Reactive)',
                    textBody: `This dialog has reactive state. Times saved: ${saveCount}. The Save button shows loading.`,
                    body: (_jsx(Stack, { spacing: 2, children: _jsx(Button, { variant: "secondary", onClick: openThirdDialog, children: "Open Third Dialog (Composition)" }) })),
                    primaryButtonProps: {
                        children: isSaving ? 'Saving...' : 'Save',
                        loading: isSaving,
                        onClick: handleSave,
                    },
                    secondaryButtonProps: {
                        children: 'Close',
                        onClick: () => closeReactive(),
                    },
                });
                return (_jsx(Button, { variant: "primary", onClick: () => openReactiveDialog(), children: "Open Second Dialog (Reactive)" }));
            }
        }
        return _jsx(Component, {});
    },
};
