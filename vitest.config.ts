import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      /**
       * 4. Need `globals: true` for beforeEach, describe, afterAll etc.
       * Next add "types": [..., "vitest/globals"] on tsconfig.vitest.jsons
       */
      globals: true
    },
  }),
)
