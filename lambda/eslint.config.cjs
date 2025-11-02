// eslint.config.js
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,

  // Lambda files (CommonJS)
  {
    files: ["lambda/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script", // CommonJS
      globals: {
        ...globals.node, // Adds console, require, module, process, etc.
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },

  // Tests (ES Modules)
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // import/export
      globals: {
        ...globals.jest, // test, expect
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
