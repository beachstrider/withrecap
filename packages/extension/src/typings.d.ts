declare module '*.svg' {
  export default string
}

declare module '*.png' {
  export default string
}

declare namespace NodeJS {
  export interface ProcessEnv {
    RECAP_APP_BASE_URL?: string
    SENTRY_DSN?: string
  }
}
