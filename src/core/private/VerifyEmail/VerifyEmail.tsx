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

  const checkExpiry = () => {
    if (now > validTill) {
      return (
        <div className='text-md text-center'>
          <div className='text-md text-center font-bold'>
            This Link has Already Expired.
          </div>
          <div className='text-sm text-center'>
            <Link
              to='/request-verify'
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              Request Verification Email
            </Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className='text-md text-center'>
          <div className='text-md text-center'>
            {loading ? (
              <div className='flex justify-center'>
                <svg
                  className='animate-spin h-5 w-5 text-indigo-600'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              </div>
            ) : (
              <p className='text-gray-800 '>{status}</p>
            )}
          </div>
          <div className='text-sm text-center mt-3'>
            <Link to='/login' className='font-medium text-indigo-600 hover:text-indigo-500'>
              Go to Login
            </Link>
          </div>
        </div>
      )
    }
  }

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8 font-barlow '>
        <div>
          <h5 className='text-center text-xl font-bold tracking-tight text-gray-900'>
            Ascend<span className='text-red-600'>Dex</span>
          </h5>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Email Verification
          </h2>
        </div>
        {checkExpiry()}
      </div>
    </div>
  )
}

export default VerifyEmail
