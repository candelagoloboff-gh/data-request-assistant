import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import ButtonGroup from '../../design-system/ButtonGroup';
import Button from '../../design-system/Buttons/Button';
import { Stack, Typography } from '@mui/material';
import { DialogLayerProvider, useDialogLayer } from '../Dialogs';
import { Drawer, DrawerLayerProvider, useDrawerLayer, useDrawerLayerItem, } from '.';
const meta = {
    title: 'Layers/Drawers',
    decorators: [
        Story => (_jsx(DialogLayerProvider, { children: _jsx(DrawerLayerProvider, { children: _jsx(Story, {}) }) })),
    ],
    tags: ['autodocs'],
};
export default meta;
/**
 * The simplest way to use the Drawer layer.
 * Uses `useDrawerLayer` hook with the Simple API (props-based).
 */
export const Simple = {
    render: () => {
        function Component() {
            const { openDrawer, closeDrawer } = useDrawerLayer();
            const handleOpen = () => {
                openDrawer({
                    title: 'Simple Drawer',
                    children: (_jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(Typography, { children: "This is the simplest implementation of a drawer." }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Use this pattern for simple, one-off drawers that don't need reactive state updates." })] })),
                    primaryButtonProps: {
                        children: 'Confirm',
                        onClick: () => {
                            console.log('Confirmed!');
                            closeDrawer();
                        },
                    },
                    secondaryButtonProps: {
                        children: 'Cancel',
                        onClick: () => closeDrawer(),
                    },
                    wrapperProps: {
                        PaperProps: {
                            sx: {
                                '*': {
                                    backgroundColor: 'red',
                                },
                            },
                        },
                    },
                });
            };
            return (_jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open Simple Drawer" }));
        }
        return _jsx(Component, {});
    },
};
/**
 * Drawer with reactive state using `useDrawerLayerItem`.
 * The drawer configuration automatically stays in sync with component state.
 */
export const ReactiveState = {
    render: () => {
        function Component() {
            const [isLoading, setIsLoading] = useState(false);
            const [counter, setCounter] = useState(0);
            const handleSubmit = async () => {
                setIsLoading(true);
                await new Promise(resolve => setTimeout(resolve, 1500));
                setCounter(prev => prev + 1);
                setIsLoading(false);
                closeDrawer();
            };
            const { openDrawer, closeDrawer } = useDrawerLayerItem('reactive-demo', {
                title: 'Reactive Drawer',
                children: (_jsxs(Stack, { sx: { gap: 2 }, children: [_jsxs(Typography, { children: ["This drawer uses ", _jsx("code", { children: "useDrawerLayerItem" }), " for reactive state."] }), _jsxs(Stack, { sx: {
                                p: 2,
                                bgcolor: 'info.light',
                                borderRadius: 1,
                            }, children: [_jsxs(Typography, { variant: "body2", children: [_jsx("strong", { children: "Counter value:" }), " ", counter] }), _jsxs(Typography, { variant: "body2", children: [_jsx("strong", { children: "Loading state:" }), " ", isLoading ? 'Yes' : 'No'] })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Notice how the button loading state updates automatically when you click \"Save\". The drawer config stays in sync with component state." }), _jsxs(Button, { variant: "secondary", onClick: () => setCounter(prev => prev + 1), children: ["Increment Counter (currently: ", counter, ")"] })] })),
                primaryButtonProps: {
                    children: 'Save',
                    loading: isLoading,
                    onClick: handleSubmit,
                },
                secondaryButtonProps: {
                    children: 'Cancel',
                    onClick: () => {
                        closeDrawer();
                    },
                },
                footer: (_jsxs(Typography, { variant: "caption", children: ["Submissions: ", counter] })),
            });
            return (_jsxs(Stack, { sx: { gap: 2 }, children: [_jsxs(Typography, { variant: "body2", color: "text.secondary", children: ["Total submissions: ", counter] }), _jsx(Button, { variant: "primary", onClick: () => openDrawer(), children: "Open Reactive Drawer" })] }));
        }
        return _jsx(Component, {});
    },
};
/**
 * Demonstrates the Task Focus toggle in a drawer opened via the Drawer Layer.
 * Pass `enableTaskFocus: true` to show the maximize/restore button in the header;
 * clicking it toggles fullscreen (task focus) mode.
 */
export const TaskFocusEnabled = {
    render: () => {
        function Component() {
            const { openDrawer, closeDrawer } = useDrawerLayer();
            const handleOpen = () => {
                openDrawer({
                    title: 'Drawer with Task Focus',
                    enableTaskFocus: true,
                    anchor: 'bottom',
                    extraHeaderActions: (_jsx(ButtonGroup, { labels: ['List', 'Grid', 'Map'], defaultValue: 0, onChange: value => console.log('Selected index:', value) })),
                    children: (_jsx(Stack, { sx: { gap: 2 }, children: _jsx(Typography, { children: "Use the maximize icon in the header to toggle task focus (fullscreen) mode. The drawer will expand to fullscreen with no rounded corners." }) })),
                    primaryButtonProps: {
                        children: 'Confirm',
                        onClick: () => closeDrawer(),
                    },
                    secondaryButtonProps: {
                        children: 'Cancel',
                        onClick: () => closeDrawer(),
                    },
                });
            };
            return (_jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open drawer (Task Focus toggle)" }));
        }
        return _jsx(Component, {});
    },
};
/**
 * Demonstrates nested drawers combining all patterns:
 * - First drawer: Simple API with `useDrawerLayer`
 * - Second drawer: Reactive state with `useDrawerLayerItem`
 * - Third drawer: Composition API with custom layout
 * - Dialog confirmation on close
 */
export const NestedMixed = {
    render: () => {
        function Component() {
            const { openDrawer: openSimpleDrawer, closeDrawer } = useDrawerLayer();
            const handleOpenFirst = () => {
                openSimpleDrawer({
                    title: 'First Drawer (Simple API)',
                    children: (_jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(Stack, { sx: { p: 2, bgcolor: 'info.light', borderRadius: 1 }, children: _jsxs(Typography, { variant: "body2", children: [_jsx("strong", { children: "Pattern:" }), " useDrawerLayer + Simple API"] }) }), _jsx(Typography, { children: "This is the first drawer using the simplest pattern." }), _jsx(SecondDrawerButton, {})] })),
                    primaryButtonProps: {
                        children: 'Close',
                        onClick: () => closeDrawer(),
                    },
                });
            };
            return (_jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(Typography, { variant: "body2", color: "text.secondary", children: "Opens a stack of 3 drawers, each using a different pattern, plus a Dialog confirmation." }), _jsx(Button, { variant: "primary", onClick: handleOpenFirst, children: "Open Nested Drawers Demo" })] }));
            function SecondDrawerButton() {
                const [saveCount, setSaveCount] = useState(0);
                const [isSaving, setIsSaving] = useState(false);
                const handleSave = async () => {
                    setIsSaving(true);
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    setSaveCount(prev => prev + 1);
                    setIsSaving(false);
                };
                const { openDrawer: openReactiveDrawer, closeDrawer: closeReactive } = useDrawerLayerItem('second-reactive', {
                    title: 'Second Drawer (Reactive)',
                    children: (_jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(Stack, { sx: { p: 2, bgcolor: 'success.light', borderRadius: 1 }, children: _jsxs(Typography, { variant: "body2", children: [_jsx("strong", { children: "Pattern:" }), " useDrawerLayerItem (reactive state)"] }) }), _jsx(Typography, { children: "This drawer has reactive state. The save button shows loading state." }), _jsxs(Typography, { variant: "body2", children: ["Times saved: ", _jsx("strong", { children: saveCount })] }), _jsx(ThirdDrawerButton, {})] })),
                    primaryButtonProps: {
                        children: isSaving ? 'Saving...' : 'Save',
                        loading: isSaving,
                        onClick: handleSave,
                    },
                    secondaryButtonProps: {
                        children: 'Cancel',
                        onClick: () => closeReactive(),
                    },
                });
                return (_jsx(Button, { variant: "secondary", onClick: () => openReactiveDrawer(), children: "Open Second Drawer (Reactive)" }));
            }
            function ThirdDrawerButton() {
                const { openDrawer: openCompositionDrawer, closeDrawer: closeComposition, } = useDrawerLayer();
                const { openDialog: openConfirmDialog, closeDialog: closeConfirmDialog, } = useDialogLayer();
                const handleCloseWithConfirmation = () => {
                    openConfirmDialog({
                        title: 'Close drawer?',
                        textBody: 'This demonstrates how Dialog integrates with Drawer. Both use the same layer pattern.',
                        primaryButtonProps: {
                            children: 'Yes, close',
                            onClick: () => {
                                closeConfirmDialog();
                                closeComposition();
                            },
                        },
                        secondaryButtonProps: {
                            children: 'Cancel',
                            onClick: () => closeConfirmDialog(),
                        },
                    });
                };
                const handleOpen = () => {
                    openCompositionDrawer({
                        content: (_jsxs(_Fragment, { children: [_jsx(Drawer.Header, { title: "Third Drawer (Composition)", onClose: handleCloseWithConfirmation, hasBackButton: true, onBack: closeComposition }), _jsx(Drawer.Body, { children: _jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(Stack, { sx: { p: 2, bgcolor: 'warning.light', borderRadius: 1 }, children: _jsxs(Typography, { variant: "body2", children: [_jsx("strong", { children: "Pattern:" }), " Composition API (custom layout)"] }) }), _jsx(Typography, { children: "This drawer uses the Composition API for full control over the layout." }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Click the X button to see the Dialog confirmation." })] }) }), _jsx(Drawer.Footer, { children: _jsx(Stack, { sx: { p: 1, bgcolor: 'grey.100', borderRadius: 1 }, children: _jsx(Typography, { variant: "caption", children: "Custom footer using Drawer.Footer" }) }) }), _jsxs(Drawer.Actions, { children: [_jsx(Button, { variant: "tertiary", onClick: handleCloseWithConfirmation, children: "Cancel" }), _jsx(Button, { variant: "primary", onClick: () => closeComposition(), children: "Done" })] })] })),
                    });
                };
                return (_jsx(Button, { variant: "secondary", onClick: handleOpen, children: "Open Third Drawer (Composition)" }));
            }
        }
        return _jsx(Component, {});
    },
};
