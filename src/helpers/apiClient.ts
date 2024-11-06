import axios, {AxiosError} from 'axios'

const ApiClient = () => {
    const instance = axios.create()
    instance.interceptors.request.use(async (request) => {
        return request
    })

    instance.interceptors.response.use(
        (response) => {
            return response
        },
        ({code, message, request, response}: AxiosError) => {
            return response?.data;
        }
    )

    return instance
}

export default ApiClient();
