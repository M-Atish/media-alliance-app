import axios from 'axios'
import { getHeader } from './header'

// Default API will be in your root, to check the root, check out the .env file. You can access the .env file in the main folder. Just make sure to never ever upload the .env file to github as it will contain all the vital information such as the port number, ids, and the root api

// When calling the fucking api, please do remember to disable CORS, you can do this via the extension on CORs at google chrome.

const API_ROOT = process.env.REACT_APP_API_ENDPOINT || ''
const TIMEOUT = 20000

/**
 * API call utility function
 *
 * @param {THeader} headerType
 * @param {string} baseURL
 * @param {number} timeout
 * @returns
 */

const http = (headerType = 'json', baseURL = API_ROOT, timeout = TIMEOUT) => {
    const headers = getHeader(headerType)

    const client = axios.create({
        baseURL,
        timeout,
        headers,
    })

    // Intercept response object and handleSuccess and Error object
    client.interceptors.response.use(handleSuccess, handleError)

    function handleSuccess(response) {
        return response
    }

    function handleError(error) {
        return Promise.reject(error)
    }

    async function get(path) {
        return await client.get(path).then((response) => response.data)
    }

    async function post(path, payload) {
        return await client
            .post(path, payload)
            .then((response) => response.data)
    }

    async function put(path, payload) {
        return await client.put(path, payload).then((response) => response.data)
    }

    async function _delete(path, data) {
        if (data) {
            return await client
                .delete(path, { data: data })
                .then((response) => response.data)
        }

        return await client.delete(path).then((response) => response.data)
    }

    return {
        get,
        post,
        put,
        delete: _delete,
    }
}

export default http
