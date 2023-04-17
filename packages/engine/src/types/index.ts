export type Message = {
  speaker: string
  text: string
  timestamp: number
  language: string
}
export type Transcript = Array<Message>
