import { FC, ReactNode } from 'react'
import Router from 'next/router'

declare global {
  interface Window {
    analytics: any
  }
}

Router.events.on('routeChangeComplete', url => window.analytics.page(url))

const PageComponent: FC<ReactNode> = ({ children }) => <>{children}</>

export default PageComponent
