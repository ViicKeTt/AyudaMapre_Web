import { Navigate, Outlet, } from "react-router-dom"

type routeProp = {
  isAuthenticated: boolean
  redirectPact: string
}

//15min video
export function ProtectedRoute({ isAuthenticated, redirectPact = '/' }: routeProp) {
  //react-use
  if (!isAuthenticated)
    return <Navigate to={redirectPact} replace />
  return <Outlet />

// ej.
{/* <Route element={<ProtectedRoute isAuthenticated={true} />}>
  <Route path="/" element={<h1>Index</h1>}>
  </Route>
</Route> */}
}
