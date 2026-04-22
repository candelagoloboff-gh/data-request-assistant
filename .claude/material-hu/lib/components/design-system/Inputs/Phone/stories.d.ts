import { type StoryObj } from '@storybook/react-vite';
import InputPhone from '.';
declare const meta: {
    title: string;
    component: (props: import("./types").InputPhoneProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        defaultCountry: {
            type: "string";
            description: string;
            control: "select";
            options: string[];
        };
        fullWidth: {
            table: {
                disable: true;
            };
        };
        value: {
            table: {
                disable: true;
            };
        };
        onChange: {
            table: {
                disable: true;
            };
        };
        preferredCountries: {
            table: {
                disable: true;
            };
        };
    };
    render: (args: {
        onPaste?: import("@mui/material").TextFieldProps["onPaste"];
        autoFocus?: import("@mui/material").TextFieldProps["autoFocus"];
        onKeyDown?: import("@mui/material").TextFieldProps["onKeyDown"];
        margin?: import("@mui/material").TextFieldProps["margin"];
        onClick?: import("@mui/material").TextFieldProps["onClick"];
        inputProps?: import("@mui/material").TextFieldProps["inputProps"];
        label?: import("../Classic").InputProps["label"];
        success?: import("../Classic").InputProps["success"];
        fullWidth?: import("../Classic").InputProps["fullWidth"];
        disabled?: import("../Classic").InputProps["disabled"];
        sx?: import("../Classic").InputProps["sx"];
        helperText?: import("../Classic").InputProps["helperText"];
        placeholder?: import("../Classic").InputProps["placeholder"];
        error?: import("../Classic").InputProps["error"];
        value?: import("../Classic").InputProps["value"];
    } & {
        onChange: (value: string, countryCallingCode?: string) => void;
        defaultCountry?: import("libphonenumber-js/types").CountryCode;
        preferredCountries?: import("libphonenumber-js/types").CountryCode[];
    }) => import("react/jsx-runtime").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof InputPhone>;
export declare const Default: Story;
export declare const WithDefaultValue: Story;
export declare const Disabled: Story;
export declare const WithError: Story;
export declare const Valid: Story;
export declare const WithLabelAndHelperText: Story;
export declare const WithFormControl: Story;
export declare const WithFormControlNoSuccessOnSubmitted: Story;
