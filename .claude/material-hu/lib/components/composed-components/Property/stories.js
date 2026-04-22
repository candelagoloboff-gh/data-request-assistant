import { IconCheck } from '@tabler/icons-react';
import Property from '.';
const meta = {
    component: Property,
    title: 'Composed Components/Property',
    parameters: {
        componentSubtitle: 'Used to show properties of an element (ex: path, course)',
    },
    tags: ['autodocs'],
    args: {
        Icon: IconCheck,
        title: 'Status',
    },
};
export default meta;
export const Default = {
    args: {},
};
export const WithDescription = {
    args: {
        description: 'Success',
    },
};
export const WithVariant = {
    args: {
        description: 'Success',
        variant: 'M',
    },
};
export const WithVisibleFalse = {
    args: {
        visible: false,
    },
};
export const WithLoading = {
    args: {
        loading: true,
    },
};
export const WithLoadingAndVariant = {
    args: {
        variant: 'L',
        loading: true,
    },
};
