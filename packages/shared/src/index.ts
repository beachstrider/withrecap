//===========================================================
// AUTHENTICATION
//===========================================================

export type { BaseAuthProvider } from './auth'

export { AuthProvider, useAuth } from './auth/AuthProvider'
export { AuthGuard, useAuthGuard } from './auth/AuthGuard'

export { firebase } from './auth/firebase'
export type { FirebaseUser } from './auth/firebase'

export { GoogleIdentityAuthProvider } from './auth/google'

//===========================================================
// STORAGE
//===========================================================

export { AddonStore } from './storage/addons'
export type { Addon, Addons } from './storage/addons'

export * from './storage/firestore'

export { MeetingStore } from './storage/meetings'
export type { Meeting, MeetingAttendee } from './storage/meetings'

export { ConversationStore } from './storage/meetings/conversation'
export type { Conversation } from './storage/meetings/conversation'

export { UserStore } from './storage/users'
export type { User } from './storage/users'

export { UserAddonStore } from './storage/users/addons'
export type { UserAddonConfig, UserAddons } from './storage/users/addons'

export { UserMeetingStore } from './storage/users/meetings'
export type { UserMeetingConfig, UserMeetings } from './storage/users/meetings'

//===========================================================
// CALENDAR
//===========================================================

export * from './calendar/google'
