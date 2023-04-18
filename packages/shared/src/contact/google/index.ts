const GOOGLE_PEOPLE_API_BASE_URL = 'https://people.googleapis.com/v1'

type ResponseData = any

export class GoogleContact {
  constructor(private accessToken: string) {}

  public async getContactDetails(email: string): Promise<any | undefined> {
    const response = await fetch(`${GOOGLE_PEOPLE_API_BASE_URL}/people/${email}?personFields=names,emailAddresses`, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    })
    const data: ResponseData = await response.json()

    return data
  }
}
