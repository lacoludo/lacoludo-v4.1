import React from 'react'
import Router from 'next/router'
// import Header from './Header'

Router.events.on('routeChangeComplete', url => window.analytics.page(url))

export default ({ children }) => (
  <div>
    {/* <Header /> */}
    {children}
  </div>
)
