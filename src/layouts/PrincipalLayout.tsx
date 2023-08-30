import { NavLink, Outlet } from "react-router-dom"
import { PublicRoute } from "../routers"

const PrincipalLayout = () => {
  return (
    <div>
      <header>
        <ul className="list-outside md:list-inside">
          <li>
            <NavLink className='menu-item item-only' to={PublicRoute.INDEX}>
              INDEX
            </NavLink>
          </li>
          <li className="">
            <NavLink className='menu-item item-only' to={PublicRoute.LOGIN}>
              LOGIN
            </NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </div>
  )
}
export default PrincipalLayout