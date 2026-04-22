# HU Translations Vite Plugin

Hot-reloads translation JSON files from `../hu-translations/locale/` without a page reload.

When `enabled: false` or the sibling folder is not found, the plugin is a no-op.

## What it handles

- **Request proxy** — Intercepts `/node_modules/hu-translations/locale/*` and serves from `../hu-translations/locale/` instead
- **File watching** — Monitors `../hu-translations/locale/` for JSON changes
- **WebSocket push** — Sends updated translations to the browser via `i18n-update` event
- **Client handler** — `clientSocketHandler.ts` calls `i18n.addResourceBundle()` to hot-swap translations

## How it works

```
File changed: ../hu-translations/locale/es/common.json
        ↓
Vite handleHotUpdate → reads JSON, sends WebSocket event
        ↓
clientSocketHandler → i18n.addResourceBundle() → UI re-renders
```

## Manual setup (without dev-server)

If you're not using `dev-server.ts`, configure it directly:

**`vite.config.ts`**
```ts
import { createHuTranslationsVitePlugin } from 'material-hu/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'ENABLE_HMR_PLUGINS');
  const isDev = command === 'serve' && Boolean(env.ENABLE_HMR_PLUGINS);

  return {
    plugins: [createHuTranslationsVitePlugin({ enabled: isDev })],
  };
});
```

**`i18n.ts`** — import the client handler so the browser listens for updates:
```ts
import 'material-hu/vite/hu-translations/clientSocketHandler';
```

> The client handler silently skips updates if i18next is not yet initialized (`i18n.isInitialized === false`), so this import is safe to add at the top of your i18n setup file.

**Run**
```sh
ENABLE_HMR_PLUGINS=true vite
```

## See also

[← Dev server overview](../README.md)
