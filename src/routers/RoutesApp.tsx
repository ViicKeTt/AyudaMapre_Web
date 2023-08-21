import { Route } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from '.'
import { AuthGuard } from '../guards/auth.guard'
import { RouteWithNotFound } from '../utils' 
import * as pages from '../pages/_LazyPages'

export const RoutesApp = () => {
  return (
    <RouteWithNotFound> {/* Funciona como '<Routes/>' */}
      <Route path='' element={<pages.PrincipalLayoutPage/>}>
        <Route path={PublicRoute.INDEX} element={<pages.IndexPage />}>
          <Route path={PublicRoute.LOGIN} element={<pages.LoginPage />}></Route>
        </Route>


        {/* Private route */}
        <Route element={<AuthGuard />}>
          <Route path={PrivateRoute.PRIVATE} element={<h1>Dashboard</h1>}></Route>
        </Route>
    </Route>
 
    </RouteWithNotFound>
  )
} 