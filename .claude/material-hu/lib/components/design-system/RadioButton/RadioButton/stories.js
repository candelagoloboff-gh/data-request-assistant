import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
import ImgAvatar1 from '../../../../../static/avatar1.png';
import FormRadioButton from './form';
import RadioButton from '.';
export default {
    title: 'Design System/Radio Button/RadioButton',
    component: RadioButton,
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: {
                type: 'boolean',
            },
        },
        isActive: {
            control: {
                type: 'boolean',
            },
        },
    },
};
const Template = args => _jsx(RadioButton, { ...args });
export const DefaultStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                value: false,
            },
        });
        const { watch, setValue } = form;
        const { value } = watch();
        return (_jsx(RadioButton, { isActive: value, onClick: param => setValue('value', param), label: "Value" }));
    },
};
export const Description = {
    render: () => {
        const form = useForm({
            defaultValues: {
                value: false,
            },
        });
        const { watch, setValue } = form;
        const { value } = watch();
        return (_jsx(RadioButton, { isActive: value, onClick: param => setValue('value', param), label: "Value", description: "This is a helpful description." }));
    },
};
export const ExtraData = {
    render: () => {
        const form = useForm({
            defaultValues: {
                value: false,
            },
        });
        const { watch, setValue } = form;
        const { value } = watch();
        return (_jsx(RadioButton, { isActive: value, onClick: param => setValue('value', param), label: "Value", extraData: "Extra Info" }));
    },
};
export const DescriptionAndExtraData = {
    render: () => {
        const form = useForm({
            defaultValues: {
                value: false,
            },
        });
        const { watch, setValue } = form;
        const { value } = watch();
        return (_jsx(RadioButton, { isActive: value, onClick: param => setValue('value', param), label: "Value", extraData: "Extra Info", description: "This is a helpful description." }));
    },
};
export const AvatarAndDescriptionData = {
    render: () => {
        const form = useForm({
            defaultValues: {
                value: false,
            },
        });
        const { watch, setValue } = form;
        const { value } = watch();
        return (_jsx(RadioButton, { isActive: value, onClick: param => setValue('value', param), label: "Value", avatarProps: {
                src: ImgAvatar1,
            }, description: "example@mail.com" }));
    },
};
export const Error = {
    render: () => {
        const form = useForm({
            defaultValues: {
                value: false,
            },
        });
        const { watch, setValue } = form;
        const { value } = watch();
        return (_jsx(RadioButton, { isActive: value, error: true, onClick: param => setValue('value', param), label: "Value", extraData: "Extra Info", description: "This is a helpful description." }));
    },
};
export const DisabledState = Template.bind({});
DisabledState.args = {
    label: 'Disabled Option',
    disabled: true,
};
export const ActiveDisabled = Template.bind({});
ActiveDisabled.args = {
    label: 'Active and Disabled',
    description: 'This is a helpful description.',
    isActive: true,
    disabled: true,
};
export const CustomContainerStyling = {
    render: () => {
        const form = useForm({
            defaultValues: {
                value: false,
            },
        });
        const { watch, setValue } = form;
        const { value } = watch();
        return (_jsx(RadioButton, { isActive: value, onClick: param => setValue('value', param), label: "Value", extraData: "Extra Info", description: "This is a helpful description.", stackSx: {
                alignItems: 'flex-start',
                gap: '4px',
                flexDirection: 'row',
                boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
                padding: 2,
                backgroundColor: '#fafaff',
                borderRadius: 1,
            } }));
    },
    parameters: {
        docs: {
            description: {
                story: 'The stackSx prop allows you to customize the container of the RadioButton component.',
            },
        },
    },
};
export const WithForm = {
    render: () => {
        const form = useForm({
            defaultValues: {
                value: false,
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormRadioButton, { name: "value", radioButtonProps: {
                    label: 'Form Input Classic Story',
                    description: 'This is a helpful description.',
                    extraData: 'Extra Info',
                } }) }));
    },
};
export const FormSelectionCardOnlyOneOptionStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                base: {
                    radio1: false,
                    radio2: false,
                },
            },
        });
        return (_jsxs(FormProvider, { ...form, children: [_jsx("pre", { children: JSON.stringify(form.watch(), null, 2) }), _jsx("pre", { children: JSON.stringify(form.formState.dirtyFields, null, 2) }), _jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(FormRadioButton, { name: "base.radio1", isOnlyOption: true, radioButtonProps: {
                                label: 'Option 1',
                                description: 'Description for the first one',
                            } }), _jsx(FormRadioButton, { name: "base.radio2", isOnlyOption: true, radioButtonProps: {
                                label: 'Option 2',
                                description: 'Description for the second one',
                            } })] })] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'La prop isOnlyOption deshabilita todas las opciónes marcadas, menos la clickeada. Para su uso correcto es necesario aplicarlo para cada elemento (FormRadioButton)',
            },
        },
    },
};
