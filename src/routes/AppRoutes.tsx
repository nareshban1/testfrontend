import { useRoutes } from "react-router-dom"
import PageNotFound from "../core/public/404/PageNotFound"
import {
  Dashboard,
  Login,
  PasswordChangeForm,
  Register,
  RequestPasswordChange,
  RequestVerification,
  VerifyEmail,
} from "./components"

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/verify-email/:token",
      element: <VerifyEmail />,
    },
    {
      path: "/request-verify",
      element: <RequestVerification />,
    },
    {
      path: "/reset-password/:token",
      element: <PasswordChangeForm />,
    },
    {
      path: "/request-password-change",
      element: <RequestPasswordChange />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ])

  return routes
}

export default AppRoutes
