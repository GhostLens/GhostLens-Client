import { createBrowserRouter } from "react-router";
import Index from "./pages/Index.tsx";
import Notfound from "./pages/Notfound.tsx";
import Login from "./pages/auth/Login.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import Register from "./pages/auth/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Notfound,
      },
      {
        path: "dashboard",
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: Index,
          },
          {
            path: "auth",
            Component: AuthLayout,
            children: [
              { path: "login", Component: Login },
              { path: "register", Component: Register },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
