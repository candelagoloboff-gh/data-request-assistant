import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable no-console */
import { FormProvider, useForm } from 'react-hook-form';
import { IconButton, Link, Stack, Typography } from '@mui/material';
import { IconFileUpload } from '@tabler/icons-react';
import { useModal } from '../../../hooks/useModal';
import Chip from '../Chip';
import Dialog from '../Dialog';
import { mockFile } from '../FileCard/stories';
import { typeMap } from './constants';
import FormUploader from './form';
import Uploader from '.';
const meta = {
    component: Uploader,
    title: 'Design System/Uploader/Uploader',
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        helperText: { control: 'text' },
        title: { control: 'text' },
        description: { control: 'text' },
        error: { control: 'boolean' },
        disabled: { control: 'boolean' },
        readOnly: { control: 'boolean' },
        maxFiles: { control: 'number' },
        fileSizeLimit: { control: 'number' },
        triggerOnChangeWhenUploading: { control: 'boolean' },
        showUploadButtonOnMaxFiles: { control: 'boolean' },
        acceptedTypes: { control: false },
        value: { control: false },
        onChange: { control: false },
        uploadFunction: { control: false },
        onDropAccepted: { control: false },
        onDropRejected: { control: false },
        onFilesUploaded: { control: false },
        fileCardProps: { control: false },
        slotProps: { control: false },
        sx: { control: false },
    },
    args: {
        helperText: 'Helper Text',
        label: 'Label',
        value: [],
        onDropAccepted: files => {
            console.log('onDropAccepted', files);
        },
        onDropRejected: (files, event) => {
            console.log('onDropRejected', files, event);
        },
        sx: { width: '100%' },
    },
};
export default meta;
export const WithUploads = {
    args: {
        value: [
            {
                status: 'success',
                file: mockFile,
            },
            {
                status: 'error',
                file: mockFile,
            },
            {
                status: 'uploading',
                file: mockFile,
            },
            {
                status: 'default',
                attachment: {
                    url: 'https://picsum.photos/200',
                    name: 'test.png',
                    type: 'image/png',
                    size: '100KB',
                    bytes: 100,
                },
            },
        ],
    },
};
export const UploaderWithForm = {
    render: () => {
        const form = useForm({
            defaultValues: {
                files: [],
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormUploader, { name: "files", uploaderProps: {
                    sx: { width: '100%' },
                    label: 'Upload Files',
                    helperText: 'Upload your files here',
                    acceptedTypes: ['image', 'video', 'msword', 'pdf'],
                    uploadFunction: file => new Promise(resolve => resolve({
                        status: 'success',
                        file,
                    })),
                } }) }));
    },
};
export const UploaderFormWithMaxFiles = {
    render: () => {
        const form = useForm({
            defaultValues: {
                documents: [],
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormUploader, { name: "documents", fileCardProps: {
                    onRemove: fileCard => {
                        alert(`onRemove intercepted ${fileCard.file?.name}`);
                    },
                }, uploaderProps: {
                    sx: { width: '100%' },
                    label: 'Upload Files',
                    helperText: 'Upload your files here',
                    maxFiles: 2,
                    acceptedTypes: ['pdf'],
                    uploadFunction: file => new Promise(resolve => resolve({
                        status: 'success',
                        file,
                    })),
                } }) }));
    },
};
export const UploaderFormWithOneFileAllowed = {
    render: () => {
        const form = useForm({
            defaultValues: {
                files: [],
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormUploader, { name: "files", uploaderProps: {
                    sx: { width: '100%' },
                    label: 'Upload Files',
                    helperText: 'Upload your files here',
                    maxFiles: 1,
                    uploadFunction: file => new Promise(resolve => resolve({
                        status: 'success',
                        file,
                    })),
                    onDropAccepted: () => {
                        alert('onDropAccepted intercepted');
                        form.setValue('files', []);
                    },
                }, fileCardProps: {
                    disabled: true,
                } }) }));
    },
};
export const UploaderFormDisabled = {
    render: () => {
        const form = useForm({
            defaultValues: {
                files: [],
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormUploader, { name: "files", uploaderProps: {
                    sx: { width: '100%' },
                    label: 'Upload Files',
                    helperText: 'Upload your files here',
                    disabled: true,
                    acceptedTypes: ['pdf'],
                    uploadFunction: file => new Promise(resolve => resolve({
                        status: 'success',
                        file,
                    })),
                    onDropAccepted: () => {
                        alert('onDropAccepted intercepted');
                        form.setValue('files', []);
                    },
                }, fileCardProps: {
                    disabled: true,
                } }) }));
    },
};
export const UploaderFormWithFileCardDisabled = {
    render: () => {
        const form = useForm({
            defaultValues: {
                files: [],
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormUploader, { name: "files", uploaderProps: {
                    sx: { width: '100%' },
                    label: 'Upload Files',
                    helperText: 'Upload your files here',
                    maxFiles: 1,
                    uploadFunction: file => new Promise(resolve => resolve({
                        status: 'success',
                        file,
                    })),
                }, fileCardProps: {
                    disabled: true,
                } }) }));
    },
};
export const UploaderFormWithJustPdfAllowed = {
    render: () => {
        const form = useForm({
            defaultValues: {
                files: [],
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormUploader, { name: "files", uploaderProps: {
                    sx: { width: '100%' },
                    label: 'Upload Files',
                    helperText: 'Upload your files here',
                    maxFiles: 1,
                    acceptedTypes: ['pdf'],
                    uploadFunction: file => new Promise(resolve => resolve({
                        status: 'success',
                        file,
                    })),
                } }) }));
    },
};
const formatGroups = Object.entries(typeMap).map(([key, { extensions }]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    extensions,
}));
const AllowedFormatsDialogContent = ({ onClose }) => (_jsx(Dialog, { title: "Allowed formats", onClose: onClose, body: _jsx(Stack, { sx: { gap: 2 }, children: formatGroups.map(({ label, extensions }) => (_jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(Typography, { variant: "globalXS", fontWeight: "fontWeightSemiBold", children: label }), _jsx(Stack, { sx: { flexDirection: 'row', flexWrap: 'wrap', gap: 0.5 }, children: extensions.map(ext => (_jsx(Chip, { label: ext, size: "small" }, ext))) })] }, label))) }) }));
export const WithCustomDropzoneBody = {
    render: () => {
        const { modal, showModal } = useModal(AllowedFormatsDialogContent, {
            maxWidth: 'xs',
            fullWidth: true,
        });
        return (_jsxs(_Fragment, { children: [modal, _jsx(Uploader, { sx: { width: '100%' }, label: "Upload Files", helperText: "Upload your files here", value: [], onChange: files => console.log('onChange', files), uploadFunction: file => new Promise(resolve => resolve({ status: 'success', file })), children: _jsxs(Stack, { sx: { gap: 0.5, alignItems: 'center' }, children: [_jsx(IconButton, { variant: "secondary", children: _jsx(IconFileUpload, { color: "primary" }) }), _jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", children: "Upload a file or drag and drop" }), _jsxs(Typography, { variant: "globalXS", sx: { color: theme => theme.palette.new.text.neutral.lighter }, children: ["You can upload files in the", ' ', _jsx(Link, { component: "button", type: "button", variant: "globalXS", onClick: e => {
                                            e.stopPropagation();
                                            showModal();
                                        }, children: "allowed formats" }), ' ', "up to 100 MB."] })] }) })] }));
    },
};
