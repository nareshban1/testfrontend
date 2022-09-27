import React, { Suspense } from "react"
import { Navigate, useLocation } from "react-router-dom"
import AppRoutes from "./AppRoutes"

const PrivateRoutes = () => {
  const token: string | null =
  localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken")
  const location = useLocation()


  if (!token && location?.pathname !== "/register" && location?.pathname !== "/login") {
    if ( location?.pathname === "/register") {
      return <Navigate to='/register' />
    }
    return <Navigate to='/login' />
  }
 
  if (
    token &&
    (location?.pathname === "/login" ||
      location?.pathname == "/" ||
      location?.pathname === "/register")
  ) {
    return <Navigate to='/dashboard' />
  }
  if (token && location?.pathname === "/") {
    return <Navigate to='/dashboard' />
  }
  if (location?.pathname === "/") {
    return <Navigate to='/dashboard' />
  }

  return (
    <Suspense fallback={<>Loading</>}>
      <AppRoutes />
    </Suspense>
  )
}

export default PrivateRoutes
