import type { OxfmtConfig } from 'oxfmt';

export const oxfmtConfigBase = {
  singleQuote: true,
  trailingComma: 'all',
  sortImports: {
    newlinesBetween: false,
    groups: [
      'type-builtin',
      'value-builtin',
      'type-external',
      'value-external',
      'type-subpath',
      'value-subpath',
      'type-internal',
      'value-internal',
      'type-parent',
      'value-parent',
      'type-sibling',
      'value-sibling',
      'type-index',
      'value-index',
      'style',
      'side_effect',
      'style_side_effect',
      'unknown',
    ],
  },
} satisfies OxfmtConfig;
