import Router from 'next/router'

Router.events.on('routeChangeComplete', url => window.analytics.page(url))

export default ({ children }) => <>{children}</>
