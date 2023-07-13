declare module '*.svg' {
  export default string
}

declare module '*.png' {
  export default string
}

declare module '*.css' {
  export default string
}

declare namespace NodeJS {
  export interface ProcessEnv {
    DOMAIN: string
    SENTRY_DSN: string
    OAUTH2_CLIENT_ID: string
  }
}
