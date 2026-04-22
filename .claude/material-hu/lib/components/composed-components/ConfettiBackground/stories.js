import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Stack, Typography } from '@mui/material';
import { useModal } from '../../../hooks/useModal';
import { getColorPaletteMapping } from '../../../utils/colors';
import CroppingModal from '../CroppingModal';
import ConfettiBackground from '.';
const colors = getColorPaletteMapping();
const colorLabels = Object.entries(colors).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});
const meta = {
    component: ConfettiBackground,
    title: 'Composed Components/ConfettiBackground',
    tags: ['autodocs'],
    argTypes: {
        bgColor: {
            description: 'The background color of the confetti background',
            control: {
                type: 'select',
                labels: colorLabels,
            },
            options: Object.values(colors),
        },
        showConfetti: {
            description: 'If cover picture is provided, confetti will be hidden.',
            if: {
                arg: 'coverPicture',
                exists: false,
            },
        },
        showPoints: {
            description: 'Boolean to show or hide the points pill',
        },
        coverPicture: {
            description: 'It can be a File, a string (url) or null',
            table: {
                type: {
                    summary: 'File | string | null',
                },
                defaultValue: {
                    summary: 'null',
                },
            },
        },
        points: {
            control: 'number',
            description: 'If points is 0, the pill will be hidden',
            if: {
                arg: 'showPoints',
                eq: true,
            },
        },
    },
    parameters: {
        componentSubtitle: 'Used in acknowledgements module',
    },
};
export default meta;
export const Default = {
    args: {
        bgColor: colors.DARK_GREEN,
        showConfetti: true,
        showPoints: true,
        points: '10',
    },
};
export const WithCroppedCustomImage = {
    args: {
        bgColor: colors.DARK_GREEN,
        showPoints: true,
        points: '10',
    },
    render: args => {
        const expectedImageHeight = 236;
        const expectedImageWidth = 550;
        const [file, setFile] = useState(undefined);
        const { getRootProps, open } = useDropzone({
            onDrop: files => {
                setFile(files[0]);
                showCroppingModal();
            },
            accept: {
                'image/png': [],
                'image/jpg': [],
            },
        });
        const { modal: croppingModal, showModal: showCroppingModal } = useModal(CroppingModal, { fullWidth: true, maxWidth: 'md' }, {
            file,
            recommendedHeight: expectedImageHeight,
            recommendedWidth: expectedImageWidth,
            title: 'Crop Image',
            saveLabel: 'Save',
            cancelLabel: 'Cancel',
            onSave: croppedFile => {
                setFile(croppedFile);
            },
        });
        return (_jsxs(_Fragment, { children: [croppingModal, _jsx(ConfettiBackground, { ...args, showConfetti: !file, coverPicture: file, cropHeight: expectedImageHeight, cropWidth: expectedImageWidth }), _jsxs(Stack, { sx: { marginTop: 2, gap: 1 }, children: [_jsxs(Stack, { sx: { flexDirection: 'row', gap: 1 }, children: [_jsx(Button, { variant: "contained", onClick: open, ...getRootProps(), children: "Upload Custom Image" }), _jsx(Button, { variant: "secondary", onClick: () => setFile(undefined), children: "Remove Image" })] }), _jsxs(Typography, { children: ["Image height: ", expectedImageHeight, "px"] }), _jsxs(Typography, { children: ["Image width: ", expectedImageWidth, "px"] })] })] }));
    },
};
export const WithNoBorderRadius = {
    args: {
        bgColor: colors.DARK_GREEN,
        showConfetti: true,
        showPoints: true,
        points: '10',
        stylesOptions: {
            borderRadius: 0,
        },
    },
};
