import './largeRectanglesAdvertisement.scss'

const LargeRectanglesAdvertisement = ({ payload }) => {
    return payload?.map((item, index) => (
        <img
            className="large-rectangle-image"
            src={item}
            alt="leaderboard advertisement"
            key={index}
        />
    ))
}

export default LargeRectanglesAdvertisement
