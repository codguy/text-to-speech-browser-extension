// jest.config.js

module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    testMatch: ['**/tests/unit/**/*.test.js']
  };
  