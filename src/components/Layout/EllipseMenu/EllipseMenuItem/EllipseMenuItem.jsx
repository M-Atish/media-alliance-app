import './ellipseMenuItem.scss'

const EllipseMenuItem = ({ icon, desc }) => {
    return (
        <div className="option-container">
            <span className="icon">
                <img
                    src={icon}
                    alt="svg icon of either like, share, bookmark or comment"
                />
            </span>
            <p className="description">{desc}</p>
        </div>
    )
}

export default EllipseMenuItem
