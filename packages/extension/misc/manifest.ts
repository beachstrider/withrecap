import { PROTOCAL } from '@recap/shared'
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

interface ExtensionManifestV3 {
  name: string
  version: string
  key?: string
  oauth2: {
    client_id: string
    scopes: Array<string>
  }
  externally_connectable: {
    matches: string[]
  }
  // Add other properties according to your manifest structure
}

async function readJsonFile(filePath: string): Promise<ExtensionManifestV3> {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    throw new Error(`Failed to read JSON file: ${error}`)
  }
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
  if (!process.env.OAUTH2_CLIENT_ID || !process.env.DOMAIN || !process.env.EXTENSION_KEY) {
    console.error(chalk.red('Error: Environment variables missing'))
    return exit(1)
  }

  const filePath = path.join(__dirname, '../src/manifest.json')
  const manifest = await readJsonFile(filePath)

  manifest.key = process.env.EXTENSION_KEY
  manifest.oauth2.client_id = process.env.OAUTH2_CLIENT_ID
  manifest.externally_connectable.matches = [`${PROTOCAL}://${process.env.DOMAIN}/*`]

  await writeJsonFile(filePath, manifest)
}

main()
