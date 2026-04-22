import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Card } from '@mui/material';
import { IconChevronRight } from '@tabler/icons-react';
import ImgAvatar1 from '../../../../static/avatar1.png';
import ListItem from './components/ListItem';
import List from '.';
const meta = {
    component: List,
    title: 'Design System/List',
    tags: ['autodocs'],
    argTypes: {
        children: { control: false },
        sx: { control: false },
    },
    parameters: {
        docs: {
            description: {
                component: 'This component is used to display a list of items. `List` component is the wrapper. `ListItem` is for each item in the list.',
            },
        },
    },
    decorators: [
        Story => (_jsx(Card, { variant: "outlined", sx: { maxWidth: 700, mx: 'auto' }, children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Default = {
    args: {
        children: (_jsx(_Fragment, { children: Array.from({ length: 3 }).map((_, index) => (_jsx(ListItem, { divider: true, avatar: {
                    src: ImgAvatar1,
                    alt: 'User avatar',
                }, action: {
                    onClick: () => alert(`Open message ${index + 1}`),
                    Icon: IconChevronRight,
                    'aria-label': 'Open message',
                }, text: {
                    copetin: `Copetin ${index + 1}`,
                    title: `John Doe  #${index + 1}`,
                    description: 'Software Engineer ',
                    date: new Date().toLocaleDateString(),
                } }, index))) })),
    },
};
