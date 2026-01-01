import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
  globalIgnores(["node_modules/**", "build/**"]),
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { window: "readonly", document: "readonly" },
    },
    plugins: { react, "react-hooks": reactHooks },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
    settings: { react: { version: "detect" } },
  },
]);
