import React, { useState } from "react"
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
    <div>
      <input
        type='text'
        className='w-100'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter Email'
      />
      <div className='col text-end'>
        <button onClick={requestVerification}>Send Verification Link</button>
      </div>
    </div>
  )
}

export default RequestVerification
