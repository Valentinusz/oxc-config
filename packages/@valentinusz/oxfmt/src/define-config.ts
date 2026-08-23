import type { OxfmtConfig } from 'oxfmt';
import { defineConfig as oxlintDefineConfig } from 'oxfmt';
import { oxfmtConfigBase } from './base-config.ts';

export type DefineConfigOptions = OxfmtConfig;

export function defineConfig<T extends DefineConfigOptions>(config: T): T {
  return oxlintDefineConfig({
    ...oxfmtConfigBase,
    ...config,
  });
}
