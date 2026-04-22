import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
import FormCoverPictureUploader from './form';
import CoverPictureUploader from '.';
const meta = {
    component: CoverPictureUploader,
    title: 'Composed Components/Inputs/CoverPictureUploader',
    tags: ['autodocs'],
    args: {
        defaultSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimagenes.20minutos.es%2Fuploads%2Fimagenes%2F2024%2F05%2F15%2Funa-imagen-creada-por-la-herramienta-imagen-3-de-google.jpeg&f=1&nofb=1&ipt=14a3f0f9f5cd7a85de34990d17d6ec5d2ddb9d80c483c2dc984d1a4d2a9e181c',
    },
    decorators: [
        Story => (_jsx(Stack, { sx: { width: 500, placeSelf: 'center' }, children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Default = {
    args: {},
    render: props => {
        const [value, setValue] = useState({
            cropped: null,
            original: null,
        });
        const handleChange = (newValue) => setValue(newValue);
        return (_jsx(CoverPictureUploader, { ...props, value: value, onChange: handleChange, recommendedSizeTooltip: {
                format: ['JPG', 'PNG'],
                size: '800x400',
            } }));
    },
};
export const AspectRatio = {
    args: {},
    render: props => {
        const [value, setValue] = useState({
            cropped: null,
            original: null,
        });
        const handleChange = (newValue) => setValue(newValue);
        return (_jsx(CoverPictureUploader, { ...props, value: value, onChange: handleChange, recommendedSizeTooltip: {
                format: ['JPG', 'PNG'],
                size: '400x400',
            }, recommendedWidth: 400, recommendedHeight: 400, aspectRatio: "1/1" }));
    },
};
export const Form = {
    render: props => {
        const form = useForm({
            defaultValues: {
                coverPicture: {
                    cropped: null,
                    original: null,
                },
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormCoverPictureUploader, { uploaderProps: props, name: "coverPicture" }) }));
    },
};
