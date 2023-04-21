// main routes
export const PRIVACY_POLICY = '/privacy-policy'
export const TERMS_CONDITIONS = '/terms-conditions'

export const MEETINGS = '/meetings'
export const MEETING_DETAILS = '/meetings/:mid'
export const INTEGRATIONS = '/integrations'

// fake hash routes
export const SIGNING_IN = '#signin' // if firebase is still processing auth status, this hash route is used to show spinner on page

// popup email links
export const SUPPORT_REQUEST = `mailto:support@withrecap.com?subject=${encodeURIComponent(
  'Request for Assistance'
)}&body=${encodeURIComponent(``)}
`

export const DELETE_ACCOUNT_REQUEST = `mailto:support@withrecap.com?subject=${encodeURIComponent(
  'Delete my account'
)}&body=${encodeURIComponent(``)}`
