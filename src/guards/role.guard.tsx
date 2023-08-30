import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthenticatorConfigure } from '../redux/states/StoreConfigure';
import { Roles } from '../auth/types/roles';
import { PrivateRoute } from '../routers';

interface Props {
  rol: Roles;
}

function RoleGuard({ rol }: Props) {
  const userState = useSelector((store: AuthenticatorConfigure) => store.user);
  return userState.role === rol ? <Outlet /> : <Navigate replace to={PrivateRoute.PRIVATE} />;
}
export default RoleGuard;
