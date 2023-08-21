import { Navigate, Route } from "react-router-dom"
import { RouteWithNotFound } from "../../utils"
import { PrivateRoute } from ".." 
import DashboardPage from "../../pages/Private/Dashboard"


const PrivateRouter = () => {
  return (
    <RouteWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoute.PRIVATE} />}>
        <Route path={PrivateRoute.DASHBOARD} element={<DashboardPage />}></Route>
        <Route path={PrivateRoute.HOME} element={<DashboardPage />}></Route>
      </Route>
    </RouteWithNotFound>
  )
}
export default PrivateRouter