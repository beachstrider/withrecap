import path from 'path'
import * as fs from 'fs-extra'

interface ExtensionManifestV3 {
  name: string
  version: string
  key?: string
  oauth2: {
    client_id: string
    scopes: Array<string>
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

async function writeJsonFile(filePath: string, data: ExtensionManifestV3): Promise<void> {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 0), 'utf-8')
    console.log('JSON file updated successfully.')
  } catch (error) {
    throw new Error(`Failed to write JSON file: ${error}`)
  }
}

const main = async () => {
  if (!process.env.OAUTH2_CLIENT_ID) {
    throw new Error('Environment variable OAUTH2_CLIENT_ID is missing')
  }

  const filePath = path.join(__dirname, '../dist/manifest.json')
  const manifest = await readJsonFile(filePath)

  delete manifest.key
  manifest.oauth2.client_id = process.env.OAUTH2_CLIENT_ID

  await writeJsonFile(filePath, manifest)
}

main()
