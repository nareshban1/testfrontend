import { lazy } from "react"

export const Dashboard = lazy(() => import("../core/private/Dashboard/Dashboard"))
export const Login = lazy(() => import("../core/public/Login/Login"))
export const Register = lazy(() => import("../core/public/Register/Register"))
export const VerifyEmail = lazy(() => import("../core/public/VerifyEmail/VerifyEmail"))
export const PasswordChangeForm = lazy(
  () => import("../core/public/ForgotPassword/PasswordChangeForm"),
)
export const RequestPasswordChange = lazy(
  () => import("../core/public/ForgotPassword/RequestPasswordChange"),
)
export const RequestVerification = lazy(
  () => import("../core/public/VerifyEmail/RequestVerification"),
)
