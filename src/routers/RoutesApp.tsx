import { Navigate, Route } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from '.'
import { AuthGuard } from '../guards/auth.guard'
import { RouteWithNotFound } from '../utils'
import * as pages from '../pages/_LazyPages'
import PrivatePages from './Private/Private/PrivatePages'
import RoleGuard from '../guards/role.guard'
import { Roles } from '../auth/types/roles'
import { Dashboard } from '../pages/Private'

// const RouteServer = ''

export const RoutesApp = () => {
  return (
    <RouteWithNotFound> {/* Funciona como '<Routes/>' */}
      {/* <Route path={RouteServer} element={<pages.PrincipalLayoutPage />}> */}

      <Route path="/" element={<Navigate to={PrivateRoute.PRIVATE} />} />
      <Route path={PublicRoute.LOGIN} element={<pages.LoginPage />} />
 

      <Route element={<AuthGuard privateValidation={true} />}>
        <Route path={`${PrivateRoute.PRIVATE}/*`} element={<PrivatePages />} />
      </Route>

      <Route element={<RoleGuard rol={Roles.ADMIN} />}>
        <Route path={PrivateRoute.DASHBOARD} element={<Dashboard />} />
      </Route>

    </RouteWithNotFound>


  )
} 