import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  projects: [
    {
      rootDir: 'packages/engine',
      testMatch: ['<rootDir>/tests/**/*.test.ts'],
      displayName: { name: 'Engine', color: 'green' },
      testEnvironment: 'node',
      transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            tsconfig: '<rootDir>/tests/tsconfig.json'
          }
        ]
      },
      clearMocks: true,
      setupFilesAfterEnv: ['<rootDir>/tests/setup.ts']
    }
  ]
}

export default config
