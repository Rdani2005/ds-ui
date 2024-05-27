import unjs from "eslint-config-unjs";
import react from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import jsxAlly from "eslint-plugin-jsx-a11y";
import jestDom from "eslint-plugin-jest-dom";
import mdx from "eslint-plugin-mdx";
import reactHooks from "eslint-plugin-react-hooks";
import testingLibrary from "eslint-plugin-testing-library";
import vitestPlugin from "eslint-plugin-vitest";

export default unjs({
  plugins: [
    react,
    unusedImports,
    jsxAlly,
    jestDom,
    mdx,
    reactHooks,
    testingLibrary,
    vitestPlugin,
  ],
  rules: {
    curly: "off",
    "multiline-ternary": "off",
    "unicorn/no-null": "off",
    "unicorn/no-for-loop": "off",
    "unicorn/prefer-export-from": "off",
    "unicorn/no-array-callback-reference": "off",
    "react/no-unknown-property": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    // "unused-imports/no-unused-imports": "error",
    "quote-props": ["error", "as-needed", { numbers: true }],
  },
});
