import chalk from 'chalk'
import * as dotenv from 'dotenv'
import * as fs from 'fs-extra'
import path from 'path'
import * as prettier from 'prettier'
import { exit } from 'process'

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.join(__dirname, '../../../.env.production') })
} else {
  dotenv.config({ path: path.join(__dirname, '../../../.env') })
}

async function writeJsonFile<T>(filePath: string, data: T): Promise<void> {
  try {
    await fs.writeFile(
      filePath,
      prettier.format(JSON.stringify(data, null, 0), { parser: 'json', printWidth: 1 }),
      'utf-8'
    )
  } catch (error) {
    throw new Error(`Failed to write JSON file: ${error}`)
  }
}

const main = async () => {
  if (!process.env.FIREBASE_PROJECT_ID) {
    console.error(chalk.red('Error: Environment variable FIREBASE_PROJECT_ID is missing'))
    return exit(1)
  }

  const filePath = path.join(__dirname, '../.firebaserc')

  const firebaserc = {
    projects: {
      default: process.env.FIREBASE_PROJECT_ID
    }
  }

  await writeJsonFile(filePath, firebaserc)
}

main()
