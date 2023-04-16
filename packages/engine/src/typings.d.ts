import { DecodedIdToken } from 'firebase-admin/auth'

declare module 'express' {
  interface Request {
    user?: DecodedIdToken
  }
}

interface CustomMatchers<R = unknown> {
  toMatchGolden(filename: string): R
}

declare global {
  namespace jest {
    interface Expect extends CustomMatchers {}
    interface Matchers<R> extends CustomMatchers<R> {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}
