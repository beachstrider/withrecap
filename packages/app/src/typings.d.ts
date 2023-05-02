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
    RECAP_APP_BASE_URL?: string
    CHROME_WEBSTORE_LINK?: string
  }
}
