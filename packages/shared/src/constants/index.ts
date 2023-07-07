export enum RequestTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export enum ChromeStorage {
  FIREBASE_AUTH_CUSTOM_TOKEN = 'FIREBASE_AUTH_CUSTOM_TOKEN'
}

export const IS_EXTENSION_INSTALLED = 'IS_EXTENSION_INSTALLED'

export const PROTOCAL =
  typeof process.env.NODE_ENV === 'undefined' || process.env.NODE_ENV === 'development' ? 'http' : 'https'
