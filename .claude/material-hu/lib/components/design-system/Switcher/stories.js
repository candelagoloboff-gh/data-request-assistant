import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IconInfoCircle } from '@tabler/icons-react';
import Tooltip from '../Tooltip';
import FormSwitcher from './form';
import Switcher from '.';
const meta = {
    component: Switcher,
    title: 'Design System/Switches/Switcher',
    tags: ['autodocs'],
    parameters: {
        docs: {
            source: {
                type: 'dynamic',
            },
        },
    },
};
export default meta;
const exampleTitle = 'Chocolate';
const exampleDescription = 'Toggle if you like chocolate';
export const Default = {
    args: {
        title: exampleTitle,
        description: exampleDescription,
    },
    render: () => {
        const [value, setValue] = useState(false);
        return (_jsx(Switcher, { title: exampleTitle, description: exampleDescription, value: value, onChange: () => setValue(!value) }));
    },
};
export const NoTitle = {
    render: () => {
        const [value, setValue] = useState(false);
        return (_jsx(Switcher, { value: value, onChange: () => setValue(!value) }));
    },
};
export const Disabled = {
    args: {
        title: exampleTitle,
        description: exampleDescription,
        disabled: true,
    },
};
export const Checked = {
    args: {
        title: exampleTitle,
        description: exampleDescription,
        value: true,
    },
};
export const WithIcon = {
    args: {
        title: exampleTitle,
        value: true,
        Icon: (_jsx(Tooltip, { title: "I can give extra information this way!", children: _jsx(IconInfoCircle, { size: 20 }) })),
    },
};
export const WithMessageOnDisabled = {
    args: {
        title: exampleTitle,
        value: true,
        disabled: true,
        disabledTooltip: {
            direction: 'bottom',
            description: 'This is a disabled message',
        },
    },
};
export const FormSwitcherStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                mySwitch1: false,
                mySwitch2: true,
            },
        });
        return (_jsxs(FormProvider, { ...form, children: [_jsx(FormSwitcher, { name: "mySwitch1", switcherProps: {
                        title: 'My title 1',
                        description: 'My description 1',
                    } }), _jsx(FormSwitcher, { name: "mySwitch2", switcherProps: {
                        title: 'My title 2',
                        description: 'My description 2',
                    } })] }));
    },
};
export const CustomTitleAndDescription = {
    args: {
        title: exampleTitle,
        value: true,
        description: exampleDescription,
        titleProps: {
            variant: 'globalM',
            fontWeight: 'fontWeightSemiBold',
            color: 'rgb(51, 79, 179)',
        },
        descriptionProps: {
            variant: 'globalXS',
            fontWeight: 'fontWeightSemiBold',
            color: 'lightBlue',
        },
        Icon: (_jsx(Tooltip, { title: "I can give extra information this way!", children: _jsx(IconInfoCircle, { size: 20 }) })),
    },
};
