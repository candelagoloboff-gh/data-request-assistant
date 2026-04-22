import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Stack } from '@mui/material';
import { IconBook, IconCalendar, IconFilter } from '@tabler/icons-react';
import Category from '.';
const meta = {
    component: Category,
    title: 'Composed Components/Category',
    tags: ['autodocs'],
    args: {
        label: 'Category',
        Icon: IconFilter,
        selected: false,
        onClick: () => alert('Category clicked'),
    },
};
export default meta;
export const Default = {
    args: {},
};
const StatefulCategory = () => {
    const [selected, setSelected] = useState(0);
    return (_jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(Category, { label: "Category 0", Icon: IconFilter, selected: selected === 0, onClick: () => setSelected(0) }), _jsx(Category, { label: "Category 1", Icon: IconBook, selected: selected === 1, onClick: () => setSelected(1) }), _jsx(Category, { label: "Category 2", Icon: IconCalendar, selected: selected === 2, onClick: () => setSelected(2) })] }));
};
export const Stateful = {
    render: () => _jsx(StatefulCategory, {}),
};
