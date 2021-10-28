import './wideSkyScrapersAdvertisement.scss'

const WideSkyScrapersAdvertisement = ({ payload }) => {
    return payload?.map((item, index) => (
        <img
            className="wide-sky-scraper-image"
            src={item}
            alt="leaderboard advertisement"
            key={index}
        />
    ))
}

export default WideSkyScrapersAdvertisement
