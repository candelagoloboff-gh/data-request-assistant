import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Table from '../../../../design-system/Table';
import TableCell from '../../../../design-system/Table/components/TableCell';
import TableContainer from '../../../../design-system/Table/components/TableContainer';
import TableHead from '../../../../design-system/Table/components/TableHead';
import TableRow from '../../../../design-system/Table/components/TableRow';
import SatisfactionTableContentSkeleton from './index';
const meta = {
    title: 'Composed Components/peopleExperience/SatisfactionTableContentSkeleton',
    component: SatisfactionTableContentSkeleton,
    parameters: {
        layout: 'padded',
    },
};
export default meta;
export const Default = {
    render: () => (_jsx(TableContainer, { children: _jsxs(Table, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { headerRow: true, children: [_jsx(TableCell, { children: "Header 1" }), _jsx(TableCell, { children: "Header 2" }), _jsx(TableCell, { children: "Header 3" })] }) }), _jsx(SatisfactionTableContentSkeleton, {})] }) })),
    name: 'Default',
};
