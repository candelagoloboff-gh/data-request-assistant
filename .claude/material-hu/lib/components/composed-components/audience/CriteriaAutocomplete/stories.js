import { jsx as _jsx } from "react/jsx-runtime";
import CriteriaAutocomplete from './index';
const meta = {
    component: CriteriaAutocomplete,
    title: 'Composed Components/Audience/CriteriaAutocomplete',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Autocomplete dropdown that lets the user pick an audience assignment criterion. Each option is rendered as a criteria card (Individual, Segmentation, or All). Only the options whose callbacks are provided are displayed.',
            },
        },
    },
    decorators: [
        Story => (_jsx("div", { style: { maxWidth: 600, width: 'auto', margin: '1em' }, children: _jsx(Story, {}) })),
    ],
    argTypes: {
        onIndividual: {
            description: 'Callback fired when the individual collaborator option is selected. If omitted the option is not shown.',
            table: {
                type: { summary: '() => void' },
            },
            control: false,
        },
        onSegmentation: {
            description: 'Callback fired when the segmentation group option is selected. If omitted the option is not shown.',
            table: {
                type: { summary: '() => void' },
            },
            control: false,
        },
        onAll: {
            description: 'Callback fired when the entire community option is selected. If omitted the option is not shown.',
            table: {
                type: { summary: '() => void' },
            },
            control: false,
        },
        disabled: {
            description: 'When `true`, disables the autocomplete input.',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        sx: {
            description: 'MUI `sx` style overrides applied to the root `Autocomplete`.',
            control: false,
            table: {
                type: { summary: 'SxProps' },
            },
        },
        slotProps: {
            description: 'Props forwarded to each inner slot. Currently supports `root` (Autocomplete).',
            control: false,
            table: {
                type: { summary: 'CriteriaAutocompleteSlotProps' },
                defaultValue: { summary: '{}' },
            },
        },
    },
};
export default meta;
export const Default = {
    name: 'Default (all options)',
    args: {
        onIndividual: () => alert('[CriteriaAutocomplete] onIndividual'),
        onSegmentation: () => alert('[CriteriaAutocomplete] onSegmentation'),
        onAll: () => alert('[CriteriaAutocomplete] onAll'),
    },
};
export const Custom = {
    name: 'Custom (some options)',
    args: {
        onIndividual: () => alert('[CriteriaAutocomplete] onIndividual'),
        onSegmentation: () => alert('[CriteriaAutocomplete] onSegmentation'),
    },
};
export const Disabled = {
    args: {
        onIndividual: () => alert('[CriteriaAutocomplete] onIndividual'),
        onSegmentation: () => alert('[CriteriaAutocomplete] onSegmentation'),
        onAll: () => alert('[CriteriaAutocomplete] onAll'),
        disabled: true,
    },
};
