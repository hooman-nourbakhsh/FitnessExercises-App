import js from "@eslint/js"; // This brings in ESLint rules to check your code
import globals from "globals"; // This adds global things like "window" for browsers
import react from "eslint-plugin-react"; // This plugin checks React code
import reactHooks from "eslint-plugin-react-hooks"; // This plugin checks React hooks
import reactRefresh from "eslint-plugin-react-refresh"; // This plugin helps with fast updates in Vite
import prettier from "eslint-plugin-prettier"; // This plugin makes your code look neat

export default [
  { ignores: ["dist"] }, // This skips the "dist" folder where built files go
  {
    files: ["**/*.{js,jsx}"], // This applies rules to all .js and .jsx files
    languageOptions: {
      ecmaVersion: 2021, // This uses JavaScript rules from 2021
      globals: globals.browser, // This allows browser globals like "window"
      parserOptions: {
        ecmaVersion: "latest", // This uses the newest JavaScript version
        ecmaFeatures: { jsx: true }, // This enables JSX for React
        sourceType: "module", // This uses "import" and "export" style
      },
    },
    settings: {
      react: { version: "18.3.1" }, // This sets React version to 18.3.1
    },
    plugins: {
      react, // This turns on the React plugin
      "react-hooks": reactHooks, // This turns on the React hooks plugin
      "react-refresh": reactRefresh, // This turns on the fast update plugin for Vite
      prettier, // This turns on the Prettier plugin
    },
    rules: {
      ...js.configs.recommended.rules, // This adds ESLint’s recommended rules
      ...react.configs.recommended.rules, // This adds React’s recommended rules
      ...react.configs["jsx-runtime"].rules, // This adds rules for React 18 JSX
      ...reactHooks.configs.recommended.rules, // This adds rules for React hooks
      "react-refresh/only-export-components": [
        "warn", // This warns if you don’t export only components
        { allowConstantExport: true }, // This allows exporting constants too
      ],
      "prettier/prettier": "error", // This treats Prettier errors as real mistakes
      "react/jsx-no-target-blank": "off", // This turns off a rule about link targets
    },
  },
];
