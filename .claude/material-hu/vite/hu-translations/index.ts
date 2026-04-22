/** biome-ignore-all lint/suspicious/noConsole: hu-translations-plugin */

import { type Plugin } from 'vite';

import {
  DEFAULT_HU_TRANSLATIONS_PATH,
  NODE_MODULES_LOCALE_PATTERN,
} from '../constants';
import { type VitePluginConfig } from '../types';
import { getFolderPath, greenLog, parseTranslationPath } from '../utils';

import fs from 'node:fs';
import path from 'node:path';

const TAG = '[hu-translations-plugin]';

/**
 * Creates the Vite plugin that enables HMR for hu-translations.
 *
 * What it does:
 * - Watches ../hu-translations/locale/ for JSON changes
 * - Intercepts requests to node_modules/hu-translations/locale/* and serves local files instead
 * - Pushes updated translations to the browser via WebSocket (i18n-update event)
 */
const getHuTranslationsVitePlugin = (
  translationsPath: string | undefined,
): Plugin => {
  if (!translationsPath) return { name: 'hu-translations-disabled' };

  const localePath = path.join(translationsPath, 'locale');

  console.info(`${TAG} ✅ ${greenLog('Activated')}`);

  return {
    name: 'hu-translations-hmr',

    configureServer(server) {
      // Watch the sibling locale folder for changes
      server.watcher.add(localePath);

      // Intercept requests for translation JSON files and serve from local source
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next();

        const match = req.url.match(NODE_MODULES_LOCALE_PATTERN);
        if (!match) return next();

        const relativePath = match[1]; // e.g. "es/learning" or "en/common"
        const localFilePath = path.join(localePath, `${relativePath}.json`);

        if (!fs.existsSync(localFilePath)) return next();

        try {
          const content = fs.readFileSync(localFilePath, 'utf-8');
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Cache-Control', 'no-cache');
          res.end(content);
        } catch {
          next();
        }
      });
    },

    handleHotUpdate({ file, server }) {
      if (!file.includes(localePath)) return;

      const parsed = parseTranslationPath(file);
      if (!parsed) return;

      const { lang, ns } = parsed;

      try {
        const translations = JSON.parse(fs.readFileSync(file, 'utf-8'));

        console.log(`${TAG} Changed: ${lang}/${ns}.json`);

        // Push to browser — clientSocketHandler.ts listens for this event
        server.ws.send({
          type: 'custom',
          event: 'i18n-update',
          data: { lang, ns, translations },
        });
      } catch (err) {
        console.error(`${TAG} Failed to read ${lang}/${ns}.json`, err);
      }

      // Return empty array to prevent full page reload
      return [];
    },
  };
};

export const createHuTranslationsVitePlugin = (
  config: VitePluginConfig,
): Plugin => {
  const translationsFolderPath = getFolderPath({
    ...config,
    folderPath: DEFAULT_HU_TRANSLATIONS_PATH,
    repoName: 'hu-translations',
  });

  return getHuTranslationsVitePlugin(translationsFolderPath);
};
