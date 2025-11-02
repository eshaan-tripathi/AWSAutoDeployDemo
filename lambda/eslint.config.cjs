// eslint.config.js
const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,

  // ✅ For Lambda (CommonJS)
  {
    files: ["lambda/**/*.js", "src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script", // CommonJS
      globals: {
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        process: "readonly",
        console: "readonly",
      },
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
      sourceType: "module", // ES Modules for tests
      globals: {
        test: "readonly",
        expect: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
