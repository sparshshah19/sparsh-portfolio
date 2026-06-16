import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    'next/font/google': '<rootDir>/__mocks__/next/font/google.ts',
    'next/image': '<rootDir>/__mocks__/next/image.tsx',
  },
  transformIgnorePatterns: ['/node_modules/(?!(next)/)'],
  globals: {
    'ts-jest': {
      tsconfig: {
        moduleResolution: 'node',
        module: 'commonjs',
        jsx: 'react-jsx',
      },
    },
  },
}

export default config
