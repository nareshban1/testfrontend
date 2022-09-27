import { useEffect, useState } from "react"
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
    <div className=''>
      <h3>Register User</h3>
      <div className='row gx-2 align-items-center'>
        <div className='col-2'>
          <input
            type='text'
            className='w-100'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Name'
          />
        </div>
        <div className='col-3'>
          <input
            type='text'
            className='w-100'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
          />
        </div>
        <div className='col-2'>
          <input
            type='text'
            className='w-100'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
          />
        </div>
        <div className='col-1 text-end'>
          <button onClick={registerUser}>Create</button>
        </div>
      </div>
    </div>
  )
}

export default Register
