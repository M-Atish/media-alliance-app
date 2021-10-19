import * as localStorage from './storage'

const ACCESS_TOKEN = 'access_token'
const USER_UNIQUE_TOKEN = 'user_unique_token'
const EXPIRY_DATE = 'expiry_date'

const token = () => {
    function _setToken(tokenObj) {
        localStorage.set(ACCESS_TOKEN, tokenObj)
        localStorage.set(USER_UNIQUE_TOKEN, tokenObj)

        if (tokenObj.expiryDate) {
            localStorage.set(EXPIRY_DATE, tokenObj)
        }
    }

    function _getAccessToken() {
        return localStorage.get(ACCESS_TOKEN)
    }

    function _getUserUniqueToken() {
        return localStorage.get(USER_UNIQUE_TOKEN)
    }

    function _getTokenExpiryDate() {
        return localStorage.get(EXPIRY_DATE)
    }

    function _clearToken() {
        localStorage.remove(ACCESS_TOKEN)
        localStorage.remove(USER_UNIQUE_TOKEN)
    }

    return {
        _setToken,
        _getAccessToken,
        _getUserUniqueToken,
        _getTokenExpiryDate,
        _clearToken,
    }
}

export default token()
