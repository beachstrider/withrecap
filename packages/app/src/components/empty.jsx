export default function Index({ children, className, ...rest }) {
  return (
    <div className={` ${className}`} {...rest}>
      {children}
    </div>
  )
}
