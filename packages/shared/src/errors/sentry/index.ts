import { BrowserTracing, configureScope, init } from '@sentry/browser'

type Namespaces = 'extension:onboarding' | 'extension:popup' | 'extension:content' | 'extension:background' | 'web'

export const initSentry = (name: Namespaces) => {
  // Disable sentry outside of production
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  try {
    init({
      dsn: process.env.SENTRY_DSN,
      release: process.env.npm_package_version,
      integrations: [new BrowserTracing()],
      tracesSampleRate: 1.0
    })

    configureScope((scope) => {
      scope.setTag('app', name)
    })
  } catch (err) {
    console.error('An error occurred while configuring Sentry', err)
  }
}
