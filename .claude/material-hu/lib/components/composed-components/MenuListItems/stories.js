import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormWrapper from '../storybook/FormWrapper';
import { departmentSegmentationItems } from '../../../mock/data/segmentations';
import FormMenuListItems from './form';
import MenuListItems from './index';
const meta = {
    title: 'Composed Components/MenuListItems',
    component: MenuListItems,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
const BasicStoryWrapper = ({ children }) => {
    return children;
};
export const Default = {
    render: args => {
        const [selectedItems, setSelectedItems] = useState([]);
        return (_jsx(BasicStoryWrapper, { children: _jsx(MenuListItems, { ...args, value: selectedItems, onChange: setSelectedItems }) }));
    },
    args: {
        items: departmentSegmentationItems,
        getTriggerTitle: value => value.map(item => item.name).join(', ') || 'Seleccionar países',
        maxSelection: 3,
        slotProps: {
            selectedItemsLabel: {
                children: 'Países seleccionados',
            },
            allItemsLabel: {
                children: 'Todos los países',
            },
        },
    },
};
export const WithForm = {
    render: () => {
        const form = useForm();
        return (_jsx(FormWrapper, { form: form, children: _jsx(FormMenuListItems, { name: "countries", menuListItemsProps: {
                    items: departmentSegmentationItems,
                    getTriggerTitle: value => value.map(item => item.name).join(', ') || 'Seleccionar países',
                    maxSelection: 3,
                } }) }));
    },
};
