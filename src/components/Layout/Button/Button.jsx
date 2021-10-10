import './Button.scss'

const Button = ({ description, handleButtonClick }) => {
    return (
        <div className="button-container">
            <button
                type="submit"
                className="button-submit"
                onClick={handleButtonClick}
            >
                <p className="button-description">{description}</p>
            </button>
        </div>
    )
}

export default Button
