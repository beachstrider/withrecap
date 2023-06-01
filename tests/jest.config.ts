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
            tsconfig: '<rootDir>/tests/tsconfig.json',
            isolatedModules: true // Fixes an issue where Jest takes an excessive amount of RAM and time to complete
          }
        ]
      },
      setupFilesAfterEnv: ['<rootDir>/tests/setup.ts']
    }
  ]
}

export default config
