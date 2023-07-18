import React from 'react'

export const Markdown = ({ children = '' }: { children: string }) => {
  const contentArray = children.split('\n')

  return contentArray.map((paragraph, index) => <Paragraph key={`p${index}`}>{paragraph}</Paragraph>)
}

const Paragraph = ({ children }: { children: string }) => {
  let parsedContent = []
  let keyCounter = 0

  // Parse Headers:
  if (children.startsWith('# ')) {
    parsedContent.push(<h1 key={keyCounter++}>{children.replace('# ', '')}</h1>)
    return parsedContent
  }

  // Process rest of the children for bold and italics:
  let temp = ''
  let isBold = false
  let isItalic = false

  for (let i = 0; i < children.length; i++) {
    if (children[i] === '*' && children[i + 1] === '*') {
      if (isBold) {
        parsedContent.push(<strong key={keyCounter++}>{temp}</strong>)
        temp = ''
        isBold = false
      } else {
        isBold = true
      }
      i += 1
    } else if (children[i] === '_') {
      if (isItalic) {
        parsedContent.push(<em key={keyCounter++}>{temp}</em>)
        temp = ''
        isItalic = false
      } else {
        isItalic = true
      }
    } else {
      temp += children[i]
    }
  }

  // Push last segment of text
  parsedContent.push(<React.Fragment key={keyCounter++}>{temp}</React.Fragment>)

  return parsedContent
}
