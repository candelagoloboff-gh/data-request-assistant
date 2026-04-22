import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import FormRating from './form';
import Rating from '.';
const meta = {
    component: Rating,
    title: 'Design System/Rating',
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
};
export default meta;
export const RatingStory = {
    args: {
        max: 5,
        disabled: false,
        readOnly: false,
        size: 'medium',
    },
};
export const FormRatingStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                myRating: null,
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormRating, { name: "myRating" }) }));
    },
};
export const FormRatingErrorStory = {
    render: () => {
        const form = useForm({
            defaultValues: {
                myRating: null,
            },
            errors: {
                myRating: {
                    message: 'This field is required',
                    type: 'required',
                },
            },
        });
        return (_jsx(FormProvider, { ...form, children: _jsx(FormRating, { name: "myRating" }) }));
    },
};
