declare module '*.png' {
  const value: string
  export default value
}

declare module '*.svg' {
  const value: string
  export default value
}

declare namespace NodeJS {
  export interface ProcessEnv {
    DOMAIN: string
    EXTENSION_LINK: string
  }
}
