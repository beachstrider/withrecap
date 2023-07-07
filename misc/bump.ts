import chalk from 'chalk'
import * as fs from 'fs-extra'
import path from 'path'
import * as prettier from 'prettier'

async function readJsonFile(filePath: string): Promise<any> {
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

function getArg(name: string) {
  name = `--${name}`

  const args = process.argv.slice(2)
  const argValue = args.find((arg) => arg.startsWith(name))
  return argValue ? argValue.split('=')[1] : null
}

async function main() {
  const mode = getArg('mode')
  const version = getArg('version')
  const jsonPaths = [
    path.join(__dirname, '../package.json'),
    path.join(__dirname, '../packages/extension/src/manifest.json')
  ]

  let output

  if (mode) {
    for await (const jsonPath of jsonPaths) {
      output = await readJsonFile(jsonPath)

      let [major, minor, patch] = output.version.split('.').map(Number)
      major = major ? major : 0
      minor = minor ? minor : 0
      patch = patch ? patch : 0

      switch (mode) {
        case 'major':
          major++
          minor = 0
          patch = 0
          break
        case 'minor':
          minor++
          patch = 0
          break
        case 'patch':
          patch++
          break
      }

      output.version = `${major}.${minor}.${patch}`

      await writeJsonFile(jsonPath, output)
    }
  } else if (version) {
    for await (const jsonPath of jsonPaths) {
      output = await readJsonFile(jsonPath)
      output.version = version
      await writeJsonFile(jsonPath, output)
    }
  } else {
    console.error(chalk.red('Please provide a version argument using --version=<version>'))
    process.exit(1)
  }

  console.log(chalk.green(`Version bumped to ${output.version}`))
}

main()
