import { resolve } from 'node:path';
import dts from 'unplugin-dts/vite';
import { defineConfig } from 'vite';
import type { PackageJson } from './package-json.ts';
import { getAllDependencyNames } from './package-json.ts';

interface ViteBaseConfigOptions {
  rootDir: string;
  packageJson: PackageJson;
  autoExternalizeDependencies?: boolean;
}

export function viteBaseConfig({
  rootDir,
  packageJson,
  autoExternalizeDependencies = true,
}: ViteBaseConfigOptions) {
  return defineConfig({
    plugins: [dts()],
    build: {
      emptyOutDir: true,
      lib: {
        entry: resolve(rootDir, 'src/index.ts'),
        formats: ['es'],
        fileName: 'index',
      },
      ssr: true,
      sourcemap: true,
      rolldownOptions: {
        external: autoExternalizeDependencies ? getAllDependencyNames(packageJson) : undefined,
      },
    },
  });
}
