import Router from 'next/router'

Router.events.on('routeChangeComplete', url => window.analytics.page(url))

const PageComponent = ({ children }) => <>{children}</>

export default PageComponent
