import type { OxlintConfig } from 'oxlint';

export const reactPerfPerf = {
  rules: {
    // ️ℹ️ All rules prevent bugs that stem from values being recreated every render.

    // ✅ react-perf/jsx-no-jsx-as-prop
    // Prevent JSX elements that are local to the current method from being used as values of JSX props.
    // ⚡ Performance.
    'react-perf/jsx-no-jsx-as-prop': 'error',

    // ✅ react-perf/jsx-no-new-array-as-prop
    // Prevent arrays that are local to the current method from being used as values of JSX props.
    // ⚡ Performance.
    'react-perf/jsx-no-new-array-as-prop': 'error',

    // ✅ react-perf/jsx-no-new-function-as-prop
    // Prevent functions that are local to the current method from being used as values of JSX props.
    // ⚡ Performance.
    'react-perf/jsx-no-new-function-as-prop': 'error',

    // ✅ react-perf/jsx-no-new-object-as-prop
    // Prevent objects that are local to the current method from being used as values of JSX props.
    // ⚡ Performance.
    'react-perf/jsx-no-new-object-as-prop': 'error',
  },
} satisfies OxlintConfig;
