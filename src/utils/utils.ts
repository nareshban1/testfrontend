import KJUR from "jsrsasign"

export const decodeJWTToken = (token: string) => {
  let decodedData
  try {
    decodedData = KJUR.KJUR.jws.JWS.readSafeJSONString(KJUR.b64utoutf8(token.split(".")[1]))
  } catch (err) {
    console.log("Error", err)
  }
  return decodedData
}

export const removeTokens = () => {
  try {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
  } catch (err) {
    console.log("Error", err)
  }
}
