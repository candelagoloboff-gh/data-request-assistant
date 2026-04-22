import { jsx as _jsx } from "react/jsx-runtime";
import { DrawerLayerProvider } from '../../../layers/Drawers';
import ProfileSingleFieldRow from '.';
const meta = {
    component: ProfileSingleFieldRow,
    title: 'Composed Components/Profile/ProfileSingleFieldRow',
    tags: ['autodocs'],
    decorators: [
        Story => (_jsx(DrawerLayerProvider, { children: _jsx(Story, {}) })),
    ],
    args: {
        field: {
            name: 'Full name',
            value: 'John Doe',
        },
        texts: {
            items_associated_to_field: 'Items associated to this field',
            no_items_found: 'No items found',
            back: 'Back',
            items_total: '1 item total',
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const LongValue = {
    args: {
        field: {
            name: 'Address',
            value: '1234 Elm Street, Springfield, Illinois, 62704, United States of America',
        },
    },
};
export const ShortValue = {
    args: {
        field: {
            name: 'Age',
            value: '28',
        },
    },
};
