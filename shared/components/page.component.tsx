import { ReactNode } from 'react'
import Router from 'next/router'

declare global {
  interface Window {
    analytics: any
  }
}

type Props = {
  children: ReactNode
}

Router.events.on('routeChangeComplete', url => window.analytics.page(url))

const Page = ({ children }: Props) => <>{children}</>

export default Page
