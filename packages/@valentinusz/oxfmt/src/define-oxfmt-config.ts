import type { OxfmtConfig } from 'oxfmt';
import { defineConfig } from 'oxfmt';
import { oxfmtConfigBase } from './oxfmt-config-base.ts';

export type DefineOxfmtConfigOptions = OxfmtConfig;

export function defineOxfmtConfig<T extends DefineOxfmtConfigOptions>(config: T): T {
  return defineConfig({
    ...oxfmtConfigBase,
    ...config,
  });
}
