import type { OxlintConfig } from "oxlint";

export const jsxA11yConfig: OxlintConfig = {
  rules: {},
  settings: {
    "jsx-a11y": {
      components: {
        Link: "a",
        NavLink: "a",
        Button: "button",
      },
    },
  },
};
