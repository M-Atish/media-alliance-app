import './dashboardSingleHoroscope.scss'

const DashboardSingleHoroscope = ({ name, image, url }) => {
    return (
        <div className="dashboard-single-horoscope-container">
            <a
                href="https://stackoverflow.com/questions/45536537/centering-in-css-grid"
                target="_blank"
                rel="noreferrer"
                className="dashboard-single-horoscope-link"
            >
                <img
                    src={image}
                    alt=""
                    className="dashboard-single-horoscope-image"
                />
                <p className="dashboard-single-horoscope-name">{name}</p>
            </a>
        </div>
    )
}

export default DashboardSingleHoroscope
