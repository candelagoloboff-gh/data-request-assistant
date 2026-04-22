import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Checkbox from '../../design-system/Checkbox/Checkbox';
import Drawer from '../../design-system/Drawer';
import FiltersButton from './FiltersButton';
const meta = {
    component: FiltersButton,
    title: 'Composed Components/Filters/FiltersButton',
    tags: ['autodocs'],
    argTypes: {
        count: {
            description: 'Number of currently applied filters',
        },
        onClick: {
            description: 'Function to be called when the button is clicked',
        },
        onClear: {
            description: 'Function to be called when the clear button is clicked',
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const NoRemoveFiltersButton = {
    render: () => (_jsx(FiltersButton, { count: 5, onClick: () => { } })),
};
export const CountingFiltersOnDrawer = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [filter1, setFilter1] = useState(true);
        const [filter2, setFilter2] = useState(false);
        const [filter3, setFilter3] = useState(false);
        const appliedFilters = Number(filter1) + Number(filter2) + Number(filter3);
        return (_jsxs(_Fragment, { children: [_jsx(FiltersButton, { count: appliedFilters, onClick: () => {
                        setIsOpen(true);
                    }, onClear: () => {
                        setFilter1(false);
                        setFilter2(false);
                        setFilter3(false);
                    } }), _jsxs(Drawer, { open: isOpen, onClose: () => {
                        setIsOpen(false);
                    }, children: [_jsx(Checkbox, { label: "Filter 1", checked: filter1, onChange: () => {
                                setFilter1(!filter1);
                            } }), _jsx(Checkbox, { label: "Filter 2", checked: filter2, onChange: () => {
                                setFilter2(!filter2);
                            } }), _jsx(Checkbox, { label: "Filter 3", checked: filter3, onChange: () => {
                                setFilter3(!filter3);
                            } })] })] }));
    },
};
