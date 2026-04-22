import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Drawer from '../../../design-system/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DataContainer from '.';
const meta = {
    component: DataContainer,
    title: 'Composed Components/Profile/DataContainer',
    tags: ['autodocs'],
    args: {
        title: 'Section title',
        sections: [
            _jsx(Typography, { children: "Section 1 content" }, "1"),
            _jsx(Typography, { children: "Section 2 content" }, "2"),
            _jsx(Typography, { children: "Section 3 content" }, "3"),
        ],
    },
};
export default meta;
export const Default = {
    args: {},
};
export const SingleSection = {
    args: {
        title: 'Single section',
        sections: [_jsx(Typography, { children: "Only one section" }, "1")],
    },
};
export const ManySections = {
    args: {
        title: 'Multiple sections',
        sections: [
            _jsx(Typography, { children: "Item 1" }, "1"),
            _jsx(Typography, { children: "Item 2" }, "2"),
            _jsx(Typography, { children: "Item 3" }, "3"),
            _jsx(Typography, { children: "Item 4" }, "4"),
            _jsx(Typography, { children: "Item 5" }, "5"),
            _jsx(Typography, { children: "Item 6" }, "6"),
        ],
    },
};
export const WithEdit = {
    args: {
        title: 'Personal information',
        sections: [
            _jsx(Typography, { children: "John Doe" }, "1"),
            _jsx(Typography, { children: "john.doe@email.com" }, "2"),
            _jsx(Typography, { children: "+54 11 1234-5678" }, "3"),
        ],
    },
    render: args => {
        const [isOpen, setIsOpen] = useState(false);
        return (_jsxs(_Fragment, { children: [_jsx(DataContainer, { ...args, onEdit: () => setIsOpen(true) }), _jsx(Drawer, { title: "Edit personal information", size: "small", open: isOpen, onClose: () => setIsOpen(false), primaryButtonProps: { children: 'Save' }, secondaryButtonProps: {
                        children: 'Cancel',
                        onClick: () => setIsOpen(false),
                    }, children: _jsx(Stack, { spacing: 2, children: _jsx(Typography, { children: "Edit form placeholder content." }) }) })] }));
    },
};
