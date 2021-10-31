import './Button.scss'
import classNames from 'classnames'

const Button = ({ description, handleButtonClick, bgColor, size, color }) => {
    return (
        <div className="button-container">
            <button
                type="submit"
                className={classNames('button-submit', {
                    small: size === 'small',
                    'extra-small': size === 'extra-small',
                    large: size === 'large',
                    red: bgColor === 'red',
                    grey: bgColor === 'grey',
                    blue: bgColor === 'blue',
                    'text-color-black': color === 'black',
                })}
                onClick={handleButtonClick}
            >
                <p className="button-description">{description}</p>
            </button>
        </div>
    )
}

export default Button
