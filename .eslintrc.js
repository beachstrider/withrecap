module.exports = {
  extends: 'react-app',
  ignorePatterns: ['*.js', '**/dist/**', '**/lib/**'],
  globals: {
    chrome: 'readonly'
  },
  rules: {
    'no-empty-function': 'warn'
  }
}
