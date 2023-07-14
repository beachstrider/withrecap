//===========================================================
// AUTHENTICATION
//===========================================================

export type { BaseAuthProvider } from './auth/GoogleAuth'

export { AuthGuard, useAuthGuard } from './auth/AuthGuard'
export { AuthProvider, useAuth } from './auth/AuthProvider'

export { firebase } from './firebase'
export type { FirebaseUser } from './firebase'

export { GoogleAuthProvider, GoogleIdentityAuthProvider } from './auth/GoogleAuth'

//===========================================================
// FIRESTORE
//===========================================================

export * from './firestore'

export { AddonStore } from './firestore/addons'
export type { Addon, Addons } from './firestore/addons'

export { MeetingStore } from './firestore/meetings'
export type { Meeting, MeetingAttendee, MeetingMetadata } from './firestore/meetings'

export { ConversationStore } from './firestore/meetings/conversation'
export type { Conversation, Message } from './firestore/meetings/conversation'

export { TodosStore } from './firestore/meetings/todos'
export type { StoredTodos, Todo, Todos } from './firestore/meetings/todos'

export { HighlightsStore } from './firestore/meetings/highlights'
export type { Highlight, Highlights, StoredHighlights } from './firestore/meetings/highlights'

export { UserStore } from './firestore/users'
export type { User } from './firestore/users'

export { UserAddonStore } from './firestore/users/addons'
export type { UserAddonConfig, UserAddons } from './firestore/users/addons'

export { UserMeetingStore } from './firestore/users/meetings'
export type { UserMeetingConfig, UserMeetings } from './firestore/users/meetings'

//===========================================================
// REALTIME DATABASE
//===========================================================

export * from './realtime'

export { Presence } from './realtime/presences'

//===========================================================
// HTTPS CALLABLE FUNCTIONS
//===========================================================

export * from './functions'

//===========================================================
// CALENDAR
//===========================================================

export * from './calendar/google'

//===========================================================
// CONTACT
//===========================================================

export * from './contact/google'

//===========================================================
// UI COMPONENTS
//===========================================================

export * from './components/input'
export * from './components/spinner'
export { ToastContainer, toast } from './components/toast'

//===========================================================
// UTILS
//===========================================================

export * from './utils/await'
export * from './utils/browser'
export * from './utils/email'
export * from './utils/firestore'
export * from './utils/sanitize'
export * from './utils/string'
export * from './utils/time'

//===========================================================
// HOOKS
//===========================================================

export * from './hooks/addons'
export * from './hooks/highlights'
export * from './hooks/meeting'
export * from './hooks/todos'

//===========================================================
// ERRORS
//===========================================================

export * from './errors/sentry'

//===========================================================
// CONSTANTS
//===========================================================

export * from './constants'

//===========================================================
// ONLY TYPES
//===========================================================

export * from './types'
