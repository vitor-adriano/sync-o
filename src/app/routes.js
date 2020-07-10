import React from 'react'
import { Switch, Route } from 'react-router-dom'

import * as Screen from '../screens'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Screen.SignIn} />
      <Route exact path="/dashboard" component={Screen.Dashboard} />
      <Route exact path="/chat" component={Screen.Chat} />
      <Route exact path="/profile" component={Screen.Profile} />
    </Switch>
  )
}

export default Routes
