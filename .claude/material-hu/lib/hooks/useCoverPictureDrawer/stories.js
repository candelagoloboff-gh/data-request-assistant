import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Image from '../../components/composed-components/Image';
import { Button, Stack } from '@mui/material';
import { mockDefault, mockImage } from './mocks';
import useCoverPictureDrawer from '.';
const meta = {
    title: 'Hooks/useCoverPictureDrawer',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Custom hook to open a drawer with a cover picture uploader',
            },
        },
    },
};
export default meta;
export const Default = {
    render: () => {
        const [coverPicture, setCoverPicture] = useState();
        const { coverPictureDrawer, showCoverPictureDrawer, closeCoverPictureDrawer, } = useCoverPictureDrawer({ defaultSrc: coverPicture });
        const handleOpen = () => {
            showCoverPictureDrawer({
                defaultSrc: mockImage,
                onConfirm: values => {
                    closeCoverPictureDrawer();
                    const { cropped } = values.coverPicture;
                    if (!cropped)
                        return setCoverPicture(undefined);
                    setCoverPicture(typeof cropped === 'string'
                        ? cropped
                        : URL.createObjectURL(cropped));
                },
            });
        };
        return (_jsxs(Stack, { gap: 2, children: [coverPicture && _jsx(Image, { src: coverPicture }), _jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open" }), coverPictureDrawer] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Basic usage',
            },
        },
    },
};
export const Loading = {
    render: () => {
        const [loading, setLoading] = useState(false);
        const [coverPicture, setCoverPicture] = useState(mockDefault);
        const { coverPictureDrawer, showCoverPictureDrawer } = useCoverPictureDrawer({ defaultSrc: coverPicture, loading });
        const handleOpen = () => {
            showCoverPictureDrawer({
                defaultSrc: mockImage,
                onConfirm: values => {
                    setLoading(true);
                    const { cropped } = values.coverPicture;
                    if (!cropped)
                        return setCoverPicture(undefined);
                    setCoverPicture(typeof cropped === 'string'
                        ? cropped
                        : URL.createObjectURL(cropped));
                },
            });
        };
        return (_jsxs(Stack, { gap: 2, children: [coverPicture && _jsx(Image, { src: coverPicture }), _jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open" }), coverPictureDrawer] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'With loading state',
            },
        },
    },
};
export const WithDefault = {
    render: () => {
        const [coverPicture, setCoverPicture] = useState(mockDefault);
        const { coverPictureDrawer, showCoverPictureDrawer, closeCoverPictureDrawer, } = useCoverPictureDrawer({ defaultSrc: coverPicture });
        const handleOpen = () => {
            showCoverPictureDrawer({
                defaultSrc: mockImage,
                onConfirm: values => {
                    closeCoverPictureDrawer();
                    const { cropped } = values.coverPicture;
                    if (!cropped)
                        return setCoverPicture(undefined);
                    setCoverPicture(typeof cropped === 'string'
                        ? cropped
                        : URL.createObjectURL(cropped));
                },
            });
        };
        return (_jsxs(Stack, { gap: 2, children: [coverPicture && _jsx(Image, { src: coverPicture }), _jsx(Button, { variant: "primary", onClick: handleOpen, children: "Open" }), coverPictureDrawer] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'With default image',
            },
        },
    },
};
