import { type InputMoneyProps } from './types';
export type TransformNumberToCurrencyOptions = Intl.NumberFormatOptions & {
    fractionSeparator?: '.' | ',';
    groupingSeparator?: '.' | ',';
};
export declare const transformNumberToCurrency: (locale: Locale) => (inputValue: number | string, preventDecimals?: boolean) => string;
export declare const transformCurrencyToNumber: (locale: Locale) => (value: string, preventDecimals?: boolean) => string;
export declare const getCurrencyOptions: () => {
    label: string;
    symbol: string;
    value: string;
}[];
export declare const defaultTransform: (locale: Locale, maxDecimals?: number) => NonNullable<InputMoneyProps['transform']>;
