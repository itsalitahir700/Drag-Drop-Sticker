export const parser = 'babel-eslint';
export const env = {
  browser: true,
};
export const ext = ['airbnb', 'plugin:prettier/recommended'];
export const rules = {
  'max-len': ['error', { code: 100 }],
  'prefer-promise-reject-errors': ['off'],
  'react/jsx-filename-extension': ['off'],
  'react/prop-types': ['off'],
  'no-return-assign': ['off'],
  'no-underscore-dangle': ['off'],
  'prettier/prettier': 'error',
  'no-unused-declaration': 2,
};
export const plugins = ['prettier'];
export const parserOptions = {
  ecmaVersion: 2015,
};
export const settings = {
  'import/resolver': {
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
};
