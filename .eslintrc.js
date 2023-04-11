module.exports = {
  extends: 'react-app',
  parserOptions: {
    project: ['./tsconfig.shared.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  ignorePatterns: ['*.js', '**/dist/**'],
  globals: {
    chrome: 'readonly'
  }
}
