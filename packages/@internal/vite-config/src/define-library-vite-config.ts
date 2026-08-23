import type { UserConfig } from 'vite';
import { mergeConfig } from 'vite';
import type { PackageJson } from './package-json.ts';
import { viteBaseConfig } from './vite-base-config.ts';

interface DefineLibraryViteConfigOptions {
  rootDir: string;
  packageJson: PackageJson;
  autoExternalizeDependencies?: boolean;
  overrides?: UserConfig;
}

export function defineLibraryViteConfig({
  rootDir,
  packageJson,
  autoExternalizeDependencies = true,
  overrides = {},
}: DefineLibraryViteConfigOptions) {
  return mergeConfig(
    viteBaseConfig({
      rootDir,
      packageJson,
      autoExternalizeDependencies,
    }),
    overrides,
  );
}
