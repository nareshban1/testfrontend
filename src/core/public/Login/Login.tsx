import { useEffect, useState } from "react"
import { apiDetails } from "../../../apiroutes/api-controllers"
import ApiRequest from "../../../services/ApiServices/api-services"

const Login = () => {
  const [logEmail, setLogEmail] = useState<any>("")
  const [logPassword, setLogPassword] = useState<any>("")

  const loginUser = async () => {
    const detail = {
      email: logEmail,
      password: logPassword,
    }
    try {
      const res = await ApiRequest(apiDetails.login, { ...detail }, null)
      console.log(res)
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.data.token)
        localStorage.setItem("refreshTOken", res.data.data.refreshToken)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='mb-5'>
      <h3>Login User</h3>
      <div className='row gx-2 align-items-center'>
        <div className='col-3'>
          <input
            type='text'
            className='w-100'
            value={logEmail}
            onChange={(e) => setLogEmail(e.target.value)}
            placeholder='Enter Email'
          />
        </div>
        <div className='col-3'>
          <input
            type='text'
            className='w-100'
            value={logPassword}
            onChange={(e) => setLogPassword(e.target.value)}
            placeholder='Enter Password'
          />
        </div>
        <div className='col text-end'>
          <button onClick={loginUser}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
