import { Route } from "react-router-dom"; 

export const HomeRouter = (): React.ReactElement | null => {
  return (
    <Route path={'/'} element={<h1>Index</h1>}>
      <Route path={'/home'} element={<h1>home</h1>}></Route>

      {/* NotFound */}
      <Route path="*" element={<h1>Not found</h1>} />
    </Route>
  );
};
