import { useLocalizationContext } from '@mui/x-date-pickers/internals/hooks/useUtils';
import { useLocalizationContext as useLocalizationContextV6 } from '@mui/x-date-pickers-v6/internals/hooks/useUtils';
import { format, parseISO } from 'date-fns';
/** Provides a locale-aware date formatting function using the MUI-X date picker localization context. */
export default function useFormatDate({ useV6Provider = false } = {}) {
    const localeContext = useV6Provider
        ? useLocalizationContextV6()
        : useLocalizationContext();
    const formatDate = (date, pattern = 'P', options) => {
        // Patterns: https://date-fns.org/v4.1.0/docs/format
        // Default pattern: P (04/29/2024)
        const parsedDate = typeof date === 'string' ? parseISO(date) : date;
        return format(parsedDate, pattern, {
            locale: localeContext.utils.locale,
            ...options,
        });
    };
    return { formatDate };
}
