import { jsx as _jsx } from "react/jsx-runtime";
import SurveyResultsLayout from './index';
const meta = {
    title: 'Composed Components/peopleExperience/SurveyResultsLayout',
    component: SurveyResultsLayout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: 'Title of the survey results page',
        },
        disableFilters: {
            control: 'boolean',
            description: 'Disables the filters if true',
        },
        filtersLabel: {
            control: 'text',
            description: 'Label for the filters button',
        },
        clearFiltersLabel: {
            control: 'text',
            description: 'Label for the clear filters button',
        },
        filtersCount: {
            control: 'number',
            description: 'Number of active filters',
        },
        loading: {
            control: 'boolean',
            description: 'Shows skeleton state when true',
        },
    },
};
export default meta;
export const Default = {
    args: {
        title: 'Survey Results',
        children: (_jsx("div", { style: { padding: 32, minHeight: 300, background: '#F7F8FA' }, children: "Your survey results go here." })),
        filtersLabel: 'Filters',
        clearFiltersLabel: 'Clear Filters',
        filtersCount: 2,
        disableFilters: false,
        onClearFilters: () => alert('Filters cleared!'),
        onClickFilters: () => alert('Open filters dialog!'),
    },
};
export const WithNoFilters = {
    args: {
        ...Default.args,
        disableFilters: true,
        filtersCount: 0,
    },
};
export const CustomLabelsAndCount = {
    args: {
        ...Default.args,
        filtersLabel: 'Advanced Filters',
        clearFiltersLabel: 'Reset',
        filtersCount: 5,
    },
};
export const Loading = {
    args: {
        ...Default.args,
        loading: true,
    },
};
