import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@mui/material';
import useGetDemoFile from '../../../hooks/useGetDemoFile';
import { useModal } from '../../../hooks/useModal';
import CroppingModal from '.';
const meta = {
    component: CroppingModal,
    title: 'Composed Components/CroppingModal',
    tags: ['autodocs'],
    argTypes: {
        file: {
            name: 'file',
            description: 'Upload an image from your computer',
            defaultValue: null,
            control: {
                type: 'file',
                accept: ['.png', '.jpg'],
            },
        },
    },
    args: {
        title: 'Crop Image',
        saveLabel: 'Save',
        cancelLabel: 'Cancel',
        recommendedWidth: 900,
        recommendedHeight: 400,
        onSave: () => alert('Image cropped'),
        onClose: () => alert('Canceled'),
    },
};
export default meta;
export const Default = {
    render: args => {
        const file = useGetDemoFile(args.file);
        if (!file)
            return _jsx("div", { children: "Loading default image..." });
        return (_jsx(CroppingModal, { ...args, file: file }));
    },
};
export const Round = {
    args: {
        round: true,
        recommendedWidth: 600,
        recommendedHeight: 600,
        title: 'Crop Profile Picture',
    },
    render: args => {
        const file = useGetDemoFile(args.file);
        if (!file)
            return _jsx("div", { children: "Loading default image..." });
        return (_jsx(CroppingModal, { ...args, file: file }));
    },
};
export const WithModal = {
    render: args => {
        const file = useGetDemoFile(args.file);
        const { modal: croppingModal, showModal: showCroppingModal } = useModal(CroppingModal, { fullWidth: true, maxWidth: 'md' }, {
            ...args,
            file: file,
        });
        return (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "secondary", onClick: () => showCroppingModal(args), children: "Open Cropping Modal" }), croppingModal] }));
    },
};
