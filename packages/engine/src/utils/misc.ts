export const isCohere = (emails: string[]) => {
  return emails.every((email) => email.endsWith('@cohere.com') || email.endsWith('@cohere.ai'))
}
