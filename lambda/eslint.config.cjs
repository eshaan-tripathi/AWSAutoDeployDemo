// lambda.config.cjs
const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,

  // Lambda files (ES Modules)
  {
    files: ["lambda/*.js"], // directly index.js
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // must be module for export syntax
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
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
        console: "readonly",
        test: "readonly",
        expect: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
