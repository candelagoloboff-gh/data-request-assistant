import { type ControllerProps } from 'react-hook-form';
import { type InputProps } from '../Classic/types';
export type MoneyValue = {
    /** ISO 4217 currency code (e.g. "USD", "EUR") */
    currencyCode?: string;
    /** Numeric amount as a string */
    amount: string;
};
export type InputMoneyProps = Omit<InputProps, 'startAdornment' | 'value' | 'onChange'> & {
    /** Functions to transform the numeric string on read and write */
    transform?: {
        input: (value: string, preventDecimals?: boolean) => string;
        output: (value: string, preventDecimals?: boolean) => string;
    };
    /** Currency symbol displayed when no currencyOptions are provided */
    defaultCurrencySymbol?: string;
    /** Prevents user interaction with the input */
    disabled?: boolean;
    /** Selectable currency options shown in the currency picker */
    currencyOptions?: {
        label: string;
        value: string;
        symbol: string;
    }[];
    /** Current money value containing amount and currency code */
    value: MoneyValue;
    /** Callback fired when the amount or currency changes */
    onChange: (value: MoneyValue) => void;
    /** Disallows decimal values in the amount field */
    preventDecimals?: boolean;
    /** Shows a currency selector alongside the amount input */
    selectCoin?: boolean;
};
export type FormInputMoneyProps = {
    /** Field name used by react-hook-form */
    name: string;
    /** Props forwarded to the Money input component */
    inputProps: Pick<InputMoneyProps, 'label' | 'placeholder' | 'sx' | 'helperText' | 'maxLength' | 'selectCoin'> & Omit<InputMoneyProps, 'value' | 'onChange'>;
    /** Validation rules for react-hook-form */
    rules?: ControllerProps['rules'];
};
