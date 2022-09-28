import { useRoutes } from "react-router-dom"
import { Dashboard, Login, Register, RequestVerification, VerifyEmail } from "./components"

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
  ])

  return routes
}

export default AppRoutes
