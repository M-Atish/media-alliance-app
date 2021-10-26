import GoogleLogin from 'react-google-login'

const GoogleAuthentication = () => {
    const responseGoogle = (response) => console.log(response)
    return (
        <GoogleLogin
            clientId=""
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />
    )
}

export default GoogleAuthentication
