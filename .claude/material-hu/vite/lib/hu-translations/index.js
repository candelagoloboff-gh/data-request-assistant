"use strict";
/** biome-ignore-all lint/suspicious/noConsole: hu-translations-plugin */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHuTranslationsVitePlugin = void 0;
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const TAG = '[hu-translations-plugin]';
/**
 * Creates the Vite plugin that enables HMR for hu-translations.
 *
 * What it does:
 * - Watches ../hu-translations/locale/ for JSON changes
 * - Intercepts requests to node_modules/hu-translations/locale/* and serves local files instead
 * - Pushes updated translations to the browser via WebSocket (i18n-update event)
 */
const getHuTranslationsVitePlugin = (translationsPath) => {
    if (!translationsPath)
        return { name: 'hu-translations-disabled' };
    const localePath = node_path_1.default.join(translationsPath, 'locale');
    console.info(`${TAG} ✅ ${(0, utils_1.greenLog)('Activated')}`);
    return {
        name: 'hu-translations-hmr',
        configureServer(server) {
            // Watch the sibling locale folder for changes
            server.watcher.add(localePath);
            // Intercept requests for translation JSON files and serve from local source
            server.middlewares.use((req, res, next) => {
                if (!req.url)
                    return next();
                const match = req.url.match(constants_1.NODE_MODULES_LOCALE_PATTERN);
                if (!match)
                    return next();
                const relativePath = match[1]; // e.g. "es/learning" or "en/common"
                const localFilePath = node_path_1.default.join(localePath, `${relativePath}.json`);
                if (!node_fs_1.default.existsSync(localFilePath))
                    return next();
                try {
                    const content = node_fs_1.default.readFileSync(localFilePath, 'utf-8');
                    res.setHeader('Content-Type', 'application/json');
                    res.setHeader('Cache-Control', 'no-cache');
                    res.end(content);
                }
                catch {
                    next();
                }
            });
        },
        handleHotUpdate({ file, server }) {
            if (!file.includes(localePath))
                return;
            const parsed = (0, utils_1.parseTranslationPath)(file);
            if (!parsed)
                return;
            const { lang, ns } = parsed;
            try {
                const translations = JSON.parse(node_fs_1.default.readFileSync(file, 'utf-8'));
                console.log(`${TAG} Changed: ${lang}/${ns}.json`);
                // Push to browser — clientSocketHandler.ts listens for this event
                server.ws.send({
                    type: 'custom',
                    event: 'i18n-update',
                    data: { lang, ns, translations },
                });
            }
            catch (err) {
                console.error(`${TAG} Failed to read ${lang}/${ns}.json`, err);
            }
            // Return empty array to prevent full page reload
            return [];
        },
    };
};
const createHuTranslationsVitePlugin = (config) => {
    const translationsFolderPath = (0, utils_1.getFolderPath)({
        ...config,
        folderPath: constants_1.DEFAULT_HU_TRANSLATIONS_PATH,
        repoName: 'hu-translations',
    });
    return getHuTranslationsVitePlugin(translationsFolderPath);
};
exports.createHuTranslationsVitePlugin = createHuTranslationsVitePlugin;
