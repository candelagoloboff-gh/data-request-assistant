/** Mapping of language codes to date-fns locale objects. */
export declare const LOCALE: {
    es: Locale;
    en: Locale;
    pt: Locale;
    de: Locale;
    it: Locale;
    fr: Locale;
    no: Locale;
    bg: Locale;
    nl: Locale;
    id: Locale;
};
/** Returns the current date-fns locale based on i18next language, falling back to Spanish. */
export declare const getCurrentLocale: () => Locale;
