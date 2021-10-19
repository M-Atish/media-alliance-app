import logo from './favicon-32x32.png'
import './loading.scss'
import classNames from 'classnames'

const Loading = ({ spinner, visible }) => {
    return (
        <div className={classNames('loadingContainer', { visible: visible })}>
            <img
                src={logo}
                alt="Loading..."
                className={classNames('loading', {
                    'loading-current': spinner,
                    loaded: !spinner,
                    hidden: !visible,
                })}
            />
        </div>
    )
}

export default Loading
