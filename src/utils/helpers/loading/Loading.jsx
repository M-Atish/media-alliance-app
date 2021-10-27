import { logoImg } from 'assets'
import './loading.scss'
import classNames from 'classnames'

const Loading = ({ spinner, visible }) => {
    return (
        <div className={classNames('loadingContainer', { visible: visible })}>
            <img
                src={logoImg}
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
