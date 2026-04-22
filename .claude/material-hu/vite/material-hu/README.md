# Material HU Vite Plugin

Maps `@material-hu/*` imports to `../material-hu/src/*` for instant HMR — no rebuild required.

When `enabled: false` or the sibling folder is not found, the plugin is a no-op.

## What it handles

- **Alias rewrite** — `@material-hu/*` resolves to `../material-hu/src/*` instead of `node_modules`
- **Internal aliases** — `@hooks`, `@utils`, `@src`, etc. used inside material-hu source
- **Dependency dedup** — React, MUI, emotion and others always resolve from the consumer's `node_modules`
- **File watching** — Vite watches `../material-hu/src/` for HMR outside the project root
- **FS allow** — Permits serving files from the sibling directory

## Manual setup (without dev-server)

If you're not using `dev-server.ts`, configure it directly. `dev-server.ts` handles the tsconfig patching automatically — for manual setup you need to do it yourself.

**`vite.config.ts`**
```ts
import { createMaterialHuVitePlugin } from 'material-hu/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'ENABLE_HMR_PLUGINS');
  const isDev = command === 'serve' && Boolean(env.ENABLE_HMR_PLUGINS);

  return {
    plugins: [createMaterialHuVitePlugin({ enabled: isDev })],
  };
});
```

**`tsconfig.json`** — extend to get IDE type resolution from source:
```jsonc
{
  "extends": ["./tsconfig.non-strict.json", "../material-hu/vite/tsconfig.dev.json"]
}
```

**Run**
```sh
ENABLE_HMR_PLUGINS=true vite
```

## See also

[← Dev server overview](../README.md)
