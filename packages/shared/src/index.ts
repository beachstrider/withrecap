//===========================================================
// AUTHENTICATION
//===========================================================

export type { BaseAuthProvider } from './auth'

export { AuthProvider, useAuth } from './auth/AuthProvider'
export { AuthGuard, useAuthGuard } from './auth/AuthGuard'

export { firebase } from './auth/firebase'
export type { FirebaseUser } from './auth/firebase'

export { GoogleIdentityAuthProvider, GoogleAuthProvider } from './auth/google'

//===========================================================
// STORAGE
//===========================================================

export { AddonStore } from './storage/addons'
export type { Addon, Addons } from './storage/addons'

export * from './storage/firestore'

export { MeetingStore } from './storage/meetings'
export type { Meeting, MeetingAttendee, MeetingMetadata, MeetingTodo } from './storage/meetings'

export { ConversationStore } from './storage/meetings/conversation'
export type { Conversation, Message } from './storage/meetings/conversation'

export { UserStore } from './storage/users'
export type { User } from './storage/users'

export { UserAddonStore } from './storage/users/addons'
export type { UserAddonConfig, UserAddons } from './storage/users/addons'

export { UserMeetingStore } from './storage/users/meetings'
export type { UserMeetingConfig, UserMeetings } from './storage/users/meetings'

//===========================================================
// HTTPS CALLABLE FUNCTIONS
//===========================================================

export { sendInviteEmails } from './functions/index'

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

export * from './utils/time'
export * from './utils/string'
export * from './utils/browser'

//===========================================================
// HOOKS
//===========================================================

export * from './hooks/integration'
export * from './hooks/meeting'

//===========================================================
// ERRORS
//===========================================================

export * from './errors/sentry'
