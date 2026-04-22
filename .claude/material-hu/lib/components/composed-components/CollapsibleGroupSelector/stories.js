import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack/Stack';
import CollapsibleGroupSelector from '.';
const SAMPLE_GROUPS = [
    {
        name: 'Engineering',
        value: 'engineering',
        items: [
            { value: 'frontend', label: 'Frontend' },
            { value: 'backend', label: 'Backend' },
            { value: 'devops', label: 'DevOps' },
            { value: 'qa', label: 'QA' },
        ],
    },
    {
        name: 'Design',
        value: 'design',
        items: [
            { value: 'ux', label: 'UX Design' },
            { value: 'ui', label: 'UI Design' },
            { value: 'research', label: 'Research' },
        ],
    },
    {
        name: 'Marketing',
        value: 'marketing',
        items: [{ value: 'content', label: 'Content Marketing' }],
    },
];
const generateLargeGroup = (count) => ({
    name: 'Large Department',
    value: 'large-department',
    items: Array.from({ length: count }, (_, i) => ({
        value: `item-${i}`,
        label: `Team member ${i + 1}`,
    })),
});
const meta = {
    component: CollapsibleGroupSelector,
    title: 'Composed Components/CollapsibleGroupSelector',
    tags: ['autodocs'],
    argTypes: {
        fieldName: {
            description: 'react-hook-form field path that maps to a Record<string, boolean>',
        },
        groups: { control: false },
        title: { description: 'Heading displayed above the group list' },
        expanded: {
            description: 'Controls which accordion is expanded (omit for uncontrolled mode)',
        },
        onExpandedChange: { control: false },
        isLoading: { description: 'Shows a skeleton placeholder while loading' },
        selectAllLabel: {
            description: 'Label for the "select all" checkbox in each group',
        },
        withSearch: {
            description: 'Enables a search input inside each group accordion',
        },
    },
    parameters: {
        layout: 'padded',
        backgrounds: { default: 'white' },
        docs: {
            controls: { expanded: true },
        },
    },
    decorators: [
        Story => (_jsx(Stack, { sx: {
                width: '100%',
                maxWidth: 500,
                mx: 'auto',
                p: 3,
                backgroundColor: 'white',
                borderRadius: 2,
            }, children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Default = {
    args: {
        fieldName: 'departments',
        groups: SAMPLE_GROUPS,
        title: 'Departments',
    },
    render: props => {
        const form = useForm({
            defaultValues: {
                departments: {},
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(CollapsibleGroupSelector, { ...props }) }));
    },
};
export const Loading = {
    args: {
        fieldName: 'departments',
        groups: [],
        title: 'Departments',
        isLoading: true,
    },
    render: props => {
        const form = useForm();
        return (_jsx(FormProvider, { ...form, children: _jsx(CollapsibleGroupSelector, { ...props }) }));
    },
};
export const ManyItems = {
    args: {
        fieldName: 'teams',
        groups: [generateLargeGroup(30)],
        title: 'Teams',
    },
    render: props => {
        const form = useForm({
            defaultValues: {
                teams: {},
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(CollapsibleGroupSelector, { ...props }) }));
    },
};
export const WithSearch = {
    args: {
        fieldName: 'searchable',
        groups: [...SAMPLE_GROUPS, generateLargeGroup(30)],
        title: 'Searchable Groups',
        withSearch: true,
    },
    render: props => {
        const form = useForm({
            defaultValues: {
                searchable: {},
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(CollapsibleGroupSelector, { ...props }) }));
    },
};
