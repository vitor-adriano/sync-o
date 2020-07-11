import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import * as Screen from '../screens'

const PrivateRoute = ({ component: Component, ...baseProps }) => {
  return (
    <Route
      {...baseProps}
      render={props => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
          return <Component {...props} />
        } else {
          return <Redirect to={'/'} />
        }
      }}
    />
  )
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Screen.SignIn} />
      <PrivateRoute exact path="/dashboard" component={Screen.Dashboard} />
      <PrivateRoute exact path="/chat" component={Screen.Chat} />
      <PrivateRoute exact path="/profile" component={Screen.Profile} />
    </Switch>
  )
}

export default Routes
