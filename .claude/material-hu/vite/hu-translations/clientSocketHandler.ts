/// <reference types="vite/client" />
/** biome-ignore-all lint/suspicious/noConsole: hu-translations-hmr */
import i18n from 'i18next';

type TranslationUpdateData = {
  lang: string;
  ns: string;
  translations: Record<string, unknown>;
};

if (import.meta.hot) {
  import.meta.hot.on('i18n-update', (data: TranslationUpdateData) => {
    const { lang, ns, translations } = data;

    if (!i18n.isInitialized) return;

    i18n.addResourceBundle(lang, ns, translations, true, true);

    i18n.emit('languageChanged');
    console.log(`[hu-translations-hmr] ✅ Updated: ${lang}/${ns}`);
  });
}
