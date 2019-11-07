module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "space-before-function-paren": 0,  // 函式定義時括號前面要不要有空格
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'quotes': ['error', 'single'],  //強制使用單引號 fix error  Strings must use singlequote
    'semi': ['error', 'always']     //強制使用分號結尾  fix error  Extra semicolon 
  }
}
