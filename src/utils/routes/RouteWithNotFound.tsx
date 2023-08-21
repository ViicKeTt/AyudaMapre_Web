import { Route, Routes } from "react-router-dom"

interface props{
  children: React.ReactNode
}


const RouteWithNotFound = ({ children }: props) => {
  return (
    <Routes>
      {children}
      <Route path='*' element={<h1>Not Found</h1>}></Route>
    </Routes>
  )
}
export default RouteWithNotFound