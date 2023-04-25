import React from 'react'

interface Props {
  children: React.ReactNode
}
interface State {
  error: string | null
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error: Error) {
    console.error('An error occurred', error)

    this.setState({
      error: 'An error occurred! Please try to re-open the popup or contact the support of the problem persists.'
    })
  }

  render() {
    const { error } = this.state

    if (error) {
      return <div>{error}</div>
    } else {
      return <>{this.props.children}</>
    }
  }
}
