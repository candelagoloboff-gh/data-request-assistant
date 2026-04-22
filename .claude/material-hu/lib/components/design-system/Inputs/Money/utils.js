import { useTranslation } from 'react-i18next';
import { CURRENCIES, currencyOptions } from './constants';
export const transformNumberToCurrency = (locale) => (inputValue, preventDecimals = false) => {
    const localeCode = locale.code ?? 'es';
    const value = preventDecimals
        ? Number.parseInt(inputValue.toString())
        : inputValue;
    if (!value)
        return '';
    const { currency, fractionSeparator = '.', groupingSeparator = ',', ...rest } = currencyOptions[localeCode];
    const [integer, fraction] = value.toString().split('.');
    const hasFractionDigits = value.toString().includes('.');
    const fractionDigitsLength = `${fraction || ''}`.length;
    // This regex leaves the formatted number with the grouping and fraction separators based on the provided options.
    const integerRegex = new RegExp(`\\D(?<!\\${groupingSeparator})(?<!\\${fractionSeparator})`, 'g');
    const formattedInteger = Intl.NumberFormat(localeCode, {
        maximumFractionDigits: 0,
        signDisplay: 'never',
        unitDisplay: 'short',
        ...rest,
    })
        .format(BigInt(integer.replace(/\D/g, '')))
        .replace(integerRegex, '');
    // This condition allows to show the fraction separator when user is still typing it.
    if (hasFractionDigits && fractionDigitsLength < 1)
        return `${formattedInteger}${fractionSeparator}`;
    return [formattedInteger, fraction].filter(Boolean).join(fractionSeparator);
};
export const transformCurrencyToNumber = (locale) => (value, preventDecimals = false) => {
    const { groupingSeparator = ',', fractionSeparator = '.' } = currencyOptions[locale?.code ?? 'es'];
    if (!value)
        return '';
    // This regex removes the grouping separator to parse the number correctly.
    const regex = new RegExp(`\\D(?!\\${groupingSeparator})(?<!\\${fractionSeparator})`, 'g');
    const newValue = value.replace(regex, '').replace(fractionSeparator, '.');
    if (preventDecimals) {
        return Number.parseInt(newValue).toString();
    }
    return newValue;
};
export const getCurrencyOptions = () => {
    const { t } = useTranslation();
    return CURRENCIES.map(currency => ({
        label: t(`general:currencies.${currency.code}`),
        symbol: currency.symbol,
        value: currency.code,
    }));
};
export const defaultTransform = (locale) => ({
    input: transformCurrencyToNumber(locale),
    output: transformNumberToCurrency(locale),
});
