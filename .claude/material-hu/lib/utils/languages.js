import bgLocale from 'date-fns/locale/bg';
import deLocale from 'date-fns/locale/de';
import enLocale from 'date-fns/locale/en-US';
import esLocale from 'date-fns/locale/es';
import frLocale from 'date-fns/locale/fr';
import idLocale from 'date-fns/locale/id';
import itLocale from 'date-fns/locale/it';
import nbLocale from 'date-fns/locale/nb'; // Norwegian bokmal
import nlLocale from 'date-fns/locale/nl';
import ptLocale from 'date-fns/locale/pt';
import i18next from 'i18next';
/** Mapping of language codes to date-fns locale objects. */
export const LOCALE = {
    es: esLocale,
    en: enLocale,
    pt: ptLocale,
    de: deLocale,
    it: itLocale,
    fr: frLocale,
    no: nbLocale, // key named "no" because in web and admin it's named "no"
    bg: bgLocale,
    nl: nlLocale,
    id: idLocale,
};
/** Returns the current date-fns locale based on i18next language, falling back to Spanish. */
export const getCurrentLocale = () => LOCALE[i18next.language] || esLocale;
