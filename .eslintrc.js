module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      fragment: "Fragment",
      version: "detect",
    },
    propWrapperFunctions: [
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" },
    ],
    componentWrapperFunctions: [
      "observer",
      { property: "styled" },
      { property: "observer", object: "Mobx" },
      { property: "observer", object: "<pragma>" },
    ],
    linkComponents: ["Hyperlink", { name: "Link", linkAttribute: "to" }],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "jest", "@typescript-eslint", "prettier"],
  globals: {
    React: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
  rules: {
<<<<<<< HEAD
<<<<<<< HEAD
    "no-undef": "error",
    "no-var": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-vars": "off",
=======
    "no-undef": ["error"],
    "no-var": ["error"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
>>>>>>> Resolve 'React' is declared but its value is never read problem
=======
    "no-undef": "error",
    "no-var": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-vars": "off",
>>>>>>> In React 17 you no longer need to import react when writing JSX
    "prettier/prettier": [
      "error",
      {
        parser: "typescript",
        printWidth: 100,
        semi: false,
        singleQuote: false,
        quoteProps: "as-needed",
        trailingComma: "all",
        bracketSpacing: true,
        jsxBracketSameLine: true,
        arrowParens: "avoid",
        insertPragma: false,
        tabWidth: 2,
        useTabs: false,
        proseWrap: "preserve",
        htmlWhitespaceSensitivity: "css",
        endOfLine: "auto",
      },
      {
        usePrettierrc: false,
      },
    ],
  },
}
