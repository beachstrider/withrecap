import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  projects: [
    {
      rootDir: 'packages/engine',
      testMatch: ['<rootDir>/src/**/*.test.ts'],
      displayName: { name: 'Engine', color: 'green' },
      testEnvironment: 'node',
      transform: {
        '^.+\\.tsx?$': require.resolve('ts-jest')
      },
      clearMocks: true,
      setupFilesAfterEnv: ['<rootDir>/tests/setup.ts']
    }
  ]
}

export default config
