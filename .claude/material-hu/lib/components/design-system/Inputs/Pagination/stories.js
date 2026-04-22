import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import FormPagination from './form';
import Pagination from '.';
const meta = {
    component: Pagination,
    title: 'Design System/Pagination',
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'radio',
            options: ['basic', 'changer'],
            table: { defaultValue: { summary: 'changer' } },
        },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' },
        page: { control: 'number' },
        totalPages: { control: 'number' },
        limit: { control: 'number' },
        limitOptions: { control: false },
        onChangePage: { control: false },
        onChangeLimit: { control: false },
        sx: { control: false },
    },
    args: {
        page: 1,
        totalPages: 10,
        limit: 10,
        limitOptions: [10, 20, 30],
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Basic = {
    args: {
        type: 'basic',
    },
};
export const Loading = {
    args: {
        loading: true,
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
export const CustomSx = {
    args: {
        sx: {
            border: 'none',
            p: 0,
        },
    },
};
export const FormPaginationStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                pagination: {
                    page: 1,
                    limit: 10,
                },
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormPagination, { name: "pagination", inputProps: {
                    totalPages: 10,
                } }) }));
    },
};
