import { Outlet } from "react-router-dom"
import { HeaderPrincipal } from "../components/Headers/HeaderPrincipal"

const PrincipalLayout = () => {
  return (
    <div>
      <HeaderPrincipal/>
      <Outlet />
    </div>
  )
}
export default PrincipalLayout