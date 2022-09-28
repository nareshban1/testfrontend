import React, { useState } from "react"
import { Link } from "react-router-dom"
import { apiDetails } from "../../../apiroutes/api-controllers"
import ApiRequest from "../../../services/ApiServices/api-services"

const RequestVerification = () => {
  const [email, setEmail] = useState<any>("")

  const requestVerification = async () => {
    const detail = {
      email: email,
    }
    try {
      const res = await ApiRequest(apiDetails.requestEmailVerification, { ...detail }, null)
      console.log(res)
      if (res.status === 200) {
        console.log("success")
      }
    } catch (error) {
      console.log(error)
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
            Request Verification Email
          </h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={requestVerification}>
          <div className=''>
            <div>
              <label htmlFor='email-address' className='text-gray-900 font-bold '>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete='email'
                required
                className=' mt-1 block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Email address'
              />
            </div>
          </div>
          <div>
            <button
              type='submit'
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Send Verification Email
            </button>
          </div>
        </form>
        <div className='text-sm text-center'>
          <Link to='/login' className='font-medium text-indigo-600 hover:text-indigo-500'>
            Already verified?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RequestVerification
