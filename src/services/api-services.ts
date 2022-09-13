import axios from "axios";

const getRequestHeaderDetail: any = (reqBodyType: string, access_token: string) => {
    let headers: { [key: string]: string } = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_token,
    };
    switch (reqBodyType) {
        case "NO-AUTH":
            delete headers["Authorization"];
            break
        case "FORM-DATA":
            headers = {
                ...headers,
                "Content-Type": "multipart/form-data"
            }
            break
        case "QUERY-STRING":
            headers = {
                ...headers,
                "Content-Type": "application/x-www-form-urlencoded"
            }
    }
    return headers
};


const ApiRequest = async (apiDetails: any, reqData: any, params: any) => {
    const { controllerName, requestMethod, reqBodyType } = apiDetails;
    const controller = new AbortController();
    let access_token = localStorage.getItem('access_token')
    const headers = getRequestHeaderDetail(reqBodyType, access_token)
    let transformedRequestData = transformRequestData(apiDetails, reqData);

    let axiosPayload: any = {
        baseUrl: "",
        url: controllerName,
        method: requestMethod,
        responseType: "json",
        timeout: 60 * 3 * 1000,
        headers: headers,
        ...transformedRequestData,
        signal: controller.signal
    }


    if (params) {
        axiosPayload = {
            ...axiosPayload,
            params: params
        }
    }

    let apiResponse = axios.request(axiosPayload).then((response: any) => response).catch((error: any) => {
        const errorDetail = manageErrorResponse(error)
        throw errorDetail
    })
    return apiResponse
};

export default ApiRequest;



const basicAuth = {
    username: "username",
    password: "secret",
};

const transformRequestData = (apiDetails: any, requestData: any) => {
    const transformedRequestData: any = {};
    let formData = new FormData();
    for (let data in requestData) {
        formData.append(data, requestData[data]);
    }
    switch (apiDetails.requestBodyType) {
        case "LOGIN":
            transformedRequestData.auth = basicAuth;
            transformedRequestData.data = formData;
            break;
        case "FORM-DATA":
            transformedRequestData.data = formData;
            break;
        default:
            transformedRequestData.data = requestData;
            break;
    }

    return transformedRequestData;
};

const manageErrorResponse = (error: any) => {
    const { message, config, code, request, response, isAxiosError } = error;

    let errorResponse = {
        message: message, // Something happened in setting up the request that triggered an Error
        data: null,
        status: code || 400,
        noconnection: false,
        config: config, // Request Params Configs
        isAxiosError: isAxiosError, //If Axios Error
    };

    if (response) {
        errorResponse.data = response.data; // The server responded with a status code and data
    } else if (request) {
        errorResponse.message = "Server could not be reached."; // No response was received
        errorResponse.noconnection = true;
    }

    return errorResponse;
};