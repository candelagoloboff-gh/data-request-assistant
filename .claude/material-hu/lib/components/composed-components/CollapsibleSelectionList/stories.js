import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable no-console */
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { segmentations } from '../../../mock/data/segmentations';
import CollapsibleSelectionList from './index';
const meta = {
    component: CollapsibleSelectionList,
    title: 'Composed Components/CollapsibleSelectionList',
    tags: ['autodocs'],
    args: {
        virtualized: true,
        title: segmentations[0].name,
        items: segmentations[0].items,
        itemRenderer: item => (_jsx(Typography, { variant: "globalS", color: theme => theme.palette.new.text.neutral.default, children: item.name })),
        selected: new Set([1, 3, 5]),
        selectionLimit: 10,
        listHeight: 300,
        allowSelectAll: true,
        slotProps: {
            search: {
                placeholder: 'Buscar departamento...',
            },
            accordion: {
                getDescription: (selected, total) => `${selected.size} de ${total} departamentos seleccionados`,
            },
            selectAllCheckbox: {
                label: 'Seleccionar todos los departamentos',
            },
            stateCard: {
                title: 'No se encontraron resultados',
                description: 'No se encontraron resultados',
            },
        },
    },
};
export default meta;
export const Default = {
    render: args => {
        const [selected, setSelected] = useState(args.selected || new Set());
        const handleChange = (value) => {
            setSelected(new Set(value));
            console.log('Selected items:', value);
        };
        return (_jsx(CollapsibleSelectionList, { ...args, selected: selected, onChange: handleChange }));
    },
};
