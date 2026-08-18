import type {OxlintConfig} from "oxlint";

export const jsxA11yRestriction = {
    rules: {

        // ✅ jsx-a11y/anchor-ambiguous-text
        // Inspects anchor link text for the use of ambiguous words.
        'jsx-a11y/anchor-ambiguous-text': 'error',
    }
} satisfies OxlintConfig;