import type { OxlintConfig } from 'oxlint';

export const unicornPerf = {
  rules: {
    // ✅ unicorn/prefer-array-find
    // Encourages using Array.prototype.find and Array.prototype.findLast instead of taking the first or last matching
    // element from filter(...).
    // 🏆 Best practice.
    'unicorn/prefer-array-find': 'error',

    // ✅ unicorn/prefer-array-flat-map
    // Prefers the use of .flatMap() when map().flat() are used together.
    // 🏆 Best practice.
    'unicorn/prefer-array-flat-map': 'error',

    // ✅ unicorn/prefer-set-has
    // Prefer Set#has() over Array#includes() when checking for existence or non-existence.
    // 🏆 Best practice.
    'unicorn/prefer-set-has': 'error',
  },
} satisfies OxlintConfig;
