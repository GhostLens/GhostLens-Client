import { createBrowserRouter } from "react-router";
import Notfound from "./pages/Notfound.tsx";
import Login from "./pages/auth/Login.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import Register from "./pages/auth/Register.tsx";
import Recovery from "./pages/auth/Recovery.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import AccountLogin from "./pages/account/Login.tsx";
import AccountLayout from "./layouts/AccountLayout.tsx";
import VerifyCode from "./pages/account/VerifyCode.tsx";
import TwoFactor from "./pages/account/Twofactor.tsx";
import Profile from "./pages/Profile.tsx";
import Activity from "./pages/Activity.tsx";

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
        path: "profile",
        Component: Profile,
      },
      {
        path: "account",
        Component: AccountLayout,
        children: [
          {
            path: "login",
            // Component: AccountLogin,
            children: [
              { Component: AccountLogin, index: true },
              { path: "verify", Component: VerifyCode },
              { path: "two-step", Component: TwoFactor },
            ],
          },
        ],
      },
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          { path: "login", index: true, Component: Login },
          { path: "register", Component: Register },
          { path: "recovery", Component: Recovery },
        ],
      },
      {
        path: "dashboard",
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: Dashboard,
          },
          {
            path: "activity",
            Component: Activity,
          },
        ],
      },
    ],
  },
]);

export default router;
