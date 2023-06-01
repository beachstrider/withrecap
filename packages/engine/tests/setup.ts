import fs from 'fs'

expect.extend({
  toMatchGolden(received: any, filename: string) {
    const fileContent = fs.readFileSync(filename, 'utf8')
    const json = JSON.parse(fileContent)

    const pass = this.equals(received, json)
    if (pass) {
      return {
        message: () => `expected ${received} not to match file ${filename}`,
        pass: true
      }
    } else {
      return {
        message: () => `expected ${received} to match file ${filename}`,
        pass: false
      }
    }
  }
})
