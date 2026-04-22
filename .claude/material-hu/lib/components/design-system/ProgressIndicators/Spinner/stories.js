import { jsx as _jsx } from "react/jsx-runtime";
import Spinner from '.';
const meta = {
    component: Spinner,
    title: 'Design System/Progress Indicators/Spinner',
    tags: ['autodocs'],
    argTypes: {
        width: {
            control: 'radio',
            options: ['small', 'medium'],
            table: { defaultValue: { summary: 'medium' } },
        },
        centered: { control: 'boolean' },
        darkBackground: { control: 'boolean' },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Small = {
    args: {
        width: 'small',
    },
};
export const Uncentered = {
    args: {
        centered: false,
    },
};
export const DarkBackground = {
    args: {
        darkBackground: true,
    },
    decorators: [
        Story => (_jsx("div", { style: { backgroundColor: '#1a1a1a', padding: '20px' }, children: _jsx(Story, {}) })),
    ],
};
