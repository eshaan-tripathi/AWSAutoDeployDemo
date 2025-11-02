// lambda.config.cjs
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,

  // Lambda files (ES Modules)
  {
    files: ["lambda/*.js"], // matches index.js directly in lambda/
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // ES Modules
      globals: {
        ...globals.node, // adds console, process, Buffer, etc.
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
      sourceType: "module",
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
