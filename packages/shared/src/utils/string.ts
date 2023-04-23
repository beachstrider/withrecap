import { User } from '../storage/users'

// Input: User, Output: its first name
export const getUserFirstName = (user: User) => {
  return user?.displayName?.split(' ')[0]
}
