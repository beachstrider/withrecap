export type Message = {
  speaker: string
  text: string
  timestamp: number
  language: string // TODO: For now we only support english
}
export type Transcript = Array<Message>
