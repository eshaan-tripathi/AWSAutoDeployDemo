// eslint.config.js
const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,

  // ✅ For Lambda (Node.js environment)
  {
    files: ["lambda/**/*.js", "src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {},
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    env: {
      node: true, // ✅ This adds console, require, module, etc.
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },

  // ✅ For Tests (ES Modules)
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    env: {
      node: true,
      jest: true, // if you’re using Jest
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
