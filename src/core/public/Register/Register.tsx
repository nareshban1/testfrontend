import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { apiDetails } from "../../../apiroutes/api-controllers"
import ApiRequest from "../../../services/ApiServices/api-services"
const Register = () => {
  const [name, setName] = useState<any>("")
  const [email, setEmail] = useState<any>("")
  const [password, setPassword] = useState<any>("")
  const registerUser = async () => {
    const detail = {
      name: name,
      email: email,
      password: password,
      roles: [],
    }
    try {
      const res = await ApiRequest(apiDetails.register, { ...detail }, null)
      console.log(res)
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
            Register for an account
          </h2>
        </div>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className=''>
            <div>
              <label htmlFor='name' className='text-gray-900 font-bold '>
                Name
              </label>
              <input
                id='name'
                name='name'
                type='name'
                autoComplete='name'
                required
                className=' mt-1 block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Full Name'
              />
            </div>
            <div className='mt-2 '>
              <label htmlFor='email-address' className='text-gray-900 font-bold '>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
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
                required
                className='mt-1 block w-full appearance-none rounded  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Password'
              />
            </div>
          </div>
          <div>
            <button
              type='submit'
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Sign up
            </button>
          </div>
        </form>
        <div className='text-sm text-center'>
          <Link to='/login' className='font-medium text-indigo-600 hover:text-indigo-500'>
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
