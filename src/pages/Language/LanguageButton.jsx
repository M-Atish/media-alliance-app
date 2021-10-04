import "./languageButton.scss"

const LanguageButton = ({ icon, description, activeState }) => {
    return (
        <div className="button-container">
            <button
                type="button"
                className={`option-button ${activeState && "active"}`}
            >
                <span>
                    <img
                        src={icon} alt="Flag of some country"
                        className="flag-icon"
                    />
                </span>
                <p className="button-text">
                    {description}
                </p>
            </button>
        </div>
    )
}

export default LanguageButton
