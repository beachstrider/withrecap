import Header from './Header'

export default function Index({ children, isPublic, ...rest }) {
  return (
    <>
      <Header isPublic={isPublic} />
      <main {...rest}>{children}</main>
    </>
  )
}
