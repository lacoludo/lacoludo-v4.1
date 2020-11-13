import { Children, cloneElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ActiveLinkComponent = ({ children, activeClassName, ...props }: any) => {
  const { pathname } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''
  const className =
    pathname === props.href
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link {...props}>
      {cloneElement(child, {
        className: className || null
      })}
    </Link>
  )
}

export default ActiveLinkComponent
