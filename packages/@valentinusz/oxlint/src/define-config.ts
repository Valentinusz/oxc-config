import type { OxlintConfig } from 'oxlint';
import { defineConfig as oxlintDefineConfig } from 'oxlint';
import { oxlintConfigBase } from '#lib/configs/base.ts';
import { oxlintConfigReact } from '#lib/configs/react.ts';

export interface OxlintCustomOptions {
  react?: boolean;
}

export type DefineConfigArgs<T extends OxlintConfig> = T & {
  customOptions?: OxlintCustomOptions;
};

export function defineConfig<T extends OxlintConfig>({
  customOptions = {},
  extends: configExtends,
  ...rest
}: DefineConfigArgs<T>) {
  const { react = true } = customOptions;

  const extendedConfigs: OxlintConfig[] = [oxlintConfigBase];

  if (react) {
    extendedConfigs.push(oxlintConfigReact);
  }

  if (configExtends) {
    extendedConfigs.push(...configExtends);
  }

  return oxlintDefineConfig({
    extends: extendedConfigs,
    ...rest,
  });
}
