# Material HU — Dev Server

Enables instant HMR for `material-hu` and `hu-translations` in consumer apps — no rebuild required. Changes to source files are reflected in the browser immediately.

## Prerequisites

The consumer app and the repos you want to develop against must be siblings on disk:

```
parent/
├── humand-web/        ← consumer app (run commands from here)
├── material-hu/       ← optional, enables component HMR
└── hu-translations/   ← optional, enables translation HMR
```

At least one of `material-hu` or `hu-translations` must be present.

## Setup in the consumer repo

### 1. `vite.config.ts`

Add the plugins and gate them behind the `ENABLE_HMR_PLUGINS` env variable:

```ts
import { createMaterialHuVitePlugin, createHuTranslationsVitePlugin } from 'material-hu/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'ENABLE_HMR_PLUGINS');
  const isDev = command === 'serve' && Boolean(env.ENABLE_HMR_PLUGINS);

  return {
    plugins: [
      createMaterialHuVitePlugin({ enabled: isDev }),
      createHuTranslationsVitePlugin({ enabled: isDev }),
    ],
  };
});
```

Each plugin is a no-op if its sibling folder is not found, so it's safe to register both unconditionally.

### 2. `i18n.ts` (only if using hu-translations)

Import the client handler so the browser listens for translation updates:

```ts
import 'material-hu/vite/hu-translations/clientSocketHandler';
```

### 3. `package.json`

Add a script that runs the dev server with HMR enabled:

```jsonc
{
  "scripts": {
    "start:dev": "tsx ./node_modules/material-hu/vite/dev-server.ts"
  }
}
```

Then run:

```sh
npm run start:dev
```

## What dev-server does

1. **Validates** that at least one sibling repo exists, exits with an error otherwise
2. **Patches `tsconfig.json`** to point at source for IDE type resolution
3. **Spawns Vite** with `ENABLE_HMR_PLUGINS=true`, which activates both plugins
4. **Restores `tsconfig.json`** on exit (Ctrl+C, SIGTERM, or Vite close)

The `tsconfig.json` change is hidden from git via `skip-worktree` while the server is running.

## Plugins

- [material-hu](./material-hu/README.md) — maps `@material-hu/*` imports to local source
- [hu-translations](./hu-translations/README.md) — hot-reloads translation JSON files
