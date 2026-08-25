import type { OxlintConfig } from 'oxlint';
import { defineConfig } from 'oxlint';
import { oxlintConfigBase } from '#lib/configs/base.ts';
import { oxlintConfigReact } from '#lib/configs/react.ts';

export interface OxlintPresetsConfig {
  /**
   * Should the React config be enabled.
   * @default true
   */
  react?: boolean;
}

export interface DefineOxlintConfigOptions extends OxlintConfig {
  presets?: OxlintPresetsConfig;
}

export type DefineOxlintConfigReturn<T extends DefineOxlintConfigOptions> = Omit<
  T,
  'presets' | 'extends'
> & {
  extends: OxlintConfig[];
};

export function defineOxlintConfig<T extends DefineOxlintConfigOptions>({
  presets = {},
  extends: configExtends,
  ...rest
}: T): DefineOxlintConfigReturn<T> {
  const { react = true } = presets;

  const extendedConfigs: OxlintConfig[] = [oxlintConfigBase];

  if (react) {
    extendedConfigs.push(oxlintConfigReact);
  }

  if (configExtends) {
    extendedConfigs.push(...configExtends);
  }

  return defineConfig({
    extends: extendedConfigs,
    ...rest,
  });
}
