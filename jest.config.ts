import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
}

export default config
