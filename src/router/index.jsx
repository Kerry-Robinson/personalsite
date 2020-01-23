import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ROUTES from "./paths"

const NotFound = lazy(() => import("../pages/notfound"))

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router basename="/">
        <Switch>
          {ROUTES.map(route => (
            <Route
              key={route.name}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default AppRouter
