export const SURVEY_RESULTS_LOCALE = 'es-AR';
/**
 * Format general numbers (counts, scores, etc.) using the survey results locale
 * @param value - The number to format
 * @returns Formatted number string
 */
export const formatAmount = (value) => {
    return value.toLocaleString(SURVEY_RESULTS_LOCALE);
};
