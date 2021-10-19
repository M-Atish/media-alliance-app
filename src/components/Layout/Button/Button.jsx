import './Button.scss'
import classNames from 'classnames'

const Button = ({ description, handleButtonClick, bgColor, size }) => {
    return (
        <div className="button-container">
            <button
                type="submit"
                className={classNames('button-submit', {
                    small: size === 'small',
                    large: size === 'large',
                    red: bgColor === 'red',
                    grey: bgColor === 'grey',
                })}
                onClick={handleButtonClick}
            >
                <p className="button-description">{description}</p>
            </button>
        </div>
    )
}

export default Button
