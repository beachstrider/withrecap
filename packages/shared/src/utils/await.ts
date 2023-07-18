export const wait = async (time: number) => {
  await new Promise((resolve) => setTimeout(resolve, time))
}

export const waitUntil = async (condition: () => boolean | Promise<boolean>, interval = 2000, max = 20) => {
  await new Promise(async (resolve, reject) => {
    let i = 0
    while (i < max) {
      if (await condition()) {
        return resolve(true)
      }
      i = i + 1
      await wait(interval)
      continue
    }

    reject('max trying reached.')
  })
}
