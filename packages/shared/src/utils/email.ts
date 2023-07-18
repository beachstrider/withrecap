export const encode = (email: string) => email.replace('.', ',')
export const decode = (email: string) => email.replace(',', '.')
