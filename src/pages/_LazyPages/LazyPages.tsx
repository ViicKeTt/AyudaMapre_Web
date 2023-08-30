import { lazy } from "react"; 

//Public
export const IndexPage = lazy(() => import('../Index/IndexPage'));
export const LoginPage = lazy(() => import('../Login/Login'));
export const PrincipalLayoutPage = lazy(() => import('../../layouts/PrincipalLayout'));


// Private 
export const DashboardPage = lazy(() => import('../Private/Dashboard'));
export const HomePage = lazy(() => import('../Private/Home'));
