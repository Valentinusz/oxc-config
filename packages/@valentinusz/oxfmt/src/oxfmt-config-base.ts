import type { OxfmtConfig } from 'oxfmt';

export const oxfmtConfigBase = {
  singleQuote: true,
  trailingComma: 'all',
  sortImports: {
    newlinesBetween: false,
    groups: [
      'builtin',
      'external',
      'subpath',
      'internal',
      'parent',
      'sibling',
      'index',
      'style',
      'side_effect',
      'unknown',
    ],
  },
} satisfies OxfmtConfig;
