import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { apiDetails } from "../../../apiroutes/api-controllers"
import ApiRequest from "../../../services/ApiServices/api-services"
import { decodeJWTToken } from "../../../utils/utils"

const PasswordChangeForm = () => {
  const [password, setPassword] = useState<any>("")
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
    if (userData?.exp) {
      const exp = new Date(+userData?.exp * 1000)
      setValidTill(exp)
    }
  }, [userData])

  const changePassword = async () => {
    const detail = {
      password: password,
      token: params?.token,
    }
    try {
      const res = await ApiRequest(apiDetails.resetPassword, { ...detail }, null)
      console.log(res)
      if (res.status === 200) {
        console.log("success")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const checkExpiry = () => {
    if (now > validTill) {
      return (
        <div className='text-md text-center'>
          <div className='text-md text-center font-bold'>This Link has Already Expired.</div>
          <div className='text-sm text-center'>
            <Link to='/login' className='font-medium text-indigo-600 hover:text-indigo-500'>
              Go to Sign up
            </Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className='text-md text-center'>
          <div className='text-md text-center'>
            <form className='mt-8 space-y-6'>
              <div className=''>
                <div>
                  <label htmlFor='email-address' className='text-gray-900 font-bold '>
                    Password
                  </label>
                  <input
                    id='email-address'
                    name='email'
                    type='email'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete='email'
                    required
                    className=' mt-1 block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    placeholder='Email address'
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={changePassword}
                  className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Reset Password
                </button>
              </div>
            </form>
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
            Password Reset
          </h2>
        </div>
        {checkExpiry()}
        <div className='text-sm text-center'>
          <Link to='/login' className='font-medium text-indigo-600 hover:text-indigo-500'>
            Go to Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PasswordChangeForm
