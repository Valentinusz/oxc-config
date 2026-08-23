import { resolve } from 'node:path';
import packageJson from './package.json' with { type: 'json' };
import { defineLibraryViteConfig } from './src/index.ts';

export default defineLibraryViteConfig({
  rootDir: import.meta.dirname,
  packageJson,
  overrides: {
    build: {
      lib: {
        entry: resolve(import.meta.dirname, 'src/index.ts'),
      },
    },
  },
});
