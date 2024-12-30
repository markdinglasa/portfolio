import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { RootLayout } from './components';
import { RouteChannel } from './types';
import {  MissingPage, UnauthorizedPage, HomePage, } from './pages';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />}>
        <Route path={RouteChannel.INDEX} element={<HomePage />} />
        {/*<Route element={<PersistContext />}>
          <Route element={<RequireAuth allowedRoles={[Roles.admin]} />}>
            <Route element={<AdminLayout/>}>
              <Route path={RouteChannel.USER} element={<AdminUserPage/>} />
              <Route path={RouteChannel.NEW_USER} element={<AdminNewUserPage/>} />
              <Route path={RouteChannel.USER_DETAILS} element={<AdminUserDetailsPage/>} />
              <Route path={RouteChannel.SALES} element={<AdminSalesPage/>} />
              <Route path={RouteChannel.SALES_DETAILS} element={<UnderConstruction/>} />
              <Route path={RouteChannel.PRODUCT} element={<AdminProductPage/>} />
              <Route path={RouteChannel.NEW_PRODUCT} element={<AdminNewProductPage/>} />
              <Route path={RouteChannel.PRODUCT_DETAILS} element={<AdminProductDetailsPage/>} />
            </Route>
          </Route>
        </Route>*/}
        <Route path={RouteChannel.R403} element={<UnauthorizedPage/>} />
        <Route path={RouteChannel.R404}  element={<MissingPage/>} />
      </Route>
    </>
  )
);