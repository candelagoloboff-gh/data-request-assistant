import { jsx as _jsx } from "react/jsx-runtime";
import { DrawerLayerProvider } from '../../../layers/Drawers';
import ProfileListFieldRow from '.';
const meta = {
    component: ProfileListFieldRow,
    title: 'Composed Components/Profile/ProfileListFieldRow',
    tags: ['autodocs'],
    decorators: [
        Story => (_jsx(DrawerLayerProvider, { children: _jsx(Story, {}) })),
    ],
    args: {
        field: {
            name: 'Skills',
            value: ['React', 'TypeScript', 'Node.js'],
        },
        texts: {
            items_associated_to_field: 'Items associated to this field',
            no_items_found: 'No items found',
            back: 'Back',
            items_total: '3 items total',
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const SingleItem = {
    args: {
        field: {
            name: 'Department',
            value: ['Engineering'],
        },
        texts: {
            items_associated_to_field: 'Items associated to this field',
            no_items_found: 'No items found',
            back: 'Back',
            items_total: '1 item total',
        },
    },
};
export const ManyItems = {
    args: {
        field: {
            name: 'Certifications',
            value: [
                'AWS Solutions Architect',
                'Google Cloud Professional',
                'Kubernetes Administrator',
                'Terraform Associate',
                'Scrum Master',
                'PMP',
            ],
        },
        texts: {
            items_associated_to_field: 'Items associated to this field',
            no_items_found: 'No items found',
            back: 'Back',
            items_total: '6 items total',
        },
    },
};
