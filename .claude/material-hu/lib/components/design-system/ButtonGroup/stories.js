import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Stack } from '@mui/material';
import { IconInfoCircle } from '@tabler/icons-react';
import ButtonGroup from '.';
const meta = {
    component: ButtonGroup,
    title: 'Design System/ButtonGroup',
    tags: ['autodocs'],
    args: {
        labels: ['Button 1', 'Button 2', 'Button 3'],
        fullWidth: false,
        disableUnselect: false,
    },
    argTypes: {
        defaultValue: {
            control: 'select',
            options: [null, 0, 1, 2],
            description: 'Index of the initially selected button (0-based)',
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const hideCheckIcon = {
    args: {
        labels: ['Button 1', 'Button 2'],
        showCheckIcon: false,
    },
};
export const Two = {
    args: {
        labels: ['Button 1', 'Button 2'],
    },
};
export const Three = {
    args: {
        labels: ['Button 1', 'Button 2', 'Button 3'],
    },
};
export const DisabledUnselect = {
    args: {
        labels: ['Button 1', 'Button 2', 'Button 3'],
        disableUnselect: true,
        onChange: index => {
            if (index !== null) {
                alert(`You have clicked ${index + 1}`);
            }
        },
    },
};
export const FixedTextIcon = {
    args: {
        labels: ['Button 1', 'Button 2', 'Button 3'],
        fixedCheck: true,
    },
};
export const WithOnChange = {
    args: {
        labels: ['Button 1', 'Button 2', 'Button 3'],
        onChange: index => {
            if (index !== null) {
                alert(`You have clicked ${index + 1}`);
            }
        },
    },
};
export const FullWidth = {
    render: args => (_jsx(Stack, { children: _jsx(ButtonGroup, { ...args }) })),
    args: {
        labels: ['Button 1', 'Button 2', 'Button 3'],
        fullWidth: true,
    },
};
export const WithButton = {
    render: args => (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            gap: 2,
            alignItems: 'center',
        }, children: [_jsx(ButtonGroup, { ...args }), _jsx(Button, { variant: "contained", startIcon: _jsx(IconInfoCircle, {}), children: "Info" })] })),
    args: {
        labels: ['Button 1', 'Button 2', 'Button 3'],
    },
};
