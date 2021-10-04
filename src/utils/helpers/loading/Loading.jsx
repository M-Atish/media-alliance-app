import logo from './favicon-32x32.png'
import './loading.scss'

const Loading = ({ spinner, visible }) => {
    return (
        <div
            className="loadingContainer"
            style={{ display: !visible && 'none' }}
        >
            <img
                src={logo}
                alt="Loading..."
                className={`loading ${spinner ? 'loading-current' : 'loaded'} ${
                    !visible && 'hidden'
                }`}
            />
        </div>
    )
}

export default Loading
