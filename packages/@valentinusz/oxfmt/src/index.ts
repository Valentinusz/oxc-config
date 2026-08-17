import { defineConfig } from 'oxfmt';

export const oxfmtConfig = defineConfig({
  singleQuote: true,
  trailingComma: 'all',
  sortImports: {
    groups: [
      ['value-builtin', 'value-external'],
      'value-internal',
      ['value-parent', 'value-sibling', 'value-index'],
      'style',
      'side_effect',
    ],
  },
});
