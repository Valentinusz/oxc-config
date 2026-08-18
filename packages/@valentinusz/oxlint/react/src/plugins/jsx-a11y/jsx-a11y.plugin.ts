import type {OxlintConfig} from 'oxlint';
import {jsxA11yCorrectness} from "./jsx-a11y.correctness.ts";
import {jsxA11yRestriction} from "./jsx-a11y.restriction.ts";

export const jsxA11yPlugin = {
    plugins: ['jsx-a11y'],
    extends: [
        jsxA11yCorrectness,
        jsxA11yRestriction
    ]
} satisfies OxlintConfig;
