//===========================================================
// AUTHENTICATION
//===========================================================

export type { BaseAuthProvider } from './auth'

export { AuthGuard, useAuthGuard } from './auth/AuthGuard'
export { AuthProvider, useAuth } from './auth/AuthProvider'

export { firebase } from './auth/firebase'
export type { FirebaseUser } from './auth/firebase'

export { GoogleAuthProvider, GoogleIdentityAuthProvider } from './auth/google'

//===========================================================
// STORAGE
//===========================================================

export { AddonStore } from './storage/addons'
export type { Addon, Addons } from './storage/addons'

export * from './storage/firestore'

export { MeetingStore } from './storage/meetings'
export type { Meeting, MeetingAttendee, MeetingMetadata } from './storage/meetings'

export { ConversationStore } from './storage/meetings/conversation'
export type { Conversation, Message } from './storage/meetings/conversation'

export { TodosStore } from './storage/meetings/todos'
export type { StoredTodos, Todo, Todos } from './storage/meetings/todos'

export { HighlightsStore } from './storage/meetings/highlights'
export type { Highlight, Highlights } from './storage/meetings/highlights'

export { UserStore } from './storage/users'
export type { User } from './storage/users'

export { UserAddonStore } from './storage/users/addons'
export type { UserAddonConfig, UserAddons } from './storage/users/addons'

export { UserMeetingStore } from './storage/users/meetings'
export type { UserMeetingConfig, UserMeetings } from './storage/users/meetings'

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

export * from './utils/browser'
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
