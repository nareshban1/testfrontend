import { useRoutes } from "react-router-dom"
import { Dashboard, Login } from "./components"

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ])

  return routes
}

export default AppRoutes
