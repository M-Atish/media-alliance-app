import { useState } from 'react'
import FacebookLogin from 'react-facebook-login'

const FacebookAuthentication = () => {
    const [login, setLogin] = useState(false)
    const [data, setData] = useState({})
    const [picture, setPicture] = useState('')

    const responseFacebook = (response) => {
        console.log(response)
        setData(response)
        setPicture(response?.picture?.data?.url && response.picture.data.url)
        if (response.accessToken) {
            setLogin(true)
        } else {
            setLogin(false)
        }
    }

    return (
        <FacebookLogin
            appId="4508261925934177"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            icon="fa-facebook"
        />
    )
}

export default FacebookAuthentication
