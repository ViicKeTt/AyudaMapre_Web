import { useSelector } from "react-redux"
import { AuthenticatorConfigure } from "../redux/states/StoreConfigure"
import { Navigate, Outlet } from "react-router-dom"
import { PrivateRoute, PublicRoute } from "../routers"

interface Props {
  privateValidation: boolean;
}

const PublicValidationFragment = <Outlet />;
const PrivateValidationFragment = <Navigate replace to={PrivateRoute.PRIVATE} />;

export const AuthGuard = ({ privateValidation }: Props) => {
  const userState = useSelector((store: AuthenticatorConfigure) => store.user);

  //--> Validation delete '!' in ↓
  return !userState.name ? (
    privateValidation ? (
      PublicValidationFragment
    ) : (
      PrivateValidationFragment 
    )
  ) : (
    <Navigate replace to={PublicRoute.LOGIN} />
  );
};