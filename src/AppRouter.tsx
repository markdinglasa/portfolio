import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { RouteChannel } from './types';
import Page from './pages';
import { RootLayout } from './components';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path={RouteChannel.INDEX} element={<Page.Home />} />
      <Route path={RouteChannel.ABOUT} element={<Page.About />} />
      <Route path={RouteChannel.PROJECTS} element={<Page.Projects />} />
      <Route path={RouteChannel.PROJECTS_DETAILS} element={<Page.ProjectDetails />} />
      <Route path={RouteChannel.CONTACTS} element={<Page.Contacts />} />
      <Route path={RouteChannel.R403} element={<Page.Unauthorized/>} />
      <Route path={RouteChannel.R404}  element={<Page.Missing/>} />
    </Route>
  )
);