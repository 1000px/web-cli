const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/proj01/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/module01/e2e'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/module01/unit/setup'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/module01/unit/coverage',
  collectCoverageFrom: [
    'proj01/**/*.{js,vue}',
    '!proj01/main.js',
    '!proj01/router/index.js',
    '!**/node_modules/**'
  ]
}
