import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";

// Define a high level components to wrap Component into Suspense components. So that it can display a loading screen if the Component is loading.
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

// Routers to each page
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />, // Side bar, which is comm`on in all pages, parent of children layouts. The Outlet component will render the children component of DashboardLayout:
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },

        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
