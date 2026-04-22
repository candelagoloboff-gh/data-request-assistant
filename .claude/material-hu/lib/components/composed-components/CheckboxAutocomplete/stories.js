import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import { mockOptions } from './mocks';
import { CheckboxAutocomplete } from '.';
const FormWrapper = (props) => {
    const methods = useForm({
        defaultValues: {
            [props.name]: mockOptions.filter(o => o.checked),
            search: '',
        },
    });
    return (_jsx(FormProvider, { ...methods, children: _jsx(CheckboxAutocomplete, { ...props }) }));
};
const meta = {
    component: CheckboxAutocomplete,
    title: 'Composed Components/CheckboxAutocomplete',
    tags: ['autodocs'],
    render: args => _jsx(FormWrapper, { ...args }),
    args: {
        name: 'selections',
        label: 'Search options',
        options: mockOptions,
        disabled: false,
        uncheckedDisabled: false,
        searchLoading: false,
        searchDisabled: false,
        searchEmpty: false,
        searchLoadingTitle: 'Loading results...',
        searchEmptyTitle: 'No results found',
        helperText: '',
    },
    argTypes: {
        name: {
            description: 'Field name used to register the value in the form.',
            table: { defaultValue: { summary: undefined } },
            control: 'text',
        },
        label: {
            description: 'Label text displayed on the search input.',
            table: { defaultValue: { summary: undefined } },
            control: 'text',
        },
        options: {
            description: 'List of available options to select from.',
            table: { defaultValue: { summary: '[]' } },
            control: 'object',
        },
        disabled: {
            description: 'Disables deletion of selected chips.',
            table: { defaultValue: { summary: 'false' } },
            control: 'boolean',
        },
        uncheckedDisabled: {
            description: 'Disables options that are not currently selected.',
            table: { defaultValue: { summary: 'false' } },
            control: 'boolean',
        },
        searchLoading: {
            description: 'Shows a loading state in the search input and menu.',
            table: { defaultValue: { summary: 'false' } },
            control: 'boolean',
        },
        searchDisabled: {
            description: 'Disables the search input and closes the dropdown menu.',
            table: { defaultValue: { summary: 'false' } },
            control: 'boolean',
        },
        searchEmpty: {
            description: 'Indicates the search returned no results.',
            table: { defaultValue: { summary: 'false' } },
            control: 'boolean',
        },
        searchLoadingTitle: {
            description: 'Title shown in the menu while results are loading.',
            table: { defaultValue: { summary: undefined } },
            control: 'text',
        },
        searchEmptyTitle: {
            description: 'Title shown in the menu when there are no results.',
            table: { defaultValue: { summary: undefined } },
            control: 'text',
        },
        helperText: {
            description: 'Helper text displayed below the search input.',
            table: { defaultValue: { summary: undefined } },
            control: 'text',
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
