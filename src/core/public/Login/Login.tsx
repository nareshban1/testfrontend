import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { apiDetails } from "../../../apiroutes/api-controllers"
import ApiRequest from "../../../services/ApiServices/api-services"

const Login = () => {
  const [email, setEmail] = useState<any>("")
  const [password, setPassword] = useState<any>("")

  const loginUser = async () => {
    const detail = {
      email: email,
      password: password,
    }
    try {
      const res = await ApiRequest(apiDetails.login, { ...detail }, null)
      console.log(res)
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.data.token)
        localStorage.setItem("refreshToken", res.data.data.refreshToken)
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
            Sign in to your account
          </h2>
        </div>
        <form className='mt-8 space-y-6'>
          <div className=''>
            <div>
              <label htmlFor='email-address' className='text-gray-900 font-bold '>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className=' mt-1 block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Email address'
              />
            </div>
            <div className='mt-2 '>
              <label htmlFor='password' className='text-gray-900 font-bold '>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='mt-1 block w-full appearance-none rounded  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Password'
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
                Remember me
              </label>
            </div>

            <div className='text-sm'>
              <Link
                to='/request-password-change'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              onClick={loginUser}
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Sign in
            </button>
          </div>
        </form>
        <div className='text-sm text-center'>
          <Link to='/register' className='font-medium text-indigo-600 hover:text-indigo-500'>
            Don&apos;t have an account? Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
