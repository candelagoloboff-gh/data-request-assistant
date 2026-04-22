import { jsx as _jsx } from "react/jsx-runtime";
import { IconInfoCircle } from '@tabler/icons-react';
import Tooltip from '.';
const meta = {
    component: Tooltip,
    title: 'Design System/Tooltip',
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        direction: {
            control: 'radio',
            options: ['top', 'left', 'right', 'bottom'],
            table: { defaultValue: { summary: 'top' } },
        },
        disableTooltip: { control: 'boolean' },
        delay: { control: 'number' },
        open: { control: 'boolean' },
        followCursor: { control: 'boolean' },
        children: { control: false },
        sx: { control: false },
        slotProps: { control: false },
    },
};
export default meta;
export const Default = {
    args: {
        title: 'Title',
        description: 'Description',
        direction: 'top',
        children: _jsx(IconInfoCircle, { color: "red" }),
    },
};
