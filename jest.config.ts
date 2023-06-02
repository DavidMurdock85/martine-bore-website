import nextJest from 'next/jest'
// Sync object
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'node', 'json'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  modulePaths: [''],
  modulePathIgnorePatterns: ['cypress'],
  moduleNameMapper: {
    '@mb/(.*)': '<rootDir>/$1',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
}

module.exports = createJestConfig(customJestConfig)


