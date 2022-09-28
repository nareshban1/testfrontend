import { AxiosError } from "axios"
import React, { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { apiDetails } from "../../../apiroutes/api-controllers"
import ApiRequest from "../../../services/ApiServices/api-services"
import { decodeJWTToken } from "../../../utils/utils"

export type UserData = {
  userId: string
  iat: string
  exp: string
}

const VerifyEmail = () => {
  const params = useParams()
  const [userData, setUserData] = useState<any>(null)
  const [validTill, setValidTill] = useState<Date | string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [status, setStatus] = useState<string>("")
  const now = new Date()

  useEffect(() => {
    const decoded = decodeJWTToken(params?.token || "")
    setUserData(decoded)
  }, [params])

  useEffect(() => {
    const verifyUserEmail = async (userId: string) => {
      setLoading(true)
      try {
        const res = await ApiRequest(apiDetails.verifyEmail, { userId: userId }, null)
        console.log(res)
        if (res.status === 200) {
          console.log("success")
          setStatus("Email Verified Successfully")
          setLoading(false)
        }
      } catch (error: any) {
        console.log(error)
        setStatus(error?.data?.message)
        setLoading(false)
      }
    }

    if (!!userData?.exp && !!userData.userId) {
      const exp = new Date(+userData?.exp * 1000)
      setValidTill(exp)
      if (now <= exp) {
        verifyUserEmail(userData.userId)
      }
    }
  }, [userData])

  if (now > validTill) {
    return <div>This Link has Already Expired. <Link to={"/request-verify"}>Request new verification link.</Link></div>
  }

  return <div>{loading ? "Verifying Email" : status}</div>
}

export default VerifyEmail
