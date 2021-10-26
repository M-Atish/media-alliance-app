import './authentication.scss'
import FacebookAuthentication from './FacebookAuthentication/FacebookAuthentication'
import GoogleAuthentication from './GoogleAuthentication/GoogleAuthentication'

import { useHistory } from 'react-router'

const Authentication = () => {
    const history = useHistory()

    function handleButtonClick(e) {
        history.push('/language')
    }
    return (
        <div className="authentication-container">
            <FacebookAuthentication onClick={handleButtonClick} />
            <GoogleAuthentication onClick={handleButtonClick} />
        </div>
    )
}

export default Authentication
