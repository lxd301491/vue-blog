module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    'semi': ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: ['plugin:vue/essential', '@vue/standard']
};
