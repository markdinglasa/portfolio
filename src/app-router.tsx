import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RouteChannel } from "./types";
import Page from "@/pages";
import { RootLayout } from "./components";
import ErrorPage from "@/pages/error-page";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route
        path={RouteChannel.INDEX}
        element={<Page.Home />}
        ErrorBoundary={ErrorPage}
      />
      <Route
        path={RouteChannel.ABOUT}
        element={<Page.About />}
        ErrorBoundary={ErrorPage}
      />
      <Route
        path={RouteChannel.PROJECTS}
        element={<Page.Projects.Lists />}
        ErrorBoundary={ErrorPage}
      />
      <Route
        path={RouteChannel.PROJECTS_DETAILS}
        element={<Page.Projects.Details />}
        ErrorBoundary={ErrorPage}
      />
      <Route
        path={RouteChannel.R403}
        element={<Page.Unauthorized />}
        ErrorBoundary={ErrorPage}
      />
      <Route
        path={RouteChannel.R404}
        element={<Page.Missing />}
        ErrorBoundary={ErrorPage}
      />
      <Route
        path={RouteChannel.UNDERCONSTRUCTION}
        element={<Page.UnderConstruction />}
        ErrorBoundary={ErrorPage}
      />
    </Route>
  )
);
