import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useDimensions from '.';
const meta = {
    title: 'Hooks/useDimensions',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Hook that observes an element and returns its width and height. Use the returned ref and attach it to the element to measure, or pass an element directly.',
            },
        },
    },
};
export default meta;
const DimensionsDisplay = () => {
    const { ref, dimensions } = useDimensions();
    return (_jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(Typography, { variant: "globalS", children: "Resize the box below to see dimensions update." }), _jsx(Box, { ref: ref, sx: {
                    width: '100%',
                    minHeight: 200,
                    maxWidth: 400,
                    resize: 'both',
                    overflow: 'auto',
                    border: '1px dashed',
                    borderColor: 'divider',
                    borderRadius: 1,
                    p: 2,
                    bgcolor: 'action.hover',
                }, children: _jsxs(Typography, { variant: "body2", children: ["width: ", dimensions.width, "px \u00B7 height: ", dimensions.height, "px"] }) })] }));
};
export const WithRef = {
    render: () => _jsx(DimensionsDisplay, {}),
    parameters: {
        docs: {
            description: {
                story: 'Attach the returned ref to the element you want to measure.',
            },
        },
    },
};
export const WithElement = {
    render: () => {
        const ref = useRef(null);
        const [el, setEl] = useState(null);
        const { dimensions } = useDimensions(el);
        useEffect(() => {
            setEl(ref.current);
        }, []);
        return (_jsx(Box, { sx: { backgroundColor: 'red' }, ref: ref, children: _jsxs(Typography, { variant: "globalS", children: ["width: ", dimensions.width, "px \u00B7 height: ", dimensions.height, "px"] }) }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Pass the element directly to the hook (see code for correct pattern).',
            },
        },
    },
};
