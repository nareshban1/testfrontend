const KJUR = require("jsrsasign")

export const decodeJWTToken = (token: string) => {
  let decodedData
  try {
    decodedData = KJUR.jws.JWS.readSafeJSONString(KJUR.b64utoutf8(token.split(".")[1]))
  } catch {}
  return decodedData
}

export const logOut = () => {
  try {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
  } catch (err) {
    console.log("LogOut Error", err)
  }
}
