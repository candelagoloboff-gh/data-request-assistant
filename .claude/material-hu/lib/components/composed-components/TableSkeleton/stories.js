import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Table from '../../design-system/Table';
import TableCell from '../../design-system/Table/components/TableCell';
import TableHead from '../../design-system/Table/components/TableHead';
import TableSkeleton from './index';
const meta = {
    component: TableSkeleton,
    title: 'Composed Components/TableSkeleton',
    tags: ['autodocs'],
    args: {},
    argTypes: {
        rows: {
            control: { type: 'number' },
            defaultValue: 3,
        },
        cols: {
            control: { type: 'number' },
            defaultValue: 3,
        },
    },
    render: args => (_jsxs(Table, { children: [_jsxs(TableHead, { children: [_jsx(TableCell, { children: "Header 1" }), _jsx(TableCell, { children: "Header 2" }), _jsx(TableCell, { children: "Header 3" })] }), _jsx(TableSkeleton, { ...args })] })),
};
export const Default = {
    args: { rows: 3, cols: 3 },
};
export default meta;
