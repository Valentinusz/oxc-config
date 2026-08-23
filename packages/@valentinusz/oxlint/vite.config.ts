import { defineLibraryViteConfig } from '@internal/vite-config';
import packageJson from './package.json' with { type: 'json' };

export default defineLibraryViteConfig({
  rootDir: import.meta.dirname,
  packageJson,
});
