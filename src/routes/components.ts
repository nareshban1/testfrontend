import { lazy } from "react"
export const Dashboard = lazy(() => import("../core/private/Dashboard/Dashboard"))
export const Login = lazy(() => import("../core/public/Login/Login"))
export const Register = lazy(() => import("../core/public/Register/Register"))
