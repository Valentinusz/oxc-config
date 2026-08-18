import type {OxlintConfig} from 'oxlint';
import {reactPerfPerf} from "./react-perf.perf.ts";

export const reactPerfPlugin = {
    plugins: ['react-perf'],
    extends: [reactPerfPerf]
} satisfies OxlintConfig;
