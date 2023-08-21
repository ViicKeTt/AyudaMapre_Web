import { useSelector } from "react-redux"
import { AuthenticatorConfigure } from "../redux/states/StoreConfigure"
import { Navigate, Outlet } from "react-router-dom"
import { PublicRoute } from "../routers"

export const AuthGuard = () => {
  const userState = useSelector((store: AuthenticatorConfigure) => store.user) 
  return !userState.guid ? <Outlet /> : <Navigate replace to={PublicRoute.LOGIN} />
}