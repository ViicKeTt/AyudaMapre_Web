import { Navigate, Route } from "react-router-dom"
import { RouteWithNotFound } from "../../../utils"
import { PrivateRoute } from "../.."
import DashboardPage from "../../../pages/Private/Dashboard"


const PrivatePages = () => {
  return (
    <RouteWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoute.DASHBOARD} />} />
      <Route path={PrivateRoute.HOME} element={<DashboardPage />}></Route>
      <Route path={PrivateRoute.DASHBOARD} element={<DashboardPage />}></Route>
    </RouteWithNotFound>
  )
}
export default PrivatePages 