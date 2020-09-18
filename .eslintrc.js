module.exports = {
  parser: 'babel-eslint',
  plugins: [
    "react-hooks",
    "syntax-dynamic-import",
    "styled-components",
    [
      "module-resolver",
      {
        "root": [
          "."
        ],
        "alias": {
          "@components": "./src/components",
          "@assets": "./src/assets",
          "@modules": "./src/modules",
          "@pages": "./src/pages",
          "@api": "./src/api",
          "@src": "./src"
        }
      }
    ],
    [
      "transform-class-properties"
    ],
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ],
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'max-len': ['error', { code: 100 }],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['warn'],
    'no-return-assign': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    "module-resolver/use-alias": 2,
    "react-hooks/exhaustive-deps": 0
  },
  overrides: {
    rules: {
      "react-hooks/exhaustive-deps": 0
    }
  },
  settings: {
    "import/extensions": [
      ".js",
      ".jsx"
    ],
    "babel-module": {}
  },
};
