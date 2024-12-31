import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { RouteChannel } from './types';
import {  MissingPage, UnauthorizedPage, HomePage, } from './pages';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={RouteChannel.INDEX} element={<HomePage />} />
      <Route path={RouteChannel.R403} element={<UnauthorizedPage/>} />
      <Route path={RouteChannel.R404}  element={<MissingPage/>} />
    </>
  )
);