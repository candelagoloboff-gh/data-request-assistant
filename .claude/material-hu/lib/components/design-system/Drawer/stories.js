import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { Button, Stack, Typography } from '@mui/material';
import { useDrawerV2, } from '../../../hooks/useDrawerV2';
import FormInputClassic from '../Inputs/Classic/form';
import Pills from '../Pills';
import Drawer from '.';
const meta = {
    component: Drawer,
    title: 'Design System/Drawer',
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
};
export default meta;
export const Default = {
    args: {
        title: 'Soy un título del Draweeeer',
        size: 'medium',
        disableEscapeKeyDown: false,
        primaryButtonProps: {
            children: 'Primary Action',
        },
        secondaryButtonProps: {
            children: 'Secondary Action',
        },
        hasBackButton: false,
        PaperProps: {
            sx: {
                color: theme => theme.palette.new?.text.neutral.default,
            },
        },
    },
    render: props => {
        const { title, size, primaryButtonProps, secondaryButtonProps, disableEscapeKeyDown, hasBackButton, PaperProps, } = props;
        const [isOpen, setIsOpen] = useState(false);
        const onClose = () => setIsOpen(false);
        return (_jsxs("div", { children: [_jsx(Button, { size: "small", variant: "primary", onClick: () => setIsOpen(true), children: "Open" }), _jsx(Drawer, { title: title, size: size, open: isOpen, onClose: onClose, primaryButtonProps: primaryButtonProps, secondaryButtonProps: secondaryButtonProps, disableEscapeKeyDown: disableEscapeKeyDown, hasBackButton: hasBackButton, PaperProps: PaperProps, children: _jsx(Typography, { children: "Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus" }) })] }));
    },
};
export const DrawerWithExtraFooter = {
    args: {
        title: 'Drawer Title',
        size: 'medium',
        primaryButtonProps: {
            children: 'Primary Action',
        },
        secondaryButtonProps: {
            children: 'Secondary Action',
        },
        hasBackButton: true,
    },
    render: props => {
        const { title, size, primaryButtonProps, secondaryButtonProps, hasBackButton, } = props;
        const [isOpen, setIsOpen] = useState(false);
        const onClose = () => setIsOpen(false);
        const onBack = () => {
            alert('onBack');
        };
        return (_jsxs("div", { children: [_jsx(Button, { size: "small", variant: "primary", onClick: () => setIsOpen(true), children: "Open" }), _jsx(Drawer, { title: title, size: size, open: isOpen, onClose: onClose, onBack: onBack, hasBackButton: hasBackButton, primaryButtonProps: primaryButtonProps, secondaryButtonProps: secondaryButtonProps, footer: _jsxs(Stack, { sx: { alignItems: 'center', gap: 2 }, children: [_jsx(Typography, { children: "Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi." }), _jsx(Button, { size: "large", variant: "primary", children: "Extra Footer Button" })] }), children: _jsx(Stack, { children: _jsx(Typography, { children: "Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus." }) }) })] }));
    },
};
export const DrawerWithDoubleLayout = {
    args: {
        title: 'Drawer Title',
        size: 'large',
        primaryButtonProps: {
            children: 'Primary Action',
        },
        secondaryButtonProps: {
            children: 'Secondary Action',
        },
    },
    render: props => {
        const { title, size, primaryButtonProps, secondaryButtonProps } = props;
        const [isOpen, setIsOpen] = useState(false);
        const onClose = () => setIsOpen(false);
        return (_jsxs("div", { children: [_jsx(Button, { size: "small", variant: "primary", onClick: () => setIsOpen(true), children: "Open" }), _jsx(Drawer, { title: title, size: size, open: isOpen, onClose: onClose, primaryButtonProps: primaryButtonProps, secondaryButtonProps: secondaryButtonProps, primaryContent: _jsx(Typography, { children: "Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum" }), secondaryContent: _jsx(Typography, { children: "Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra" }) })] }));
    },
};
export const DrawerWithDoubleLayoutAndExtraFooter = {
    args: {
        title: 'Drawer Title',
        size: 'large',
        primaryButtonProps: {
            children: 'Primary Action',
        },
        secondaryButtonProps: {
            children: 'Secondary Action',
        },
    },
    render: props => {
        const { title, size, primaryButtonProps, secondaryButtonProps } = props;
        const [isOpen, setIsOpen] = useState(false);
        const onClose = () => setIsOpen(false);
        return (_jsxs("div", { children: [_jsx(Button, { size: "small", variant: "primary", onClick: () => setIsOpen(true), children: "Open" }), _jsx(Drawer, { title: title, size: size, open: isOpen, onClose: onClose, primaryButtonProps: primaryButtonProps, secondaryButtonProps: secondaryButtonProps, primaryContent: _jsx(Typography, { children: "Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum" }), secondaryContent: _jsx(Typography, { children: "Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus sed pharetra dui gravida. Proin tellus condimentum varius tempus vulputate risus. Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra" }), footer: _jsxs(Stack, { sx: { alignItems: 'center', gap: 2 }, children: [_jsx(Typography, { children: "Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi." }), _jsx(Button, { size: "large", variant: "primary", children: "Extra Footer Button" })] }) })] }));
    },
};
export const DrawerWithUseDrawerHook = {
    args: {
        title: 'Title',
        primaryButtonProps: {
            children: 'Primary Action',
        },
        secondaryButtonProps: {
            children: 'Secondary Action',
        },
    },
    render: () => {
        const [extraInfo, setExtraInfo] = useState('extrainfo1');
        const { drawer, showDrawer } = useDrawerV2(args => getCustomDrawer({ ...args, extraInfo }));
        return (_jsxs("div", { children: [_jsx(Button, { size: "small", variant: "primary", onClick: () => {
                        showDrawer({ outsideValue: 'outsideValue1' });
                    }, children: "Open 1" }), _jsx(Button, { size: "small", variant: "primary", onClick: () => {
                        showDrawer({ outsideValue: 'outsideValue2' });
                        setTimeout(() => setExtraInfo('extrainfo2'), 2000);
                    }, children: "Open 2" }), drawer] }));
    },
};
const getCustomDrawer = params => {
    const [loading, setLoading] = useState(false);
    const form = useForm({ defaultValues: { field: 'default value' } });
    return {
        children: (_jsxs(FormProvider, { ...form, children: [params.extraInfo, _jsx(FormInputClassic, { name: "field", inputProps: { label: 'Field', hasCounter: false } }), _jsx(LoadingButton, { onClick: async () => {
                        form.setValue('field', params.outsideValue ?? '');
                        setLoading(true);
                        await new Promise(r => setTimeout(r, 3000));
                        setLoading(false);
                    }, loading: loading, children: "Change Field value" }), _jsx(LoadingButton, { onClick: params.closeDrawer, children: "Close Modal from the inside" })] })),
        primaryButtonProps: {
            children: 'Save',
            loading: loading,
        },
        title: 'Drawer',
    };
};
export const DrawerWithTitleDecorator = {
    args: {
        title: 'Title',
        size: 'large',
        hasBackButton: true,
    },
    render: props => {
        const { title, size, hasBackButton } = props;
        const [isOpen, setIsOpen] = useState(false);
        const onClose = () => setIsOpen(false);
        return (_jsxs("div", { children: [_jsx(Button, { size: "small", variant: "primary", onClick: () => setIsOpen(true), children: "Open" }), _jsx(Drawer, { title: title, size: size, open: isOpen, onClose: onClose, hasBackButton: hasBackButton, titleDecorator: _jsx(Pills, { label: "Warning", type: "warning", size: "small" }), children: _jsx(Typography, { children: "This drawer demonstrates the titleDecorator prop with a warning pill. The titleDecorator can be any React node and appears next to the title in the header." }) })] }));
    },
};
export const TaskFocus = {
    args: {
        title: 'Task Focus Drawer',
        size: 'medium',
        primaryButtonProps: {
            children: 'Save',
        },
        secondaryButtonProps: {
            children: 'Cancel',
        },
    },
    render: props => {
        const { title, size, primaryButtonProps, secondaryButtonProps } = props;
        const [isOpen, setIsOpen] = useState(false);
        return (_jsxs("div", { children: [_jsx(Button, { size: "small", variant: "primary", onClick: () => setIsOpen(true), children: "Open Task Focus" }), _jsx(Drawer, { title: title, size: size, open: isOpen, onClose: () => setIsOpen(false), enableTaskFocus: true, primaryButtonProps: primaryButtonProps, secondaryButtonProps: secondaryButtonProps, children: _jsx(Typography, { children: "This drawer supports task focus mode. Click the maximize button in the header to expand to fullscreen. Click it again to restore the original size." }) })] }));
    },
};
export const SmallDrawer = {
    args: {
        title: 'Small Drawer',
        size: 'small',
        primaryButtonProps: {
            children: 'Confirm',
        },
    },
    render: props => {
        const { title, size, primaryButtonProps } = props;
        const [isOpen, setIsOpen] = useState(false);
        return (_jsxs("div", { children: [_jsx(Button, { size: "small", variant: "primary", onClick: () => setIsOpen(true), children: "Open Small" }), _jsx(Drawer, { title: title, size: size, open: isOpen, onClose: () => setIsOpen(false), primaryButtonProps: primaryButtonProps, children: _jsx(Typography, { children: "This is a small drawer (600px max width). Useful for simple forms, quick actions, or confirmation flows." }) })] }));
    },
};
