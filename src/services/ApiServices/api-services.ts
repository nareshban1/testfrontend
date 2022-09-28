import axios, {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  Method,
  AxiosBasicCredentials,
  AxiosInstance,
} from "axios"

export type Headers = {
  [key: string]: string
}

export interface RequestParam {
  [key: string]: string | boolean | number | null | undefined
}

interface TransformedRequestData {
  auth?: AxiosBasicCredentials
  data: unknown
}

const getRequestHeaderDetail = (reqBodyType: string, accessToken: string): Headers => {
  let headers: { [key: string]: string } = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessToken,
  }
  switch (reqBodyType) {
    case "NO-AUTH":
      delete headers["Authorization"]
      break
    case "FORM-DATA":
      headers = {
        ...headers,
        "Content-Type": "multipart/form-data",
      }
      break
    case "QUERY-STRING":
      headers = {
        ...headers,
        "Content-Type": "application/x-www-form-urlencoded",
      }
  }
  return headers
}

const ApiRequest = async (apiDetails: any, reqData: any, params: any) => {
  const { controllerName, requestMethod, reqBodyType } = apiDetails
  const controller = new AbortController()
  const accessToken = localStorage.getItem("accessToken") || ""
  const headers = getRequestHeaderDetail(reqBodyType, accessToken)
  const transformedRequestData = transformRequestData(apiDetails, reqData)
  const baseURL = process.env.REACT_APP_API_ENDPOINT
  let axiosPayload: AxiosRequestConfig = {
    baseURL: baseURL,
    url: controllerName,
    method: requestMethod,
    responseType: "json",
    timeout: 60 * 3 * 1000,
    headers: headers,
    ...transformedRequestData,
    signal: controller.signal,
  }

  if (params) {
    axiosPayload = {
      ...axiosPayload,
      params: params,
    }
  }

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        return getTokenByRefresh(error)
      }
      return Promise.reject(error)
    },
  )

  const apiResponse = axios
    .request(axiosPayload)
    .then((response: any) => response)
    .catch((error: AxiosError) => {
      const errorDetail = manageErrorResponse(error)
      throw errorDetail
    })
  return apiResponse
}

export default ApiRequest

const basicAuth = {
  username: "username",
  password: "secret",
}

const getTokenByRefresh = (error: AxiosError) => {
  const originalRequest = error.config

  const responseError = error.response
  const localAccessToken = localStorage.getItem("accessToken") || ""
  const localRefreshToken = localStorage.getItem("refreshToken") || ""

  const requestUrl = ""

  const requestBody = new FormData()
  requestBody.append("grant_type", "refresh_token")
  requestBody.append("userId", localRefreshToken)
  requestBody.append("refreshToken", localRefreshToken)
  return axios
    .request({
      url: requestUrl,
      method: "POST",
      auth: basicAuth,
      headers: {
        "Content-Type": "application/json",
      },
      data: requestBody,
    })
    .then((res) => {
      const newRequest = { ...originalRequest }

      if (newRequest.headers) newRequest.headers.Authorization = "Bearer " + res.data.access_token

      localStorage.setItem("accessToken", res.data.data.token)
      localStorage.setItem("refreshToken", res.data.data.refreshToken)

      return axios
        .request(newRequest)
        .then((res) => {
          return Promise.resolve(res)
        })
        .catch((err) => {
          return Promise.reject(manageErrorResponse(err))
        })
    })
    .catch((err) => {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      console.log("session expired")
      window.location.href = "/"
      return Promise.reject(manageErrorResponse(err))
    })
}

const transformRequestData = (apiDetails: any, requestData: any) => {
  const transformedRequestData: TransformedRequestData = { data: requestData }
  const formData = new FormData()
  switch (apiDetails.requestBodyType) {
    case "LOGIN":
      transformedRequestData.auth = basicAuth
      transformedRequestData.data = formData
      break
    case "FORM-DATA":
      transformedRequestData.data = formData
      break
    default:
      transformedRequestData.data = requestData
      break
  }

  return transformedRequestData
}

const manageErrorResponse = (error: AxiosError) => {
  const { message, config, code, request, response, isAxiosError } = error

  const errorResponse: any = {
    message: message, // Something happened in setting up the request that triggered an Error
    data: null,
    status: code || 400,
    noconnection: false,
    config: config, // Request Params Configs
    isAxiosError: isAxiosError, // If Axios Error
  }

  if (response) {
    errorResponse.data = response?.data // The server responded with a status code and data
  } else if (request) {
    errorResponse.message = "Server could not be reached." // No response was received
    errorResponse.noconnection = true
  }

  return errorResponse
}
