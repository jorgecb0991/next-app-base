import axios from 'axios'
//import { handleError, getSession } from '../helpers/global'
import { v4 as uuidv4 } from 'uuid'

const uniqid = uuidv4()
//const session = getSession()

const api =  axios.create({
    headers: {
        'X-UTEC-CONSUMER-ID': 'WELLNESS-WEB',
        'X-UTEC-REQUEST-ID': uniqid,
        'X-Auth-Token': 'token-prueba',
        Authorization: `Bearer xxxx`,
        'Content-Type': 'application/json'
    }
})
/*
export const multipart = axios.create({
    headers:{
        'X-Auth-Token': session.tokenV1,
        Authorization: `Bearer ${session.tokenV2}`,
        'Content-Type': 'multipart/form-data'
    }
})

api.interceptors.response.use(
        (response) =>  response.data,
        (error) => Promise.reject(handleError(error))
)

multipart.interceptors.response.use(
    (response) =>  response.data,
    (error) => Promise.reject(handleError(error))
)
*/
export default api