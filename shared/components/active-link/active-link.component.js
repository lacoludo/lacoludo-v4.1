import { cloneElement, Children } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

export default ({ children, activeClassName, ...props }) => {
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
  );
}
