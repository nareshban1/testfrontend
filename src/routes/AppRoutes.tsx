import { useRoutes } from "react-router-dom"
import { Dashboard, Login, Register } from "./components"

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
   
  ])

  return routes
}

export default AppRoutes
