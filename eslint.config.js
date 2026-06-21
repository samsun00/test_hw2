import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import jestPlugin from "eslint-plugin-jest"; // 👈 Добавьте эту строку

export default [
  // Базовые правила ESLint
  js.configs.recommended,

  // Основная конфигурация
  {
    plugins: {
      "@stylistic": stylistic,
    },

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        document: "readonly",
        window: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
      },
    },

    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/quotes": ["error", "single"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never", // 👈 never - без пробела (как у Prettier)
          asyncArrow: "always",
        },
      ],
      "@stylistic/space-in-parens": ["error", "never"],

      "no-var": "error",
      "prefer-const": "error",
      "no-unused-vars": "warn",
      "no-console": "off",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
    },
  },

  // 👇 КОНФИГУРАЦИЯ ДЛЯ JEST ТЕСТОВ
  {
    files: [
      "**/__tests__/**/*.js",
      "**/*.test.js",
      "**/*.spec.js",
      "test/**/*.js", // 👈 Добавьте вашу папку test
      "tests/**/*.js", // 👈 Если есть папка tests
    ],

    plugins: {
      jest: jestPlugin,
    },

    languageOptions: {
      globals: {
        ...jestPlugin.environments.globals.globals, // Добавляет describe, it, expect, test, jest
      },
    },

    rules: {
      // Рекомендованные правила Jest
      ...jestPlugin.configs.recommended.rules,

      // Или выборочные правила (раскомментируйте если нужно)
      // "jest/no-disabled-tests": "warn",
      // "jest/no-focused-tests": "error",
      // "jest/no-identical-title": "error",
      // "jest/prefer-to-have-length": "warn",
      // "jest/valid-expect": "error",
    },
  },

  // Игнорируемые папки
  {
    ignores: [
      "dist/",
      "node_modules/",
      "coverage/",
      "*.config.js",
      "*.config.mjs",
    ],
  },
];
