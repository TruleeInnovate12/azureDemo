module.exports = {
    // ...existing config
    rules: {
      'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'no-useless-escape': 'warn',
      'jsx-a11y/heading-has-content': 'warn',
      'react/jsx-pascal-case': 'warn'
    },
    // ...rest of config
  }