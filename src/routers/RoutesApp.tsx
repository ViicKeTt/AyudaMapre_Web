import { Route, Routes } from 'react-router-dom'
// import { HomeRouter } from './HomeRouter/HomeRouter'

export const RoutesApp = () => {
  return (
    <Routes>
      {/* //Home */}
      {/* <HomeRouter /> */}
      <Route path={'/'}  element={<h1>Index</h1>}>
        <Route path={'/home'} element={<h1>home</h1>}></Route>

        <Route path="*" element={<h1>Not found</h1>} />
      </Route>


      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  )
}

export function HomeRouter (): React.ReactElement | null  {
  return (
    <Route path={'/'} element={<h1>Index</h1>}>
      <Route path={'/home'} element={<h1>home</h1>}></Route>

      {/* NotFound */}
      <Route path="*" element={<h1>Not found</h1>} />
    </Route>
  );
}