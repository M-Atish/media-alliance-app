import './notFirstTime.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-solid-svg-icons'

const NotFirstTime = () => {
    return (
        <div className="warning-message">
            <p>
                Error 404. Page not found.{' '}
                <span>
                    <FontAwesomeIcon icon={faSadCry} />
                </span>
            </p>
        </div>
    )
}

export default NotFirstTime
