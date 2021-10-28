import './mediumRectanglesAdvertisement.scss'

const MediumRectanglesAdvertisement = ({ payload }) => {
    return payload?.map((item, index) => (
        <img
            className="medium-rectangle-image"
            src={item}
            alt="leaderboard advertisement"
            key={index}
        />
    ))
}

export default MediumRectanglesAdvertisement
