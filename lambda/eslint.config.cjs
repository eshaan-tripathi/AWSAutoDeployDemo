// eslint.config.js
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,

  // ✅ Lambda (CommonJS / Node)
  {
    files: ["lambda/**/*.js", "src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.node, // adds console, require, process, etc.
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },

  // ✅ Tests (ES Modules)
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest, // adds test, expect if you use Jest or similar
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
