import './Button.scss'

const Button = ({
    description,
    handleButtonClick,
    height,
    width,
    bgColor,
    margin,
}) => {
    return (
        <div className="button-container">
            <button
                type="submit"
                className="button-submit"
                onClick={handleButtonClick}
                style={{
                    height: height,
                    width: width,
                    backgroundColor: bgColor,
                    margin: margin,
                }}
            >
                <p className="button-description">{description}</p>
            </button>
        </div>
    )
}

export default Button
