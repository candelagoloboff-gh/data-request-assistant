export type FormatDateOptions = {
    locale?: Locale;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    firstWeekContainsDate?: number;
    useAdditionalWeekYearTokens?: boolean;
    useAdditionalDayOfYearTokens?: boolean;
};
export type FormatDateProps = {
    date: Date | string;
    pattern?: string;
    options?: FormatDateOptions;
};
type Props = {
    /**
     * When true, uses the localization context from MUI-X date picker v6 (for range date picker).
     *
     * When false, uses the localization context from MUI-X date picker v7.
     * @default false
     */
    useV6Provider?: boolean;
};
/** Provides a locale-aware date formatting function using the MUI-X date picker localization context. */
export default function useFormatDate({ useV6Provider }?: Props): {
    formatDate: (date: Date | string, pattern?: string, options?: FormatDateOptions) => string;
};
export {};
